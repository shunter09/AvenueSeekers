import GettingStartedBTN from "@/app/components/gettingstarted";


export default function ForEmployers() {
    const card =
        "flex flex-col bg-white rounded-md w-full border-2 border-red-200 p-4";
    const list = "list-disc pl-5 space-y-2 text-lg/8 md:text-lg/9";

    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 font-gaegu px-4 py-6 md:px-8 md:mt-10 max-w-6xl mx-auto text-[#405068]">
            <div className={card}>
                <h1 className="border-b text-2xl/10">Basic Tier</h1>
                <h1 className="text-center text-3xl mt-7 mb-5">Free</h1>

                <ul className={list}>
                    <li>Job listings are auto updated every week</li>
                    <li>Links that no longer work are auto deleted</li>
                    <li>No sign-up/login required</li>
                    <li>You will be auto notified if your job posting(s) receives lots of traffic</li>
                </ul>

                <div className="flex justify-center mt-auto pt-8">
                    <button
                        type="button"
                        className="bg-gray-400 w-full sm:w-40 h-10 rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                        disabled
                    >
                        Getting Started
                    </button>
                </div>
            </div>

            <div className={card}>
                <h1 className="border-b text-2xl/10">Standard Tier</h1>
                <h1 className="text-center text-3xl mt-7 mb-5">$0/Month</h1>

                <ul className={list}>
                    <li>Chosen job posting is put into the top 4 random rotations in the general feed</li>
                    <li>Payment paused and employer notified if job posting is down</li>
                    <li>Access to company dashboard and analytics</li>
                    <li>Everything in Basic Tier</li>
                </ul>

                <div className="flex justify-center mt-auto pt-8">
                    <GettingStartedBTN />
                </div>
            </div>

            <div className={card}>
                <h1 className="border-b text-2xl/10">Premium</h1>
                <h1 className="text-center text-3xl mt-7 mb-5">$0/Month</h1>

                <ul className={list}>
                    <li>Chosen job posting is put into the 4 random rotations in the employer's specific industry</li>
                    <li>Everything in Standard Tier</li>
                    <li>Everything in Basic Tier</li>
                </ul>

                <div className="flex justify-center mt-auto pt-8">
                    <GettingStartedBTN />
                </div>
            </div>
        </main>
    )
}