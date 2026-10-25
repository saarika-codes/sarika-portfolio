import { motion } from "framer-motion";
import { aboutMe } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="order-1"
        >
          {/* The image fills the whole column and always matches the
              height of the text next to it (object-cover). */}
          <div className="relative h-full min-h-[340px] md:min-h-[480px] rounded-3xl overflow-hidden bg-teal-light">
            <img
              src="/images/about-illustration.png"
              alt="Illustrated portrait of Sarika Kohli with a laptop"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="order-2 flex flex-col justify-center"
        >
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl font-black text-ink mb-6 leading-tight">
            {aboutMe.heading}
          </h2>

          <div className="space-y-4">
            {aboutMe.paragraphs.map((p, i) => (
              <p key={i} className="text-muted text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
