// ------------------------------------------------------------------
// All content lives here. Facts (dates, companies, project features,
// tech stack) come from Sarika's resume and project READMEs. Sections
// like Engineering Principles / Mindset / Workflow / About are
// written in her voice based on patterns actually visible in that
// work — not invented achievements. Edit freely as things change.
// ------------------------------------------------------------------

export const profile = {
  name: "Sarika Kohli",
  role: "Front-End Developer",
  location: "Delhi, India",
  email: "sarika.kohli123@gmail.com",
  phone: "+91 88264 55971",
  github: "https://github.com/saarika-codes",
  githubUsername: "saarika-codes",
  linkedin: "https://linkedin.com/in/saarika-codes",
  resumeHref: "/resume.pdf",
  heroHeadline: "I build interfaces where the data model comes first.",
  heroValueProp:
    "Three production React/vanilla-JS apps, live and shipped. Client sites delivered end-to-end on WordPress.",
};

export const aboutMe = {
  whoIAm:
    "Front-end developer working two tracks: WordPress/Elementor client sites, and independent React apps with real data behind them.",
  whatIBuild:
    "End-to-end client sites on WordPress. On React: dashboards with real CRUD, charts, and state — not static templates.",
  howIApproachFrontEnd:
    "Data model before UI. One source of truth per feature, so every view derives from the same data instead of tracking its own copy.",
  currentDirection:
    "Finishing a BCA and a Full Stack certification — closing the backend gap in projects that are currently front-end only.",
};

export const engineeringPrinciples = [
  {
    title: "Semantic HTML",
    body:
      "Client work and Nexus 2026 both lean on semantic markup instead of div-soup — it's what Yoast SEO and accessibility tooling depend on underneath.",
  },
  {
    title: "Reusable Components",
    body:
      "JobHunter Pro and SpendSmart Pro split components around what data they need, not just how they look. Elementor client sites reuse a fixed set of widgets against one design system per client instead of one-off sections.",
  },
  {
    title: "Responsive Design",
    body:
      "Client work required testing every build against 10+ real device viewports. All three shipped apps carry that habit forward with full responsive layouts, desktop to mobile.",
  },
  {
    title: "Maintainability",
    body:
      "Elementor sites get handed off or revisited months later, so a defined design system matters more than a clever one-off page. The same discipline shows up in how personal projects group files by feature.",
  },
  {
    title: "Performance",
    body:
      "Centralized state — one array per feature — keeps re-renders predictable. Formal profiling (Lighthouse, bundle analysis) isn't in place yet on personal projects; that's a named gap, not an overstated strength.",
  },
  {
    title: "Accessibility",
    body:
      "Semantic structure and full dark/light theming are standard across the shipped apps. Keyboard behavior on interactive elements like drag-and-drop kanban and tab patterns isn't fully confirmed yet — an honest gap being worked on.",
  },
  {
    title: "User Experience",
    body:
      "Every screen ships with its empty, loading, and filled states designed before interactivity gets layered in — a habit from structuring dashboards where the data isn't always there yet.",
  },
];

export const developmentWorkflow = [
  {
    stage: "Planning",
    body:
      "Client work starts with a design-system brief — fonts, colors, section count. Personal projects start with the core data model: what counts as an 'application', a 'transaction'.",
  },
  {
    stage: "Research",
    body:
      "Check how the same problem is usually solved before designing from scratch — existing dashboard patterns, existing Elementor conventions — then adapt rather than copy.",
  },
  {
    stage: "Wireframing",
    body:
      "Low-fidelity layout sketches for client sections before build; for personal projects, a rough page map of states (empty, loading, filled) instead of a formal wireframe tool.",
  },
  {
    stage: "Development",
    body:
      "Structure and states first — empty, loading, filled — then interactivity (drag-and-drop, filters, charts) layers in once the shape of the page is right.",
  },
  {
    stage: "Testing",
    body:
      "Manual cross-viewport testing is the primary method right now: 10+ real device widths for client builds, desktop/mobile breakpoints for personal projects. No automated test suite yet — a real gap, not a hidden one.",
  },
  {
    stage: "Optimization",
    body:
      "Centralizing state — one source of truth per feature — keeps re-renders predictable, plus Vite's default build optimizations.",
  },
  {
    stage: "Deployment",
    body:
      "Vercel for personal projects, CI triggered on push. WordPress hosting and Elementor exports for client sites.",
  },
];

export const engineeringMindset = [
  {
    area: "Debugging",
    body:
      "Start from the data, not the UI. If a chart or a kanban column looks wrong, check what's actually in state or localStorage before touching component code.",
  },
  {
    area: "Organization",
    body:
      "Group files by feature area, not by type, once a project passes a couple of screens — a flat components/ folder stops making sense past a certain size.",
  },
  {
    area: "CSS Structure",
    body:
      "Utility classes (Tailwind) for layout and spacing, kept out of component logic. Elementor sites work off a fixed style config per client instead of scattered inline overrides.",
  },
  {
    area: "Performance",
    body:
      "Aware of it, not yet instrumented — no personal project currently has real performance measurement (Lighthouse, bundle analysis). A gap I'm planning to close, not a strength to overstate.",
  },
  {
    area: "Accessibility",
    body:
      "Semantic structure and theming are standard. Keyboard support on custom interactions (drag-and-drop, tabs) isn't fully verified yet — named directly rather than assumed.",
  },
  {
    area: "Maintainable Code",
    body:
      "Fewer, clearer state sources over convenient but duplicated local state — every dashboard number in JobHunter Pro and SpendSmart Pro derives from one array instead of a separate tracked count.",
  },
];

export const techStack = {
  Languages: {
    blurb: "The building blocks under every project, from Elementor client pages to vanilla-JS builds like Nexus 2026.",
    items: [
      { name: "JavaScript (ES6+)", usedIn: "All three shipped React/vanilla-JS projects" },
      { name: "HTML5", usedIn: "Every project, including Elementor client sites" },
      { name: "CSS3", usedIn: "Every project, including Elementor client sites" },
      { name: "PHP", usedIn: "WordPress theme/plugin customization at Social Emergers" },
    ],
  },
  Frontend: {
    blurb: "Where component structure and state management actually get tested — JobHunter Pro and SpendSmart Pro.",
    items: [
      { name: "React", usedIn: "JobHunter Pro, SpendSmart Pro" },
      { name: "React Router", usedIn: "JobHunter Pro, SpendSmart Pro" },
    ],
  },
  Styling: {
    blurb: "Utility-first for personal projects, grid-based for the vanilla-JS build.",
    items: [
      { name: "Tailwind CSS", usedIn: "This portfolio, personal projects" },
      { name: "Bootstrap 5", usedIn: "Nexus 2026" },
    ],
  },
  CMS: {
    blurb: "5+ client sites shipped end-to-end at Social Emergers — theming, plugins, SEO.",
    items: [
      { name: "WordPress / Elementor / Astra", usedIn: "5+ client sites at Social Emergers" },
      { name: "WooCommerce", usedIn: "Client e-commerce pages" },
      { name: "Yoast SEO", usedIn: "Client site SEO setup" },
    ],
  },
  Libraries: {
    blurb: "Turns raw application and transaction data into the KPI charts on both React dashboards.",
    items: [{ name: "Chart.js", usedIn: "JobHunter Pro and SpendSmart Pro dashboards" }],
  },
  Deployment: {
    blurb: "Vercel handles CI/CD for personal projects; client sites ship through WordPress hosting.",
    items: [
      { name: "Vercel", usedIn: "JobHunter Pro, SpendSmart Pro, Nexus 2026" },
      { name: "WordPress hosting", usedIn: "Client sites at Social Emergers" },
    ],
  },
  Tools: {
    blurb: "Version control and daily development, on every project without exception.",
    items: [
      { name: "Git & GitHub", usedIn: "All projects" },
      { name: "VS Code", usedIn: "Daily development" },
    ],
  },
  "Currently Learning": {
    blurb: "Closing the backend gap — studied through Coding Blocks, not yet shipped in a live project.",
    items: [
      { name: "Node.js fundamentals", usedIn: "Coding Blocks certification" },
      { name: "REST APIs", usedIn: "Coding Blocks certification" },
    ],
  },
};

export const experience = [
  {
    role: "Web Developer",
    company: "Social Emergers",
    location: "Delhi, India",
    period: "May 2025 — Apr 2026",
    points: [
      "Owned 5+ WordPress builds end-to-end — each one meant defining a design system (fonts, colors, section limits) up front so Elementor handoffs didn't turn into one-off pages that broke on revisit.",
      "Cross-browser and cross-device testing wasn't optional here — every page got checked against 10+ real viewports before a client saw it, which is where the mobile-first habit in personal projects comes from.",
      "Built affiliate landing pages as a separate track from core client sites, each scoped around a single conversion goal rather than reusing a general template.",
      "Worked inside a small agile team where documenting component specs before building cut down revision cycles — a discipline that carries over to how personal projects get planned now.",
    ],
  },
];

export const education = [
  { degree: "Bachelor of Computer Applications (BCA)", school: "Maharishi Dayanand University", period: "2022 — Present (Final Year)" },
  { degree: "Senior Secondary — CBSE (Class XII)", school: "Sarvodaya Kanya Vidyalaya", period: "2022" },
  { degree: "Secondary — CBSE (Class X)", school: "Sarvodaya Kanya Vidyalaya", period: "2020" },
];

export const certifications = [
  { name: "Full Stack Developer (In Progress)", issuer: "Coding Blocks" },
  { name: "Data Structures & Algorithms", issuer: "Coding Blocks" },
  { name: "Higher Diploma in Computer Science (HDCS)", issuer: "Nice Web Technologies" },
];

export const currentlyLearning = [
  {
    title: "Full Stack fundamentals",
    what: "Node.js and REST APIs, through the Coding Blocks certification.",
    why: "Every shipped project so far is intentionally front-end only — this closes that gap.",
    progress: "In progress, not yet shipped in a live project.",
  },
  {
    title: "React state architecture",
    what: "Context and derived-state patterns, applied while building JobHunter Pro.",
    why: "The dashboard, kanban board, and resume tracker needed to share one data source without drifting out of sync.",
    progress: "Applied and shipped in JobHunter Pro's architecture.",
  },
  {
    title: "Data Structures & Algorithms",
    what: "Steady problem-solving practice through Coding Blocks.",
    why: "Interview prep, separate from any specific project.",
    progress: "Ongoing.",
  },
];

// status: "live" | "soon"
export const projects = [
  {
    slug: "jobhunter-pro",
    status: "live",
    name: "JobHunter Pro",
    tagline: "AI-powered job search tracker",
    description:
      "For job seekers juggling spreadsheets and email threads. A React 19 dashboard tracking applications, resume versions, and interview notes in one place — Gemini-powered resume matching is the standout feature.",
    stack: ["React 19", "Vite", "React Router", "Chart.js", "Google Gemini API"],
    image: "/projects/jobhunter-pro.png",
    live: "https://jobhunter-pro-one.vercel.app/",
    github: "https://github.com/saarika-codes/jobhunter-pro",
    accent: "teal",
  },
  {
    slug: "spendsmart-pro",
    status: "live",
    name: "SpendSmart Pro",
    tagline: "Personal finance dashboard",
    description:
      "For anyone who wants expense tracking without creating an account. A React finance dashboard with full CRUD, budgets, and savings goals — running entirely on Local Storage, zero backend.",
    stack: ["React", "Vite", "Chart.js", "React Router", "Local Storage"],
    image: "/projects/spendsmart-pro.png",
    live: "https://spendsmart-pro.vercel.app/",
    github: "https://github.com/saarika-codes/spendsmart-pro",
    accent: "coral",
  },
  {
    slug: "nexus-2026",
    status: "live",
    name: "Nexus 2026",
    tagline: "Conference event landing page",
    description:
      "For event organizers needing more than a static page. A vanilla-JS conference site with a live countdown, tabbed schedule, and speaker search — framework-free by design, to prove the fundamentals hold up.",
    stack: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JavaScript"],
    image: "/projects/nexus-2026.png",
    live: "https://nexus-2026-event.vercel.app/",
    github: "https://github.com/saarika-codes/nexus-2026-event",
    accent: "teal",
  },
  {
    slug: "frontend-engineering-studio",
    status: "soon",
    name: "Frontend Engineering Studio",
    tagline: "Flagship build — in progress",
    description: "A larger-scale project currently in planning/build. Details will land here as it ships.",
    stack: [],
    image: null,
    live: null,
    github: null,
    accent: "coral",
  },
  {
    slug: "time-capsule-2050",
    status: "soon",
    name: "Time Capsule 2050",
    tagline: "Flagship build — in progress",
    description: "A larger-scale project currently in planning/build. Details will land here as it ships.",
    stack: [],
    image: null,
    live: null,
    github: null,
    accent: "teal",
  },
];

// Core skills explained by where they're actually used — not a
// proficiency percentage, which reads as a claim rather than evidence.
export const skills = [
  {
    name: "React",
    blurb: "Component architecture and state management for dashboard-style apps — JobHunter Pro and SpendSmart Pro both derive every view from one shared data source.",
  },
  {
    name: "JavaScript (ES6+)",
    blurb: "The logic layer everywhere, including Nexus 2026's countdown, tab switching, and live search — handled without a framework.",
  },
  {
    name: "HTML5 & CSS3",
    blurb: "Semantic structure and layout on every project, from Elementor client pages to hand-built responsive grids.",
  },
  {
    name: "Tailwind CSS",
    blurb: "Utility-first styling for fast, consistent layouts on personal projects like this portfolio.",
  },
  {
    name: "WordPress / Elementor",
    blurb: "End-to-end client site delivery at Social Emergers — theming, plugin setup, and SEO across 5+ sites.",
  },
  {
    name: "Chart.js",
    blurb: "Turns raw transaction and application data into the KPI charts on both React dashboards.",
  },
  {
    name: "Git & GitHub",
    blurb: "Version control and collaboration on every project, personal and client-facing.",
  },
];

// Full engineering case studies — only for shipped projects with a
// documented README to draw from. Reasoning about challenges/trade-offs
// is grounded in the actual technical choices each README documents
// (e.g. no backend, Local Storage only) — gaps are named as gaps
// (no accessibility audit, no perf benchmarks) rather than glossed over.
export const caseStudies = [
  {
    project: "JobHunter Pro",
    slug: "jobhunter-pro",
    problem:
      "Job seekers track applications across spreadsheets, notes apps, and email threads with no single source of truth — making it hard to know an application's status, which resume version was sent, or what was covered in an interview.",
    goal:
      "Build one dashboard holding status tracking, resume versioning, and interview notes together, with a React component architecture that stands on its own — no backend, since the point was front-end depth, not full-stack scope.",
    solution:
      "A React 19 + Vite app: a Kanban board (Saved → Applied → Interview → Offer → Rejected), a dashboard with KPI cards and Chart.js charts, a resume-version tracker mapped to which application used which resume, an interview-notes log, and an optional Gemini-powered layer for resume-match scoring and interview-question generation.",
    keyFeatures: [
      "Drag-and-drop kanban across 5 application stages",
      "Dashboard KPIs, status distribution, and monthly application charts",
      "Resume version tracker mapped to individual applications",
      "AI resume match + likely interview questions from a pasted job description (demo mode works without an API key)",
      "Full dark mode, responsive from desktop to mobile",
    ],
    technicalDecisions:
      "Built deliberately without Node/Express/MongoDB/Redux — state runs on React Context and Local Storage. That constraint kept the project focused on demonstrating component architecture and state management, the things a front-end interview actually tests, instead of backend plumbing.",
    challenges:
      "With no backend, application data has to stay consistent across the dashboard, kanban board, and resume tracker without a database to fall back on. The fix was treating the application list as the single source of truth and deriving every view — charts, KPI counts, kanban columns — from that one array rather than letting each screen hold its own copy.",
    tradeOffs:
      "No backend means no persistence across devices or browsers, and no real user accounts — fine for a portfolio piece demonstrating front-end skill, not viable as an actual job-board product. The Gemini calls run directly from the client rather than through a proxy server, which keeps the project simple to run but means API calls aren't server-side.",
    performance:
      "No formal benchmarks captured yet (Lighthouse, bundle analysis) — Vite's default build pipeline handles bundling, but this hasn't been profiled.",
    accessibility:
      "Basic semantic structure and full dark/light theming are in place. The kanban drag-and-drop is not confirmed keyboard-accessible — a real, named gap rather than an implied strength.",
    lessonsLearned:
      "Skipping the backend forced tighter state architecture than a typical CRUD app — every derived number had to come from one array, which turned out to be good practice independent of whether a backend exists at all.",
    futureImprovements: [
      "Keyboard-accessible kanban interactions",
      "Optional backend for real multi-device persistence",
      "Automated tests around the state-derivation logic",
    ],
    live: "https://jobhunter-pro-one.vercel.app/",
    github: "https://github.com/saarika-codes/jobhunter-pro",
  },
  {
    project: "SpendSmart Pro",
    slug: "spendsmart-pro",
    problem:
      "Most budgeting apps require an account and real bank access, which is unnecessary friction for someone who just wants to log expenses and see where money is going.",
    goal:
      "Build a finance dashboard that runs fully client-side — no backend, no auth — while still supporting real CRUD, filtering, and multiple chart types.",
    solution:
      "A React + Vite app storing every transaction in Local Storage: full CRUD with category/date filters, budget planning with progress tracking and alerts, savings goals with visual progress, and dashboard analytics (pie, bar, and line charts) plus a financial health score.",
    keyFeatures: [
      "Dashboard totals — balance, income, expenses, savings",
      "Full transaction CRUD with category and date filters",
      "Budget planning with progress tracking and compliance alerts",
      "Savings goals with visual progress bars",
      "Spending insights, monthly analysis, and CSV export",
    ],
    technicalDecisions:
      "Local Storage as the only persistence layer — a scope decision documented directly in the project's own README, prioritizing front-end depth over backend infrastructure, consistent with JobHunter Pro's approach.",
    challenges:
      "Analytics like spending trends and the financial health score have to recompute correctly every time a transaction is added, edited, or deleted. Everything derives from one transaction array, so the dashboard, charts, and budget-compliance checks stay in sync without duplicated state.",
    tradeOffs:
      "Local Storage doesn't survive a cleared cache and doesn't sync across devices — acceptable for demonstrating the UI and data-viz work, not viable as a real product without a backend. The project's own README lists this directly under future improvements rather than treating it as solved.",
    performance:
      "Chart re-renders are triggered by state updates; no specific performance benchmarks have been captured.",
    accessibility:
      "No formal accessibility audit has been performed — named here as a gap rather than assumed complete.",
    lessonsLearned:
      "Directly from the project's own README: reinforced React component architecture, state management, CRUD operations, Local Storage as a persistence layer, data visualization, dashboard UI design, and structuring a frontend project with no backend.",
    futureImprovements: [
      "AI-powered spending analysis and smart budget recommendations",
      "Bank sync / statement import",
      "Receipt scanner",
      "PWA support",
    ],
    live: "https://spendsmart-pro.vercel.app/",
    github: "https://github.com/saarika-codes/spendsmart-pro",
  },
  {
    project: "Nexus 2026",
    slug: "nexus-2026",
    problem:
      "Conference landing pages often ship as static, unpolished single pages — no live countdown, no way to filter speakers, no real schedule structure.",
    goal:
      "Build a fully responsive event landing page — no JS framework — that still feels like a real product page: countdown, tabbed schedule, speaker search, ticket tiers, and a validated registration flow.",
    solution:
      "A vanilla HTML5/CSS3/Bootstrap 5/JS site: an animated hero countdown, a 3-day tabbed schedule with keynote/panel/workshop tags, 8 speaker cards with live search filtering, 3-tier pricing cards, and a registration form with client-side validation.",
    keyFeatures: [
      "Full-screen hero with a live animated countdown",
      "3-day tabbed schedule with session-type tags",
      "8 speaker cards with live search filtering",
      "3-tier pricing cards and a validated registration form",
    ],
    technicalDecisions:
      "Built without a JS framework on purpose — to show that countdown timers, tab switching, live search, and form validation can be handled cleanly with vanilla JS and Bootstrap's grid, rather than reaching for React by default.",
    challenges:
      "Without a framework's state management, the countdown, tab switching, and speaker search all needed manual DOM updates. The fix was scoping the JS into a few well-defined functions — one per interaction — instead of letting event listeners sprawl across the file.",
    tradeOffs:
      "No component reuse the way React or Vue would offer — the speaker cards are closer to repeated markup than reusable components. That's fine at this page's scope, but wouldn't scale to a larger multi-page site.",
    performance:
      "No build step or bundler; fonts load from Google Fonts with no confirmed font-display strategy — an easy, unaddressed optimization.",
    accessibility:
      "Semantic HTML5 markup throughout, per the project's own README. ARIA and keyboard behavior on the tabs and live-search filter are not explicitly implemented — a real gap, not claimed as done.",
    lessonsLearned:
      "Handling tabs, live filtering, a countdown, and form validation without a framework makes it clearer what a framework like React is actually solving for once a page grows past a handful of these interactions.",
    futureImprovements: [
      "Componentizing repeated markup if the page grows",
      "Accessible ARIA tab pattern",
      "Image optimization",
    ],
    live: "https://nexus-2026-event.vercel.app/",
    github: "https://github.com/saarika-codes/nexus-2026-event",
  },
];

// Add real quotes here (manager, professor, client) — hidden until filled.
export const testimonials = [];

// Add real published posts here — hidden until filled.
export const writing = [];
