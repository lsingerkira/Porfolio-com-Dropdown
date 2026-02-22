<!-- .github/copilot-instructions.md: Project-specific instructions for AI coding agents -->

# Project overview
* This is a Next.js app (App Router) using the `app/` directory. Pages under `app/` are server components by default.
* UI is composed of small presentational components in `components/` consumed by pages in `app/`.

# Key patterns and conventions
* Client vs Server components: files that must run in the browser include the literal directive `'use client';` at the top (example: `components/Intro.tsx`, `components/ArticleCard.tsx`). Server components (pages in `app/`) do not include this directive.
* Exports: most components use named exports (e.g. `export function Intro(...)`) — imports in the app typically use named imports (`import { Intro } from '@/components/Intro'`). Some callers may accept default imports; added a `export default Intro` to `components/Intro.tsx` to avoid brittle import style mismatches. Prefer named exports for new components.
* Path alias: `@/*` maps to project root (see `tsconfig.json`). Use `@/components/...` from anywhere in the repo.
* Styling: Tailwind classes are applied inline in JSX. Keep classnames short and consistent with existing utility usage.
* Test selectors: components include `data-testid` attributes (e.g. `data-testid='intro'`) — preserve these when refactoring to avoid breaking tests.

# Important files and where to look
* Routes and layout: `app/layout.tsx` and `app/(home)/page.tsx` (home page uses `Intro`, `ArticleCard`, `SignupWidget`, `WorkWidget`).
* Shared components: `components/Intro.tsx`, `components/ArticleCard.tsx`, `components/SignUp.tsx`, `components/Work.tsx`, `components/Footer.tsx`.
* TypeScript / path config: `tsconfig.json` (note `paths` mapping `@/*` → `./*`).
* Next config: `next.config.mjs` for framework-level settings.

# Build / dev / debug
* Start dev server: `npm run dev` (standard Next dev server). If you see import/export mismatch errors, check named vs default exports in the referenced component.
* Type checking: rely on the project's TypeScript config. Run `pnpm/ npm/ yarn` as the project uses standard package scripts in `package.json`.

# Agent behavior rules (project-specific)
* When adding or renaming exported components, update all import sites using the repo search for `import { <Name> }` and `import <Name> from` to keep import styles consistent.
* Prefer adding a named export; only add a default export if you intend to support both styles (as was done for `Intro`).
* Do not change `app/` routes from server to client unless necessary. If you convert a page to a client component, add `'use client'` at top and audit any server-only APIs.
* When editing components, keep `data-testid` attributes intact unless tests are updated concurrently.

# Quick examples from this repo
* Importing `Intro` (preferred): `import { Intro } from '@/components/Intro';` (used in `app/(home)/page.tsx`).
* Client directive in components: the top of `components/Intro.tsx` includes `'use client';`.
* Path alias example: `import { ArticleCard } from '@/components/ArticleCard';`.

# If uncertain, where to check
* Look at `app/(home)/page.tsx` to see how components are used together on the home route.
* Search for `data-testid` to find test-coupled elements before refactoring.
* Check `tsconfig.json` for path aliases before changing import paths.

If anything in this instruction is unclear or you want the file to focus on other agent behaviors (commits, PR messages, guardrails), tell me what to emphasize and I'll iterate.
