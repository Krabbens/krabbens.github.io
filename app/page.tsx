"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  stack: string;
  summary: string;
  detail: string;
};

const projects: Project[] = [
  {
    id: "conv-neural-network",
    number: "01",
    name: "conv-neural-network",
    category: "Machine learning / GPU",
    stack: "C++20 · CUDA",
    summary: "A neural network library built from scratch, with the GPU doing the heavy lifting.",
    detail: "Multithreading, Adam + SGD optimizers, and the kind of low-level work that makes abstractions feel earned.",
  },
  {
    id: "qqt",
    number: "02",
    name: "qqt",
    category: "Desktop tooling",
    stack: "Python · PyQt5",
    summary: "A Python wrapper for PyQt that keeps GUI work structured, testable, and pleasantly small.",
    detail: "Thread management and JSON API integration wrapped in a developer-friendly interface.",
  },
  {
    id: "iss",
    number: "03",
    name: "iss",
    category: "Interactive simulation",
    stack: "TypeScript · Next.js",
    summary: "A cruise control simulator where the interface is part of the experiment.",
    detail: "A focused playground for translating real-world system behaviour into a calm, readable UI.",
  },
  {
    id: "ledarray",
    number: "04",
    name: "ledarray",
    category: "Hardware / systems",
    stack: "C++",
    summary: "A volumetric hologram LED array driver for turning code into light in actual space.",
    detail: "Low-level device control, timing, and a lot of patience with the physical world.",
  },
  {
    id: "qdrive",
    number: "05",
    name: "qdrive",
    category: "Productivity tool",
    stack: "Python · QML",
    summary: "A Google Drive connector with a QML interface and a Python backend underneath.",
    detail: "A study in making remote files feel local, fast, and uncomplicated.",
  },
  {
    id: "kerfuffin",
    number: "06",
    name: "Kerfuffin",
    category: "Data / climate",
    stack: "Python · Qt",
    summary: "Weather and air quality analysis built during a coding marathon — and built to win it.",
    detail: "Data visualisation with a human reason to exist: making the air outside easier to understand.",
  },
];

const experience = [
  {
    dates: "2022 — 2024",
    role: "Junior Salesforce Developer",
    company: "Cloobees (Synechron)",
    place: "Gdańsk",
    copy: "Salesforce platform apps, business logic in Apex, CRM integrations, process automation, and data migration.",
  },
  {
    dates: "2022",
    role: "Intern SF Developer",
    company: "Cloobees",
    place: "Gdańsk",
    copy: "Lightning components, automated tests, Apex refactoring, and SOQL query optimisation.",
  },
  {
    dates: "2022",
    role: "Junior Developer",
    company: "ChallengeRocket.com",
    place: "Remote",
    copy: "Hackathon task verification, independent problem solving, and QA with a sharp eye for edge cases.",
  },
];

const skillGroups = [
  { label: "Languages", value: "Python · TypeScript / JavaScript · C# · C++ · Java · SQL" },
  { label: "Frontend", value: "Next.js · Angular · Nuxt · Vite · Tailwind CSS" },
  { label: "Backend", value: "Node.js · Salesforce · Apex · SOQL · PrestaShop" },
  { label: "Tools", value: "Docker · Selenium · Git · Linux · PyQt" },
  { label: "AI & data", value: "LLMOps · CUDA · Pandas · Matplotlib" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const selectProject = (project: Project) => setActiveProject(project);

  return (
    <main className="site-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label="Kosma Gąsiorowski — back to top">
          <span className="wordmark-mark">K</span>
          <span>Kosma / 26</span>
        </a>

        <nav id="main-navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work <span>01</span></a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About <span>02</span></a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience <span>03</span></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact <span>04</span></a>
        </nav>

        <div className="nav-status">
          <span className="status-dot" />
          <span>Available for a good problem</span>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> Poznań / Toruń / Poland</p>
          <h1>
            I build digital
            <span className="headline-outline"> systems</span>
            <br />
            with a little bit of
            <span className="headline-accent"> chaos.</span>
          </h1>
          <p className="hero-description">
            Full stack developer with a soft spot for systems, strange interfaces, and shipping the thing.
            Currently studying Computer Science &amp; IoT at PUT.
          </p>
          <div className="hero-actions">
            <a className="button button-bright" href="#work">See selected work <span>↘</span></a>
            <span className="scroll-note">Scroll to explore <span>↓</span></span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract visual representing Kosma's systems-focused work">
          <div className="visual-topline">
            <span>SYS / 001</span>
            <span>52° 24&apos; N / 16° 55&apos; E</span>
          </div>
          <div className="visual-frame">
            <div className="visual-grid" />
            <div className="visual-sun" />
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="visual-crosshair crosshair-a" />
            <div className="visual-crosshair crosshair-b" />
            <div className="terminal-card">
              <div className="terminal-head"><span /><span /><span /><small>kosma.systems</small></div>
              <div className="terminal-body">
                <span className="code-muted">01</span><span><b>const</b> idea = <i>&quot;make it useful&quot;</i>;</span>
                <span className="code-muted">02</span><span><b>while</b> (curious) {'{'}</span>
                <span className="code-muted">03</span><span>&nbsp;&nbsp;build(<em>idea</em>);</span>
                <span className="code-muted">04</span><span>{'}'}</span>
                <span className="code-muted">05</span><span className="code-pulse">_</span>
              </div>
            </div>
            <span className="visual-caption caption-a">FULL STACK / HUMAN SCALE</span>
            <span className="visual-caption caption-b">01 — 06</span>
          </div>
          <div className="visual-bottomline">
            <span>NOT A TEMPLATE</span>
            <span>EST. 1999 / STILL CURIOUS</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Skills and interests">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, repeat) => ["CODE WITH INTENT", "SYSTEMS THINKING", "GOOD QUESTIONS", "CLEAN SHIP", "NO BORING PROJECTS"].map((item, index) => (
            <span key={`${repeat}-${index}`}>{item} <b>✳</b></span>
          )))}
        </div>
      </div>

      <section className="work-section section-pad" id="work">
        <div className="section-header">
          <p className="eyebrow"><span className="eyebrow-rule" /> Selected work</p>
          <p className="section-index">(01 — 06)</p>
        </div>
        <div className="section-intro">
          <h2>Small projects.<br /><i>Unreasonably</i> much care.</h2>
          <p>From GPU kernels to desktop tools, I like working close to the material — then giving it a nice interface.</p>
        </div>

        <div className="project-browser">
          <div className="project-list" role="list" aria-label="Selected projects">
            {projects.map((project) => (
              <button
                className={`project-row ${activeProject.id === project.id ? "is-active" : ""}`}
                key={project.id}
                type="button"
                onMouseEnter={() => selectProject(project)}
                onFocus={() => selectProject(project)}
                onClick={() => selectProject(project)}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-name">{project.name}</span>
                <span className="project-category">{project.category}</span>
                <span className="project-arrow">↗</span>
              </button>
            ))}
          </div>

          <article className={`project-feature art-${activeProject.id}`} aria-live="polite">
            <div className="feature-art">
              <span className="feature-art-label">{activeProject.stack}</span>
              <div className="art-scanlines" />
              <div className="art-orbit art-orbit-one" />
              <div className="art-orbit art-orbit-two" />
              <div className="art-core"><span>{activeProject.number}</span></div>
              <div className="art-chip chip-one" />
              <div className="art-chip chip-two" />
              <div className="art-chip chip-three" />
              <div className="art-side-copy">{activeProject.category.toUpperCase()}</div>
              <div className="art-vertical">BUILD / BREAK / REPEAT</div>
            </div>
            <div className="feature-copy">
              <div>
                <p className="feature-kicker">{activeProject.category}</p>
                <h3>{activeProject.name}</h3>
              </div>
              <p>{activeProject.summary}</p>
              <p className="feature-detail">{activeProject.detail}</p>
              <a href="#contact" className="text-link">Talk about a project <span>↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-header">
          <p className="eyebrow"><span className="eyebrow-rule" /> A little context</p>
          <p className="section-index">(02 — 04)</p>
        </div>
        <div className="about-grid">
          <h2>I&apos;m happiest<br />between <span>logic</span><br />and <i>intuition.</i></h2>
          <div className="about-copy">
            <p className="about-lede">I&apos;m Kosma — a developer based between Poznań and Toruń, building software that is thoughtful under the hood and memorable on the surface.</p>
            <p>I care about the full distance between an idea and a working thing: the architecture, the edge cases, the handoff, and the tiny detail that makes someone want to use it twice.</p>
            <div className="about-meta">
              <div><span>Now</span><strong>M.Sc. Eng. Computer Science &amp; IoT</strong><small>Poznań University of Technology</small></div>
              <div><span>Before</span><strong>B.Sc. Eng. Computer Science</strong><small>Gdańsk University of Technology / final grade 4.5</small></div>
            </div>
          </div>
        </div>
        <div className="stat-grid">
          <div><strong>03+</strong><span>years shipping<br />professional software</span></div>
          <div><strong>06</strong><span>side projects<br />with a pulse</span></div>
          <div><strong>01</strong><span>coding marathon<br />won</span></div>
          <div><strong>∞</strong><span>things still<br />to learn</span></div>
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="section-header">
          <p className="eyebrow"><span className="eyebrow-rule" /> Experience</p>
          <p className="section-index">(03 — 04)</p>
        </div>
        <div className="experience-heading">
          <h2>Good teams leave<br /><i>good traces.</i></h2>
          <p>The places where I learned to make software reliable, legible, and useful to people who didn&apos;t write it.</p>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <div className="experience-row" key={`${item.role}-${item.dates}`}>
              <span className="experience-count">0{index + 1}</span>
              <span className="experience-dates">{item.dates}</span>
              <div className="experience-role"><h3>{item.role}</h3><p>{item.company} <span>/</span> {item.place}</p></div>
              <p className="experience-copy">{item.copy}</p>
            </div>
          ))}
        </div>
        <div className="skills-block">
          <p className="eyebrow"><span className="eyebrow-rule" /> Toolkit</p>
          <div className="skill-list">
            {skillGroups.map((skill) => <div key={skill.label}><span>{skill.label}</span><p>{skill.value}</p></div>)}
          </div>
        </div>
      </section>

      <footer className="contact-section section-pad" id="contact">
        <div className="contact-topline"><span>04 — 04</span><span>LET&apos;S MAKE SOMETHING</span></div>
        <div className="contact-inner">
          <p className="eyebrow"><span className="eyebrow-rule" /> Have a good problem?</p>
          <h2>Say <i>hello.</i></h2>
          <a className="contact-email" href="mailto:kosma.gasiorowski@proton.me">kosma.gasiorowski@proton.me <span>↗</span></a>
          <div className="contact-bottom">
            <span>© 2026 Kosma Gąsiorowski</span>
            <div className="contact-links">
              <a href="https://github.com/Krabbens" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/kosma-gasiorowski-3a139b239" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://krabbens.github.io" target="_blank" rel="noreferrer">krabbens.github.io ↗</a>
            </div>
            <a href="#top" className="back-top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
