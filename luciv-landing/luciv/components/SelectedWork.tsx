import { projects } from "@/lib/projects";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

/** Splits projects into editorial groups of up to 3 (1 large + up to 2 small). */
function groupProjects(items: typeof projects) {
  const groups: (typeof projects)[] = [];
  for (let i = 0; i < items.length; i += 3) {
    groups.push(items.slice(i, i + 3));
  }
  return groups;
}

export default function SelectedWork() {
  const groups = groupProjects(projects);

  return (
    <section id="work" className="border-t border-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-tight text-paper md:text-5xl">
            Selected work
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4 md:mt-16 md:gap-4">
          {groups.map((group, i) => {
            // A group of 3 uses the asymmetric editorial layout: one large
            // block plus two stacked small ones. A group of 1 or 2 (e.g.
            // the current lineup) renders as even-height columns instead —
            // stretching a single project into the "large" slot would
            // leave it looking squat, and an empty stacked column would
            // leave a visible gap.
            if (group.length >= 3) {
              const [large, ...small] = group;
              return (
                <Reveal key={i} delayMs={i * 80}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
                    <ProjectCard
                      project={large}
                      className="min-h-[340px] md:row-span-2 md:min-h-full"
                    />
                    <div className="grid grid-cols-1 gap-4">
                      {small.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={i} delayMs={i * 80}>
                <div
                  className={`grid grid-cols-1 gap-4 md:gap-4 ${
                    group.length === 2 ? "md:grid-cols-2" : ""
                  }`}
                >
                  {group.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      className="min-h-[340px] md:min-h-[420px]"
                    />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
