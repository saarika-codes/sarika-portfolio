import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/icons";
import { projects, caseStudies } from "../data/portfolio";

const FIELDS = [
  ["Problem", "problem"],
  ["Goal", "goal"],
  ["Solution", "solution"],
  ["Technical Decisions", "technicalDecisions"],
  ["Challenges", "challenges"],
  ["Trade-offs", "tradeOffs"],
  ["Performance", "performance"],
  ["Accessibility", "accessibility"],
  ["Lessons Learned", "lessonsLearned"],
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies.find((c) => c.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-paper px-6 text-center">
        <p className="text-ink text-xl font-bold mb-4">Project not found</p>
        <Link to="/" className="text-teal-dark font-semibold text-sm inline-flex items-center gap-1.5">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper font-sans">
      <div className="max-w-4xl mx-auto px-6 md:px-10 pt-28 pb-24">
        <Link to="/#work" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-teal-dark transition-colors mb-8">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {project.image && (
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-line shadow-card mb-8 bg-surfacealt">
              <img src={project.image} alt={`${project.name} screenshot`} className="w-full h-full object-cover object-top" />
            </div>
          )}

          <p className="eyebrow mb-3">{project.tagline}</p>
          <h1 className="text-3xl md:text-5xl font-black text-ink leading-tight">{project.name}</h1>
          <p className="text-muted text-base leading-relaxed mt-4 max-w-2xl">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-dark transition-colors">
                <GithubIcon size={16} /> Repo
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-line text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:border-teal hover:text-teal-dark transition-colors">
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>

          {project.stack?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="text-xs font-semibold text-muted bg-surface border border-line rounded-full px-3 py-1.5">
                  {s}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {study ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-14 bg-surface rounded-2xl border border-line p-6 md:p-10"
          >
            <p className="eyebrow mb-3">How it was actually built</p>
            <h2 className="text-2xl font-black text-ink mb-8">Full build notes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {FIELDS.map(([label, key]) => (
                <div key={key}>
                  <p className="eyebrow mb-2">{label}</p>
                  <p className="text-muted text-sm leading-relaxed">{study[key]}</p>
                </div>
              ))}
            </div>

            {study.keyFeatures?.length > 0 && (
              <div className="mt-8">
                <p className="eyebrow mb-2">Key Features</p>
                <ul className="space-y-1.5">
                  {study.keyFeatures.map((f, i) => (
                    <li key={i} className="text-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-coral shrink-0">●</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {study.futureImprovements?.length > 0 && (
              <div className="mt-8">
                <p className="eyebrow mb-2">Future Improvements</p>
                <ul className="space-y-1.5">
                  {study.futureImprovements.map((f, i) => (
                    <li key={i} className="text-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-teal-dark shrink-0">●</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="mt-14 bg-surface rounded-2xl border border-line p-8 text-center">
            <p className="text-muted text-sm">
              This one's still in build — full write-up lands once it ships.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
