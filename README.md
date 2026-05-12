# 2AM Notes — AI-Native Exam Knowledge Platform

> Master your exams at 2 AM.

2AM Notes is a markdown-powered academic knowledge renderer built for students. It decouples the rendering engine (System) from the study material (Content), allowing for a clean, fast, and AI-compatible knowledge base.

## 🚀 Key Features
- **Markdown-First**: Content is stored in pure Markdown.
- **AI-Native**: Designed to be populated by AI agents.
- **Premium UI**: Dark-mode friendly, GitBook-inspired design.
- **Zero Backend**: Fully compatible with GitHub Pages.
- **Syntax Highlighting**: Beautiful code blocks with VS Code-like rendering.
- **Dynamic Search**: Fast local search across all subjects.

## 🛠 Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Routing**: React Router (HashRouter)
- **Rendering**: react-markdown, remark-gfm
- **Deployment**: GitHub Actions + GitHub Pages

## 📂 Structure
- `/content`: Pure Markdown notes organized by subject and unit.
- `/src`: The rendering engine and UI components.
- `/data`: JSON metadata for navigation and search.
- `/prompts`: AI prompts for generating new content.

## 📖 Getting Started
1. Clone the repo.
2. Run `npm install`.
3. Run `npm run dev`.
4. Visit `http://localhost:5173`.

## 📄 Documentation
- [Architecture Decisions](ARCHITECTURE_DECISIONS.md)
- [System Philosophy](AI_CONTEXT_SYSTEM.md)
- [Contributing with AI](CONTRIBUTING_AI.md)
- [Content Guidelines](CONTENT_GUIDELINES.md)
- [Deployment Guide](DEPLOYMENT.md)

---
Built with ❤️ for students.
