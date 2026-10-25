import { motion } from "framer-motion";
import { Server, Layers, Puzzle } from "lucide-react";
import { currentlyLearning } from "../data/portfolio";

const ICONS = { Server, Layers, Puzzle };

export default function CurrentlyLearning() {
  if (!currentlyLearning?.length) return null;

  return (
    <section id="learning" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Currently Learning</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">What I'm learning right now</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
            I keep adding new skills, so the next project is stronger than the last.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {currentlyLearning.map((item, i) => {
            const Icon = ICONS[item.icon] || Layers;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-paper rounded-2xl p-6 border border-line hover:-translate-y-1 hover:border-teal hover:shadow-card transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span className="w-11 h-11 rounded-xl bg-teal-light text-teal-dark flex items-center justify-center">
                    <Icon size={22} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-coral-dark bg-coral-light rounded-full px-2.5 py-1">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-bold text-ink text-lg">{item.title}</h3>
                <p className="text-teal-dark text-xs font-semibold mt-0.5 mb-3">{item.source}</p>
                <p className="text-muted text-sm leading-relaxed">{item.what}</p>

                <div className="mt-auto pt-4">
                  <div className="border-t border-line pt-4">
                    <p className="text-ink text-xs font-bold uppercase tracking-wide mb-1">Why it matters</p>
                    <p className="text-muted text-sm leading-relaxed">{item.why}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
