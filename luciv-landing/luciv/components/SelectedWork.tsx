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
            const [large, ...small] = group;
            return (
              <Reveal key={i} delayMs={i * 80}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
                  {large && (
                    <ProjectCard
                      project={large}
                      className="min-h-[340px] md:row-span-2 md:min-h-full"
                    />
                  )}
                  {small.length > 0 && (
                    <div className="grid grid-cols-1 gap-4">
                      {small.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
