# Supply Chain Core Concepts for the Grocery Business

Interactive Docusaurus book for Quality Engineers and IT professionals learning grocery retail supply chain concepts.

## Quick Start

```bash
npm install
npm run dev
```

Open: `http://localhost:3000/supplychain-coreconcepts-for-grocery-business/`

## Build

```bash
npm run build
npm run serve
```

## Publish to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

After pushing to `main`, the workflow builds and deploys the site to:

`https://arvind3.github.io/supplychain-coreconcepts-for-grocery-business/`

## Regression Testing

- Live Playwright command:

```bash
npm run test:e2e:live
```

- GitHub Actions workflow for live regression:
  - `.github/workflows/regression-live-playwright.yml`
  - Run manually from Actions tab: `Live Regression - Playwright`

- Latest checked-in live result:
  - `tests/results/live-regression-2026-03-01.md`
