import { motion } from "framer-motion";
import { engineeringMindset } from "../data/portfolio";

export default function EngineeringMindset() {
  return (
    <section id="mindset" className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">My Mindset</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink">
            What I bring to a team
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {engineeringMindset.map((m, i) => (
            <motion.div
              key={m.area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="bg-surface rounded-2xl p-6 border border-line shadow-card"
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
