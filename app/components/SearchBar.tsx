'use client';

import {useId, useRef} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import {Search as SearchIcon, MapPin} from "lucide-react";

export default function SearchBar() {
    const queryId = useId();
    const locationId = useId();
    const queryRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const apply = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("page");

        const q = queryRef.current?.value.trim() ?? "";
        const loc = locationRef.current?.value.trim() ?? "";

        if (q) params.set("query", q);
        else params.delete("query");

        if (loc) params.set("location", loc);
        else params.delete("location");

        replace(`${pathname}?${params.toString()}`);
    };

    const debouncedApply = useDebouncedCallback(apply, 500);

    return (
        <form
            role="search"
            onSubmit={(e) => {
                e.preventDefault();
                debouncedApply.cancel();
                apply();
            }}
            className="mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-[#405068]/10 md:flex-row md:items-center md:rounded-full"
        >
            {/* Left: job title or keyword */}
            <div className="flex flex-1 items-center gap-3 px-5 py-4 md:py-0 md:h-16">
                <SearchIcon className="h-5 w-5 shrink-0 text-[#405068]/60" aria-hidden="true" focusable="false"/>
                <label htmlFor={queryId} className="sr-only">Job title or keyword</label>
                <input
                    ref={queryRef}
                    id={queryId}
                    type="text"
                    placeholder="Job title or keyword"
                    defaultValue={searchParams.get("query") ?? ""}
                    onChange={() => debouncedApply()}
                    className="w-full min-w-0 bg-transparent text-base text-[#405068] outline-none"
                />
            </div>

            {/* Divider: horizontal on mobile, vertical on desktop */}
            <div className="h-px w-full bg-[#405068]/10 md:h-8 md:w-px" aria-hidden="true"/>

            {/* Right: location */}
            <div className="flex flex-1 items-center gap-3 px-5 py-4 md:py-0 md:h-16">
                <MapPin className="h-5 w-5 shrink-0 text-[#405068]/60" aria-hidden="true" focusable="false"/>
                <label htmlFor={locationId} className="sr-only">City, state, or ZIP</label>
                <input
                    ref={locationRef}
                    id={locationId}
                    type="text"
                    placeholder="City, state, or ZIP"
                    defaultValue={searchParams.get("location") ?? ""}
                    onChange={() => debouncedApply()}
                    className="w-full min-w-0 bg-transparent text-base text-[#405068] outline-none"
                />
            </div>

            {/* One button for both sides */}
            <button
                type="submit"
                className="m-2 flex h-12 items-center justify-center rounded-full bg-[#2c687b] px-8  hover:cursor-pointer text-white transition-colors duration-300 hover:bg-[#2c687b]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c687b]"
            >
                Search
            </button>
        </form>
    );
}