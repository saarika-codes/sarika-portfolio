import { motion } from "framer-motion";
import { currentlyLearning } from "../data/portfolio";

export default function CurrentlyLearning() {
  if (!currentlyLearning?.length) return null;

  return (
    <section id="learning" className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Currently Learning</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-10">What I'm studying right now</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {currentlyLearning.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface rounded-2xl p-6 border border-line"
            >
              <h3 className="font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
