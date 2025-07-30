# Micro-Frontend Example: Host App

This project demonstrates a micro-frontend architecture using Vue 3, file-based routing (inspired by Nuxt), and Module Federation via the [OriginJS vite-plugin-federation](https://github.com/originjs/vite-plugin-federation).

## Features

- **Micro-frontend architecture**: Modular, scalable, and independently deployable frontends.
- **File-based routing**: Pages are defined by files in the `src/pages` directory, similar to Nuxt.
- **Module Federation**: Powered by OriginJS vite-plugin-federation for sharing code and features between apps.
- **Vue 3 & Vite**: Fast development and build experience.

## Getting Started

### Prerequisites
- [pnpm](https://pnpm.io/) (recommended)
- Node.js (v22+ recommended)

### Install dependencies

From the root of the monorepo:

```sh
pnpm install
```

### Run the app

To preview the micro-frontend setup, run the following command from the root directory:

```sh
pnpm run preview
```

This will start all apps in preview mode, allowing you to see the micro-frontend architecture in action.

## Project Structure

- `src/pages/` — File-based routes
- `vite.config.js` — Vite configuration with plugin federation
- `package.json` — Project dependencies and scripts

## Learn More
- [OriginJS vite-plugin-federation Documentation](https://github.com/originjs/vite-plugin-federation)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

---

> **Note:** This is an example project for learning and experimentation. For production use, review security, performance, and deployment best practices.

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
