"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/config";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent py-4 text-base text-paper placeholder-paper/35 outline-none transition-colors duration-300 focus:border-paper";

const labelClass = "text-xs font-medium uppercase tracking-wide3 text-steel";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!data.get("name") || !data.get("email")) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(siteConfig.contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line-strong px-6 py-10 text-center md:px-8">
        <p className="font-display text-xl text-paper">Message sent.</p>
        <p className="mt-2 text-sm text-paper/60">
          We&rsquo;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <p className="text-xs font-medium uppercase tracking-wide3 text-steel">
        Send us a message
      </p>

      <div className="mt-6 flex flex-col gap-7 md:mt-8 md:gap-8">
        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            placeholder="Your business"
            className={`${fieldClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`${fieldClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="you@business.com"
            className={`${fieldClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(000) 000-0000"
            className={`${fieldClass} mt-2`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-paper/60">
          Fill in your name and email, then try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-9 w-full rounded-sm bg-paper px-6 py-4 text-sm font-medium uppercase tracking-wide2 text-ink transition-transform duration-300 ease-editorial hover:scale-[1.01] disabled:opacity-60 md:mt-10 md:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry →"}
      </button>
    </form>
  );
}
