import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Check, Copy, MapPin, Menu, X } from 'lucide-react'
import './styles.css'

const projects = [
  {
    id: 'citeguard',
    number: '01',
    type: 'Personal project / In progress',
    title: 'CiteGuard: an eval-driven RAG support agent.',
    summary: 'I am turning the evaluation and reliability practices I learned in banking into a transparent support-agent prototype with citations and measurable checks.',
    outcome: 'NEXT',
    outcomeLabel: 'next milestone',
    details: ['FastAPI + LangGraph prototype', 'Citation-aware answers by design', 'Evaluation-led development'],
    responsibilities: ['I am defining a small golden dataset and repeatable evaluation flow', 'I am tracking answer faithfulness, citation quality, and cost per query', 'I will publish the implementation when the repository and demo are ready'],
    role: 'Personal project · in progress',
    period: 'Roadmap · 2026',
    metricNote: 'I will add performance results after I finish a reproducible evaluation run.',
    evidence: ['Status: I am actively building this as an open-source project', 'Method: I am using FastAPI, LangGraph, pgvector, LiteLLM, and Playwright', 'Links: I will add the repository and live demo when they are ready'],
    architecture: ['Question', 'Retriever', 'Agent + citations', 'Evaluation record'],
    architectureNote: 'This is my planned public architecture; it contains no employer data or confidential systems.',
    stack: 'FastAPI · LangGraph · pgvector · LiteLLM · Playwright',
    accent: 'lime',
    openSource: true,
  },
  {
    id: 'covenant',
    number: '02',
    type: 'Applied AI / Deutsche Bank',
    title: 'I made an AI agent show its work.',
    summary: 'I built an evaluation platform for loan-covenant breach detection around observable agent behaviour instead of one opaque accuracy score.',
    outcome: '93.6%',
    outcomeLabel: 'breach-detection accuracy',
    details: ['230+ evaluated agent runs', '18% process-outcome gap uncovered', 'Structured records and audit trails'],
    responsibilities: ['I designed the evaluation data model and FastAPI endpoints', 'I built an Agent Registry and reliability views for repeatable comparison', 'I tracked intermediate reasoning signals instead of only final labels'],
    role: 'Software Engineer Intern · AI Agent Evaluation',
    period: 'Feb 2026 — Jul 2026',
    metricNote: 'Accuracy measured across 230+ evaluated agent runs.',
    evidence: ['Architecture: workflow input → agent run → evaluator → structured audit record', 'Method: I used repeatable runs with process-level signals, final outcomes, and reliability metrics', 'Access: This was internal Deutsche Bank work, so I am showing only a sanitized view'],
    architecture: ['Workflow input', 'Agent run', 'Evaluator', 'Audit record'],
    architectureNote: 'I removed confidential banking data and internal system names from this view.',
    stack: 'Python · FastAPI · Next.js · SQLite · Google ADK · LiteLLM · Ollama',
    accent: 'coral',
  },
  {
    id: 'onboarding',
    number: '03',
    type: 'Backend systems / Deutsche Bank',
    title: 'I helped keep banking onboarding moving.',
    summary: 'I worked on Java and Spring Boot services for commercial-banking onboarding, using SQL analysis, tests, reviews, and delivery practices throughout the work.',
    outcome: 'API-first',
    outcomeLabel: 'integration mindset',
    details: ['Java · Spring Boot · REST · SQL', 'Production releases across service layers', 'Collaborated with banking stakeholders'],
    responsibilities: ['I implemented onboarding API features and service-layer changes', 'I used SQL and logs to investigate workflow behaviour and defects', 'I contributed to unit tests, reviews, CI/CD, and release readiness'],
    role: 'Associate Engineer · Commercial Banking Onboarding',
    period: 'Jul 2026 — Aug 2026',
    metricNote: 'Scope: production onboarding API changes and release-readiness checks.',
    evidence: ['Architecture: Java/Spring Boot REST services integrated with SQL-backed banking workflows', 'Method: I used SQL analysis, application logs, unit tests, code reviews, and CI/CD checks', 'Access: This was internal Deutsche Bank work, so I am showing only a sanitized view'],
    architecture: ['Client request', 'Spring Boot API', 'Validation + SQL', 'Release checks'],
    architectureNote: 'I have omitted internal workflow names and banking integrations from this view.',
    stack: 'Java · Spring Boot · REST APIs · SQL · Jenkins · GitHub Actions',
    accent: 'aqua',
  },
  {
    id: 'liquidity',
    number: '04',
    type: 'Product engineering / Deutsche Bank',
    title: 'I turned liquidity data into a usable surface.',
    summary: 'I worked on a corporate-bank liquidity dashboard with React features, backend API work, and automated regression coverage that made releases easier to verify.',
    outcome: '95%',
    outcomeLabel: 'automated regression coverage',
    details: ['20 Playwright test suites', '50% less manual QA effort', 'Allure reporting in CI/CD'],
    responsibilities: ['I delivered React and backend API features for corporate-bank users', 'I created Playwright coverage for core dashboard workflows', 'I added Allure reporting and CI feedback for faster verification'],
    role: 'Software Engineer Intern, Corporate Bank Liquidity Dashboard',
    period: 'Apr 2025 — Sep 2025',
    metricNote: 'Coverage measured across 20 Playwright suites; manual QA effort compared before and after automation.',
    evidence: ['Architecture: React dashboard → backend APIs → banking data views', 'Method: I used Playwright suites, Allure reporting, and CI/CD gates', 'Access: This was internal Deutsche Bank work, so I am showing only a sanitized view'],
    architecture: ['React dashboard', 'Backend APIs', 'Data views', 'Playwright + Allure'],
    architectureNote: 'I represent user and banking data only as generic data views here.',
    stack: 'React · API integration · Playwright · Allure · CI/CD',
    accent: 'lime',
  },
]

function ArchitectureMap() {
  return (
    <div className="map" aria-label="Architecture map showing data, services, evaluation, and human outcomes">
      <div className="map-grid" />
      <svg className="map-lines" viewBox="0 0 560 440" aria-hidden="true">
        <path d="M82 94 C160 94 150 214 270 214" />
        <path d="M82 346 C160 346 150 226 270 226" />
        <path d="M290 214 C365 214 352 94 475 94" />
        <path d="M290 226 C365 226 352 346 475 346" />
        <circle cx="270" cy="220" r="7" />
      </svg>
      <div className="node node-data"><span>01</span><strong>Data</strong><small>contracts / evidence</small></div>
      <div className="node node-service"><span>02</span><strong>Services</strong><small>APIs / workflows</small></div>
      <div className="node node-eval"><span>03</span><strong>Evaluation</strong><small>signals / reliability</small></div>
      <div className="node node-human"><span>04</span><strong>Human outcome</strong><small>decisions / trust</small></div>
      <div className="map-stamp">MY WORK<br /><b>IN CONTEXT</b></div>
    </div>
  )
}

function ArchitectureFlow({ project }) {
  return (
    <div className="architecture-evidence">
      <div className="architecture-heading"><span>MY SANITIZED ARCHITECTURE</span><small>{project.architectureNote}</small></div>
      <ol className="architecture-flow" aria-label={`${project.title} sanitized architecture flow`}>
        {project.architecture.map((step, index) => (
          <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < project.architecture.length - 1 && <ArrowUpRight size={15} aria-hidden="true" />}</li>
        ))}
      </ol>
    </div>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState(projects[0].id)
  const [navOpen, setNavOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const selected = projects.find((project) => project.id === activeProject)
  const selectProject = (index) => setActiveProject(projects[(index + projects.length) % projects.length].id)
  const handleProjectKeyDown = (event, index) => {
    const move = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : event.key === 'Home' ? -index : event.key === 'End' ? projects.length - 1 - index : 0
    if (!move) return
    event.preventDefault()
    const nextIndex = (index + move + projects.length) % projects.length
    selectProject(nextIndex)
    document.getElementById(`project-tab-${projects[nextIndex].id}`)?.focus()
  }

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('dagaranusha@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Anusha Dagar home"><span className="brand-mark">AD</span><span>ANUSHA DAGAR</span></a>
        <button className="menu-toggle" onClick={() => setNavOpen(!navOpen)} aria-label={navOpen ? 'Close navigation' : 'Open navigation'}>
          {navOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={navOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={() => setNavOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setNavOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a href="https://www.linkedin.com/in/anusha-dagar-82834619a/" target="_blank" rel="noreferrer" onClick={() => setNavOpen(false)}>LinkedIn</a>
          <a href="https://github.com/anushadagar1407" target="_blank" rel="noreferrer" onClick={() => setNavOpen(false)}>GitHub</a>
          <a className="nav-contact" href="#contact" onClick={() => setNavOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="availability"><span className="live-dot" /> Vancouver, BC · available for full-time roles</div>
            <h1>Software Engineer building reliable backend and applied AI systems for banking.</h1>
            <p className="hero-lede"><em>Software that earns trust.</em> I’m Anusha, translating complex banking workflows into reliable, human-ready systems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="/Anusha_Dagar_Resume.pdf" download>Download resume <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-metrics" aria-label="Selected results"><div><strong>93.6%</strong><span>breach detection<small>230+ agent runs</small></span></div><div><strong>95%</strong><span>test coverage<small>20 Playwright suites</small></span></div><div><strong>50%</strong><span>less manual QA<small>after regression automation</small></span></div><div><strong>20%</strong><span>faster onboarding<small>digital-banking journey</small></span></div></div>
            <div className="hero-meta"><div><span>FOCUS</span><strong>Applied AI · Backend · Full-stack</strong></div><div><span>LOCATION</span><strong>Vancouver, BC · Canada</strong></div><div><span>STATUS</span><strong>Canadian Permanent Resident · open to full-time</strong></div></div>
          </div>
          <ArchitectureMap />
        </section>

        <section className="signal-band" aria-label="Career signal">
          <div><strong>01</strong><span>Applied AI systems</span></div>
          <div><strong>02</strong><span>Banking domain fluency</span></div>
          <div><strong>03</strong><span>Engineer who communicates</span></div>
          <div><strong>04</strong><span>Vancouver based</span></div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-intro"><span className="section-index">01 / SELECTED WORK</span><h2>What I have built.</h2><p>I want to show more than a list of tools: these are the systems I worked on, the constraints I handled, and the results I measured.</p></div>
          <div className="project-layout">
            <div className="project-list" role="tablist" aria-label="Selected projects" aria-orientation="vertical">
              {projects.map((project, index) => (
                <button key={project.id} id={`project-tab-${project.id}`} className={activeProject === project.id ? `project-tab active ${project.accent}${project.openSource ? ' open-source' : ''}` : `project-tab${project.openSource ? ' open-source' : ''}`} onClick={() => setActiveProject(project.id)} onKeyDown={(event) => handleProjectKeyDown(event, index)} role="tab" aria-selected={activeProject === project.id} aria-controls={`project-panel-${project.id}`} tabIndex={activeProject === project.id ? 0 : -1}>
                  <span className="tab-number">{project.number}</span><span className="tab-title">{project.type}</span><ArrowUpRight className="tab-arrow" size={18} />
                  <strong>{project.title}</strong>
                </button>
              ))}
            </div>
              <article id={`project-panel-${selected.id}`} className={`project-detail ${selected.accent}${selected.openSource ? ' open-source' : ''}`} role="tabpanel" aria-labelledby={`project-tab-${selected.id}`} tabIndex="0">
                <div className="detail-top"><span>{selected.type}</span><span>PROJECT / {selected.number}</span></div>
              <h3>{selected.title}</h3>
              <p className="detail-summary">{selected.summary}</p>
              <div className="detail-role"><span>{selected.role}</span><span>{selected.period}</span></div>
              <div className="detail-outcome"><strong>{selected.outcome}</strong><span>{selected.outcomeLabel}<small>{selected.metricNote}</small></span></div>
              <ul>{selected.details.map((detail) => <li key={detail}><Check size={16} />{detail}</li>)}</ul>
              <div className="detail-responsibilities"><span>MY CONTRIBUTION</span><ol>{selected.responsibilities.map((item) => <li key={item}>{item}</li>)}</ol></div>
              <div className="detail-evidence"><span>MY EVIDENCE & METHOD</span><ul>{selected.evidence.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <ArchitectureFlow project={selected} />
              {selected.openSource && <a className="project-proof-link" href="https://github.com/anushadagar1407" target="_blank" rel="noreferrer">View my GitHub profile <ArrowUpRight size={15} /></a>}
              <div className="stack-line"><span>STACK</span>{selected.stack}</div>
            </article>
          </div>
        </section>

        <section id="approach" className="approach-section">
          <div className="approach-aside"><span className="section-index">02 / HOW I WORK</span><h2>Make the complex legible.</h2><p className="approach-lede">I build work that is easy to understand, test, and use with a team.</p></div>
          <div className="principles">
            <div className="principle"><span>01</span><div><h3>Start with the decision.</h3><p>Before reaching for a model or framework, I clarify what someone needs to know, decide, or do next.</p></div></div>
            <div className="principle"><span>02</span><div><h3>Build for observation.</h3><p>I use evaluation records, audit trails, tests, and useful logs so a team can operate what I build.</p></div></div>
            <div className="principle"><span>03</span><div><h3>Leave the room clearer.</h3><p>I pair the technical work with documentation, reviews, stakeholder context, and calm handoffs.</p></div></div>
          </div>
        </section>

        <section id="experience" className="experience-section section-pad">
          <div className="section-intro"><span className="section-index">03 / EXPERIENCE</span><h2>Banking was my systems education.</h2><p>These roles show the scope of work I took on and the problems I helped solve.</p></div>
          <div className="timeline">
            <div className="timeline-item"><span>Jul—Aug 2026</span><div><strong>Deutsche Bank</strong><p>Associate Engineer, Commercial Banking Onboarding · Berlin</p><p className="timeline-note">I moved into commercial banking onboarding systems after my thesis internship.</p><ul><li>I developed secure Java/Spring Boot REST APIs for workflow automation and validation.</li><li>I used SQL analysis, logs, tests, reviews, and CI/CD checks for stable production releases.</li></ul></div></div>
            <div className="timeline-item"><span>Feb—Jul 2026</span><div><strong>Deutsche Bank</strong><p>Software Engineer Intern, Master’s Thesis — AI Agent Evaluation · Berlin</p><ul><li>I built process-aware LLM-agent evaluation tooling across 230+ evaluated runs, reaching 93.6% breach-detection accuracy.</li><li>I designed structured workflow tracking and audit trails and uncovered an 18% process-versus-outcome gap through reliability analysis.</li></ul></div></div>
            <div className="timeline-item"><span>Apr—Sep 2025</span><div><strong>Deutsche Bank</strong><p>Software Engineer Intern, Corporate Bank Liquidity Dashboard · Berlin</p><ul><li>I delivered React and backend API features for corporate-bank users with 95% automated regression coverage across 20 Playwright suites.</li><li>I added Allure reporting and CI feedback, reducing manual QA effort by 50%.</li></ul></div></div>
            <div className="timeline-item"><span>2023—24</span><div><strong>Airtel Payments Bank</strong><p>Software Development Engineer, Assistant Manager — Technology · Gurgaon</p><ul><li>I developed Spring Boot, SQL, and React Native digital-banking onboarding flows.</li><li>I reduced customer-journey lead time by 20% and increased onboarding engagement by 30%.</li></ul></div></div>
            <div className="timeline-item"><span>May—Jul 2022</span><div><strong>Citi India</strong><p>Software Analyst Intern, Commodities Technology · Pune</p><ul><li>I used Python, MongoDB/SQL, and Swagger tooling to streamline configuration processing.</li><li>I reduced processing time by 15%.</li></ul></div></div>
          </div>
        </section>

        <section id="background" className="about-section section-pad">
          <div id="about" className="about-copy"><span className="section-index">04 / BACKGROUND</span><h2>A little about me.</h2><p>From New Delhi to Berlin to Vancouver, I’ve worked where software meets high-stakes workflows. I bring a technical foundation, a business-school lens, and a habit of making context explicit.</p><ul className="about-points"><li>I ship AI systems with proof: evaluations, audit trails, and reliability metrics.</li><li>I build backend APIs banks can operate: tested, observable, and ready for safe releases.</li><li>I turn messy workflows into clear, human-ready software.</li><li>I communicate like a consultant: context first, jargon last.</li></ul><div className="about-links"><a href="https://www.linkedin.com/in/anusha-dagar-82834619a/" target="_blank" rel="noreferrer"><span className="social-mark">in</span>My LinkedIn <ArrowUpRight size={15} /></a><a href="https://github.com/anushadagar1407" target="_blank" rel="noreferrer"><span className="social-mark">gh</span>My GitHub <ArrowUpRight size={15} /></a></div></div>
          <div className="background-columns"><div><span className="mini-label">EDUCATION</span><div className="background-row"><strong>M.Sc. Analytics & AI</strong><p>ESMT Berlin · Sep 2024 — Aug 2026<br />Grade 1.7 on the German scale (1.0 = best; approximately A-, with distinction)</p></div><div className="background-row"><strong>B.Tech. Electronics & Communication</strong><p>IGDTUW · Aug 2019 — Jun 2023<br />CGPA 7.95 / 10</p></div></div><div><span className="mini-label">LEADERSHIP</span><div className="background-row"><strong>Class Representative</strong><p>ESMT Berlin</p></div><div className="background-row"><strong>Co-President, Tech & Innovation Club</strong><p>ESMT Berlin</p></div><div className="background-row"><strong>Member</strong><p>Consulting · Investment · Women in Leadership · Sports Society</p></div></div></div>
        </section>

        <section className="toolkit-section section-pad">
          <div className="toolkit-heading"><span className="section-index">05 / TOOLKIT</span><h2>My toolkit.</h2><p className="toolkit-lede">These are the tools I have used across production banking, applied AI research, and day-to-day delivery.</p></div>
          <div className="toolkit-grid"><div><span>LANGUAGES</span><p>Python · Java · JavaScript · TypeScript · SQL</p></div><div><span>PRODUCT ENGINEERING</span><p>FastAPI · Spring Boot · React · Next.js · REST APIs</p></div><div><span>AI SYSTEMS</span><p>Google ADK · LiteLLM · LangGraph · Ollama · LLM evaluation</p></div><div><span>DELIVERY</span><p>Pytest · Playwright · Jenkins · GitHub Actions · Agile/Scrum</p></div></div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div><span className="section-index">06 / CONTACT</span><h2>Let’s work on a hard problem<br /><em>and make it clear.</em></h2></div>
          <div className="contact-cta"><p>I’m actively exploring software engineering and applied AI opportunities across Vancouver and Canada.</p><a className="email-link" href="mailto:dagaranusha@gmail.com">dagaranusha@gmail.com <ArrowUpRight size={20} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy email</>}</button></div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Anusha Dagar</span><span>Designed and built by me in Vancouver <MapPin size={14} /></span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
