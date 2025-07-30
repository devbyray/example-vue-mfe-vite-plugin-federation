---
title: Project Structure
---

## Monorepo Folder Structure

- `/apps` — Micro-frontend applications (host, nav, products, etc.)
  - Each app typically contains:
    - `index.html` — App entry HTML
    - `package.json` — App-specific dependencies and scripts
    - `vite.config.js` — Vite configuration (with module federation setup)
    - `/public` — Static assets for the app
    - `/src` — Application source code
      - `main.js` — App entry point
      - `App.vue` — Root Vue component
      - `style.css` — Global styles
      - `/assets` — Images and static assets
      - `/components` — Vue components
      - `/pages` — File-based route components (each `.vue` file = route)
- `/packages` — Shared packages (config, ui, etc.)
- `/public` — Static assets (per app)
- `/config` — Shared configuration files
- `/docs` — Documentation
- `pnpm-workspace.yaml` — pnpm workspace configuration
- `package.json` — Root package and scripts

See [Architecture](./architecture.md) for more details.
