# Architecture Decision Records (ADR)

## ADR 1: Markdown-First Design
- **Status**: Accepted
- **Context**: Content needs to be easily editable by both humans and AI.
- **Decision**: Store all study material as Markdown files in the `content/` directory.
- **Consequences**: Easy version control, decoupled logic, and future-proof portability.

## ADR 2: React + Vite + Tailwind CSS
- **Status**: Accepted
- **Context**: Need a fast, modern frontend with easy styling.
- **Decision**: Use Vite for build tooling and Tailwind for a utility-first, dark-mode friendly design.
- **Consequences**: Near-instant HMR, small bundle sizes, and rapid UI development.

## ADR 3: Static Site Generation (SSG) / Single Page App (SPA) on GitHub Pages
- **Status**: Accepted
- **Context**: Hosting should be free, reliable, and easy to deploy.
- **Decision**: Deploy as an SPA to GitHub Pages. Use a `404.html` hack or HashRouter to handle client-side routing on refreshes.
- **Consequences**: Zero hosting costs, automated deployments via GitHub Actions.

## ADR 4: No Database / No Backend
- **Status**: Accepted
- **Context**: Complexity should be minimized.
- **Decision**: Use local JSON files (`subjects.json`, `search-index.json`) for data management.
- **Consequences**: Extremely fast performance, simple architecture, but requires a build-step or script to update the search index.
