import { motion } from "framer-motion";
import { engineeringPrinciples } from "../data/portfolio";

export default function EngineeringPrinciples() {
  return (
    <section id="principles" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Engineering Principles</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">How I think about this work</h2>
        <p className="text-muted text-sm mb-10 max-w-2xl">
          Not a personality section — these are the constraints that show up in how the projects below are actually built.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {engineeringPrinciples.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
              className="bg-paper rounded-2xl p-6 border border-line transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-card"
            >
              <h3 className="font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
