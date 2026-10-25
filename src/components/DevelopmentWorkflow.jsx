import { motion } from "framer-motion";
import { developmentWorkflow } from "../data/portfolio";

export default function DevelopmentWorkflow() {
  return (
    <section id="workflow" className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Development Workflow</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">How a project moves from idea to launch</h2>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
            Seven simple steps, followed in order on every project.
          </p>
        </div>

        {/* Cards wrap and the last row stays centred */}
        <div className="flex flex-wrap justify-center gap-6">
          {developmentWorkflow.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-surface rounded-2xl p-6 border border-line shadow-card overflow-hidden hover:-translate-y-1 hover:border-teal transition-all duration-300"
            >
              <p className="relative text-teal-dark text-xs font-bold uppercase tracking-widest mb-2">
                Step {i + 1}
              </p>
              <h3 className="relative font-bold text-ink text-lg mb-2">{step.stage}</h3>
              <p className="relative text-muted text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
