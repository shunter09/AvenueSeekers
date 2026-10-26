'use client';

import {useId} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

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
        <div className="relative flex flex-1 shrink-0 justify-center">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                id={id}
                type="search"
                className="peer block h-16 w-full rounded-4xl border-none bg-white py-2 pl-6 pr-4 text-base placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get(param)?.toString()}
            />
        </div>
    );
}