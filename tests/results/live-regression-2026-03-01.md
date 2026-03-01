# Live Regression Result (2026-03-01)

- Target URL: `https://arvind3.github.io/supplychain-coreconcepts-for-grocery-business/`
- Command: `npx playwright test -c playwright.live.config.ts`
- Scope:
  - Home page UX checks
  - 12 documentation pages
  - Desktop Chromium + mobile viewport (Pixel 7)

## Outcome

- Total tests: 28
- Passed: 28
- Failed: 0
- Runtime: ~13.5 seconds

## Notes

- This run validates that all book pages are reachable on live GitHub Pages and key end-user navigation/CTA flows are functional.
- Repeat anytime with:
  - Local: `npm run test:e2e:live`
  - GitHub Action: `Live Regression - Playwright` (manual dispatch)
