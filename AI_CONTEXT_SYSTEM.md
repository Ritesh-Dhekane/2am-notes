# 2AM Notes — AI-Native Exam Knowledge Platform
## System Context & Philosophy

### 1. Vision
2AM Notes is a specialized academic rendering engine designed for students who need high-quality, structured, and fast-loading study material. It is "AI-Native" because it is designed to be populated and maintained by AI agents while providing a premium human reading experience.

### 2. Architecture Philosophy
The project follows a strict **Content-System Separation**:
- **SYSTEM**: The React-based rendering engine, UI components, and navigation logic.
- **CONTENT**: Pure Markdown files and structured JSON data.

This separation ensures that:
- Adding content requires zero coding knowledge.
- The UI can be upgraded without touching the notes.
- AI tools can generate content without breaking the site.

### 3. Core Principles
- **Markdown-First**: All knowledge is stored in version-controllable Markdown.
- **Zero Backend**: Static-site compatible (GitHub Pages), using JSON for indexing and search.
- **Dynamic Loading**: Content is fetched at runtime, allowing for a massive knowledge base without a massive initial bundle.
- **Academic Precision**: Specialized rendering for code, math, and diagrams.

### 4. Rendering Flow
1. User navigates to a route (e.g., `/subject/java/unit1`).
2. The System looks up the content path in `subjects.json`.
3. The System fetches the remote `.md` file from the `content/` folder.
4. The `MarkdownRenderer` parses and renders the content with syntax highlighting.
