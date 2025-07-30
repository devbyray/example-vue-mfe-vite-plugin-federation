---
title: Deployment
---

## Deployment

### Building Apps
- Each app can be built independently:
  ```sh
  cd apps/host && pnpm build
  cd apps/nav && pnpm build
  cd apps/products && pnpm build
  ```
- Output is in each app's `dist/` folder.

### Deploying
- Deploy each app's `dist/` to your preferred static hosting (e.g., Vercel, Netlify, Azure Static Web Apps).
- Ensure remotes are deployed before the host for correct federation.

### Environment Variables
- Store secrets and environment-specific config in `.env` files (never commit secrets).

### Security
- Follow [security instructions](../.github/instructions/security.instructions.md) for secure deployment.

See each app's README for app-specific deployment notes.
