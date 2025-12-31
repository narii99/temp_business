# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Temp Business is a Nuxt 4-based landing page template with multi-language support (Korean, English, Japanese, Chinese) and dark/light theme switching. It uses a token-based SCSS design system for rapid customization.

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server with hot reload |
| `pnpm build` | Build for production |
| `pnpm generate` | Generate static site (SSG) |
| `pnpm preview` | Preview production build |

## Architecture

### Data-Driven Design
Content is separated from components in `app/data/`:
- `messages.js` - i18n translations for all 4 languages
- `header.js`, `footer.js` - navigation and footer data
- `sections/*.js` - section-specific configuration (hero, about, portfolio)

To customize content, modify data files without touching components.

### Composables
- **useI18n.js** - Language management with `t()` translation function, persists to localStorage, auto-updates `<html lang>`
- **useTheme.js** - Theme mode (light/dark) with system preference detection, applies `data-theme` attribute

### Token-Based Styling
All colors use SCSS tokens defined in `assets/styles/tokens/_colors.scss`:
- Neutral: `$neutral-50` through `$neutral-900`
- Blue-gray: `$blue-gray-50` through `$blue-gray-900`
- Brand/Accent: Green shades (customizable)

CSS variables in `_theme.scss`: `--bg`, `--surface`, `--text`, `--muted`, `--border`, `--primary`, `--accent`

### Component Naming Conventions
- Layout components: `*Layout` (e.g., `MainLayout`)
- Container components: `*Container`
- Wrapper components: `*Wrap`
- List components: `*List` (ul) / `*Item` (li)
- Base components in `app/components/base/` - reusable UI elements
- Section components in `app/components/sections/` - self-contained page sections

### BaseButton Component
Smart button that renders as `<button>`, `<a>`, or `<NuxtLink>` based on props:
- `to` prop → NuxtLink (internal navigation)
- `href` prop → anchor tag (external links)
- Neither → button element
- Variants: `primary`, `ghost`, `soft`

## SCSS Import Order
Main entry is `assets/styles/main.scss`:
1. Reset → 2. Theme → 3. Base (typography, layout) → 4. Components → 5. Sections → 6. Pages

## I18n System
```javascript
const { t, locale, setLocale } = useI18n();
t("header.nav.home") // Returns translated string
```
Message keys use dot notation in `app/data/messages.js`.

## Theme System
```javascript
const { mode, setMode, cycle } = useTheme();
```
FOUC prevention: inline script in `nuxt.config.js` head applies theme before hydration.

## Key Rules
- Use design tokens only - never use hex colors directly
- Class names: kebab-case (e.g., `.main-container`, `.card-list`)
- No style-based IDs - use semantic, purpose-driven names
- Nuxt uses `~~/` alias for root assets (distinct from `app/` directory)
