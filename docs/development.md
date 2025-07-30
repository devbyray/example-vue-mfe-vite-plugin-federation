---
title: Development Guide
---

## Development Guide

### Adding a New Micro-Frontend
1. Create a new folder in `/apps`.
2. Scaffold a new Vue 3 + Vite app (see existing apps for structure).
3. Configure `vite.config.js` for module federation.
4. Register the app in the workspace and update any shared config if needed.

### Shared Packages
- Place shared code in `/packages` (e.g., UI components, config).
- Import shared code using workspace aliases.

### Local Development Tips
- Run multiple apps in parallel for integration testing.
- Use Vitest for unit/integration tests.
- Follow [coding standards](../.github/instructions/coding.instructions.md) and [UI guidelines](../.github/instructions/ui-guidelines.instructions.md).

### Hot Reloading
- Vite provides fast HMR for all apps.

See [Testing](./testing.md) for test instructions.
