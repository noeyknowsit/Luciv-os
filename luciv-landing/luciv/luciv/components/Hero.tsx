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
          Content Designed to Bring Business In
        </h1>
        <p className="mt-6 max-w-md text-base text-paper/75 md:mt-8 md:max-w-lg md:text-lg">
          We create the strategy, messaging, and creative behind social
          content built to move people from attention to action.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 ease-editorial hover:scale-[1.02] hover:bg-silver"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
