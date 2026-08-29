import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Harsh | Let's Build";
const DESCRIPTION =
  "Harsh Agrawal wants to serve Cornell Tech by mentoring students, bringing people together and connecting technical talent with the right opportunities.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PATENT = {
  title: "SYSTEM AND METHOD OF CHECKING FUEL GAS CYLINDERS FOR WEAR AND TEAR DAMAGE",
  number: "600007",
  url: "https://drive.google.com/file/d/1gKvD60cuR15KcYbljyK_XZ5ZGxx1qm5p/view?usp=sharing",
};

const NAV = [
  { id: "why", label: "WHY" },
  { id: "bring", label: "HELP" },
  { id: "process", label: "PLAN" },
  { id: "beliefs", label: "BELIEVE" },
  { id: "story", label: "EXPERIENCE" },
  { id: "leadership", label: "LEAD" },
  { id: "why-me", label: "VALUE" },
  { id: "vision", label: "VISION" },
  { id: "connect", label: "CONNECT" },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-mono text-lg font-extrabold tracking-[0.25em] text-primary md:text-xl">
        {children}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

const PROJECTS = [
  {
    index: "01",
    kicker: "Industrial AI",
    title: "Robotics & Vision Inspection",
    summary:
      "Built robotic inspection workflows that integrated AI vision to detect defects across precision industrial components and production systems.",
    stack: ["Robotics", "Computer Vision", "AI", "Automation", "Defect Detection"],
    listLabel: "What I worked on",
    list: [
      "Programmed robotic inspection workflows",
      "Integrated AI vision for defect detection",
      "Built quality checks for axle chassis components",
      "Optimized throughput and production reliability",
      "Deployed automation in real factory conditions",
    ],
    noteLabel: "Impact",
    note: "Improved overall product quality by rejecting defective units before they reached downstream stages, helping the client avoid more than $2,000 in daily penalties while reinforcing a safety-first inspection standard.",
    featured: true,
  },
  {
    index: "02",
    kicker: "Intelligent Agriculture",
    title: "Crop Recommendation System",
    summary:
      "A data-driven system designed to help determine suitable crops based on environmental and agricultural parameters.",
    stack: ["Machine Learning", "Data Science", "Recommendation Systems"],
    noteLabel: "The challenge",
    note: "How can data be translated into a recommendation that is useful to someone making a real agricultural decision?",
    featured: false,
  },
  {
    index: "03",
    kicker: "AI for Healthcare",
    title: "Skin Healthcare",
    summary:
      "A computer-vision-based approach for analyzing skin conditions and assisting with preliminary assessment.",
    stack: ["Computer Vision", "Machine Learning", "Healthcare AI"],
    noteLabel: "The focus",
    note: "Building technology that can translate complex visual information into useful insights.",
    featured: false,
  },
];

const PLAN_STAGES = [
  {
    n: "01",
    t: "Listen",
    d: "Work closely with Program Representatives and Studio Representatives to understand what students are working on, what they need and where technical gaps exist.",
    quote: "Every program and studio brings a different perspective. The first step is to listen.",
  },
  {
    n: "02",
    t: "Identify",
    d: "Maintain a pipeline of problems and opportunities from students, faculty, researchers, industry, the NYC ecosystem and studio projects.",
    quote: "Find real problems that can benefit from multidisciplinary technical solutions.",
  },
  {
    n: "03",
    t: "Connect",
    d: "Map student skills and projects across programs and studios, then connect teams that can complement one another.",
    quote: "AI + Urban Tech + Product + Design + Business.",
  },
  {
    n: "04",
    t: "Build",
    d: "Help teams find the right resources, mentors, technical expertise and infrastructure to turn ideas into working prototypes.",
    quote: "Build around the user's problem, not around the technology.",
  },
  {
    n: "05",
    t: "Deploy",
    d: "Use practical experience to help promising projects think through real-world testing, reliability, cost, scalability and user feedback.",
    quote: "Prototype → Pilot → Deployment.",
  },
  {
    n: "06",
    t: "Scale",
    d: "Connect promising teams with industry partners, alumni, founders, investors, incubators and potential users so good solutions do not stop at a demo.",
    quote: "A good solution should not stop simply because the team does not know what comes next.",
  },
];

const FIRST_HUNDRED_DAYS = [
  {
    days: "DAYS 1–20",
    title: "LISTEN",
    description:
      "Meet with every Program Representative and Studio Representative to understand what students are building, what they need and where opportunities exist.",
    output: "A clear map of student projects, skills, needs and technical gaps.",
  },
  {
    days: "DAYS 21–40",
    title: "CONNECT",
    description:
      "Identify opportunities to connect students, projects, programs, studios and external partners where collaboration can create something stronger.",
    output: "The first set of cross-program collaborations and external connections.",
  },
  {
    days: "DAYS 41–70",
    title: "BUILD",
    description:
      "Support selected teams with the right technical resources, collaborators, industry feedback and expertise to turn ideas into working prototypes.",
    output: "Multidisciplinary projects moving from idea to prototype.",
  },
  {
    days: "DAYS 71–100",
    title: "DEPLOY",
    description:
      "Help promising projects move beyond the prototype through user testing, industry pilots, deployment and identifying their next opportunity.",
    output: "Projects with a clear path to pilot, deployment, research or startup.",
  },
];

const BELIEFS = [
  {
    t: "LISTEN FIRST.",
    d: "Understand the problem before building the solution.",
  },
  {
    t: "BUILD TOGETHER.",
    d: "Different disciplines create better solutions.",
  },
  {
    t: "SOLVE REAL PROBLEMS.",
    d: "Build for users, not just for demos.",
  },
  {
    t: "GO BEYOND THE PROTOTYPE.",
    d: "Test it. Improve it. Deploy it.",
  },
  {
    t: "CONNECT WHAT EXISTS.",
    d: "Make Cornell Tech's people, projects and opportunities easier to discover.",
  },
  {
    t: "GIVE PEOPLE OWNERSHIP.",
    d: "Create the environment. Let students build.",
  },
];

const PILLARS = [
  {
    t: "BUILD",
    d: "Create more opportunities for students to work on real technical problems and take projects from idea to prototype.",
  },
  {
    t: "CONNECT",
    d: "Build stronger connections between students, researchers, founders, alumni and industry.",
  },
  {
    t: "EXPERIMENT",
    d: "Create more opportunities for students to explore ideas, test unfamiliar technologies and learn by doing.",
  },
  {
    t: "SHIP",
    d: "Move beyond competitions and prototypes. Help students take their strongest ideas toward something people can actually use.",
  },
];

const WHY_METRICS = [
  { id: "01", icon: "◎", label: "Listen" },
  { id: "02", icon: "↗", label: "Connect" },
  { id: "03", icon: "✦", label: "Build" },
  { id: "04", icon: "→", label: "Ship" },
];

const HERO_STATS = [
  { value: "3+", label: "years in technical leadership" },
  { value: "1", label: "granted patent" },
  { value: "5", label: "core focus areas" },
];

const JOURNEY_STATS = [
  { label: "ROLE", value: "Technical Lead" },
  { label: "DURATION", value: "3 years" },
  { label: "TEAM", value: "Automation + Data Science" },
  { label: "IMPACT", value: "Top 20 · India AI Impact Summit 2026" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/30 selection:text-primary">
      {/* Status Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/90 px-4 py-5 backdrop-blur-md md:px-12 lg:px-20">
        <div className="mx-auto flex min-h-14 max-w-[1800px] items-center justify-between gap-3 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:gap-6">
          <div className="flex min-w-0 items-center gap-3 xl:justify-self-start xl:gap-4">
            <div className="hidden gap-1.5 sm:flex">
              <div className="size-3 rounded-full border border-red-500/40 bg-red-500/20" />
              <div className="size-3 rounded-full border border-amber-500/40 bg-amber-500/20" />
              <div className="size-3 rounded-full border border-green-500/40 bg-green-500/20" />
            </div>
            <span className="truncate font-mono text-sm font-extrabold tracking-tight text-card-foreground sm:text-base lg:text-lg">
              HARSH_AGRAWAL
            </span>
          </div>
          <nav
            aria-label="Campaign sections"
            className="hidden items-center gap-2 xl:flex xl:justify-self-center xl:gap-5"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded px-2 py-3 text-center font-mono text-sm font-bold text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary xl:px-3 xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#connect"
            className="min-w-28 shrink-0 rounded border border-primary/40 bg-primary/10 px-6 py-3 text-center font-mono text-base font-bold text-primary transition-colors hover:bg-primary/20 xl:justify-self-end"
          >
            CONNECT
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border px-6 md:px-12 lg:px-20 py-24 md:py-36">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at 30% 0%, black, transparent 70%)",
            }}
          />
          <div className="relative mx-auto flex max-w-[1800px] flex-col items-center text-center">
            <div className="mb-8 inline-block rounded border border-primary/20 bg-primary/5 px-3 py-1">
              <span className="font-mono text-sm font-medium text-primary md:text-base">
                [ campaign_init: cornell_tech ]
              </span>
            </div>
            <h1 className="mb-8 text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-9xl">
              CONNECT.
              <br />
              BUILD.
              <br />
              <span className="bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">
                SHIP.
              </span>
            </h1>
            <div className="mb-8 w-full max-w-3xl border-y border-primary/20 py-5 text-center">
              <p className="font-mono text-2xl font-medium text-card-foreground md:text-3xl">
                Harsh Agrawal
              </p>
              <p className="font-mono text-base text-muted-foreground md:text-lg">
                Candidate for Technical Co-President, CTSG
              </p>
            </div>
            <p className="mb-10 w-full max-w-3xl text-center text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              I help people move from idea → prototype → product by finding the right mentors,
              building the right teams and making the next step obvious.
            </p>
            <div className="mb-10 grid w-full max-w-4xl gap-4 md:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-primary/20 bg-card/60 px-5 py-4 backdrop-blur-sm"
                >
                  <div className="font-mono text-2xl font-black text-primary md:text-3xl">{stat.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#bring"
                className="min-w-44 rounded-md bg-primary px-8 py-4 text-center font-mono text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                How I&rsquo;ll Help
              </a>
              <a
                href="#vision"
                className="min-w-36 rounded-md border border-input px-8 py-4 text-center font-mono text-base font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                My Vision
              </a>
            </div>
          </div>
        </section>

        {/* WHY I'M APPLYING */}
        <section
          id="why"
          className="border-b border-border bg-card/30 px-6 py-24 md:px-12 lg:px-20 lg:py-32"
        >
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>WHY AM I APPLYING?</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-20">
              <div>
                <h2 className="max-w-md text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                  Connecting talent, ideas and opportunities
                </h2>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  {WHY_METRICS.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-border bg-card/80 p-4 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold tracking-[0.2em] text-primary">
                          {item.id}
                        </span>
                        <span className="text-xl text-primary">{item.icon}</span>
                      </div>
                      <div className="mt-4 font-mono text-sm font-bold tracking-[0.12em] text-card-foreground uppercase">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  I want the Technical President role to be useful, practical and deeply connected to
                  what students actually need.
                </p>

                <ul className="space-y-4 text-lg leading-relaxed text-card-foreground md:text-xl">
                  {[
                    "Listen first — Be approachable, open to ideas and understand what the community actually needs",
                    "Connect- Bring together people, expertise, projects and opportunities across Cornell Tech and beyond.",
                    "Build — Help turn ambitious ideas into products by finding the right teams, mentors and resources.",
                    "Ship — Make it easier for people to take their next step and do their best work.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card/70 p-4 md:p-5">
                      <span className="mt-1.5 text-lg text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CAMPAIGN MOTTO */}
        <section className="relative overflow-hidden border-b border-primary/20 bg-primary/[0.04] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="font-mono text-xs font-bold tracking-[0.3em] text-primary md:text-sm">
              MOTTO OF THE CAMPAIGN
            </div>
            <blockquote className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-card-foreground md:text-5xl lg:text-6xl">
              <span className="text-primary">&ldquo;</span>
              Connect people. Build momentum. Ship ideas.
              <span className="text-purple">&rdquo;</span>
            </blockquote>
            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-primary shadow-[0_0_24px_rgb(34_211_238_/_55%)]" />
          </div>
        </section>

        {/* EXPERIENCE & WHAT I BRING */}
        <section id="story" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>MY EXPERIENCE &amp; WHAT I BRING</SectionLabel>
            <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                className="absolute inset-0 size-full"
                src="https://www.youtube.com/embed/h01mw3dqXVM"
                title="Harsh Agrawal campaign video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>MY JOURNEY</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
              <div>
                <div className="mb-4 font-mono text-sm font-bold tracking-[0.2em] text-primary">
                  BEFORE CORNELL TECH
                </div>
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  From idea to systems that work.
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  I spent three years leading technical work at an AI startup, helping turn early
                  concepts into deployable systems that solve real operational problems.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {JOURNEY_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                  >
                    <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-primary">
                      {stat.label}
                    </div>
                    <div className="mt-3 text-lg font-bold text-card-foreground md:text-xl">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="font-mono text-xs font-bold tracking-[0.2em] text-primary">01</div>
                  <p className="mt-4 text-lg leading-relaxed text-card-foreground">
                    I led technical planning, implementation, testing and deployment across real
                    product work.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="font-mono text-xs font-bold tracking-[0.2em] text-primary">02</div>
                  <p className="mt-4 text-lg leading-relaxed text-card-foreground">
                    My work balanced practicality, cost, reliability and production constraints.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="font-mono text-xs font-bold tracking-[0.2em] text-primary">03</div>
                  <p className="mt-4 text-lg leading-relaxed text-card-foreground">
                    One of my largest systems was an AI inspection solution for the Indian government,
                    later granted a patent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PATENT */}
        <section id="patent" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>PATENT</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="mb-4 font-mono text-sm font-bold tracking-[0.2em] text-primary">
                  GRANTED PATENT
                </div>
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  {PATENT.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Patent No. {PATENT.number} · Industrial AI for safer gas-cylinder inspection.
                </p>
                {PATENT.url !== "#" ? (
                  <a
                    href={PATENT.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    View Patent PDF
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-primary">DOMAIN</div>
                  <div className="mt-3 text-xl font-bold text-card-foreground">Industrial AI</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-primary">STATUS</div>
                  <div className="mt-3 text-xl font-bold text-success">Granted</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I'VE BUILT — centerpiece */}
        <section
          id="built"
          className="relative border-b border-border bg-card/30 px-6 md:px-12 lg:px-20 py-28"
        >
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>OTHER WORK I'VE BUILT</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
              AI, <span className="text-primary">Robotics</span> &amp; Automation
            </h2>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Systems built around vision, automation and real-world industrial problem-solving.
            </p>

            <div className="mt-14 space-y-6">
              {PROJECTS.map((p) => (
                <article
                  key={p.index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 md:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                      <div className="mb-4 font-mono text-sm font-bold tracking-[0.2em] text-primary">
                        {p.index} — {p.kicker.toUpperCase()}
                      </div>
                      <h3 className="text-3xl font-extrabold tracking-tight text-card-foreground transition-colors group-hover:text-primary md:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {p.list ? (
                        <div className="rounded-xl border border-border bg-card/80 p-4">
                          <div className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-muted-foreground">
                            {p.listLabel?.toUpperCase()}
                          </div>
                          <ul className="space-y-2">
                            {p.list.slice(0, 3).map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-mono text-sm text-card-foreground"
                              >
                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                        <div className="mb-2 font-mono text-xs font-bold tracking-[0.2em] text-primary">
                          {p.noteLabel.toUpperCase()}
                        </div>
                        <p className="text-sm leading-relaxed text-card-foreground">{p.note}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* HOW HELP */}
        <section id="bring" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>HOW I CAN HELP</SectionLabel>
            <h2 className="max-w-5xl text-4xl font-bold tracking-tighter md:text-6xl">
              Make Cornell Tech more connected, collaborative and easier to build in.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["01", "BUILD A NETWORK", "Map who is building what, who has what expertise and where help is needed."],
                ["02", "CONNECT OUTSIDE", "Introduce students to alumni, founders, researchers and industry who can open the right doors."],
                ["03", "KEEP PROJECTS MOVING", "Help teams see the next step: research, prototype, pilot, startup or deployment."],
                ["04", "BUILD WITH WHAT EXISTS", "Turn available resources into momentum, even when the infrastructure is not perfect."],
              ].map(([n, title, body]) => (
                <article
                  key={n}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="font-mono text-2xl font-black text-primary">{n}</div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-card-foreground md:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MY PLAN */}
        <section id="process" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>MY PLAN</SectionLabel>
            <div className="max-w-4xl">
              <div className="font-mono text-sm font-bold tracking-[0.2em] text-primary">
                FIRST 100 DAYS
              </div>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
                Listen. Connect. Build. Repeat.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {FIRST_HUNDRED_DAYS.map((phase, index) => (
                <article
                  key={phase.days}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <div className="font-mono text-sm font-bold tracking-[0.2em] text-primary">
                    {phase.days}
                  </div>
                  <div className="mt-4 text-2xl font-extrabold text-card-foreground">{phase.title}</div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{phase.description}</p>
                  <div className="mt-5 border-t border-primary/20 pt-4">
                    <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-primary">
                      OUTPUT
                    </div>
                    <div className="mt-2 text-sm font-medium text-card-foreground">{phase.output}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT I BELIEVE */}
        <section
          id="beliefs"
          className="border-b border-border bg-card/30 px-6 md:px-12 lg:px-20 py-24"
        >
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>WHAT I BELIEVE</SectionLabel>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {BELIEFS.map((b, index) => (
                <div
                  key={b.t}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div className="font-mono text-xs font-bold tracking-[0.2em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-mono text-xl font-extrabold leading-snug tracking-[0.08em] text-primary md:text-2xl">
                    {b.t}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-card-foreground md:text-lg">
                    {b.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MY VISION */}
        <section id="vision" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>MY VISION</SectionLabel>
            <h2 className="max-w-5xl text-5xl font-black tracking-[-0.06em] text-card-foreground md:text-7xl">
              A CTSG That Helps You <span className="text-primary">Build &amp; Connect.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              I want the Technical President role to be practical, not ceremonial. That means real
              support when students are stuck and real opportunities when they need momentum.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {PILLARS.map((p) => (
                <div
                  key={p.t}
                  className="group rounded-2xl border border-border bg-card/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
                >
                  <h3 className="font-mono text-xl font-black tracking-[0.14em] text-primary md:text-2xl">
                    {p.t}
                  </h3>
                  <div className="my-5 h-px bg-gradient-to-r from-primary/80 to-transparent" />
                  <p className="text-base leading-relaxed text-card-foreground/90 md:text-lg">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ME */}
        <section
          id="why-me"
          className="border-b border-border bg-card/30 px-6 md:px-12 lg:px-20 py-24"
        >
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>WHAT I BRING TO CTSG</SectionLabel>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              I can help you build and connect you forward.
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {[
                "I've been a student trying to learn new technologies.",
                "I've led technical teams building products under real constraints.",
                "I've taken systems from concept → prototype → deployment.",
                "And I've built a network of alumni, founders, researchers and mentors I can tap for you.",
              ].map((line) => (
                <div
                  key={line}
                  className="rounded-xl border border-border bg-card px-5 py-4 text-base font-medium text-card-foreground shadow-sm md:text-lg"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-primary">›</span>
                    <span>{line}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              That gives me a different perspective on what students need: someone who can help them
              get unstuck technically and someone who can open the right doors.
            </p>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>THE WAY I LEAD</SectionLabel>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Hands-on. Collaborative. Persistent.
            </h2>
            <div className="mt-12 max-w-5xl">
              <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                I don't believe leadership means having all the answers. It means staying close to
                the work, solving the real problem and creating space for people to take ownership.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="connect" className="px-6 md:px-12 lg:px-20 py-28">
          <div className="mx-auto max-w-[1800px] text-center">
            <SectionLabel>FINAL TRANSMISSION</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
              Stuck? Need an Intro? <span className="text-primary">I'm here.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Vote for a Technical President who will listen, find the right mentor and create the
              connections that move your work forward.
            </p>
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-primary/20 bg-card p-6 text-left shadow-[0_0_0_1px_rgba(94,234,212,0.06)] md:p-8">
              <div className="space-y-2 font-mono text-sm text-card-foreground md:text-base">
                <p>Have a bug you can't crack?</p>
                <p>Need to talk to someone in industry, research or startups?</p>
                <p>Want to build something but don't know where to start?</p>
                <p className="pt-2 text-primary">I'll help you figure it out.</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-mono text-lg font-medium text-card-foreground">Harsh Agrawal</p>
              <p className="font-mono text-sm text-muted-foreground">
                Candidate for Technical President, CTSG
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-sm">
                <a className="text-primary hover:underline" href="mailto:ha455@cornell.edu">
                  ha455@cornell.edu
                </a>
                <a
                  className="text-primary hover:underline"
                  href="https://www.linkedin.com/in/harsh-agrawal-22740/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <a
              href="mailto:ha455@cornell.edu"
              className="mt-8 inline-block rounded-md bg-primary px-8 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reach Out
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground">
          <span>© 2026 HARSH AGRAWAL // CONNECT. BUILD. SHIP.</span>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/harsh-agrawal-22740/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              GITHUB
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
