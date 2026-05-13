# Content Style Guide

To ensure high-quality academic rendering, all Markdown content should adhere to these guidelines.

## 1. Code Formatting
- Code snippets should be concise but complete enough to run.
- Include comments for complex logic.
- Use standard naming conventions for the respective language.

## 2. Table Usage
- Use tables for comparisons, feature lists, and parameter descriptions.
- Ensure headers are bold.

## 3. Lists
- Use nested lists for hierarchical information.
- Use checklists for syllabus tracking or "Important Topics" sections.

## 4. Revision Sections
At the end of each topic, include a `## Revision Points` section with bullet points.

## 6. Markdown Structure Conventions
Each topic note should follow this hierarchy:
1. `# Topic Title`
2. `## Learning Objectives`
3. `## Core Concepts`
4. `### Sub-topic 1`
5. `## Practical Applications`
6. `## PYQ Solved Examples`
7. `## Summary & Revision`

## 7. Image & Asset Rules
- Place images in the local `assets/images/` folder within the topic directory.
- Use relative paths: `![Caption](./assets/images/diagram.png)`.
- Always provide descriptive ALT text for accessibility.
- Prefer Mermaid.js for flowcharts:
  ```mermaid
  graph TD;
      A-->B;
  ```

## 8. Metadata Conventions
Every topic folder must contain a `metadata.json` with:
- `title`: Display name.
- `unit`: Unit number (1-5).
- `subject`: Subject slug.
- `difficulty`: (Optional) Easy/Medium/Hard.
- `tags`: Array of relevant keywords.
