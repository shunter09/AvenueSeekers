'use client';

import {useId} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import {SearchIcon} from "lucide-react";


export default function Search({
                                   placeholder,
                                   param = "query",
                                   label = "Search",
                               }: Readonly<{ placeholder: string; param?: string; label?: string }>) {
    const id = useId();

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term.trim()) {
            params.set(param, term.trim());
        } else {
            params.delete(param);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (


        <div className="relative flex w-full min-w-0 flex-1 shrink-0 justify-center">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>

            <input
                id={id}
                type="search"
                className="shadow-lg peer h-12 block  w-full min-w-0 rounded-full border border-[#405068]/15 bg-white py-2 pl-4 pr-14 text-base placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-[#2c687b] sm:h-14 sm:pl-6 sm:pr-32 md:h-16"
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get(param)?.toString()}
            />

            <button
                type="submit"
                aria-label={`Search ${label.toLowerCase()}`}
                className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center gap-2 rounded-full bg-[#2c687b] text-white transition-colors duration-300 hover:cursor-pointer hover:bg-[#2c687b]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c687b] sm:right-2 sm:h-10 sm:w-28"
            >
                <SearchIcon className="h-4 w-4" aria-hidden="true" focusable="false"/>
                <span className="hidden sm:inline">Search</span>
            </button>
        </div>
    );
}