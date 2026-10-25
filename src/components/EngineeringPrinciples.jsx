import { motion } from "framer-motion";
import { engineeringPrinciples } from "../data/portfolio";

export default function EngineeringPrinciples() {
  return (
    <section id="principles" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">How I Build</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">
            The habits behind every website I deliver
          </h2>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
            These are the simple rules I follow on every project, so the result is easy to use,
            easy to maintain and works well on any device.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="bg-paper rounded-2xl p-6 border border-line transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-card"
            >
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-teal-light text-teal-dark text-sm font-black mb-4">
                {i + 1}
              </span>
              <h3 className="font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
