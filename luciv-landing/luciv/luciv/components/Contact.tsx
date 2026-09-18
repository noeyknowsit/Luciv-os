import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line"
      style={{
        backgroundImage: "url(/images/contact-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10, 10, 10, 0.85)" }}
      />

      <div className="relative mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-wide3 text-steel">
                Contact
              </p>
              <h2 className="mt-4 font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight text-paper md:text-6xl">
                Let&rsquo;s talk.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/70 md:text-lg">
                We help service businesses get more leads with better ads,
                stronger hooks, scripts, CTAs, and landing pages.
              </p>

              <div className="mt-9 md:mt-10">
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-sm bg-paper px-7 py-4 text-sm font-medium uppercase tracking-wide2 text-ink transition-transform duration-300 ease-editorial hover:scale-[1.02]"
                >
                  Book a call →
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
