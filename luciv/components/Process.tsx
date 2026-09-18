import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Plan",
    description: "We learn about your business and determine what content makes sense.",
  },
  {
    number: "02",
    title: "Create",
    description: "We plan and shoot content intentionally.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "You receive polished, platform-ready content.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delayMs={i * 90}>
              <div className="border-t border-line pt-6">
                <span className="font-display text-sm text-steel">{step.number}</span>
                <h3 className="mt-3 font-display text-2xl font-medium text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
