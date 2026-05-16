# MarkdownLiveEditor
A simple, interactive Markdown editor web application built with React, Tailwind CSS, and TypeScript. It provides real-time rendering of Markdown text into sanitized HTML.

## Features
- Real-time Markdown rendering
- Sanitized HTML output to prevent XSS
- Print to PDF functionality
- Responsive design for mobile, tablet, and desktop
- Support for complex Markdown elements including tables
- Simple, lightweight interface

## Tech Stack
| Technology | Purpose |
|------------|---------|
| React 19 | UI components and state management |
| TypeScript | Type safety and improved developer experience |
| Vite | Fast build tool and development server |
| Tailwind CSS 4 | Modern utility-first styling |
| marked | Markdown parser |
| DOMPurify | HTML sanitizer for security |

## How It Works
1. User enters Markdown text into the "Input Text" area.
2. The application captures the input in a React state and processes it:
   - Removes hidden control characters.
   - Parses the Markdown into HTML using `marked`.
   - Sanitizes the resulting HTML with `DOMPurify` to ensure security.
3. The rendered HTML is displayed instantly in the "Output Markdown" panel.
4. Users can click the "Print PDF" button to generate a clean, print-optimized version of their rendered Markdown.

## Screenshots
- [Editor Interface](src/assets/screenshots/MarkdownLiveEditorDemo.png)
- [Print Preview](src/assets/screenshots/MarkdownEditorLivePrintDemo.png)

## How to Run
1. Navigate to the project folder:
   ```bash
   cd MarkdownLiveEditor
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the provided local URL in your browser.

## Future Improvements
- Syntax highlighting for code blocks
- Local storage for auto-saving drafts
- Multiple themes for the editor and preview
- Export options for .md and .html files

## API Reference
This project utilizes the [marked](https://marked.js.org/) and [DOMPurify](https://github.com/cure53/dompurify) libraries for its core functionality.