import {Suspense} from "react";
import Search from "@/app/components/search";

type Job = {
    id: number;
    title: string;
    company: string;
    city?: string;
    state?: string;
    zip?: string;
    type?: string;
    url?: string;
};

const API_URL = process.env.API_URL ?? "http://localhost:8080";

async function getJobs(query: string, location: string): Promise<Job[] | null> {
    const url = `${API_URL}/api/jobs?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`;
    try {
        const res = await fetch(url, {cache: "no-store"});
        console.log("[jobs] GET", url, "->", res.status);
        if (!res.ok) {
            console.error("[jobs] error body:", await res.text());
            return null;
        }
        const data = await res.json();
        console.log("[jobs] received", Array.isArray(data) ? data.length : typeof data, "items");
        return data;
    } catch (err) {
        console.error("[jobs] fetch failed:", err);
        return null;
    }
}

export default async function Jobs({
                                       searchParams,
                                   }: Readonly<{ searchParams: Promise<{ query?: string; location?: string }> }>) {
    const {query = "", location = ""} = await searchParams;
    const jobs = await getJobs(query, location);

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
                    className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:gap-6"
                >
                    <div className="w-full min-w-0 md:flex-1">
                        <Suspense fallback={null}>
                            <Search placeholder="Job title or Keyword" param="query" label="Job title or keyword"/>
                        </Suspense>
                    </div>

                    <div className="w-full min-w-0 md:flex-1">
                        <Suspense fallback={null}>
                            <Search placeholder="City, state, or ZIP" param="location" label="Location"/>
                        </Suspense>
                    </div>
                </div>
            </header>

            <main className="snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-5 pb-16 pt-14 text-[#405068] md:px-9 md:pt-20">
                <div className="mx-auto flex max-w-4xl flex-col gap-6">
                    <div className="flex items-baseline justify-between border-b border-[#405068]/10 pb-4">
                        <h2 className="text-xl md:text-2xl">Results</h2>
                        {jobs && (
                            <p className="text-sm text-[#405068]/60" aria-live="polite">
                                {jobs.length} {jobs.length === 1 ? "listing" : "listings"}
                            </p>
                        )}
                    </div>

                    {jobs === null && (
                        <div className="flex flex-col items-center gap-2 py-20 text-center" role="alert">
                            <p className="text-lg">Couldn&apos;t load listings</p>
                            <p className="max-w-sm text-[#405068]/60">
                                Something went wrong reaching the server. Please try again in a moment.
                            </p>
                        </div>
                    )}

                    {jobs?.length === 0 && (
                        <div className="flex flex-col items-center gap-2 py-20 text-center">
                            <p className="text-lg">No matches</p>
                            <p className="max-w-sm text-[#405068]/60">
                                Try a different title or location.
                            </p>
                        </div>
                    )}

                    {jobs && jobs.length > 0 && (
                        <ul className="flex flex-col gap-4">
                            {jobs.map((job) => {
                                const place = [job.city, job.state].filter(Boolean).join(", ") || job.zip;
                                return (
                                    <li key={job.id}>
                                        <a
                                            href={job.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col gap-1 rounded-2xl border border-[#405068]/10 bg-[#f5f7fa] p-5 transition-colors duration-300 hover:bg-[#405068]/5 focus-visible:outline-2 focus-visible:outline-[#2c687b]"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <h3 className="text-lg md:text-xl">{job.title}</h3>
                                                {job.type && (
                                                    <span className="rounded-full bg-[#2c687b]/10 px-3 py-0.5 text-xs text-[#2c687b]">
                                                        {job.type}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-[#405068]/80">
                                                {job.company}
                                                {place ? ` · ${place}` : ""}
                                            </p>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </main>
        </>
    );
}