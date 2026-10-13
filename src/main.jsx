import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowLeft, ArrowUpRight, Check, Copy, MapPin, Menu, Send, X } from 'lucide-react'
import './styles.css'

const PLAUSIBLE_DOMAIN = 'anusha-dagar-portfolio.anusha-dagar-portfolio.workers.dev'
const FORMSPREE_ENDPOINT = 'REPLACE_WITH_FORMSPREE_ENDPOINT'
const CONTACT_EMAIL = 'dagaranusha@gmail.com'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const projects = [
  {
    id: 'fieldnotes',
    number: '01',
    type: 'Personal project',
    org: 'Public repository',
    year: '2026',
    title: 'Fieldnotes: a citation-first RAG research console.',
    summary: 'A local research console that ingests documents, retrieves relevant passages, and produces answers with citations and exportable reports.',
    outcome: 'RAG',
    outcomeLabel: 'public repository',
    metricNote: 'The repository includes local setup instructions and automated tests.',
    details: ['FastAPI + React/Vite console', 'Citation-backed document retrieval', 'Automated tests and report export'],
    responsibilities: ['I built the FastAPI and React/Vite research console', 'I implemented document ingestion and persisted TF-IDF retrieval', 'I added citation-backed answers, Markdown reports, and automated tests'],
    role: 'Personal project · public on GitHub',
    period: '2026',
    evidence: ['Built: document ingestion, retrieval, cited answers, activity review, and Markdown export', 'Method: persisted scikit-learn TF-IDF index with FastAPI endpoints and pytest coverage', 'Code: public GitHub repository; local demo instructions are in the README'],
    architecture: ['Question', 'Retriever', 'Agent + citations', 'Evaluation record'],
    architectureNote: 'Personal project architecture; no employer data or confidential systems.',
    stack: 'FastAPI · React · Vite · scikit-learn · pytest · Anthropic',
    accent: 'lime',
    openSource: true,
    repoUrl: 'https://github.com/anushadagar1407/fieldnotes-rag-research-agent',
    proofLinks: [
      { href: 'https://github.com/anushadagar1407/fieldnotes-rag-research-agent/blob/main/README.md', label: 'Verification notes' },
      { href: 'https://github.com/anushadagar1407/fieldnotes-rag-research-agent/blob/main/docs/architecture.svg', label: 'Architecture' },
      { href: 'https://github.com/anushadagar1407/fieldnotes-rag-research-agent/blob/main/docs/fieldnotes-research.png', label: 'App screenshot' },
    ],
  },
  {
    id: 'covenant',
    number: '02',
    type: 'Applied AI',
    org: 'Deutsche Bank',
    year: '2026',
    title: 'I made an AI agent show its work.',
    summary: 'An evaluation platform for loan-covenant breach detection, built around observable agent behaviour instead of one opaque accuracy score.',
    outcome: '93.6%',
    outcomeLabel: 'breach-detection accuracy',
    metricNote: 'Accuracy measured across 230+ evaluated agent runs.',
    details: ['230+ evaluated agent runs', '18% process-outcome gap uncovered', 'Structured records and audit trails'],
    responsibilities: ['I designed the evaluation data model and FastAPI endpoints', 'I built an Agent Registry and comparison views for repeatable analysis', 'I tracked intermediate reasoning signals instead of only final labels'],
    role: 'Software Engineer Intern · AI Agent Evaluation',
    period: 'Feb 2026 — Jul 2026',
    evidence: ['Architecture: workflow input → agent run → evaluator → structured audit record', 'Method: repeatable runs with process-level signals, final outcomes, and quality metrics', 'Access: Internal work — sanitised view'],
    architecture: ['Workflow input', 'Agent run', 'Evaluator', 'Audit record'],
    architectureNote: 'Confidential banking data and internal system names are omitted.',
    stack: 'Python · FastAPI · Next.js · SQLite · Google ADK · LiteLLM · Ollama',
    accent: 'coral',
  },
  {
    id: 'onboarding',
    number: '03',
    type: 'Backend systems',
    org: 'Deutsche Bank',
    year: '2026',
    title: 'I helped keep banking onboarding moving.',
    summary: 'Production Java/Spring Boot APIs for commercial-banking onboarding — service-layer changes with SQL-backed validation and release-readiness owned end to end.',
    outcome: 'API-first',
    outcomeLabel: 'integration mindset',
    metricNote: 'Scope: production onboarding API changes and release-readiness checks.',
    details: ['Java · Spring Boot · REST · SQL', 'Production releases across service layers', 'Collaborated with banking stakeholders'],
    responsibilities: ['I shipped onboarding API features and service-layer changes', 'I used SQL and logs to investigate workflow behaviour and defects', 'I owned release-readiness checks across unit tests, reviews, and CI/CD'],
    role: 'Associate Engineer · Commercial Banking Onboarding',
    period: 'Jul 2026 — Aug 2026',
    evidence: ['Architecture: Java/Spring Boot REST services integrated with SQL-backed banking workflows', 'Method: SQL analysis, application logs, unit tests, code reviews, and CI/CD checks', 'Access: Internal work — sanitised view'],
    architecture: ['Client request', 'Spring Boot API', 'Validation + SQL', 'Release checks'],
    architectureNote: 'Internal workflow names and banking integrations are omitted.',
    stack: 'Java · Spring Boot · REST APIs · SQL · Jenkins · GitHub Actions',
    accent: 'aqua',
  },
  {
    id: 'liquidity',
    number: '04',
    type: 'Product engineering',
    org: 'Deutsche Bank',
    year: '2025',
    title: 'I turned liquidity data into a usable surface.',
    summary: 'A corporate-bank liquidity dashboard with React features, backend API work, and automated regression coverage that made releases easier to verify.',
    outcome: '95%',
    outcomeLabel: 'automated regression coverage',
    metricNote: 'Coverage measured across 20 Playwright suites; manual QA effort compared before and after automation.',
    details: ['20 Playwright test suites', '50% less manual QA effort', 'Allure reporting in CI/CD'],
    responsibilities: ['I delivered React and backend API features for corporate-bank users', 'I created Playwright coverage for core dashboard workflows', 'I added Allure reporting and CI feedback for faster verification'],
    role: 'Software Engineer Intern · Corporate Bank Liquidity Dashboard',
    period: 'Apr 2025 — Sep 2025',
    evidence: ['Architecture: React dashboard → backend APIs → banking data views', 'Method: Playwright suites, Allure reporting, and CI/CD gates', 'Access: Internal work — sanitised view'],
    architecture: ['React dashboard', 'Backend APIs', 'Data views', 'Playwright + Allure'],
    architectureNote: 'User and banking data are represented as generic data views.',
    stack: 'React · API integration · Playwright · Allure · CI/CD',
    accent: 'lime',
  },
  {
    id: 'future-public-project',
    number: '05',
    type: 'Public project placeholder',
    org: '[PLACEHOLDER]',
    year: '[PLACEHOLDER]',
    title: '[PLACEHOLDER] A future public project ready to add.',
    summary: '[PLACEHOLDER] Add the user problem, your contribution, and a measurable outcome here.',
    outcome: 'NEXT',
    outcomeLabel: 'project slot to fill',
    metricNote: '[PLACEHOLDER] Add one verified metric or outcome.',
    details: ['[PLACEHOLDER] User or customer outcome', '[PLACEHOLDER] Scope and contribution', '[PLACEHOLDER] Evidence or launch detail'],
    responsibilities: ['[PLACEHOLDER] What you designed or built', '[PLACEHOLDER] Key technical decision', '[PLACEHOLDER] Result, learning, or next step'],
    role: '[PLACEHOLDER] Role / contribution',
    period: '[PLACEHOLDER] Dates',
    evidence: ['[PLACEHOLDER] Public proof link or release note', '[PLACEHOLDER] Method, test, or implementation detail', '[PLACEHOLDER] What a reviewer can verify'],
    architecture: ['Problem', 'System', 'Evidence', 'Outcome'],
    architectureNote: 'Placeholder architecture; replace every field when the public project is ready.',
    stack: '[PLACEHOLDER] Stack / tools',
    accent: 'aqua',
    placeholder: true,
    placeholderLinks: ['GitHub URL [PLACEHOLDER]', 'Live project URL [PLACEHOLDER]'],
  },
]

const experience = [
  {
    period: 'Sep 2026 — Present',
    company: 'Trans BC Freightways Ltd',
    title: 'Senior Software Development Engineer · Independent Contractor',
    location: 'Surrey, BC',
    note: 'I own the entire IT function as the single point of accountability.',
    bullets: [
      'I lead software engineering across Java/Spring Boot, Python/FastAPI, React/TypeScript, and PostgreSQL/MySQL, with CI/CD throughout.',
      'I own the whole IT picture — infrastructure, systems, website, data, security, and vendors.',
      'I design microservices and APIs with unit + integration testing, Swagger/OpenAPI docs, and Agile stakeholder collaboration.',
      'I automate workflows with AI/LLM tooling where it genuinely removes toil.',
    ],
  },
  {
    period: 'Jul — Aug 2026',
    company: 'Deutsche Bank',
    title: 'Associate Engineer · Commercial Banking Onboarding',
    location: 'Berlin',
    note: 'I moved into commercial banking onboarding systems after my thesis internship.',
    bullets: [
      'I shipped secure Java/Spring Boot REST APIs for workflow automation and validation.',
      'I owned release-readiness checks using SQL analysis, application logs, tests, reviews, and CI/CD.',
    ],
  },
  {
    period: 'Feb — Jul 2026',
    company: 'Deutsche Bank',
    title: 'Software Engineer Intern · Master’s Thesis — AI Agent Evaluation',
    location: 'Berlin',
    bullets: [
      'I built process-aware LLM-agent evaluation tooling across 230+ evaluated runs, reaching 93.6% breach-detection accuracy.',
      'I designed structured workflow tracking and audit trails and uncovered an 18% process-versus-outcome gap through reliability analysis.',
    ],
  },
  {
    period: 'Apr — Sep 2025',
    company: 'Deutsche Bank',
    title: 'Software Engineer Intern · Corporate Bank Liquidity Dashboard',
    location: 'Berlin',
    bullets: [
      'I delivered React and backend API features for corporate-bank users with 95% automated regression coverage across 20 Playwright suites.',
      'I added Allure reporting and CI feedback, reducing manual QA effort by 50%.',
    ],
  },
  {
    period: 'Jul 2023 — Aug 2024',
    company: 'Airtel Payments Bank',
    title: 'Software Development Engineer · Assistant Manager — Technology',
    location: 'Gurgaon',
    bullets: [
      'I developed Spring Boot, SQL, and React Native digital-banking onboarding flows.',
      'I reduced customer-journey lead time by 20% and increased onboarding engagement by 30%.',
    ],
  },
  {
    period: 'May — Jul 2022',
    company: 'Citi India',
    title: 'Software Analyst Intern · Commodities Technology',
    location: 'Pune',
    bullets: [
      'I used Python, MongoDB/SQL, and Swagger tooling to streamline configuration processing.',
      'I reduced processing time by 15%.',
    ],
  },
]

const testimonials = [
  { quote: '[PLACEHOLDER] Add a short quote about Anusha\'s engineering judgement, collaboration, or delivery.', name: '[PLACEHOLDER NAME]', role: '[PLACEHOLDER ROLE / COMPANY]' },
  { quote: '[PLACEHOLDER] Add a second quote that shows how Anusha works with teams or stakeholders.', name: '[PLACEHOLDER NAME]', role: '[PLACEHOLDER ROLE / COMPANY]' },
]

/* ------------------------------------------------------------------ */
/*  Chatbot knowledge (rule-based, offline)                            */
/* ------------------------------------------------------------------ */

const chatWelcome = 'Hi, I’m the guide to this portfolio. Ask me about Anusha’s experience, projects, skills, or how to reach her — or tap a suggestion below.'

const chatSuggestions = [
  'What has Anusha built?',
  'Where has she worked?',
  'What are her strongest skills?',
  'Is she available full-time?',
  'How do I contact her?',
  'Tell me about her banking work',
  'What did she study?',
  'Is she in Vancouver?',
  'Show the public RAG project',
  'Why would a team hire her?',
]

const chatKnowledge = [
  { terms: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening'], reply: 'Hello! I can tell you about Anusha’s background, her projects, her skills, and how to get in touch. What would you like to know?' },
  { terms: ['trans bc', 'freightways', 'current role', 'where does she work now', 'now', 'present', 'contractor'], reply: 'Anusha is currently a Senior Software Development Engineer (independent contractor) at Trans BC Freightways Ltd in Surrey, BC, where she owns the entire IT function — infrastructure, systems, website, data, security, and vendors — and builds across Java/Spring Boot, Python/FastAPI, React/TypeScript, and PostgreSQL/MySQL with CI/CD.' },
  { terms: ['built', 'project', 'fieldnotes', 'rag', 'public project', 'research console', 'documents', 'what has she made'], reply: 'Her flagship personal project is Fieldnotes — a citation-first RAG research console (FastAPI + React/Vite) that ingests documents, retrieves passages with citations, and exports Markdown reports. It’s public on GitHub with automated tests and setup instructions. At Deutsche Bank she built an AI-agent evaluation platform reaching 93.6% breach-detection accuracy across 230+ runs, production Spring Boot onboarding APIs, and a liquidity dashboard with 95% Playwright regression coverage.' },
  { terms: ['experience', 'worked', 'work history', 'career', 'job', 'banking work', 'bank', 'deutsche', 'airtel', 'citi', 'financial technology'], reply: 'Anusha has 2+ years across banking technology: Trans BC Freightways (current, Senior SDE owning all of IT), Deutsche Bank Berlin (Associate Engineer and two internships — AI agent evaluation, commercial banking onboarding, liquidity dashboard), Airtel Payments Bank (SDE, digital-banking onboarding), and Citi India (intern, commodities technology). Scroll to Experience for the full timeline.' },
  { terms: ['skill', 'stack', 'tech', 'technology', 'language', 'strongest', 'tool', 'framework'], reply: 'Her core stack: Python, Java, JavaScript, TypeScript, SQL; FastAPI, Spring Boot, React, Next.js, REST APIs; AI systems — RAG, LLM evaluation, LangGraph, pgvector, Google ADK, LiteLLM, Ollama; delivery — pytest, Playwright, Jenkins, GitHub Actions, Agile/Scrum.' },
  { terms: ['education', 'degree', 'university', 'study', 'studied', 'master', 'school', 'esmt', 'igdtuw', 'btech'], reply: 'She holds an M.Sc. in Analytics & AI from ESMT Berlin (2024–2026, grade 1.7 — roughly A− with distinction) and a B.Tech. in Electronics & Communication from IGDTUW, New Delhi (2019–2023, CGPA 7.95/10). She was also class representative and co-president of the Tech & Innovation Club at ESMT.' },
  { terms: ['available', 'full-time', 'full time', 'hire', 'hiring', 'open', 'opportunity', 'vancouver', 'relocate', 'visa', 'work permit', 'resident', 'sponsorship'], reply: 'Yes — Anusha is a Canadian Permanent Resident based in Vancouver, BC, and is actively seeking a full-time permanent software engineering role in Vancouver. No sponsorship needed.' },
  { terms: ['contact', 'email', 'reach', 'talk', 'call', 'phone', 'linkedin', 'github', 'resume', 'cv'], reply: 'You can reach her at dagaranusha@gmail.com — there’s a copy button and a contact form in the Contact section. She’s also on LinkedIn and GitHub, and her résumé is downloadable from the hero.' },
  { terms: ['salary', 'pay', 'compensation', 'ctc'], reply: 'Compensation is best discussed directly with Anusha — drop her a line at dagaranusha@gmail.com.' },
  { terms: ['thank', 'thanks', 'great', 'awesome', 'nice'], reply: 'You’re welcome! Anything else you’d like to know — her projects, her experience, or how to reach her?' },
  { terms: ['who', 'about anusha', 'background', 'introduce', 'good fit', 'why hire', 'hire her'], reply: 'Anusha Dagar is an Applied AI & Software Engineer in Vancouver, BC. She builds reliable backend and applied-AI systems — from banking APIs and onboarding workflows to LLM-agent evaluation platforms. She’s known for making complex systems legible: tested, observable, and well documented.' },
  { terms: ['where', 'location', 'based', 'live', 'in vancouver'], reply: 'Anusha is based in Vancouver, British Columbia, Canada — and open to full-time roles in the city.' },
]

const normaliseChatText = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, ' ').replace(/\s+/g, ' ').trim()

function chatReply(text) {
  const query = normaliseChatText(text)
  let best = null
  let bestScore = 0
  for (const entry of chatKnowledge) {
    const score = entry.terms.reduce((total, term) => {
      const phrase = normaliseChatText(term)
      if (query.includes(phrase)) return total + phrase.split(' ').length + 1
      const words = phrase.split(' ')
      return total + (words.length > 1 && words.every((word) => query.includes(word)) ? 1 : 0)
    }, 0)
    if (score > bestScore) { best = entry; bestScore = score }
  }
  if (best) return best.reply
  return 'Good question — the fullest answer lives on this page. Try the Work and Experience sections, or ask me about her projects, skills, education, availability, or how to contact her.'
}

/* ------------------------------------------------------------------ */
/*  Lion icon                                                          */
/* ------------------------------------------------------------------ */

function LionIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="currentColor" opacity="0.16" />
      <path d="M24 8c-7 0-12.5 4.6-14.6 11l-2.6 1.6 3 1.6c-.4 1.5-.6 3-.6 4.6 0 8.6 6.2 15.2 14.8 15.2s14.8-6.6 14.8-15.2c0-1.6-.2-3.1-.6-4.6l3-1.6-2.6-1.6C36.5 12.6 31 8 24 8z" fill="currentColor" />
      <circle cx="18.5" cy="23.5" r="2" fill="var(--ink)" />
      <circle cx="29.5" cy="23.5" r="2" fill="var(--ink)" />
      <path d="M21.5 29h5l-2.5 3.4z" fill="var(--ink)" />
      <path d="M24 32.4c-1.8 1.6-4.6 1.9-7 .8M24 32.4c1.8 1.6 4.6 1.9 7 .8" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function Headshot() {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="headshot-fallback" role="img" aria-label="Headshot placeholder"><strong>AD</strong><span>Photo placeholder</span></div>
  return <img className="headshot" src="/headshot.jpg" alt="Anusha Dagar" onError={() => setFailed(true)} />
}

/* ------------------------------------------------------------------ */
/*  Architecture map (hero visual)                                      */
/* ------------------------------------------------------------------ */

function ArchitectureMap() {
  return (
    <div className="map" aria-label="Architecture map showing data, services, evaluation, and human outcomes">
      <div className="hero-headshot"><Headshot /></div>
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
      <div className="architecture-heading"><span>ARCHITECTURE</span><small>{project.architectureNote}</small></div>
      <ol className="architecture-flow" aria-label={`${project.title} architecture flow`}>
        {project.architecture.map((step, index) => (
          <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < project.architecture.length - 1 && <ArrowUpRight size={15} aria-hidden="true" />}</li>
        ))}
      </ol>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page sections                                                      */
/* ------------------------------------------------------------------ */

function Topbar() {
  const [navOpen, setNavOpen] = useState(false)
  return (
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
        <a className="nav-contact" href="#contact" onClick={() => setNavOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}

function Hero({ onCopyEmail, copied }) {
  return (
    <section className="hero section-pad">
      <div className="hero-copy">
        <div className="availability"><span className="live-dot" /> Vancouver, BC · Canadian Permanent Resident · open to full-time roles</div>
        <h1>Software engineer who makes complex systems legible.</h1>
        <p className="hero-lede"><em>Software that earns trust.</em> I’m Anusha — I build reliable backend and applied-AI systems for high-stakes workflows, from banking APIs to LLM-agent evaluation.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight size={17} /></a>
          <a className="button button-quiet" href="/Anusha_Dagar_Resume.pdf" download>Download résumé <ArrowUpRight size={17} /></a>
          <button className="button button-quiet" onClick={onCopyEmail}>{copied ? <><Check size={15} /> Email copied</> : <>Copy my email <Copy size={15} /></>}</button>
        </div>
        <div className="hero-metrics" aria-label="Selected results">
          <div><strong>93.6%</strong><span>loan-covenant breach detection<small>230+ evaluated agent runs</small></span></div>
          <div><strong>95%</strong><span>automated test coverage<small>20 Playwright suites</small></span></div>
          <div><strong>50% less</strong><span>manual QA effort<small>after regression automation</small></span></div>
          <div><strong>20% shorter</strong><span>customer lead time<small>onboarding journey</small></span></div>
        </div>
        <div className="hero-meta">
          <div><span>FOCUS</span><strong>Applied AI · Backend · Full-stack</strong></div>
          <div><span>LOCATION</span><strong>Vancouver, BC · Canada</strong></div>
          <div><span>STATUS</span><strong>Available for full-time permanent roles</strong></div>
        </div>
      </div>
      <ArchitectureMap />
    </section>
  )
}

function SignalBand() {
  return (
    <section className="signal-band" aria-label="Career signal">
      <div><strong>01</strong><span>Applied AI systems</span></div>
      <div><strong>02</strong><span>Banking domain fluency</span></div>
      <div><strong>03</strong><span>Engineer who communicates</span></div>
      <div><strong>04</strong><span>Vancouver based</span></div>
    </section>
  )
}

function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="detail-overlay" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
      <article className={`project-detail-panel ${project.accent}`} onClick={(e) => e.stopPropagation()}>
        <button className="panel-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
        <div className="detail-top"><span>{project.type} · {project.org}</span><span>PROJECT / {project.number}</span></div>
        <h3>{project.title}</h3>
        <p className="detail-summary">{project.summary}</p>
        <div className="detail-role"><span>{project.role}</span><span>{project.period}</span></div>
        <div className="detail-outcome"><strong>{project.outcome}</strong><span>{project.outcomeLabel}<small>{project.metricNote}</small></span></div>
        <ul className="detail-checks">{project.details.map((detail) => <li key={detail}><Check size={16} />{detail}</li>)}</ul>
        <div className="detail-responsibilities"><span>MY CONTRIBUTION</span><ol>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ol></div>
        <div className="detail-evidence"><span>MY EVIDENCE &amp; METHOD</span><ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <ArchitectureFlow project={project} />
        {project.openSource && (
          <div className="project-links">
            <a className="project-proof-link" href={project.repoUrl} target="_blank" rel="noreferrer">View project code <ArrowUpRight size={15} /></a>
            {project.proofLinks?.map((link) => <a className="project-proof-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={15} /></a>)}
            <span className="project-link-note">Run the demo locally using the repository README.</span>
          </div>
        )}
        {project.placeholder && (
          <div className="project-links placeholder-links"><span className="project-link-note">PLACEHOLDER LINKS TO ADD</span>{project.placeholderLinks.map((link) => <span className="project-proof-link placeholder-link" key={link}>{link} <ArrowUpRight size={15} /></span>)}</div>
        )}
        <div className="stack-line"><span>STACK</span>{project.stack}</div>
        <button className="panel-back" onClick={onClose}><ArrowLeft size={15} /> Back to selected work</button>
      </article>
    </div>
  )
}

function WorkSection() {
  const [openProject, setOpenProject] = useState(null)
  return (
    <section id="work" className="work-section section-pad">
      <div className="section-intro">
        <span className="section-index">01 / SELECTED WORK</span>
        <h2>What I have built.</h2>
        <p>Four systems, four sets of constraints, each with measured results. Select any card for the full breakdown — contribution, evidence, and architecture.</p>
      </div>
      <div className="work-cards">
        {projects.map((project) => (
          <button key={project.id} className={`work-card ${project.accent}${project.openSource ? ' open-source' : ''}`} onClick={() => setOpenProject(project)}>
            <div className="work-card-top"><span className="work-card-number">{project.number}</span><span className="work-card-type">{project.type} · {project.org} · {project.year}</span></div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="work-card-foot"><span className="work-card-metric"><strong>{project.outcome}</strong> {project.outcomeLabel}</span><span className="work-card-cta">View details <ArrowUpRight size={15} /></span></div>
          </button>
        ))}
      </div>
      {openProject && <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />}
    </section>
  )
}

function ApproachSection() {
  return (
    <section id="approach" className="approach-section">
      <div className="approach-aside">
        <span className="section-index">02 / HOW I WORK</span>
        <h2>Make the complex legible.</h2>
        <p className="approach-lede">I build work that is easy to understand, test, and use with a team.</p>
      </div>
      <div className="principles">
        <div className="principle"><span>01</span><div><h3>Start with the decision.</h3><p>Before reaching for a model or framework, I clarify what someone needs to know, decide, or do next.</p></div></div>
        <div className="principle"><span>02</span><div><h3>Build for observation.</h3><p>I use evaluation records, audit trails, tests, and useful logs so a team can operate what I build.</p></div></div>
        <div className="principle"><span>03</span><div><h3>Leave the room clearer.</h3><p>I pair the technical work with documentation, reviews, stakeholder context, and calm handoffs.</p></div></div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="experience-section section-pad">
      <div className="section-intro">
        <span className="section-index">03 / EXPERIENCE</span>
        <h2>Banking was my systems education.</h2>
        <p>From commodities tech to payments to commercial banking — and now owning software end to end in Vancouver. These roles show the scope of work I took on and the problems I helped solve.</p>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={`${item.company}-${item.period}`}>
            <span>{item.period}</span>
            <div>
              <strong>{item.company}</strong>
              <p>{item.title} · {item.location}</p>
              {item.note && <p className="timeline-note">{item.note}</p>}
              <ul>{item.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section section-pad">
      <div className="section-intro">
        <span className="section-index">04 / TESTIMONIALS</span>
        <h2>What collaborators might say.</h2>
        <p>Two clearly marked placeholders for future recommendations from managers, peers, or partners.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-card" key={`testimonial-${index}`}>
            <span className="testimonial-mark">&quot;</span>
            <blockquote>{testimonial.quote}</blockquote>
            <div className="testimonial-attribution"><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="background" className="about-section section-pad">
      <div id="about" className="about-copy">
        <span className="section-index">05 / BACKGROUND</span>
        <h2>A little about me.</h2>
        <p>From New Delhi to Berlin to Vancouver, I’ve spent 2+ years where software meets high-stakes workflows. I bring a technical foundation, a business-school lens, and a habit of writing things down clearly.</p>
        <ul className="about-points">
          <li>I ship AI systems with evidence: evaluations, audit trails, and quality metrics.</li>
          <li>I build backend APIs teams can operate: tested, observable, and ready for safe releases.</li>
          <li>I turn messy workflows into clear, human-ready software.</li>
          <li>I communicate like a consultant: context first, jargon last.</li>
        </ul>
        <div className="about-links">
          <a href="https://www.linkedin.com/in/anusha-dagar-82834619a/" target="_blank" rel="noreferrer"><span className="social-mark">in</span>My LinkedIn <ArrowUpRight size={15} /></a>
          <a href="https://github.com/anushadagar1407" target="_blank" rel="noreferrer"><span className="social-mark">gh</span>My GitHub <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="background-columns">
        <div>
          <span className="mini-label">EDUCATION</span>
          <div className="background-row"><strong>M.Sc. Analytics &amp; AI</strong><p>ESMT Berlin · Sep 2024 — Aug 2026<br />Grade 1.7 on the German scale (1.0 = best; approximately A−, with distinction)</p></div>
          <div className="background-row"><strong>B.Tech. Electronics &amp; Communication</strong><p>IGDTUW · Aug 2019 — Jun 2023<br />CGPA 7.95 / 10</p></div>
        </div>
        <div>
          <span className="mini-label">LEADERSHIP</span>
          <div className="background-row"><strong>Class Representative</strong><p>ESMT Berlin</p></div>
          <div className="background-row"><strong>Co-President, Tech &amp; Innovation Club</strong><p>ESMT Berlin</p></div>
          <div className="background-row"><strong>Member, student societies</strong><p>Consulting · Investment · Women in Leadership · Sports Society</p></div>
        </div>
      </div>
    </section>
  )
}

function ToolkitSection() {
  return (
    <section className="toolkit-section section-pad">
      <div className="toolkit-heading">
        <span className="section-index">06 / TOOLKIT</span>
        <h2>My toolkit.</h2>
        <p className="toolkit-lede">The tools I have used across production banking, applied AI research, and day-to-day delivery.</p>
      </div>
      <div className="toolkit-grid">
        <div><span>LANGUAGES</span><p>Python · Java · JavaScript · TypeScript · SQL</p></div>
        <div><span>PRODUCT ENGINEERING</span><p>FastAPI · Spring Boot · React · Next.js · REST APIs</p></div>
        <div><span>AI SYSTEMS</span><p>Google ADK · LiteLLM · LangGraph · RAG · pgvector · Ollama · LLM evaluation</p></div>
        <div><span>DELIVERY</span><p>Pytest · Playwright · Jenkins · GitHub Actions · Agile/Scrum</p></div>
      </div>
    </section>
  )
}

function ContactSection({ onCopyEmail, copied }) {
  const [formStatus, setFormStatus] = useState('')

  const openMailClient = (name, email, message) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const submitContact = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (FORMSPREE_ENDPOINT.startsWith('REPLACE_')) {
      openMailClient(name, email, message)
      return
    }
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: data })
      if (!response.ok) throw new Error('Form submission failed')
      setFormStatus('Thanks — your message has been sent.')
      event.currentTarget.reset()
    } catch {
      setFormStatus('Opening your mail client instead…')
      openMailClient(name, email, message)
    }
  }

  return (
    <section id="contact" className="contact-section section-pad">
      <div>
        <span className="section-index">07 / CONTACT</span>
        <h2>Let’s work on a hard problem<br /><em>and make it clear.</em></h2>
      </div>
      <div className="contact-cta">
        <p>I’m a Canadian Permanent Resident in Vancouver, actively looking for a full-time permanent software engineering role. If you’re hiring, I’d love to talk.</p>
        <p className="contact-warmth">If you’re in Vancouver, I’d be glad to continue the conversation over coffee.</p>
        <a className="email-link" href="mailto:dagaranusha@gmail.com">dagaranusha@gmail.com <ArrowUpRight size={20} /></a>
        <button className="copy-button" onClick={onCopyEmail}>{copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy email</>}</button>
        <form className="contact-form" onSubmit={submitContact}>
          <label><span>Name</span><input name="name" autoComplete="name" required /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>Message</span><textarea name="message" rows="4" required /></label>
          <button className="button button-primary" type="submit">Send enquiry <ArrowUpRight size={16} /></button>
          <p className="contact-form-note">Opens your mail client until a Formspree endpoint is configured.</p>
          {formStatus && <p className="contact-form-status" role="status">{formStatus}</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 Anusha Dagar</span>
      <span>Designed and built by me in Vancouver <MapPin size={14} /></span>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Chatbot (lion)                                                     */
/* ------------------------------------------------------------------ */

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: chatWelcome }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const send = (text) => {
    const clean = text.trim()
    if (!clean || typing) return
    setMessages((prev) => [...prev, { role: 'user', text: clean }])
    setInput('')
    setTyping(true)
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: chatReply(clean) }])
      setTyping(false)
    }, 650)
  }

  return (
    <div className="chatbot">
      {open && (
        <div className="chat-panel" role="dialog" aria-modal="true" aria-labelledby="chat-title">
          <div className="chat-header">
            <span className="chat-avatar"><LionIcon size={30} /></span>
            <div><strong id="chat-title">Ask about Anusha</strong><small><span className="live-dot small" /> Always here · replies instantly</small></div>
            <button className="chat-restart" onClick={() => setMessages([{ role: 'bot', text: chatWelcome }])} aria-label="Start over" title="Start over">↺</button>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button>
          </div>
          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                {m.role === 'bot' && <span className="chat-msg-avatar"><LionIcon size={20} /></span>}
                <p>{m.text}</p>
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <span className="chat-msg-avatar"><LionIcon size={20} /></span>
                <p className="typing"><span /><span /><span /></p>
              </div>
            )}
          </div>
          {messages.length <= 2 && (
            <div className="chat-suggestions">
              {chatSuggestions.map((s) => (
                <button key={s} onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send(input) }}
              placeholder="Ask about experience, skills, availability…"
              aria-label="Type your question"
            />
            <button onClick={() => send(input)} aria-label="Send message"><Send size={16} /></button>
          </div>
        </div>
      )}
      <button
        className={`chat-fab${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <X size={24} /> : <LionIcon size={30} />}
      </button>
    </div>
  )
}

function usePrivacyFriendlyAnalytics() {
  useEffect(() => {
    if (PLAUSIBLE_DOMAIN.startsWith('REPLACE_')) return undefined
    const script = document.createElement('script')
    script.defer = true
    script.dataset.domain = PLAUSIBLE_DOMAIN
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)
    return () => script.remove()
  }, [])
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

function App() {
  const [copied, setCopied] = useState(false)
  usePrivacyFriendlyAnalytics()

  const copyEmail = async () => {
    try { await navigator.clipboard?.writeText('dagaranusha@gmail.com') } catch { /* clipboard unavailable */ }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#top">Skip to content</a>
      <Topbar />
      <main id="top">
        <Hero onCopyEmail={copyEmail} copied={copied} />
        <SignalBand />
        <WorkSection />
        <ApproachSection />
        <ExperienceSection />
        <TestimonialsSection />
        <AboutSection />
        <ToolkitSection />
        <ContactSection onCopyEmail={copyEmail} copied={copied} />
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
