# Sarika Kohli — Portfolio

A personal portfolio site built with React, Vite, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files land in `dist/` — that folder is what you deploy
(Netlify, Vercel, GitHub Pages, or any static host).

## Where to edit content

Everything real (name, bio, skills, work experience, education,
projects, links) lives in one file:

```
src/data/portfolio.js
```

Edit that file only — you don't need to touch any component to update
your info.

### Adding your resume

Drop your PDF at `public/resume.pdf` (exact filename). The "resume"
button in the hero section already points at `/resume.pdf`, so it'll
start working the moment the file exists.

### Adding real project screenshots

Right now each project card shows an abstract generated thumbnail
(`src/components/ProjectThumb.jsx`) instead of a real screenshot.
To use a real screenshot instead:

1. Put the image in `public/projects/your-image.jpg`
2. Add `image: "/projects/your-image.jpg"` to that project's entry in
   `src/data/portfolio.js`
3. In `src/components/ProjectCard.jsx`, swap `<ProjectThumb ... />` for
   a plain `<img src={project.image} ... />`

### Adding testimonials or writing/blog links

Both sections are wired up but hidden until you add real content —
open `src/data/portfolio.js` and fill in the `testimonials` or
`writing` arrays with real quotes/posts. No placeholder content will
ever show automatically.

### Project statuses

Projects with `status: "soon"` (Frontend Engineering Studio, Time
Capsule 2050) render as "coming soon" cards with no live/GitHub
links. Once you ship them, change `status` to `"live"` and fill in
`live`, `github`, `stack`, and `features`.

## Section order

This follows a fixed structure meant for recruiter/engineering-manager
review, not a generic portfolio layout:

Hero → About Me → Skills → Selected Work → Featured Case Studies →
Engineering Principles → Development Workflow → Tech Stack →
Professional Experience → Currently Learning → Engineering Mindset →
Contact

GitHub Activity has been removed. Each shipped project (JobHunter
Pro, SpendSmart Pro, Nexus 2026) now opens a dedicated `/projects/:slug`
detail page with the full case-study write-up — click the project
image or name on a card to open it. Dark/light mode is toggled from
the navbar (global override, see `src/index.css`).

**Featured Case Studies** (`src/data/portfolio.js` → `caseStudies`)
go deep per project: Problem, Goal, Solution, Technical Decisions,
Challenges, Trade-offs, Performance, Accessibility, Lessons Learned,
Future Improvements. These are grounded in what each project's real
README documents (or the actual technical choices visible in the
code, like "no backend, Local Storage only") — known gaps (no
accessibility audit, no perf benchmarks) are named as gaps rather than
glossed over. Edit these directly as the projects evolve.

**GitHub Activity** pulls live data from your real GitHub profile via
github-readme-stats and a contribution-graph widget — nothing here is
static or invented. If your GitHub username changes, update
`githubUsername` in `src/data/portfolio.js`.

**Engineering Principles / Mindset / Workflow / About Me** are
written in your voice based on patterns actually visible in your
shipped projects and resume — re-read these and adjust anything that
doesn't sound like you.

## Design

Light, bright theme — off-white background, navy text, teal + coral
accents, Roboto throughout. The About section includes an original
flat-style SVG illustration (`src/components/DevIllustration.jsx`) in
place of a real photo — swap it for your own photo or illustration
whenever you like.

## Stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion (scroll/entrance animation)
- lucide-react (icons)

## Structure

```
src/
  data/portfolio.js       ← all real content — edit this
  components/             ← page sections
  App.jsx                 ← assembles sections
  index.css               ← design tokens / global styles
public/
  resume.pdf               ← add your resume PDF here (not included)
  projects/                ← add real project screenshots here (optional)
```
