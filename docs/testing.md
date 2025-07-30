---
title: Testing & TDD
---

## Testing & TDD

### Philosophy
- Write tests before implementing features (TDD).
- Use Vitest for all frontend unit and integration tests.

### Running Tests
From the root or any app/package:
```sh
pnpm test
```
Or, for a specific app:
```sh
cd apps/host && pnpm test
```

### Writing Tests
- Place test files alongside the code or in a `__tests__` folder.
- Name tests clearly: `shouldDoSomethingWhenCondition()`.
- Cover edge cases and error handling.

See [Testing Instructions](../.github/instructions/testing.instructions.md) for more details.
