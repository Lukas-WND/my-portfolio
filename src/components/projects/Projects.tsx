import { ProjectCard } from "./ProjectCard";
import { projectList } from "./projects-list";

export function Projects() {
  return (
    <section className="min-h-screen w-full px-20 py-10 bg-khaki">
      <div className="flex flex-col font-secondary">
        <h3 className="text-2xl">Check out my</h3>
        <h2 className="uppercase text-9xl">Projects</h2>
      </div>
      <div className="w-full h-ful mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 relative gap-y-16">
          {projectList.map((item) => (
            <ProjectCard key={item.title} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
