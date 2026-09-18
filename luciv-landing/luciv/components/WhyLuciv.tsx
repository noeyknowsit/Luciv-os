import Reveal from "./Reveal";

export default function WhyLuciv() {
  return (
    <section className="border-t border-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-medium leading-tight text-paper md:text-5xl">
              Built Around What Makes You Different.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper/70 md:text-lg">
              We turn your strengths, story, expertise, and personality into
              content that shows people why they should choose you.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
