'use client';

import Link from "next/link";
import Image from "next/image";
import EyeIcon from "@/app/components/EyeIcon";
import {useState} from "react";
import {usePathname} from "next/navigation";

const links = [
    { href: "/Jobs", label: "Jobs" },
    { href: "/Volunteer", label: "Volunteer" },
    { href: "/ForEmployers", label: "For Employers" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const linkClass = (href: string) =>
        `rounded-xl px-3 py-1.5 transition-colors duration-300 hover:text-[#db1a1a]/60 focus-visible:text-[#db1a1a] focus-visible:outline-2 focus-visible:outline-[#2c687b] ${
            pathname === href ? "text-[#db1a1a]/60" : ""
        }`;

    return (
        <nav
            aria-label="Main"
            className="  sticky top-0 z-10  border-b border-[#405068]/10 bg-[#fff6f6] px-5 py-5 font-gaegu text-xl font-bold text-[#405068] md:px-7 md:py-6"
        >
            {/* Top row of the nav bar */}
            <div className="flex items-center ">
                <Link href="/Home" className="flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-[#2c687b]">
                    <EyeIcon className="w-8 animate-blink" />
                    <span className="text-2xl">AvenueSeekers</span>
                </Link>

                {/* These are the desktop links */}
                <div className="ml-auto hidden items-center gap-7 md:flex">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            aria-current={pathname === l.href ? "page" : undefined}
                            className={linkClass(l.href)}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* This is the mobile button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((o) => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="ml-auto rounded-xl p-1 transition-colors duration-300 hover:cursor-pointer hover:bg-[#405068]/10 focus-visible:outline-2 focus-visible:outline-[#2c687b] md:hidden"
                >
                    <span className="relative block h-8 w-8">
                        <Image
                            src="/settings.png"
                            alt=""
                            fill
                            sizes="32px"
                            className="object-contain"
                        />
                    </span>
                </button>
            </div>

            {/* This is the mobile dropdown */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className="mt-4 flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-md md:hidden"
                >
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            aria-current={pathname === l.href ? "page" : undefined}
                            onClick={() => setIsOpen(false)}
                            className={`block ${linkClass(l.href)} py-2.5`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

