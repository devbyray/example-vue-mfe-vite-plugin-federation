# Example Vue 3 Micro-Frontend

This repository demonstrates a modern micro-frontend architecture using Vue 3, Vite, and Module Federation (via OriginJS vite-plugin-federation). It features file-based routing inspired by Nuxt and a modular, scalable structure for rapid prototyping and real-world projects.

### Features
- **Micro-frontend architecture**: Each app is independently developed and deployed.
- **File-based routing**: Pages are defined by files in each app's `src/pages` directory.
- **Module Federation**: Share code and features between apps using OriginJS vite-plugin-federation.
- **Monorepo structure**: Managed with pnpm workspaces for efficient dependency management.
- **Vue 3 & Vite**: Fast, modern development experience.

### Monorepo Structure
- `apps/` — Micro-frontend applications (host, nav, products, etc.)
- `packages/` — Shared packages (config, ui, etc.)
- `public/` — Static assets
- `pnpm-workspace.yaml` — pnpm workspace configuration

### Getting Started

#### Prerequisites
- [pnpm](https://pnpm.io/) (recommended)
- Node.js (v22+ recommended)

#### Install dependencies
```sh
pnpm install
```

#### Run all apps in preview mode
```sh
pnpm run preview
```

This will start all micro-frontend apps in preview mode. Open the host app in your browser to see the architecture in action.


### Documentation

- [Getting Started](./docs/getting-started.md)
- [Architecture](./docs/architecture.md)
- [Development Guide](./docs/development.md)
- [Testing](./docs/testing.md)
- [Deployment](./docs/deployment.md)
- [Contributing](./docs/contributing.md)
- [FAQ](./docs/faq.md)
- [Project Structure](./docs/project-structure.md)

See each app's README for app-specific details.

#### Coding Standards & Guidelines
- [Coding Instructions](.github/instructions/coding.instructions.md)
- [UI Guidelines](.github/instructions/ui-guidelines.instructions.md)
- [Security Instructions](.github/instructions/security.instructions.md)

---

### Learn More
- [OriginJS vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

---

> **Note:** This repository is for learning and experimentation. For production, review security, performance, and deployment best practices.
