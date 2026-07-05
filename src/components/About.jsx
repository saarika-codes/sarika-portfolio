import { motion } from "framer-motion";
import { aboutMe } from "../data/portfolio";

const BLOCKS = [
  { label: "Who I am", text: aboutMe.whoIAm },
  { label: "What I build", text: aboutMe.whatIBuild },
  { label: "How I work", text: aboutMe.howIApproachFrontEnd },
  { label: "Right now", text: aboutMe.currentDirection },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="order-1"
        >
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-4 -z-10 rounded-full bg-teal-light" />
            <img
              src="/images/about-illustration.png"
              alt="Illustrated portrait of Sarika Kohli with a laptop, surrounded by icons for the frameworks and languages she works in"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="order-2"
        >
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-6 leading-tight">
            Front-end by trade, product-minded by habit
          </h2>

          <div className="space-y-5">
            {BLOCKS.map((b) => (
              <div key={b.label}>
                <p className="text-teal-dark text-xs font-bold uppercase tracking-wide mb-1">{b.label}</p>
                <p className="text-muted text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "JavaScript", "WordPress", "Tailwind CSS"].map((s) => (
              <span
                key={s}
                className="text-xs font-semibold text-muted bg-paper border border-line rounded-full px-3.5 py-1.5"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
