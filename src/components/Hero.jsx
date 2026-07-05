import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

const STACK = ["React", "JavaScript", "WordPress", "Tailwind CSS"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] flex items-center justify-center bg-paper overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="bubble bg-teal-light/70" style={{ width: 220, height: 220, top: "8%", left: "6%", "--bd": "11s", "--bx": "26px", "--by": "-34px" }} />
        <span className="bubble bg-coral-light/70" style={{ width: 160, height: 160, top: "58%", left: "82%", "--bd": "9s", "--bx": "-24px", "--by": "22px" }} />
        <span className="bubble bg-teal-light/50" style={{ width: 100, height: 100, top: "72%", left: "12%", "--bd": "13s", "--bx": "18px", "--by": "-20px" }} />
        <span className="bubble bg-coral-light/50" style={{ width: 130, height: 130, top: "14%", left: "86%", "--bd": "10s", "--bx": "-20px", "--by": "26px" }} />
        <span className="bubble bg-teal-light/60" style={{ width: 60, height: 60, top: "40%", left: "46%", "--bd": "8s", "--bx": "14px", "--by": "16px" }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 w-full text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-5"
        >
          Hi, I'm available for new roles
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.03 }}
          className="text-teal-dark font-bold text-sm md:text-base tracking-wide"
        >
          {profile.name} — {profile.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-3 text-4xl md:text-6xl font-black leading-[1.08] text-ink"
        >
          {profile.heroHeadline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto"
        >
          {profile.heroValueProp}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-teal-dark transition-colors shadow-pop"
          >
            See my work <ArrowRight size={16} />
          </a>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center gap-2 border-2 border-line text-ink font-semibold text-sm px-6 py-3.5 rounded-full hover:border-teal hover:text-teal-dark transition-colors"
          >
            Resume <Download size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-5"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-teal-dark transition-colors">
            <GithubIcon size={19} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-teal-dark transition-colors">
            <LinkedinIcon size={19} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex items-center justify-center gap-3 flex-wrap"
        >
          {STACK.map((s) => (
            <span
              key={s}
              className="text-xs font-semibold text-muted bg-surface border border-line rounded-full px-3.5 py-1.5"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
