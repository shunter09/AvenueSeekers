import {Suspense} from "react";
import Search from "@/app/components/search";
import {Separator} from "@/components/ui/separator"


export default function Jobs() {
    return (
        <>
        <header className="flex flex-row mt-10">

            <Suspense fallback={null}>
                <Search placeholder={"Job title or Keyword"}/>

            </Suspense>

            <Separator className="mt-20 h-20" orientation="vertical"/>
            <Suspense fallback={null}>
                <Search placeholder={"Job title or Keyword"}/>
            </Suspense>

        </header>
        <main className="snap-start min-h-[calc(100dvh-5.25rem)] bg-gray-50 mt-20 px-9 flex items-center justify-center">

        </main>
        </>
    )
}