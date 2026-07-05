import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import ProjectThumb from "./ProjectThumb";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project, index }) {
  const isSoon = project.status === "soon";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      className="group bg-surface rounded-2xl p-5 border border-line shadow-card hover:-translate-y-1 hover:shadow-pop transition-all duration-300"
    >
      {isSoon ? (
        <ProjectThumb project={project} />
      ) : (
        <Link to={`/projects/${project.slug}`} aria-label={`Open ${project.name} case study`}>
          <ProjectThumb project={project} />
        </Link>
      )}

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-ink text-lg font-bold leading-snug">
            {isSoon ? (
              project.name
            ) : (
              <Link to={`/projects/${project.slug}`} className="hover:text-teal-dark transition-colors">
                {project.name}
              </Link>
            )}
          </h3>
          <p className="text-teal-dark text-xs font-semibold mt-1">{project.tagline}</p>
        </div>
        {!isSoon && (
          <div className="flex items-center gap-3 shrink-0 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="text-muted hover:text-teal-dark transition-colors"
              >
                <GithubIcon size={17} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live demo`}
                className="text-muted hover:text-teal-dark transition-colors"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="text-muted text-sm leading-relaxed mt-3">{project.description}</p>

      {project.features?.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((f, i) => (
            <li key={i} className="text-muted text-xs leading-relaxed flex gap-2">
              <span className="text-coral shrink-0">●</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {project.stack?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[10px] font-semibold text-muted bg-paper border border-line rounded-full px-2.5 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {isSoon ? (
        <p className="mt-4 text-xs text-muted italic">In build — links go live at launch.</p>
      ) : (
        <Link
          to={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-dark hover:gap-2.5 transition-all"
        >
          View full build notes <ArrowUpRight size={14} />
        </Link>
      )}
    </motion.article>
  );
}
