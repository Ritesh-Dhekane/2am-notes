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

### 5. Source Material Philosophy
To maintain academic integrity and data provenance, we follow a strict separation:
- **`source-material/`**: The ground truth. Contains original PDFs, images, and documents. Never modified by the system.
- **`public/content/`**: The rendered reality. AI-processed markdown derived from the source material.

### 6. Markdown Conversion Pipeline
1. **Extraction**: AI agents read raw PDFs/DOCX from `source-material`.
2. **Structuring**: Content is mapped to the standard 5-unit syllabus structure.
3. **Enhancement**: AI generates PYQ solutions, revision notes, and viva questions.
4. **Validation**: Metadata is updated in `data/` to reflect new content availability.

### 7. Scalability & Future-Proofing
The folder-per-topic structure (`topics/topic-name/`) allows for:
- Asset localization (diagrams/images stay with their notes).
- Multi-modal support (audio scripts, quizzes in the same folder).
- Atomic updates (update one topic without affecting the rest of the unit).
