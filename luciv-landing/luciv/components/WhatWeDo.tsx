import Reveal from "./Reveal";

const capabilities = [
  {
    label: "Content production",
    description: "High-quality short-form and commercial video.",
  },
  {
    label: "Content strategy",
    description: "Concepts, hooks and creative direction built around the business.",
  },
  {
    label: "Ongoing content",
    description: "Consistent content creation for businesses that need to stay visible.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-t border-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-paper md:text-5xl">
            We help businesses show up better online.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/65 md:text-lg">
            Many businesses provide great services, but their content
            doesn&rsquo;t communicate the same quality. Luciv helps close
            that gap through strategic video and social-first content.
          </p>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-line pt-10 md:mt-20 md:grid-cols-3 md:gap-10 md:pt-12">
            {capabilities.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wide3 text-steel">
                  {item.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-paper/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
