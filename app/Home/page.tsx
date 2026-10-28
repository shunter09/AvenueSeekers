import BTNComponent2 from "@/app/components/explorebtn";
import SubscribeUser from "@/app/components/subscribeUser";



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
        big: "One Click Apply is an issue",
        text: "that floods Employers with unqualified applications, and puts a Job Seekers resume into a third-party pile",
    },
    {
        big: "Free for Job Seekers",
        text: "and ample exposure for employers",
    },
];

export default function Home() {
    return (
        <main>
            {/* Page 1: The Hero section*/}
            <section className="flex min-h-[calc(100dvh-5.25rem)] snap-start flex-col justify-center gap-8 px-5 py-12 text-[#405068] md:gap-12 md:px-9">
                <h1 className="max-w-5xl text-4xl leading-tight sm:text-5xl md:text-6xl md:leading-tight">
                    Find Volunteer, Internship, and Job Opportunities Right{" "}
                    <span className="bg-linear-to-r from-[#db1a1a] to-[#405068] bg-clip-text text-transparent">
                        Here
                    </span>
                    , Right{" "}
                    <span className="bg-linear-to-r from-[#db1a1a] to-[#405068] bg-clip-text text-transparent">
                        Now
                    </span>
                </h1>

                <p className="text-lg md:text-xl">
                    Explore 1000+ listings filtered in the way you want
                </p>

                <div className="flex flex-row gap-4 sm:flex-row sm:gap-10">
                    <a
                        href="#why-us"
                        className="flex h-10 w-40 items-center justify-center rounded-lg bg-[#2c687b] text-white transition hover:bg-[#2c687b]/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c687b] "
                    >
                        Why Us
                    </a>
                    <BTNComponent2/>
                </div>
            </section>

            {/* The Problem section */}
            {stats.map((s) => (
                <section
                    key={s.big}
                    className="flex min-h-[calc(100dvh-5.25rem)] snap-start items-center justify-center bg-white px-5 py-12 md:px-9"
                >
                    <div className="max-w-3xl text-center">
                        <p className="text-5xl font-bold text-[#405068] md:text-7xl">{s.big}</p>
                        <h2 className="mt-4 text-xl text-[#405068] md:text-3xl">{s.text}</h2>
                    </div>
                </section>
            ))}

            {/* The Why us section*/}
            <section
                id="why-us"
                className="flex min-h-[calc(100dvh-5.25rem)] snap-start flex-col items-center justify-center bg-white px-5 py-12 md:px-9"
            >
                <div className="w-full max-w-5xl">
                    <h2 className="mb-8 text-center text-2xl text-[#405068] md:text-3xl">Why us</h2>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
                        {reasons.map((item, i) => (
                            <div
                                key={item.title}
                                className={`rounded-2xl bg-[#f5f7fa] p-6 text-center md:col-span-2 ${
                                    i === 3 ? "md:col-start-2" : ""
                                }`}
                            >
                                <h3 className="mb-2 text-xl text-[#405068]">{item.title}</h3>
                                <p className="text-[#405068]/80">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SubscribeUser/>
        </main>
    );
}


