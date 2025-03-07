import { Project } from "./projects-list";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-72 rounded-2xl bg-amber-700">
      <div className="w-full h-64 rounded-2xl bg-gray-600"></div>
      <div className="flex flex-col gap-4 p-4 relative">
        <div className="">
          <p className="text-3xl">{project.title}</p>
          <small className="text-base">{project.technologies}</small>
        </div>
        <a
          className=" font-secondary rounded-2xl border-2 border-green-700 px-4 py-2 text-lg"
          href={project.href}
        >
          View case
        </a>
      </div>
    </div>
  );
}
