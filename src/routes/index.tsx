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
  url: "#", // replace with the public Google Drive link
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
    title: "AI-Powered Inspection",
    summary:
      "An automated computer vision system designed to improve safety and quality inspection in a critical industrial supply chain.",
    stack: ["Computer Vision", "AI", "Automation", "Edge Computing"],
    listLabel: "What I worked on",
    list: [
      "Automated visual inspection",
      "Real-time defect detection",
      "Industrial hardware integration",
      "High-throughput processing",
      "Production deployment",
    ],
    noteLabel: "Impact",
    note: `Patent: "${PATENT.title}" - Patent No. ${PATENT.number}.`,
    featured: true,
    patentUrl: PATENT.url,
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
      "Meet with every Program Representative and Studio Representative to understand what students are building, what they need, and where opportunities exist.",
    output: "A clear map of student projects, skills, needs, and technical gaps.",
  },
  {
    days: "DAYS 21–40",
    title: "CONNECT",
    description:
      "Identify opportunities to connect students, projects, programs, studios, and external partners where collaboration can create something stronger.",
    output: "The first set of cross-program collaborations and external connections.",
  },
  {
    days: "DAYS 41–70",
    title: "BUILD",
    description:
      "Support selected teams with the right technical resources, collaborators, industry feedback, and expertise to turn ideas into working prototypes.",
    output: "Multidisciplinary projects moving from idea to prototype.",
  },
  {
    days: "DAYS 71–100",
    title: "DEPLOY",
    description:
      "Help promising projects move beyond the prototype through user testing, industry pilots, deployment, and identifying their next opportunity.",
    output: "Projects with a clear path to pilot, deployment, research, or startup.",
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
    d: "Make Cornell Tech's people, projects, and opportunities easier to discover.",
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
    d: "Create spaces where students can explore ideas, try unfamiliar technologies and learn without being afraid of failure.",
  },
  {
    t: "SHIP",
    d: "Move beyond competitions and prototypes. Help students take their strongest ideas toward something people can actually use.",
  },
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
              BUILD.
              <br />
              EXPERIMENT.
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
              I want to help students take ideas from concept to deployment by finding the right
              mentors, building the right teams and creating products people can actually use. I've
              done this myself and I want to make that journey easier for others at Cornell Tech.
            </p>
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
              <h2 className="max-w-md text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                A mentor, connector and advocate for the talent in this room.
              </h2>
              <div className="space-y-8 text-xl leading-relaxed text-muted-foreground md:text-2xl">
                <p className="border-l-2 border-primary pl-6 font-semibold leading-snug text-card-foreground md:text-3xl">
                  I am applying for Technical Co-President because I want to serve the Cornell Tech
                  community and help make the most of the incredible technical talent we have here.
                  I want to be someone who is always ready to listen, to understand what students
                  need, what is missing and where we can do better.
                </p>
                <p className="text-card-foreground">
                  For me, this role is less about being the most technical person in the room and
                  more about{" "}
                  <strong className="text-primary">
                    listening to the room, mentoring people through the next step, bringing the
                    right people together and helping the community do its best work.
                  </strong>
                </p>
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
              Cornell Tech already has incredible technical talent. I want to help us turn more of
              that talent into things we actually build, test and ship.
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
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <div className="mb-4 font-mono text-sm font-bold tracking-[0.2em] text-primary">
                  BEFORE CORNELL TECH
                </div>
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  From Technical Leadership to Systems That Work
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
                  Before joining Cornell Tech, I spent three years leading technical work at an AI
                  startup. That experience taught me how to move from an early idea to a reliable
                  system that can work in the real world.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 font-mono text-sm lg:justify-self-end lg:w-full lg:max-w-xl">
                <div className="mb-5 text-base font-extrabold tracking-[0.15em] text-primary">
                  WORK EXPERIENCE
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-muted-foreground">ROLE</span>
                    <span className="font-bold text-primary sm:text-right">Technical Lead</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-muted-foreground">DURATION</span>
                    <span className="font-bold text-primary sm:text-right">3 years</span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-muted-foreground">TEAM</span>
                    <span className="font-bold text-primary sm:text-right">
                      Automation + Data Science
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="text-muted-foreground">RECOGNITION</span>
                    <span className="font-bold text-success sm:text-right">
                      Top 20 · India AI Impact Summit 2026
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 max-w-none space-y-8 border-t border-border pt-12 text-xl leading-[1.6] text-muted-foreground lg:col-span-2">
                <p className="text-2xl font-bold leading-[1.45] text-card-foreground">
                  I led the automation and data science team, working across technical planning,
                  implementation, testing and deployment.
                </p>
                <p>
                  The goal was never just to build an impressive prototype. My work focused on
                  turning complex ideas into practical, deployable systems while balancing cost,
                  reliability, production requirements and scale. This work helped our company reach
                  the Top 20 Startups at the India AI Impact Summit 2026. One of my largest projects
                  was an AI-powered inspection system developed for the Indian government. It was
                  designed to detect wear and tear in fuel gas cylinders, improve safety across the
                  LPG supply chain and protect consumers. The system is now patented:{" "}
                  <span className="text-card-foreground">{PATENT.title}</span> — Patent No.{" "}
                  {PATENT.number}.
                </p>
                <p className="border-l-2 border-primary/40 pl-5 text-card-foreground">
                  For me, technology has never been just about developing a model or writing code.
                  It is about taking an idea, understanding the constraints, building it, testing it
                  and making it work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PATENT */}
        <section id="patent" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>PATENT</SectionLabel>
            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="mb-4 font-mono text-sm font-bold tracking-[0.2em] text-primary">
                  GRANTED PATENT
                </div>
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                  {PATENT.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Patent No. {PATENT.number}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  This patent covers the automated inspection system I developed for the Indian
                  government to detect wear and tear damage in fuel gas cylinders, improving safety
                  across the LPG supply chain and protecting consumers.
                </p>
                {PATENT.url !== "#" ? (
                  <a
                    href={PATENT.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    View Patent PDF
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ) : (
                  <p className="mt-8 font-mono text-xs text-muted-foreground">
                    [ PDF link will be added once the public Google Drive link is provided ]
                  </p>
                )}
              </div>
              <div className="rounded-xl border border-border bg-card p-6 font-mono text-sm">
                <div className="mb-4 font-bold text-primary">patent_metadata</div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">TITLE</span>
                    <span className="max-w-[60%] text-right text-card-foreground">
                      {PATENT.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">NUMBER</span>
                    <span className="text-primary">{PATENT.number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">JURISDICTION</span>
                    <span className="text-card-foreground">India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DOMAIN</span>
                    <span className="text-card-foreground">Industrial AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">STATUS</span>
                    <span className="text-success">Granted</span>
                  </div>
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
            <SectionLabel>WHAT I'VE BUILT</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
              AI &amp; <span className="text-primary">Automation</span>
            </h2>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Real-world systems built around computer vision, AI, automation and data.
            </p>

            <div className="mt-14 space-y-8">
              {PROJECTS.map((p) => (
                <article
                  key={p.index}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 md:p-10"
                >
                  <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div>
                      <div className="mb-4 font-mono text-sm font-bold tracking-[0.2em] text-primary">
                        {p.index} — {p.kicker.toUpperCase()}
                      </div>
                      <h3 className="text-3xl font-extrabold tracking-tight text-card-foreground transition-colors group-hover:text-primary md:text-5xl">
                        {p.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                        {p.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
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

                    <div className="flex flex-col gap-6">
                      {p.list ? (
                        <div>
                          <div className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-muted-foreground">
                            {p.listLabel?.toUpperCase()}
                          </div>
                          <ul className="space-y-2">
                            {p.list.map((item) => (
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
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <div className="mb-2 font-mono text-xs font-bold tracking-[0.2em] text-primary">
                          {p.noteLabel.toUpperCase()}
                        </div>
                        <p className="text-sm leading-relaxed text-card-foreground">{p.note}</p>
                        {p.patentUrl && p.patentUrl !== "#" ? (
                          <a
                            href={p.patentUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary/20"
                          >
                            View Patent PDF
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="size-3.5"
                              aria-hidden="true"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW I CAN HELP */}
        <section id="bring" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>HOW I CAN HELP</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-bold tracking-tighter md:text-6xl">
              Connect what already exists
            </h2>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              Cornell Tech already has incredible resources. I want to make them easier to discover,
              connect and use.
            </p>
            <div className="mt-14 divide-y divide-border border-y border-border">
              <article className="grid gap-5 py-8 md:grid-cols-[5rem_1fr] md:gap-8 md:py-10">
                <div className="font-mono text-2xl font-bold text-primary">01</div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-card-foreground md:text-4xl">
                    CONNECT PEOPLE
                  </h3>
                  <p className="mt-5 text-xl leading-[1.65] text-card-foreground/90 md:text-2xl">
                    Program Representatives and Studio Representatives become my starting network.
                    Understand{" "}
                    <strong className="text-card-foreground">
                      who is building what, who has what expertise and who is looking for what.
                    </strong>
                  </p>
                </div>
              </article>
              <article className="grid gap-5 py-8 md:grid-cols-[5rem_1fr] md:gap-8 md:py-10">
                <div className="font-mono text-2xl font-bold text-primary">02</div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-card-foreground md:text-4xl">
                    CONNECT PROJECTS
                  </h3>
                  <p className="mt-5 text-xl leading-[1.65] text-card-foreground/90 md:text-2xl">
                    Identify projects solving related problems across programs and studios. Instead
                    of five teams independently solving adjacent problems,{" "}
                    <strong className="text-card-foreground">
                      find the overlap, bring them together and build something stronger.
                    </strong>
                  </p>
                </div>
              </article>
              <article className="grid gap-5 py-8 md:grid-cols-[5rem_1fr] md:gap-8 md:py-10">
                <div className="font-mono text-2xl font-bold text-primary">03</div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-card-foreground md:text-4xl">
                    CONNECT WITH THE OUTSIDE WORLD
                  </h3>
                  <p className="mt-5 text-xl leading-[1.65] text-card-foreground/90 md:text-2xl">
                    Use the student network to identify projects that could benefit from an external
                    perspective and connect them with{" "}
                    <strong className="text-card-foreground">
                      companies, startups, alumni, researchers and potential users
                    </strong>
                    .
                  </p>
                  <p className="mt-4 border-l-2 border-primary/40 pl-4 font-mono text-base leading-relaxed text-primary md:text-lg">
                    Not another networking event. A specific project meeting a specific person who
                    can move it forward.
                  </p>
                </div>
              </article>
              <article className="grid gap-5 py-8 md:grid-cols-[5rem_1fr] md:gap-8 md:py-10">
                <div className="font-mono text-2xl font-bold text-primary">04</div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-card-foreground md:text-4xl">
                    CONNECT THE NEXT STEP
                  </h3>
                  <p className="mt-5 text-xl leading-[1.65] text-card-foreground/90 md:text-2xl">
                    A project should not become “Great demo. Good luck.” Help teams figure out their
                    next step:{" "}
                    <strong className="text-card-foreground">
                      Research → Pilot → User → Startup → Industry → Next iteration
                    </strong>
                    .
                  </p>
                  <p className="mt-4 border-l-2 border-primary/40 pl-4 font-mono text-base leading-relaxed text-primary md:text-lg">
                    The next step will be different for every project.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* MY PLAN */}
        <section id="process" className="border-b border-border px-6 md:px-12 lg:px-20 py-24">
          <div className="mx-auto max-w-[1800px]">
            <SectionLabel>MY PLAN</SectionLabel>
            <div className="max-w-4xl">
              <div className="font-mono text-sm font-bold tracking-[0.2em] text-primary">
                FROM NEED TO IMPACT
              </div>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
                My First 100 Days
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
                A practical starting plan for turning student needs into collaboration, prototypes,
                and real opportunities.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {FIRST_HUNDRED_DAYS.map((phase, index) => (
                <article
                  key={phase.days}
                  className="group rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary/50 md:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-base font-bold tracking-[0.2em] text-primary">
                      {phase.days}
                    </span>
                    <span className="font-mono text-base text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-card-foreground transition-colors group-hover:text-primary md:text-4xl">
                    {phase.title}
                  </h3>
                  <p className="mt-5 text-xl leading-relaxed text-card-foreground md:text-2xl">
                    {phase.description}
                  </p>
                  <div className="mt-7 border-t border-primary/20 pt-5">
                    <div className="font-mono text-sm font-bold tracking-[0.2em] text-primary">
                      OUTPUT
                    </div>
                    <p className="mt-3 text-lg font-semibold leading-relaxed text-card-foreground/90 md:text-xl">
                      {phase.output}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-7 md:p-8">
              <div className="font-mono text-sm font-bold tracking-[0.2em] text-primary">
                100 DAYS →
              </div>
              <p className="mt-3 text-2xl font-extrabold tracking-tight text-card-foreground md:text-3xl">
                A system that continues.
              </p>
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
            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {BELIEFS.map((b) => (
                <div
                  key={b.t}
                  className="bg-card p-7 transition-colors hover:bg-primary/[0.04] md:p-8"
                >
                  <h3 className="font-mono text-xl font-extrabold leading-snug tracking-[0.08em] text-primary md:text-2xl">
                    {b.t}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-card-foreground md:text-xl">
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
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
              A CTSG That Helps You <span className="text-purple">Build &amp; Connect.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I want to make the Technical President role useful, not ceremonial. That means real
              help when you're stuck and real introductions when you need them.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PILLARS.map((p) => (
                <div
                  key={p.t}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <h3 className="font-mono text-xl font-extrabold tracking-[0.15em] text-primary">
                    {p.t}
                  </h3>
                  <div className="my-4 h-px bg-border" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.d}</p>
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
            <ul className="mt-10 space-y-4 font-mono text-sm md:text-base">
              {[
                "I've been a student trying to learn new technologies.",
                "I've led technical teams building products under real constraints.",
                "I've taken systems from concept → prototype → deployment.",
                "And I've built a network of alumni, founders, researchers and mentors I can tap for you.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-card-foreground">
                  <span className="text-primary">›</span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
              That gives me a different perspective on what students need someone who can help them
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
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I don't believe leadership means having all the answers. It means:
              </p>
              <div className="space-y-4">
                {[
                  "Taking ownership when things get difficult.",
                  "Finding practical solutions when there isn't an obvious one.",
                  "Giving people the space to take ownership of their work.",
                  "And staying with the team until the problem is solved.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-lg border border-border bg-card px-5 py-4 text-card-foreground"
                  >
                    {line}
                  </div>
                ))}
              </div>
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
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Vote for a Technical President who will listen, find the right mentor and create the
              connections that move your work forward.
            </p>
            <div className="mx-auto mt-10 max-w-md space-y-2 rounded-lg border border-border bg-card p-6 font-mono text-sm text-card-foreground">
              <p>Have a bug you can't crack?</p>
              <p>Need to talk to someone in industry, research, or startups?</p>
              <p>Want to build something but don't know where to start?</p>
              <p className="pt-2 text-primary">I'll help you figure it out.</p>
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
          <span>© 2026 HARSH AGRAWAL // BUILD. EXPERIMENT. SHIP.</span>
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
