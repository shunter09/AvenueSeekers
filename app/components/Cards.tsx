import { MapPin, ShieldCheck } from "lucide-react";

const cardStyle =
    "block w-full min-w-0 bg-white border border-black/10 rounded-md p-5 sm:p-6 lg:p-7 text-lg transition lg:flex-1";

const linkTransition =
    "inline-block text-sm max-w-fit border rounded-full px-3 py-1.5 text-center transition-colors duration-300 text-[#db1a1a]/60 border-[#db1a1a]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db1a1a]";

const cards = [
    {
        job: "Electrician Apprentice",
        company: "Southern Electric",
        location: "Huntsville, AL",
        verification: "VERIFIED 8 DAYS AGO",
    },
    {
        job: "Construction Manager",
        company: "BuildRight",
        location: "Atlanta, GA",
        verification: "VERIFIED 3 DAYS AGO",
    },
    {
        job: "Software Engineer Intern",
        company: "Riverbend Tech",
        location: "Nashville, TN",
        verification: "VERIFIED 1 DAY AGO",
    },
];

export default function Card() {
    return (
        <div className="w-full px-4 sm:px-6">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:gap-6 lg:flex-row lg:items-stretch">
                {cards.map((card) => (
                    <a href="/Jobs" key={card.job} className={cardStyle}>
                        <span className={linkTransition}>JOB</span>

                        <h3 className="mt-5 text-xl font-semibold leading-snug sm:mt-6 sm:text-2xl lg:text-3xl">
                            {card.job}
                        </h3>

                        <p className="mb-6 mt-2 text-base text-black/50 sm:mb-8 sm:text-lg">
                            {card.company}
                        </p>

                        <div className="flex items-start gap-3 border-b border-[#405068]/10 pb-5 text-base text-black/50 sm:text-lg">
                            <MapPin
                                className="mt-1 h-5 w-5 shrink-0 text-[#405068]/60"
                                aria-hidden="true"
                                focusable="false"
                            />
                            <span>{card.location}</span>
                        </div>

                        <div className="mt-5 flex items-center gap-3 text-sm sm:text-base">
                            <ShieldCheck
                                className="h-5 w-5 shrink-0 text-[#405068]/60"
                                aria-hidden="true"
                                focusable="false"
                            />
                            <p className="text-[#405068]/60">{card.verification}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}