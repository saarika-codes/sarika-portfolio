import { writing } from "../data/portfolio";

// Renders nothing until real published posts are added to
// src/data/portfolio.js.
export default function Writing() {
  if (!writing?.length) return null;

  return (
    <section className="section-pad bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="eyebrow mb-4">Writing</p>
        <h2 className="text-3xl md:text-4xl font-black text-ink mb-10">Notes, in public</h2>

        <ul className="divide-y divide-line border-t border-line">
          {writing.map((post, i) => (
            <li key={i}>
              <a href={post.url} target="_blank" rel="noreferrer" className="flex items-center justify-between py-4 group">
                <span className="text-ink font-medium group-hover:text-teal-dark transition-colors">{post.title}</span>
                <span className="text-xs text-muted">{post.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
