# AGENTS.md — TechCelera Website

## Stack

- **Astro 6** (SSG, no SSR) + **Tailwind CSS 4** via `@tailwindcss/vite`
- **pnpm** as package manager (Node >= 22.12.0 required)
- Deploy: GitHub Pages via `deploy.yml` on push to `master`

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build locally |

Always run `pnpm build` before committing layout/style changes to verify no build errors.

## Architecture

Single-page landing site (one route: `src/pages/index.astro`).

```
src/pages/index.astro          ← Single route, assembles sections
src/layouts/BaseLayout.astro   ← HTML shell, SEO meta, theme init
src/components/               ← Page sections (Header, VideoHero, ServicesSection, AboutSection, ContactSection)
src/styles/global.css          ← Tailwind import + custom theme vars + nav shell styles
public/logo.png               ← Brand logo
public/images/                 ← Static assets
public/videos/                 ← Video assets
```

## Design System

Custom colors defined in `global.css` via `@theme`:

| Token | Value | Use |
|-------|-------|-----|
| `ruby` | `#c0122e` | Primary accent |
| `ruby-bright` | `#d4163c` | Hover/accent |
| `brand-bg` | `#0b0b10` | Dark background (default theme) |
| `brand-text` | `#f8fafc` | Body text on dark |
| `hero-text` | `#f8fafc` | Hero headings |
| `hero-muted` | `#e2e8f0` | Subtext |

Dark mode inverts bg/text. The nav uses `.nav-shell` / `.nav-shell--scrolled` classes for scroll transitions. Nav logo transitions height via `.nav-logo` class (base `h-12`, scrolled `3.25rem`).

## Language

All UI copy is in **Spanish**. Keep all user-facing text in Spanish.

## Brand

**TechCelera** — not "Catalyx" (former name, fully rebranded). Tagline: "Tecnología estratégica".

## Context7 MCP

When working with libraries/frameworks (Astro, Tailwind, etc.), use **Context7** MCP tools (`resolve-library-id` then `query-docs`) to fetch up-to-date docs instead of relying on training data. This avoids hallucinated APIs and outdated code examples.

## Conventions

- No comments in code unless explicitly requested
- Component files are Astro `.astro` — no React/Vue/Svelte
- Tailwind v4 syntax (CSS-based `@theme` config, not `tailwind.config.js`)
- Nav shell scroll behavior is CSS-only (`.nav-shell` / `.nav-shell--scrolled`)
- Theme toggle stored in `localStorage` key `theme-mode`; dark is default