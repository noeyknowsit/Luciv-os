"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent py-4 text-base text-paper placeholder-paper/35 outline-none transition-colors duration-300 focus:border-paper";

const labelClass = "text-xs font-medium uppercase tracking-wide3 text-steel";

const SUCCESS_MESSAGE =
  "Thanks — your inquiry has been sent. We\u2019ll be in touch soon.";
const ERROR_MESSAGE = "Something went wrong. Please try again.";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();

    if (!name || !email) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const payload = {
      name,
      business: String(data.get("businessName") || "").trim(),
      email,
      phone: String(data.get("phone") || "").trim(),
      message: "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <p className={labelClass}>Send us a message</p>

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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
            className={`${fieldClass} mt-2`}
          />
        </div>
      </div>

      {status === "success" && (
        <p className="mt-6 text-sm text-paper/80">{SUCCESS_MESSAGE}</p>
      )}
      {status === "error" && (
        <p className="mt-6 text-sm text-paper/80">{ERROR_MESSAGE}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-9 w-full rounded-sm bg-paper px-6 py-4 text-sm font-medium uppercase tracking-wide2 text-ink transition-transform duration-300 ease-editorial hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 md:mt-10 md:w-auto"
      >
        {status === "submitting" ? "Sending\u2026" : "Send inquiry \u2192"}
      </button>
    </form>
  );
}
