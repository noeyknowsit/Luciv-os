import { siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-sm tracking-wide3 text-paper">LUCIV</p>
          <p className="mt-1 text-sm text-paper/45">{siteConfig.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper/60">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-paper"
          >
            Instagram
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors duration-300 hover:text-paper"
          >
            {siteConfig.email}
          </a>
          <span className="text-paper/35">
            &copy; {year} {siteConfig.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
