// Original abstract signature thumbnail — used until a real product
// screenshot is dropped in. To use a real screenshot instead: put the
// image in /public/projects/<file>.jpg, pass `image: "/projects/<file>.jpg"`
// on the project object in src/data/portfolio.js, then swap the <img>
// back in inside ProjectCard.jsx.

const initials = (name) =>
  name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function ProjectThumb({ project }) {
  const isCoral = project.accent === "coral";
  const bg = isCoral ? "bg-coral-light" : "bg-teal-light";
  const fg = isCoral ? "text-coral-dark" : "text-teal-dark";

  if (project.image) {
    return (
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-surfacealt">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-[16/10] overflow-hidden rounded-2xl ${bg}`}>
      <div className="absolute -right-6 -bottom-8 w-32 h-32 rounded-full bg-white/40 blur-xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-6xl font-black ${fg}`}>{initials(project.name)}</span>
      </div>
      {project.status === "soon" && (
        <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-ink bg-white/80 px-2.5 py-1 rounded-full">
          Coming soon
        </div>
      )}
    </div>
  );
}
