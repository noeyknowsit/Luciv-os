import Reveal from "./Reveal";

export default function WhyLuciv() {
  return (
    <section className="border-t border-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-tight text-paper md:text-5xl">
              More than someone with a camera.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper/70 md:text-lg">
              Luciv combines production with strategy. The goal was never
              just attractive footage &mdash; it&rsquo;s content with a
              reason behind it: to get attention, explain what your
              business does, build familiarity, show expertise, and
              establish trust.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
