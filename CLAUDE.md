# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

`@naverpay/hidash` is a zero-dependency, performance-focused drop-in replacement for Lodash. Each utility is exported via subpath imports (e.g., `import has from '@naverpay/hidash/has'`). Namespace imports are **not supported**.

## Commands

```bash
pnpm test                        # run all tests
pnpm test -- src/has.test.ts     # run a single test file
pnpm bench                       # run all benchmarks
pnpm build                       # clean + vite build (dual CJS/ESM output)
pnpm lint                        # eslint check
pnpm lint:fix                    # eslint fix
pnpm prettier                    # prettier check
pnpm prettier:fix                # prettier fix
pnpm run generate                # regenerate index.ts + package.json exports from src/*.ts
```

## Architecture

### One file = one utility

Every utility lives as a single file in `src/` with a strict pattern enforced by `eslint-plugin-hidash`:

- `src/<name>.ts` — implementation (must have both a named export and a default export)
- `src/<name>.test.ts` — tests (compare against lodash to verify compatibility)
- `src/<name>.bench.ts` — benchmarks (measure performance vs lodash)
- Shared types live in `src/internal/types.ts`

### Code generation

`pnpm run generate` (`scripts/generate-utils.mjs`) scans `src/*.ts` (excluding test/bench files) and auto-generates:

1. `index.ts` — moduleMap used by the Vite build config
2. `package.json` `exports` field — subpath export entries for every utility

**Run `pnpm run generate` after adding or removing any utility file.**

### Build output

Vite (via `@naverpay/pite`) produces per-function output: `<name>.js`, `<name>.mjs`, `<name>.d.ts`, `<name>.d.mts`. These are copied to the package root at publish time (`scripts/pre-build.mjs`) and cleaned up post-publish.

### Release process

Uses Changesets. Create a changeset file, merge to `main`, and the GitHub Actions publish workflow handles versioning and npm publish automatically.

## Key Constraints

- **Lodash behavioral compatibility is mandatory.** Tests assert `has(x, y) === _has(x, y)` against real lodash. Every edge case must match lodash's output exactly.
- **Performance must be equal to or better than lodash.** Benchmarks verify this.
- **Zero runtime dependencies.** lodash is a devDependency used only in tests/benchmarks.
- **Dual export required.** Each `src/<name>.ts` must export both `export function <name>` and `export default <name>`. This is enforced by the `enforce-single-function-dual-export` ESLint rule.
- **JSDoc header comments are required** on exported functions: `@description`, `@param`, `@returns`.
- **Comments in English only.**

## Git Hooks (lefthook)

- **pre-commit**: eslint, prettier, markdownlint (parallel, on staged files)
- **commit-msg**: `@naverpay/commit-helper` validates commit message format
