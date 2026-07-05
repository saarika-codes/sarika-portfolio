import { Download } from "lucide-react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

const QUICK_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Dark header strip */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white/50 text-sm mt-1">© 2026 Sarika Kohli. All rights reserved.</p>
          </div>
          <a
            href={profile.resumeHref}
            download
            className="inline-flex items-center gap-2 bg-teal text-navy font-semibold text-sm px-6 py-3 rounded-full hover:bg-white transition-colors shrink-0"
          >
            Resume <Download size={16} />
          </a>
        </div>
      </div>

    </footer>
  );
}
