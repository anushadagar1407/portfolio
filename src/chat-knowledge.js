// Factual snapshot for the portfolio assistant. GitHub data was fetched from
// the public API during the 2026-10-13 build pass and is never fetched at chat runtime.

export const LINKEDIN_DETAILS_NEEDED = [
  'Current headline',
  'About section',
  'Featured projects or posts',
]

export const KNOWLEDGE_BASE = `
PERSON
Name: Anusha Dagar
Positioning: Applied AI and Software Engineer
Location: Vancouver, British Columbia, Canada
Status: Canadian Permanent Resident; open to full-time permanent software engineering roles in Vancouver; no sponsorship needed.
Contact: dagaranusha@gmail.com
Links: LinkedIn https://www.linkedin.com/in/anusha-dagar-82834619a/ ; GitHub https://github.com/anushadagar1407

PROJECTS
01 Fieldnotes: a citation-first RAG research console. Personal public GitHub project. A FastAPI + React/Vite console that ingests documents, retrieves relevant passages, returns cited answers, and exports Markdown reports. Built with FastAPI, React, Vite, scikit-learn, pytest, and Anthropic. Contributions: document ingestion, persisted TF-IDF retrieval, citation-backed answers, activity review, report export, and automated tests. Repository: https://github.com/anushadagar1407/fieldnotes-rag-research-agent
02 Deutsche Bank AI agent evaluation. An internal platform for loan-covenant breach detection. 93.6% accuracy across 230+ evaluated runs, with an 18% process-versus-outcome gap uncovered. Contributions: evaluation data model, FastAPI endpoints, Agent Registry, comparison views, intermediate reasoning signals, and audit trails. Stack: Python, FastAPI, Next.js, SQLite, Google ADK, LiteLLM, Ollama. Internal work; confidential details omitted.
03 Deutsche Bank commercial banking onboarding. Production Java/Spring Boot REST APIs with SQL-backed validation and release-readiness checks. Contributions: service-layer changes, SQL and log investigation, unit tests, reviews, CI/CD, and release checks. Stack: Java, Spring Boot, REST APIs, SQL, Jenkins, GitHub Actions. Internal work; confidential details omitted.
04 Deutsche Bank corporate bank liquidity dashboard. React and backend API features with 95% automated regression coverage across 20 Playwright suites and 50% less manual QA effort after automation. Contributions: dashboard features, backend integration, Playwright coverage, Allure reporting, and CI feedback. Stack: React, API integration, Playwright, Allure, CI/CD. Internal work; confidential details omitted.

EXPERIENCE
Trans BC Freightways Ltd, Surrey, BC: Senior Software Development Engineer, independent contractor, Sep 2026 to Present. Owns the IT function across infrastructure, systems, website, data, security, vendors, Java/Spring Boot, Python/FastAPI, React/TypeScript, PostgreSQL/MySQL, CI/CD, microservices, APIs, testing, OpenAPI, Agile collaboration, and practical AI automation.
Deutsche Bank, Berlin: Associate Engineer, Commercial Banking Onboarding, Jul to Aug 2026. Shipped secure Java/Spring Boot REST APIs and owned release-readiness checks.
Deutsche Bank, Berlin: Software Engineer Intern, Master’s Thesis, AI Agent Evaluation, Feb to Jul 2026. Built evaluation tooling across 230+ runs and reached 93.6% breach-detection accuracy; found an 18% process-versus-outcome gap.
Deutsche Bank, Berlin: Software Engineer Intern, Corporate Bank Liquidity Dashboard, Apr to Sep 2025. Delivered React and backend features, 95% regression coverage across 20 Playwright suites, and Allure CI reporting.
Airtel Payments Bank, Gurgaon: Software Development Engineer, Assistant Manager: Technology, Jul 2023 to Aug 2024. Built Spring Boot, SQL, and React Native onboarding flows; reduced customer-journey lead time by 20% and increased onboarding engagement by 30%.
Citi India, Pune: Software Analyst Intern, Commodities Technology, May to Jul 2022. Used Python, MongoDB/SQL, and Swagger tooling; reduced processing time by 15%.

EDUCATION AND TOOLKIT
M.Sc. Analytics & AI, ESMT Berlin, Sep 2024 to Aug 2026, grade 1.7. B.Tech. Electronics & Communication, IGDTUW, Aug 2019 to Jun 2023, CGPA 7.95/10. Class Representative and Co-President, Tech & Innovation Club at ESMT.
Languages: Python, Java, JavaScript, TypeScript, SQL. Product engineering: FastAPI, Spring Boot, React, Next.js, REST APIs. AI systems: RAG, LLM evaluation, LangGraph, pgvector, Google ADK, LiteLLM, Ollama. Delivery: pytest, Playwright, Jenkins, GitHub Actions, Agile/Scrum.

GITHUB SNAPSHOT (fetched 2026-10-13 from https://api.github.com/users/anushadagar1407/repos)
Public profile: login anushadagar1407; 10 public repositories; GitHub API returned no public bio or location.
Repositories: ai-agent-governance-framework-thesis (Python, 0 stars, updated 2026-04-10); anusha.github.io (0 stars, updated 2026-04-10); concurrent-image-scraper (Java, 0 stars, updated 2026-08-12); covenantguard (description: Evidence-first loan covenant monitoring and AI evaluation platform, 0 stars, updated 2026-10-05); db2026-reconX (Java, 2 stars, updated 2026-08-04); fieldnotes-rag-research-agent (Python, 0 stars, updated 2026-09-30); finagent-observatory (0 stars, updated 2026-04-23); loan_covenant_breach_early_warning_agent (Python, 0 stars, updated 2026-06-30); portfolio (CSS, 0 stars, updated 2026-10-13); test (0 stars, updated 2026-02-09).

LINKEDIN FOLLOW-UP SLOT
LinkedIn was not scraped. Details that would improve this assistant: current headline, About section, and Featured projects or posts. Merge those details here after Anusha pastes them.
`
