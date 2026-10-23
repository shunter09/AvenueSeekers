"use client";

import React, {useEffect, useId, useMemo, useRef, useState} from "react";

export type Option = { value: string; label: string };

type MultiSelectProps = {
    options?: Option[];
    value?: string[];
    action: (value: string[]) => void;
    placeholder?: string;
    searchable?: boolean;
};

export default function SelectSubscriber({
                                             options = [],
                                             value = [],
                                             action,
                                             placeholder = "Choose a Field",
                                             searchable = true,
                                         }: Readonly<MultiSelectProps>) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const rootRef = useRef<HTMLDivElement>(null);
    const inputId = useId();
    const listId = useId();

    const filtered = useMemo(
        () =>
            options.filter((o) =>
                o.label.toLowerCase().includes(query.trim().toLowerCase())
            ),
        [options, query]
    );

    const selected = options.filter((o) => value.includes(o.value));

    // Close when clicking outside
    useEffect(() => {
        const onDown = (e: MouseEvent) => {
            if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, []);

    const toggle = (v: string) =>
        action(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActive((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && open && filtered[active]) {
            e.preventDefault();
            toggle(filtered[active].value);
        } else if (e.key === "Escape") {
            setOpen(false);
        } else if (e.key === "Backspace" && !query && value.length) {
            action(value.slice(0, -1));
        }
    };

    return (
        <div ref={rootRef} className="relative w-full max-w-md">
            {/* Trigger: chips + search input */}
            <label
                htmlFor={inputId}
                className="flex min-h-10.5 flex-wrap items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-2 py-1.5 focus-within:ring-2 focus-within:ring-indigo-200"
            >
                {selected.map((o) => (
                    <span
                        key={o.value}
                        className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-0.5 text-sm text-indigo-700"
                    >
                        {o.label}
                        <button
                            type="button"
                            aria-label={`Remove ${o.label}`}
                            onClick={() => toggle(o.value)}
                            className="rounded text-indigo-400 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        >
                            ×
                        </button>
                    </span>
                ))}

                <input
                    id={inputId}
                    role="combobox"
                    aria-label={placeholder}
                    aria-expanded={open}
                    aria-controls={listId}
                    aria-haspopup="listbox"
                    aria-autocomplete="list"
                    aria-activedescendant={
                        open && filtered[active] ? `${listId}-${active}` : undefined
                    }
                    readOnly={!searchable}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setActive(0);
                        setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    onClick={() => setOpen(true)} // reopen after Escape
                    onKeyDown={onKeyDown}
                    placeholder={selected.length ? "" : placeholder}
                    className="min-w-20 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-gray-400"
                />
            </label>

            {/* Dropdown list */}
            {open && (
                <ul
                    id={listId}
                    role="listbox"
                    aria-multiselectable="true"
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
                >
                    {filtered.length === 0 && (
                        <li className="px-3 py-2 text-sm text-gray-500">No matches</li>
                    )}
                    {filtered.map((o, i) => {
                        const isSelected = value.includes(o.value);
                        return (
                            <li
                                key={o.value}
                                id={`${listId}-${i}`}
                                role="option"
                                aria-selected={isSelected}
                                tabIndex={-1}
                                onMouseEnter={() => setActive(i)}
                                onFocus={() => setActive(i)}
                                onClick={() => toggle(o.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        toggle(o.value);
                                    }
                                }}
                                className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-sm ${
                                    i === active ? "bg-gray-100" : ""
                                }`}
                            >
                                <span
                                    className={`flex h-4 w-4 items-center justify-center rounded border text-[10px] leading-none ${
                                        isSelected
                                            ? "border-indigo-600 bg-indigo-600 text-white"
                                            : "border-gray-300"
                                    }`}
                                >
                                    {isSelected && "✓"}
                                </span>
                                {o.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}