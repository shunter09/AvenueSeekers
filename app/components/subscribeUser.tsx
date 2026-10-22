'use client';
import {subscribeUser} from "@/app/actions";
import {useState} from "react";
import BTNComponent from "@/app/components/keyfeaturesbtn";
import SelectSubscriber from "@/app/components/selectSubscriber";
const fields = [
    { value: 'SWE', label: "Software Engineer"},
    { value: 'HR', label: "Human Resources"},
    { value: 'CM', label: "Construction Manager"},
    { value: 'DW', label: "Dog Walker"},
    { value: 'BS', label: "Babysitter"},
]
export default function SubscribeUser() {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [picked, setPicked] = useState<string[]>([]);
    async function handleFormSubmit(formData: FormData) {
        setStatus('idle');
        const result = await subscribeUser(formData);
        if (result.success) {
            setStatus('success');
            setMessage('Check your inbox! You have successfully subscribed to AvenueSeekers');
        } else {
            setStatus('error');
            setMessage(result.error || 'Failed to subscribe');
        }
    }

    return (
        <section className="md:snap-start min-h-[calc(100dvh-5.25rem)] bg-white px-5 py-12 md:px-9 md:py-0 flex items-center justify-center">
            <div className="w-full max-w-2xl font-fredoka text-[#405068] text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl">
                    Subscribe for weekly updates on new jobs,
                    <br className="hidden md:block" /> volunteer, and internship opportunities!
                </h2>

                <form
                    action={handleFormSubmit}
                    className="flex flex-col items-center gap-4 md:gap-6 mt-6 md:mt-8 w-full"
                >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="example@gmail.com"
                        className="w-full max-w-md h-12 min-w-0 text-center text-xl md:text-3xl border rounded-lg px-3 py-2"
                    />
                    <SelectSubscriber options={fields} value={picked} action={setPicked}/>
                    <BTNComponent />
                    {status !== 'idle' && (
                        <p className="text-base md:text-xl">{message}</p>
                    )}
                </form>
            </div>
        </section>
    );
}
