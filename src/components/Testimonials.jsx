import { testimonials } from "../data/portfolio";

// Renders nothing until real quotes are added to src/data/portfolio.js.
export default function Testimonials() {
  if (!testimonials?.length) return null;

  return (
    <section className="section-pad bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4 text-center">Said By</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-12 text-center">
          People I've worked with
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-surface rounded-2xl p-6 border border-line shadow-card">
              <p className="text-ink text-base leading-relaxed">"{t.quote}"</p>
              <footer className="mt-4 text-sm font-semibold text-teal-dark">
                {t.name}{t.title ? ` — ${t.title}` : ""}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
