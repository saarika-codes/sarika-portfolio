import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  if (!skills?.length) return null;

  return (
    <section id="skills" className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Skills</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-10">
          What I use, and where it's actually been applied
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="bg-surface rounded-2xl p-6 border border-line shadow-card hover:-translate-y-1 hover:shadow-pop transition-all duration-300"
            >
              <h3 className="text-ink font-bold mb-2">{skill.name}</h3>
              <p className="text-muted text-sm leading-relaxed">{skill.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
