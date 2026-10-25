import { motion } from "framer-motion";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript, SiHtml5, SiReact, SiBootstrap, SiTailwindcss, SiChartdotjs,
  SiWordpress, SiElementor, SiWoocommerce, SiYoast, SiPhp,
  SiGit, SiGithub, SiVercel, SiGooglechrome,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skillGroups } from "../data/portfolio";

// Astra has no logo in the icon library, so this is a simple "A" mark.
function AstraIcon({ size = 36, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2.5 22 21.5h-4.6L12 11 6.6 21.5H2z" />
    </svg>
  );
}

// color: null  ->  uses the theme text colour (so black logos stay
// visible in dark mode).
const ICONS = {
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: FaCss3Alt, color: "#1572B6" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Bootstrap 5": { Icon: SiBootstrap, color: "#7952B3" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Chart.js": { Icon: SiChartdotjs, color: "#FF6384" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  Elementor: { Icon: SiElementor, color: "#92003B" },
  Astra: { Icon: AstraIcon, color: "#5B2EFF" },
  WooCommerce: { Icon: SiWoocommerce, color: "#96588A" },
  "Yoast SEO": { Icon: SiYoast, color: "#A4286A" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: null },
  Vercel: { Icon: SiVercel, color: null },
  "VS Code": { Icon: VscVscode, color: "#007ACC" },
  "Chrome DevTools": { Icon: SiGooglechrome, color: "#4285F4" },
};

const allSkills = skillGroups.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-paper">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="eyebrow mb-4">Skills</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-3">
          The tools I build with
        </h2>
        <p className="text-muted text-sm md:text-base mb-12 max-w-xl mx-auto">
          Frontend development and WordPress, backed by the tools I use every day.
        </p>

        {/* One grid: 5 cards per row on desktop (4 rows for 18 skills) */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {allSkills.map((name, i) => {
            const entry = ICONS[name];
            const Icon = entry?.Icon;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: (i % 5) * 0.04 }}
                className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(20%-16px)] bg-surface rounded-2xl px-3 py-5 border border-line shadow-card flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-pop transition-all duration-300"
              >
                {Icon && (
                  <span className={entry.color ? "" : "text-ink"} style={entry.color ? { color: entry.color } : undefined}>
                    <Icon size={36} color={entry.color || undefined} />
                  </span>
                )}
                <span className="text-ink text-sm font-semibold leading-snug text-center">{name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
