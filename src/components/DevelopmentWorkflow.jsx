import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { developmentWorkflow } from "../data/portfolio";

export default function DevelopmentWorkflow() {
  return (
    <section id="workflow" className="section-pad bg-paper">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Development Workflow</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">How a project actually moves</h2>
        <p className="text-muted text-sm mb-10 max-w-2xl">
          Six stages, in order — scroll down and each one lights up as it becomes the step in focus.
        </p>

        <div className="flex flex-col">
          {developmentWorkflow.map((step, i) => (
            <div key={step.stage}>
              <motion.div
                initial={{ opacity: 0.35, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-5 bg-surface rounded-2xl p-5 border-2 border-line hover:border-teal transition-colors duration-300"
              >
                <motion.div
                  initial={{ backgroundColor: "rgba(14,168,158,0.12)", color: "#0B8781" }}
                  whileInView={{ backgroundColor: "#0EA89E", color: "#FFFFFF" }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.06 + 0.1 }}
                  className="shrink-0 w-9 h-9 rounded-full font-bold flex items-center justify-center text-sm"
                >
                  {i + 1}
                </motion.div>
                <div>
                  <h3 className="font-bold text-ink">{step.stage}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-1">{step.body}</p>
                </div>
              </motion.div>

              {i < developmentWorkflow.length - 1 && (
                <motion.div
                  initial={{ opacity: 0.25 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.3, delay: i * 0.06 + 0.2 }}
                  className="flex justify-start pl-[2.15rem] py-1.5"
                  aria-hidden="true"
                >
                  <div className="w-px h-6 bg-line relative">
                    <ArrowDown size={14} className="absolute -bottom-1.5 -left-[7px] text-teal-dark" />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
