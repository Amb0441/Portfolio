# Portfolio — Development Phases

## Phase 1: Project Setup ✅
- [x] Flatten directory structure, remove Vite boilerplate, configure metadata.

## Phase 2: Layout & Navigation ✅
- [x] Header, Footer, Layout components with responsive shell.

## Phase 3–7: Core Sections ✅
- [x] Hero, About, Projects, Experience/Education, Contact — all built and wired up.

## Phase 8: Polish & Responsive ✅
- [x] Hamburger nav, reduced whitespace, skill tags, button styles, green badge, rectangular photo crops.

## Phase 9: Layout & Readability Pass ✅
- [x] Removed fixed max-width cap, raised base font, viewport-relative hero type, fluid clamp() sizing.

## Phase 10: Full UI Redesign ✅
- [x] **New design system** — clean token set: `--bg`, `--bg-2`, `--border`, `--border-strong`, `--text`, `--text-2`, `--text-3`, `--blue`, `--green`. One font (Inter) + one mono (JetBrains Mono).
- [x] **Container strategy** — `--w: 1080px` max-width with `--px: clamp(1.25rem, 5vw, 3.5rem)` side padding so content is always centered and properly inset.
- [x] **Header** — fixed, 52px height, blurs and gains border on scroll. Nav links use pill hover style. Hamburger + drawer for mobile.
- [x] **Hero** — two-column grid (`1fr auto`), circle photo with `clamp(180px, 20vw, 260px)` sizing. Name is a single large weight-600 heading. Badge, role text, two CTA buttons. On mobile: photo shrinks to 100px, stacks above text.
- [x] **About** — alternating `var(--bg-2)` background. Portrait photo (200px, 3:4 ratio). Skills shown as a 3-column vertical list instead of pills — cleaner at a glance.
- [x] **Projects** — replaced list layout with a **card grid** using a 1px gap on a border-colour background trick for seamless inner borders. Each card has title, GitHub/Live links, description, and mono tag chips.
- [x] **Experience** — clean timeline with `9rem` year column, title, subtitle in accent blue, and description. No redundant section labels.
- [x] **Contact** — left column is info + social links (border-bottom separated). Right column is a labelled form card on `var(--bg-2)` with focus ring on inputs.
- [x] **Footer** — minimal one-line with name and location.
- [x] **Breakpoints** — 860px (adjust photo/skills), 720px (stack hero, hide desktop nav), 480px (single-col skills, less padding).

## Phase 11: Deploy
- [ ] Performance optimisation
- [ ] Deploy to hosting
