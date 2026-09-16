import { siteConfig } from "@/lib/config";
import HeroMedia from "./HeroMedia";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-end overflow-hidden md:min-h-screen"
    >
      <div className="absolute inset-0">
        <HeroMedia />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <h1 className="max-w-3xl font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-paper md:text-[5.2vw]">
          Your business deserves better content.
        </h1>
        <p className="mt-6 max-w-md text-base text-paper/75 md:mt-8 md:max-w-lg md:text-lg">
          Luciv creates strategic video content for businesses that want to
          look as good online as they are in real life.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-transform duration-300 ease-editorial hover:scale-[1.02]"
          >
            Book a call
          </a>
          <a
            href="#work"
            className="rounded-sm border border-line-strong px-6 py-3.5 text-sm text-paper transition-colors duration-300 hover:border-paper"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
