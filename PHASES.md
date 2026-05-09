# Portfolio — Development Phases

## Phase 1: Project Setup ✅
- [x] Flatten directory structure
- [x] Remove Vite boilerplate files
- [x] Clean up entry point and base styles
- [x] Configure project metadata

## Phase 2: Layout & Navigation ✅
- [x] Create layout components (Header, Footer, Layout)
- [x] Set up navigation/routing
- [x] Build responsive shell

## Phase 3: Hero Section ✅
- [x] Design and build hero component
- [x] Add name, title, tagline
- [x] Optional: animated background / intro

## Phase 4: About Section ✅
- [x] Bio section with text
- [x] Skills overview / tech stack
- [x] Optional: image/avatar

## Phase 5: Projects Showcase ✅
- [x] Project card component
- [x] Projects data / content
- [x] Filter or grid layout

## Phase 6: Experience & Education ✅
- [x] Timeline component
- [x] Work history entries
- [x] Education entries

## Phase 7: Contact Section ✅
- [x] Contact form
- [x] Social links
- [x] Optional: form backend / email integration

## Phase 8: Polish & Responsive ✅
- [x] **Reduced whitespace** — tightened internal gaps so the layout feels dense and intentional.
- [x] **Skill tags** — replaced plain text skill lists with pill-style tags.
- [x] **CTA buttons** — replaced plain underline links with solid and ghost button styles.
- [x] **Contact button** — upgraded to a solid filled button.
- [x] **Hamburger menu** — animated hamburger + drawer nav for mobile.
- [x] **Available indicator** — green dot + mono text signal.
- [x] **Hero & About images changed to rectangles** — 3:4 portrait ratio, no circle crop.

## Phase 9: Layout & Readability Pass ✅
- [x] **Max-width removed** — dropped fixed `960px` cap; layout now uses `--side-pad: 6vw` so content fills the full viewport width at any screen size.
- [x] **Base font size raised to 18px** — everything scales up from a larger root, making body copy noticeably more readable.
- [x] **Hero name scales with viewport** — `clamp(3.5rem, 7.5vw, 7rem)` so it fills the screen proportionally on any monitor.
- [x] **Hero image fills its column** — changed from fixed `280px` to `width: 100%; max-width: 420px` so the portrait scales with the viewport.
- [x] **About image fills its column** — `28vw` wide column with `3:4` aspect ratio so the photo is substantial, not a tiny thumbnail.
- [x] **All body text uses `clamp()`** — bio, project descriptions, and experience entries scale fluidly between mobile and large desktop.
- [x] **Section padding uses `7rem` vertical + `6vw` horizontal** — content is evenly inset from edges at all widths without a narrow max-width box.
- [x] **Footer and header padding match `--side-pad`** — consistent horizontal rhythm across every element.

## Phase 10: Deploy
- [ ] Performance optimization
- [ ] Deploy to hosting
