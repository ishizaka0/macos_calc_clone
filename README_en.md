# macos_calc_clone

This project replicates the macOS calculator using v0 and Claude.

## Installation

```
git clone https://github.com/ishizaka0/macos_calc_clone.git
cd macos_calc_clone
npm install
npm run dev
```

The application runs on http://localhost:3000.
It is also deployed on Vercel: https://macos-calc-clone.vercel.app/

## Development Environment & Tools Used

- node : v18.17.0
- next : 14.2.11
- v0 : WEB interface (no API)
- ChatGPT 4.0 : via API
- Claude 3.5 Sonnet : via API
- VSCode + ClaudeDEV extension
- ESLint: Static analysis tool for code quality and style

## Components and Frameworks Used

- TypeScript: A superset of JavaScript that adds static typing
- Next.js: A React framework enabling server-side rendering and static site generation
- React: JavaScript library for building user interfaces
- Tailwind CSS: Utility-first CSS framework aimed at streamlining UI design
- React Color (v2.19.3): Color picker component library

## Deployment Environment

- Vercel: Cloud platform specializing in hosting and automatic deployment of Next.js applications. It integrates with the GitHub repository and automatically deploys on each push.

## Components

- `Button.js`: Button UI component
- `Calculator.tsx`: Main component of the calculator
- `ColorCalculator.js`: Calculator component for color calculations
- `ImageDisplay.js`: Component to display images

## Project Structure

```
$ tree -I node_modules/
.
├── LICENSE
├── README.md
├── README_en.md
├── components
│   ├── Button.js
│   ├── Calculator.tsx
│   ├── ColorCalculator.js
│   └── ImageDisplay.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── pages
│   ├── _app.js
│   └── index.js
├── postcss.config.js
├── postcss.config.mjs
├── public
│   └── ss.png
├── src
├── styles
│   └── globals.css
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json

5 directories, 20 files
```
