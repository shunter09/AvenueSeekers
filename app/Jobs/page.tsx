import {Suspense} from "react";
import Search from "@/app/components/search";

export default function Jobs() {
    return (
        <>
            <header className="bg-[#fff6f6] px-5 pb-16 pt-16 text-center text-[#405068] md:px-9 md:pb-24 md:pt-24">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
                    <h1 className="text-4xl leading-tight md:text-6xl">
                        Find what&apos;s{" "}
                        <span className="bg-linear-to-r from-[#db1a1a] to-[#405068] bg-clip-text text-transparent">
                            actually open
                        </span>
                    </h1>
                    <p className="max-w-xl text-base text-[#405068]/70 md:text-lg">
                        Verified jobs, internships, and volunteer roles. No sign-up needed.
                    </p>
                </div>

                <div
                    role="search"
                    className="mx-auto  flex w-full max-w-4xl flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:gap-6"
                >
                    <div className="w-full min-w-0 md:flex-1">
                        <Suspense fallback={null}>
                            <Search placeholder={"Job title or Keyword"}/>
                        </Suspense>
                    </div>

                    <div className="w-full min-w-0 md:flex-1">
                        <Suspense fallback={null}>
                            <Search placeholder={"Job title or Keyword"}/>
                        </Suspense>
                    </div>
                </div>
            </header>

            <main className="snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-5 pb-16 pt-14 text-[#405068] md:px-9 md:pt-20">
                
            </main>
        </>
    );
}