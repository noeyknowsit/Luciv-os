import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="book" className="border-t border-line bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-tight text-paper md:text-6xl">
            Let&rsquo;s make your business look as good as it actually is.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
            Schedule a quick call and tell me about your business, your
            goals and what you&rsquo;re trying to improve.
          </p>

          <div className="mt-10">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-paper px-8 py-4 text-sm font-medium text-ink transition-transform duration-300 ease-editorial hover:scale-[1.02]"
            >
              Schedule a call
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-xs text-sm text-paper/45">
            No pressure. Just a conversation about your business and
            whether Luciv is a good fit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
