'use server';

import {Resend} from 'resend';
import jobsData from '@/DATA/jobs.json';
import type {Option} from '@/app/components/selectSubscriber';
import {EmailTemplate, type EmailJob} from "@/app/components/email-template";

const FIELDS: Option[] = jobsData;
const API_URL = process.env.API_URL ?? 'http://localhost:8080';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

async function getJobsForField(code: string): Promise<EmailJob[]> {
    try {
        const res = await fetch(
            `${API_URL}/api/jobs?field=${encodeURIComponent(code)}`,
            {cache: 'no-store'}
        );
        if (!res.ok) return [];
        return await res.json();
    } catch (err) {
        console.error('Failed to load jobs for email:', err);
        return [];
    }
}

export async function subscribeUser(formData: FormData) {
    const email = (formData.get('email') as string | null)?.trim();
    if (!email) {
        return {success: false, error: 'Email is required'};
    }
    if (!resend) {
        console.error('RESEND_API_KEY is not set');
        return {success: false, error: 'Email service is not configured'};
    }


    const pickedValues = new Set(formData.getAll('fields').map(String));
    const chosen = FIELDS.filter((f) => pickedValues.has(f.value));
    const labels = chosen.map((f) => f.label);


    const results = await Promise.all(chosen.map((f) => getJobsForField(f.value)));
    const listings = results
        .flatMap((r) => r.slice(0, 3))
        .filter((job, i, all) => all.findIndex((j) => j.id === job.id) === i)
        .slice(0, 6);

    try {
        const {error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email],
            subject: labels.length
                ? `Welcome to AvenueSeekers: ${labels.join(', ')}`
                : 'Your Subscription to AvenueSeekers was confirmed!',
            react: <EmailTemplate email={email} fields={labels} jobs={listings}/>,
        });

        if (error) {
            console.error('Resend failed to send email:', error);
            return {success: false, error: error.message};
        }
        return {success: true};
    } catch (err) {
        console.error('subscribeUser failed:', err);
        return {success: false, error: 'Something went wrong'};
    }
}
