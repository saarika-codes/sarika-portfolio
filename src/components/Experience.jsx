import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education, certifications } from "../data/portfolio";

const card =
  "bg-surface rounded-2xl p-6 md:p-8 border border-line shadow-card h-full";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Professional Experience</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink">
            My work and learning journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Card 1: Work experience */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className={card}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center">
                  <Briefcase size={20} />
                </span>
                <h3 className="text-ink text-lg font-bold">Work Experience</h3>
              </div>

              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <div>
                      <h4 className="text-ink text-xl font-bold">{job.role}</h4>
                      <p className="text-teal-dark font-semibold text-sm mt-0.5">{job.company}</p>
                    </div>
                    <p className="text-xs font-semibold text-muted bg-paper border border-line rounded-full px-3 py-1">
                      {job.period}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                        <span className="text-coral mt-1.5 shrink-0 text-[8px]">●</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Education + Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-2"
          >
            <div className={card}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-coral-light text-coral-dark flex items-center justify-center">
                  <GraduationCap size={20} />
                </span>
                <h3 className="text-ink text-lg font-bold">Education &amp; Certifications</h3>
              </div>

              <p className="text-teal-dark text-xs font-bold uppercase tracking-widest mb-3">Education</p>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="text-ink text-sm font-bold">{e.degree}</p>
                    <p className="text-muted text-sm">{e.school}</p>
                    <p className="text-muted/70 text-xs mt-0.5">{e.period}</p>
                  </li>
                ))}
              </ul>

              <div className="border-t border-line my-6" />

              <p className="text-teal-dark text-xs font-bold uppercase tracking-widest mb-3">Certifications</p>
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <p className="text-ink text-sm font-bold">{c.name}</p>
                    <p className="text-muted text-sm">{c.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
