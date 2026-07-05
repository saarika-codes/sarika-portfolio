import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink">
            Shipped, not just styled
          </h2>
          <p className="text-muted text-sm mt-3">
            Every finished build links to a live demo and its repo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
