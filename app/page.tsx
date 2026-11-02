import SubscribeUser from "@/app/components/subscribeUser";
import Search from "@/app/components/search";
import {ShieldCheck, UserRoundX} from "lucide-react";
import Card from "@/app/components/Cards";


const reasons = [
    {title: "Verified listings", text: "We re-check jobs so closed roles disappear."},
    {title: "Save your time", text: "Apply only to roles that are actually open."},
    {title: "Always fresh", text: "Every job shows when it was last verified."},
    {
        title: "No One Click Apply",
        text: "When you click to apply, get directly taken to the job application website.",
    },
    {title: "No Log-In or Sign-Up", text: "Free to use for searching and applying."},
];

const stats = [
    {
        big: "10-15%",
        text: "of scraped jobs remain on a board well after an employer has closed recruitment",
    },
    {
        big: "1,000+",
        text: "jobs, internships and volunteer roles, filtered the way you want them.",
    },
    {
        big: "0",
        text: "accounts, log-ins or one-click apply piles required. Ever.",
    },
];

const linkTransition = "border rounded-full px-3 py-1.5  text-center transition-colors duration-300 hover:text-[#db1a1a]/60 focus-visible:text-[#db1a1a] hover:border-[#db1a1a]/60 focus-visible:outline-2 focus-visible:outline-[#2c687b]"
export default function Home() {
    return (
        <main>
            {/* Page 1: The Hero section*/}
            <section
                className="flex min-h-[calc(100dvh-5.25rem)] snap-start flex-col justify-center gap-8 px-5 py-12 text-[#405068] md:gap-12 md:px-9">
                <h1 className="max-w-5xl text-6xl leading-tight  md:leading-tight">
                    Find Volunteer, Internship, and Job Opportunities Right{" "}
                    <span className="bg-linear-to-r from-[#db1a1a] to-[#405068] bg-clip-text text-transparent">
                        Here
                    </span>
                    , Right{" "}
                    <span className="bg-linear-to-r from-[#db1a1a] to-[#405068] bg-clip-text text-transparent">
                        Now
                    </span>
                </h1>

                <p className="opacity-65 max-w-140 text-lg md:text-xl">
                    A listings board for jobs, internships and volunteer roles that are actually open. Every posting is
                    re-checked by automatically, so the time you spend applying goes somewhere real.
                </p>

                <div className="max-w-130 flex flex-row">
                    <Search placeholder="Search roles, organizations, or cities"/>
                </div>
                <div className="text-md flex gap-4 ">
                    <a href="/Jobs" className={linkTransition}>JOBS</a>
                    <a href="/Volunteer" className={linkTransition}>VOLUNTEER</a>
                    <a href="/Jobs" className={linkTransition}>INTERNSHIPS</a>
                </div>
                <div className="h-px w-full max-w-130 bg-[#405068]/10" aria-hidden="true"/>
                <div className="flex flex-row flex-wrap items-center  gap-x-8 gap-y-2 text-base">
                    <div className="flex items-center gap-2">
                        <UserRoundX className="h-5 w-5" aria-hidden="true" focusable="false"/>
                        <span>NO SIGN-UP</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5" aria-hidden="true" focusable="false"/>
                        <span>VERIFIED WEEKLY</span>
                    </div>
                </div>
            </section>

            {/* The Problem section */}
            <section className="bg-[#db1a1a]/5  px-5 py-12 md:px-9">
                <div
                    className="mx-auto flex max-w-6xl flex-col divide-y divide-[#405068]/10 md:flex-row md:divide-x md:divide-y-0">
                    {stats.map((s) => (
                        <div key={s.big}
                             className="flex-1 py-8 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
                            <p className="text-4xl font-bold text-[#405068]">{s.big}</p>
                            <h2 className="mt-4 text-2xl text-[#405068]">{s.text}</h2>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Why us section*/}
            <section
                id="why-us"
                className="flex  snap-start flex-col bg-white px-5 py-27 md:px-9"
            >

                <div className="mt-6 ml-0 w-full max-w-2xl p-7 xl:ml-70">
                    <p className="mb-3 text-2xl text-[#db1a1a]">Why AvenueSeekers</p>
                    <h2 className="text-4xl border-b border-[#405068]/10 pb-6 text-[#405068] md:text-5xl">
                        Less scrolling. <br/>More showing up.
                    </h2>
                </div>

                <div className="mt-8 grid w-full grid-cols-1 gap-x-10 gap-y-8 xl:grid-cols-2 xl:pl-77">
                    {reasons.map((item, i) => (
                        <div
                            key={item.title}
                            className="flex w-full max-w-md gap-4 border-b border-[#405068]/10 pb-6 xl:odd:justify-self-start "
                        >
                <span
                    className="pt-0.5 text-lg font-bold text-[#db1a1a]"
                    aria-hidden="true"
                >
                    {String(i + 1).padStart(2, "0")}
                </span>

                            <div>
                                <h3 className="mb-2 text-2xl text-[#405068] transition-colors duration-300 hover:text-[#db1a1a]/60 md:text-3xl">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-[#405068]/80 md:text-xl">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </section>

            <section className="shrink-0 bg-[#db1a1a]/5 px-5 py-12 md:px-9">
                <div className=" ml-0 max-w-400 p-7 ">
                    <p className="mb-3 text-2xl text-[#db1a1a]">Fresh this week</p>
                    <h2 className="text-4xl  pb-6 text-[#405068] md:text-5xl">
                        Openings worth a look.
                    </h2>
                    <Card/>
                </div>
            </section>
            <SubscribeUser/>
        </main>
    );
}


