# Contributing with AI — Content Generation Guidelines

This platform is designed to be populated by AI agents. To maintain consistency and quality, follow these rules.

## 1. Directory Structure
All content must reside in the `content/` directory.
Format: `content/<subject-slug>/<unit-slug>/<topic-slug>.md`

## 2. Markdown Structure
Each file must start with a `# Level 1 Heading` as the title.
Use `## Level 2 Headings` for major sections.

## 3. Formatting Rules
- **Code Blocks**: Always specify the language (e.g., ` ```java `).
- **Images**: Place images in `assets/images/<subject-slug>/` and link them using relative paths or absolute paths from root.
- **Math**: (Coming soon) Use LaTeX format.
- **Alerts**: Use GitHub-style alerts:
  ```markdown
  > [!NOTE]
  > This is a note.
  ```

## 4. Asset Handling
- AI should generate descriptive alt text for images.
- Diagrams should ideally be in SVG or high-quality PNG.

## 5. Naming Conventions
- Use kebab-case for filenames: `object-oriented-programming.md`.
- No spaces or special characters in folder names.
