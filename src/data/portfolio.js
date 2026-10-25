// ------------------------------------------------------------------
// All portfolio content lives in this one file. To change any text,
// edit it here — the components just display what is below.
// ------------------------------------------------------------------

export const profile = {
  name: "Sarika Kohli",
  role: "Frontend & WordPress Developer",
  location: "Delhi, India",
  email: "sarika.kohli123@gmail.com",
  github: "https://github.com/saarika-codes",
  githubUsername: "saarika-codes",
  linkedin: "https://linkedin.com/in/saarika-codes",
  resumeHref: "/resume.pdf",
  // Two lines: the hero shows each item on its own line.
  heroHeadline: ["I build modern websites", "with React & WordPress."],
  heroValueProp:
    "Frontend & WordPress Developer from Delhi, creating responsive web apps, landing pages and sales funnels that look sharp and work smoothly.",
};

export const aboutMe = {
  heading: "Two toolkits, one goal: websites that work",
  paragraphs: [
    "I'm Sarika, a Frontend and WordPress developer based in Delhi. I enjoy turning ideas into clean, responsive websites that are easy to use.",
    "At work, I build WordPress sites, landing pages and sales funnels with Elementor, Astra and WooCommerce, and add custom HTML, CSS and JavaScript whenever a page needs more than the builder can offer.",
    "On my own time, I build React apps such as dashboards and trackers. They help me sharpen my frontend skills, from state management to charts.",
    "I'm completing my BCA and a Full Stack Developer course at Coding Blocks, and I'm looking for a team where I can keep growing as a developer.",
  ],
};

// Skills shown on the Skills section. Names must match the keys in
// the ICONS map inside src/components/Skills.jsx (that is where each
// technology gets its logo).
export const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript (ES6+)", "HTML5", "CSS3", "React", "Bootstrap 5", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "WordPress & CMS",
    items: ["WordPress", "Elementor", "Astra", "WooCommerce", "Yoast SEO", "PHP"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Chrome DevTools"],
  },
];

// status: "live" | "working"
export const projects = [
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
    slug: "jobhunter-pro",
    status: "working",
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
];

export const engineeringPrinciples = [
  {
    title: "Clean, meaningful HTML",
    body:
      "Every page is built on well-structured, semantic HTML. It reads clearly, helps search engines understand the content (Yoast SEO on client sites) and works better with assistive tools.",
  },
  {
    title: "Reusable building blocks",
    body:
      "In React, I split the interface into small components based on the data they need. In Elementor, I reuse one consistent set of widgets and styles per client, so pages stay uniform and quick to update.",
  },
  {
    title: "Responsive on every screen",
    body:
      "I build for mobile, tablet and desktop from the start and test across browsers before anything reaches a client, so the site looks right for every visitor.",
  },
  {
    title: "Easy to maintain",
    body:
      "A clear structure and consistent styling mean someone else, or future me, can open the project months later and change it without breaking anything.",
  },
  {
    title: "Fast and predictable",
    body:
      "I keep one source of truth for each feature's data, so the interface updates smoothly and every number and chart on screen always matches.",
  },
  {
    title: "Clear for every user",
    body:
      "Each screen is designed with its empty, loading and filled states, plus light and dark themes, so users always know what is happening.",
  },
];

export const developmentWorkflow = [
  {
    stage: "Planning",
    body:
      "I start with the goal. For clients that means brand, fonts, colours and sections; for my own apps, the data the product needs to handle.",
  },
  {
    stage: "Research",
    body:
      "I study how similar problems are already solved, such as proven dashboard and landing-page patterns, then adapt the best ideas.",
  },
  {
    stage: "Wireframing",
    body:
      "I sketch the layout and the states of each page (empty, loading, filled) before writing any code.",
  },
  {
    stage: "Development",
    body:
      "I build the structure first, then layer in interactivity like filters, charts and drag-and-drop once the layout is solid.",
  },
  {
    stage: "Testing",
    body:
      "I check every page on mobile, tablet and desktop, and across browsers, before it is shared.",
  },
  {
    stage: "Optimization",
    body:
      "I keep state simple and the code lean, and use Vite's build optimizations, so pages stay fast.",
  },
  {
    stage: "Deployment",
    body:
      "Personal projects go live on Vercel straight from GitHub. Client sites launch through WordPress hosting.",
  },
];

export const engineeringMindset = [
  {
    area: "Problem solving",
    body:
      "When something looks wrong, I start from the data and work outward, checking state first and then the component, so fixes are quick and they last.",
  },
  {
    area: "Client focus",
    body:
      "I work directly with clients to understand what they need, then deliver websites that serve their goals, even with several projects and tight deadlines.",
  },
  {
    area: "Clean organisation",
    body:
      "I group files by feature as projects grow, so the code stays easy to navigate for me and for anyone who joins later.",
  },
  {
    area: "Consistent styling",
    body:
      "Tailwind utility classes keep layouts tidy in React projects, and a fixed style set per client keeps Elementor sites consistent.",
  },
  {
    area: "Quality code",
    body:
      "I prefer fewer, clearer sources of state over duplicated copies, so dashboards stay accurate and easy to reason about.",
  },
  {
    area: "Always learning",
    body:
      "From a BCA degree to a Full Stack course and React projects that stretch my skills, I keep taking on things that make me a stronger developer.",
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "Social Emerger Web Solutions",
    location: "Delhi, India",
    // Change the dates here if needed.
    period: "Oct 2025 — Oct 2026",
    points: [
      "Built and customised WordPress websites and affiliate-marketing funnels with Elementor, Astra and WooCommerce, adding custom HTML, CSS and JavaScript wherever the page builder fell short.",
      "Designed lead-generation landing pages and multi-step sales funnels that were SEO-optimised with Yoast, fully responsive and tested across browsers.",
      "Worked directly with clients to turn business requirements into working websites, managing several projects at once within tight deadlines.",
      "Developed custom JavaScript elements that extend Elementor beyond the limits of a no-code builder.",
    ],
  },
];

export const education = [
  { degree: "Bachelor of Computer Applications (BCA)", school: "Maharishi Dayanand University", period: "2022 — Present" },
];

export const certifications = [
  { name: "Full Stack Developer (In Progress)", issuer: "Coding Blocks" },
  { name: "Data Structures & Algorithms", issuer: "Coding Blocks" },
];

// icon must be one of: "Server", "Layers", "Puzzle" (see CurrentlyLearning.jsx)
export const currentlyLearning = [
  {
    title: "Full Stack Development",
    icon: "Server",
    status: "In progress",
    source: "Coding Blocks",
    what: "Node.js and REST APIs through the Full Stack Developer course.",
    why: "To go beyond the frontend and build complete apps with a backend.",
  },
  {
    title: "Advanced React",
    icon: "Layers",
    status: "In progress",
    source: "Hands-on projects",
    what: "State management and Context patterns, applied while building JobHunter Pro.",
    why: "To build larger, cleaner React apps that stay easy to maintain.",
  },
  {
    title: "Problem Solving",
    icon: "Puzzle",
    status: "Ongoing",
    source: "Coding Blocks",
    what: "Steady practice with data structures and algorithms, building on the DSA course.",
    why: "Stronger fundamentals and sharper logic for writing efficient code.",
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
