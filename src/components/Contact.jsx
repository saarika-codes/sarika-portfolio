import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-navy relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-coral/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4 text-teal-light">Contact</p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mx-auto">
            Open to Frontend Developer roles
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-md mx-auto">
            Hiring for a front-end position or a WordPress build? Reach out — happy to talk specifics.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-white hover:text-teal-light transition-colors text-sm font-medium">
              <Mail size={16} /> {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
