import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="flex items-center gap-1.5 shrink-0">
          <span className="text-lg font-black text-ink">Portfolio</span>
          <span className="text-lg font-black text-teal-dark">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted hover:text-teal-dark transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink hover:border-teal hover:text-teal-dark transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-ink p-2 -mr-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-5 bg-surface shadow-md text-sm font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-muted hover:text-teal-dark">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
