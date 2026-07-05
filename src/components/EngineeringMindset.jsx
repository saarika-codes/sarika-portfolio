import { motion } from "framer-motion";
import { engineeringMindset } from "../data/portfolio";

export default function EngineeringMindset() {
  return (
    <section id="mindset" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Engineering Mindset</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-10">
          Where I'm solid, and where I'm not yet
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {engineeringMindset.map((m, i) => (
            <motion.div
              key={m.area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="bg-paper rounded-2xl p-6 border border-line"
            >
              <h3 className="font-bold text-coral-dark text-sm uppercase tracking-wide mb-2">{m.area}</h3>
              <p className="text-muted text-sm leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
