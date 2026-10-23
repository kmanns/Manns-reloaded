<!-- stardust provenance: authored by the site owner (pasted in chat, 2026-10-23) as a palette/typography reference for the redesign. Verbatim; not synthesized. -->
---
name: Midnight Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#475f88'
  primary: '#000615'
  on-primary: '#ffffff'
  primary-container: '#001e44'
  on-primary-container: '#7087b2'
  inverse-primary: '#afc7f6'
  secondary: '#2d6194'
  on-secondary: '#ffffff'
  secondary-container: '#98c7ff'
  on-secondary-container: '#1b5385'
  tertiary: '#050700'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e2011'
  on-tertiary-container: '#878873'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#afc7f6'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#2f476f'
  secondary-fixed: '#d1e4ff'
  secondary-fixed-dim: '#9ecaff'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#09497a'
  tertiary-fixed: '#e4e4cc'
  tertiary-fixed-dim: '#c8c8b0'
  on-tertiary-fixed: '#1b1d0e'
  on-tertiary-fixed-variant: '#474836'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  penn-state-blue: '#001E44'
  soft-cream: '#F5F5DC'
  ice-blue: '#6B9BD1'
  ink-black: '#041E42'
  slate-border: rgba(0, 0, 0, 0.08)
typography:
  display-hero:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  meta:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  sidebar-width: 280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 64px
  hero-overlap: -48px
---

## Brand & Style

This design system is a sophisticated, editorial-first framework tailored for high-end personal blogs. It blends **Minimalism** with a **Corporate Modern** sensibility, drawing inspiration from high-end digital journals. The aesthetic is defined by "Refined Editorial Minimalism," prioritizing reading endurance and visual hierarchy through expansive whitespace, crisp grid structures, and elegant hairline borders.

The target audience seeks a professional yet personal intellectual space. The UI evokes a sense of calm authority, resembling a printed broadsheet reimagined for a modern developer-centric or creative professional context. Key stylistic signatures include:
- **Asymmetric Grid Alignment:** Purposeful use of vertical space and staggered content.
- **Image-Led Storytelling:** Generous hero sections that transition into focused reading lanes.
- **Kinetic Precision:** Subtle, spring-like interactions and "ghost" animations that reward user exploration without distraction.

## Colors

The palette is anchored by **Penn State Blue**, providing a deep, authoritative foundation. To avoid the harshness of pure monochrome, **Cream** and **Light Grey** are utilized for background layering, creating a "warm paper" feel that reduces eye strain during long-form reading.

- **Primary:** Used for headlines, primary navigation, and heavy structural elements.
- **Secondary (Ice Blue):** Reserved for interactive states, call-to-action accents, and subtle links.
- **Tertiary (Cream):** The primary canvas for article backgrounds and surface containers.
- **Neutral:** Light Grey is used for peripheral backgrounds (page-level) to make the Cream-colored content cards pop.

## Typography

The typographic strategy balances **Source Serif 4**, a high-end authoritative serif for headings, with **Inter**, a highly legible utilitarian sans-serif for body text.

- **Headlines:** Use tight letter-spacing and substantial leading to maintain an editorial "magazine" feel.
- **Body Text:** Optimized for long-form reading with a generous 1.6x line height.
- **Labels:** **JetBrains Mono** is introduced for technical metadata (dates, reading time, tags) to provide a "technical-humanist" contrast to the classic serif headings.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, transitioning to a fluid stack on mobile.

- **The Asymmetric 12-Column Grid:** On desktop, the layout is split between a main content column (8 columns) and a right-aligned sidebar (4 columns / 280px).
- **Hero Overlap:** Content cards utilize a negative top margin to overlap the hero image section, creating visual depth.
- **Rhythm:** Spacing follows a strict 8px base unit. Section gaps are generous (64px+) to allow the design to breathe.
- **Astro Integration:** Layouts should be implemented as slot-based components (`<MainLayout>`, `<ReadingLayout>`) to ensure consistent container constraints across the site.

## Elevation & Depth

This system eschews heavy shadows in favor of **Tonal Layers** and **Elegant Borders**.

- **Surface Tiers:** The page background uses Neutral (#F2F2F2), while content surfaces use Tertiary (#F5F5DC) or White (#FFFFFF). This creates a subtle "stacked paper" effect.
- **Borders:** Depth is defined by 1px solid or dashed lines using `slate-border`. Borders are the primary tool for separating content units.
- **Interactive Depth:** On hover, cards do not lift with shadows; instead, they may feature a subtle background color shift or a thin, secondary-colored internal border.

## Shapes

The shape language is primarily **Soft (0.25rem)**. This maintains the professional, serious tone of a broadsheet while softening the sharp corners of digital screens.

- **Cards & Images:** Use `rounded-lg` (0.5rem) to differentiate them from the structural page lines.
- **Interactive Pills:** Use `rounded-xl` (0.75rem) for tags and chips to create a tactile, approachable feel for secondary interactions.

## Components

- **Buttons:** Primary buttons are solid `penn-state-blue` with white text, using `rounded-sm`. Secondary buttons use a "ghost" style with a 1px border and a subtle cream hover fill.
- **Article Cards:** Features a "Title-First" hierarchy. The heading is in `headline-md`, followed by a `meta` italicized date. A vertical 2px accent line in `ice-blue` sits to the left of the title on hover.
- **Chips/Tags:** Small, `rounded-xl` containers with `jetbrainsMono` labels. Backgrounds are a 10% opacity version of the primary color.
- **Input Fields:** Minimalist design with only a bottom border that thickens and changes to `ice-blue` on focus.
- **Navigation:** A floating top bar that becomes semi-transparent on scroll, utilizing a backdrop-blur (glassmorphism lite) to maintain legibility over imagery.
- **Admonitions:** Blockquotes for highlights use a thicker 4px left-border in `primary` and a subtle `cream` background tint.
