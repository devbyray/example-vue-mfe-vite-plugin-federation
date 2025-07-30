---
title: Architecture
---

## Micro-Frontend Architecture

This project uses a module-federated micro-frontend architecture with Vue 3 and Vite. Each app is independently deployable and can consume remote components or modules from other apps using Module Federation (via OriginJS vite-plugin-federation).

### Key Concepts
- **Host app**: Loads and composes remote micro-frontends.
- **Remote apps**: Expose components or modules to the host and/or other remotes.
- **Shared packages**: Common code (UI, config) is placed in `/packages` and shared via workspace imports.

### How It Works
- Each app has its own Vite config with federation setup.
- Apps communicate via shared state, events, or APIs as needed.
- Code sharing is managed at build time and runtime for efficiency.

See the [Project Structure](./project-structure.md) for more details.
