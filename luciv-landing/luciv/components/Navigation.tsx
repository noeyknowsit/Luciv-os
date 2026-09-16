import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Luciv, back to top"
        >
          <Image
            src="/logo/luciv-mark.png"
            alt=""
            width={28}
            height={28}
            className="h-6 w-6 md:h-7 md:w-7"
            priority
          />
          <span className="font-display text-sm tracking-wide3 text-paper">
            LUCIV
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#work"
              className="text-sm text-paper/80 transition-colors duration-300 hover:text-paper"
            >
              Work
            </a>
            <a
              href="#what-we-do"
              className="text-sm text-paper/80 transition-colors duration-300 hover:text-paper"
            >
              What we do
            </a>
          </div>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-line-strong px-4 py-2 text-sm text-paper transition-colors duration-300 hover:border-paper"
          >
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
