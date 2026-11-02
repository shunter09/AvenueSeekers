import * as React from "react";
import {LayoutTable} from "@/app/components/emailTable";


export type EmailJob = {
    id: number;
    title: string;
    company: string;
    city?: string;
    state?: string;
    url?: string;
};

const colors = {
    ink: "#405068",
    body: "#4b5a70",
    brand: "#2c687b",
    accent: "#c41414",
    blush: "#fff6f6",
    mist: "#f5f7fa",
    white: "#ffffff",
    muted: "#5f6b7d",
};

const font = "'Trebuchet MS', 'Segoe UI', Helvetica, Arial, sans-serif";

const points = [
    {title: "Fresh listings", text: "New jobs, internships, and volunteer roles, every week."},
    {title: "Verified weekly", text: "We re-check postings so closed roles disappear."},
    {title: "No sign-up needed", text: "Browse and apply without creating an account."},
];

export function EmailTemplate({
                                  email,
                                  fields = [],
                                  jobs = [],
                              }: Readonly<{ email: string; fields?: string[]; jobs?: EmailJob[] }>) {
    return (
        <article
            aria-roledescription="email"
            aria-label="Welcome to AvenueSeekers"
            lang="en"
            dir="ltr"
        >
            <div style={{display: "none", maxHeight: 0, overflow: "hidden", opacity: 0}}>
                You&apos;re subscribed. Here&apos;s what to expect each week.
            </div>

            <LayoutTable
                style={{backgroundColor: colors.blush, padding: "32px 16px", fontFamily: font}}
            >
                <tbody>
                <tr>
                    <td align="center">
                        <LayoutTable
                            style={{
                                maxWidth: "560px",
                                backgroundColor: colors.white,
                                borderRadius: "16px",
                                overflow: "hidden",
                            }}
                        >
                            <tbody>

                            <tr>
                                <td style={{backgroundColor: colors.ink, padding: "20px 32px"}}>
                                    <span style={{color: colors.white, fontSize: "20px", fontWeight: 700, letterSpacing: "0.5px"}}>
                                        AvenueSeekers
                                    </span>
                                </td>
                            </tr>


                            <tr>
                                <td style={{padding: "40px 32px 16px"}}>
                                    <p style={{margin: "0 0 8px", color: colors.accent, fontSize: "14px", fontWeight: 700, letterSpacing: "1px"}}>
                                        YOU&apos;RE SUBSCRIBED
                                    </p>
                                    <h1 style={{margin: "0 0 16px", color: colors.ink, fontSize: "30px", lineHeight: "1.25"}}>
                                        Welcome aboard!
                                    </h1>
                                    <p style={{margin: 0, color: colors.ink, fontSize: "16px", lineHeight: "1.6"}}>
                                        Thanks for subscribing with{" "}
                                        <strong style={{color: colors.brand}}>{email}</strong>. Every week, we&apos;ll send you
                                        the newest job, internship, and volunteer opportunities, picked so you can spend less
                                        time scrolling and more time showing up.
                                    </p>
                                    {fields.length > 0 && (
                                        <p style={{margin: "16px 0 0", color: colors.ink, fontSize: "16px", lineHeight: "1.6"}}>
                                            Your fields:{" "}
                                            <strong style={{color: colors.brand}}>{fields.join(", ")}</strong>
                                        </p>
                                    )}
                                </td>
                            </tr>


                            <tr>
                                <td style={{padding: "16px 32px 32px"}}>
                                    <a
                                        href="https://avenue-seekers.vercel.app/"
                                        style={{
                                            display: "inline-block",
                                            backgroundColor: colors.brand,
                                            color: colors.white,
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            textDecoration: "none",
                                            padding: "14px 28px",
                                            borderRadius: "999px",
                                        }}
                                    >
                                        Browse listings on AvenueSeekers
                                    </a>
                                </td>
                            </tr>


                            {jobs.length > 0 && (
                                <tr>
                                    <td style={{padding: "0 32px 32px"}}>
                                        <h2 style={{margin: "0 0 12px", color: colors.ink, fontSize: "18px"}}>
                                            Open now in your fields
                                        </h2>
                                        <ul style={{margin: 0, padding: 0, listStyle: "none"}}>
                                            {jobs.map((job) => {
                                                const place = [job.city, job.state].filter(Boolean).join(", ");
                                                return (
                                                    <li key={job.id} style={{margin: "0 0 12px"}}>
                                                        <a
                                                            href={job.url}
                                                            style={{color: colors.brand, fontSize: "16px", fontWeight: 700, textDecoration: "underline"}}
                                                        >
                                                            {job.title}
                                                        </a>
                                                        <p style={{margin: "2px 0 0", color: colors.body, fontSize: "14px"}}>
                                                            {job.company}{place ? ` · ${place}` : ""}
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </td>
                                </tr>
                            )}


                            <tr>
                                <td style={{backgroundColor: colors.mist, padding: "28px 32px"}}>
                                    <h2 style={{margin: "0 0 16px", color: colors.ink, fontSize: "18px"}}>
                                        What you&apos;ll get
                                    </h2>

                                    <ol  style={{margin: 0, padding: 0, listStyle: "none"}}>
                                        {points.map((p, i) => (
                                            <li
                                                key={p.title}
                                                style={{marginBottom: i === points.length - 1 ? 0 : "16px"}}
                                            >
                                                <LayoutTable>
                                                    <tbody>
                                                    <tr>
                                                        <td
                                                            width="36"
                                                            valign="top"
                                                            style={{color: colors.accent, fontSize: "16px", fontWeight: 700}}
                                                        >
                                                            <span aria-hidden="true">
                                                                {String(i + 1).padStart(2, "0")}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <p style={{margin: "0 0 2px", color: colors.ink, fontSize: "16px", fontWeight: 700}}>
                                                                {p.title}
                                                            </p>
                                                            <p style={{margin: 0, color: colors.body, fontSize: "14px", lineHeight: "1.5"}}>
                                                                {p.text}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </LayoutTable>
                                            </li>
                                        ))}
                                    </ol>
                                </td>
                            </tr>


                            <tr>
                                <td style={{padding: "24px 32px", color: colors.muted, fontSize: "13px", lineHeight: "1.6"}}>
                                    You&apos;re receiving this because {email} was subscribed to AvenueSeekers updates.
                                    If this wasn&apos;t you, you can ignore this email.
                                </td>
                            </tr>
                            </tbody>
                        </LayoutTable>
                    </td>
                </tr>
                </tbody>
            </LayoutTable>
        </article>
    );
}

export default EmailTemplate;
