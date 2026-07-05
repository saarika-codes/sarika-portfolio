import { motion } from "framer-motion";
import { techStack } from "../data/portfolio";

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Tech Stack</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-10">
          What I use, and where
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([group, { blurb, items }], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="bg-surface rounded-2xl p-6 border border-line shadow-card"
            >
              <p className="font-bold text-ink mb-1.5">{group}</p>
              <p className="text-muted text-xs leading-relaxed mb-4">{blurb}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-line last:border-0 pb-3 last:pb-0">
                    <span className="text-sm font-semibold text-ink">{item.name}</span>
                    <span className="text-xs text-muted">{item.usedIn}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
