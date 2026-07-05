import { motion } from "framer-motion";
import { experience, education, certifications } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Professional Experience</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">
          Where this has actually been on the job
        </h2>
        <p className="text-muted text-sm mb-12 max-w-2xl">
          Client-facing work, real deadlines, and a team reviewing the output — alongside the
          education and certifications running in parallel.
        </p>

        <div className="space-y-8">
          {experience.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-12 gap-6 bg-paper rounded-2xl p-6 md:p-8 border border-line"
            >
              <div className="md:col-span-4">
                <h3 className="text-ink text-xl font-bold">{job.role}</h3>
                <p className="text-teal-dark font-semibold text-sm mt-1">{job.company}</p>
                <p className="text-muted text-xs mt-3">{job.period}</p>
                <p className="text-muted text-xs">{job.location}</p>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-3">
                  {job.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                      <span className="text-coral mt-1.5 shrink-0">●</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          <div className="bg-paper rounded-2xl p-6 md:p-8 border border-line">
            <p className="eyebrow mb-5">Education</p>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="text-ink text-sm font-bold">{e.degree}</p>
                  <p className="text-muted text-sm">{e.school}</p>
                  <p className="text-muted/70 text-xs mt-0.5">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper rounded-2xl p-6 md:p-8 border border-line">
            <p className="eyebrow mb-5">Certifications</p>
            <ul className="space-y-5">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p className="text-ink text-sm font-bold">{c.name}</p>
                  <p className="text-muted text-sm">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
