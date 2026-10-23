'use client';
import { useDebouncedCallback } from 'use-debounce'

import {useSearchParams, usePathname, useRouter} from 'next/navigation';


export default function Search({placeholder}: Readonly<{ placeholder: string }>) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    return (
        <div className="relative flex flex-1 shrink-0 justify-center">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-200 h-20 rounded-4xl bg-white  border-none py-2.25 pl-10 text-md mt-20  placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />

        </div>
    );
}