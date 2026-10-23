---
name: Manns Systems
description: Khalil Manns's home base, presented as a 1980s technology company that never existed
colors:
  nittany-navy: "#001E44"
  intake-cream: "#F5F5DC"
  backlit-panel: "#FBFBEE"
  case-file-ink: "#1B2433"
  memo-grey: "#4A5160"
  trial-blue: "#2D6194"
  ice-blue: "#6B9BD1"
  phosphor-ice: "#98C7FF"
  night-panel: "#0A2C5A"
  night-muted: "#B9C9E0"
  rule-light: "rgba(0, 30, 68, 0.14)"
  rule-dark: "rgba(245, 245, 220, 0.16)"
typography:
  wordmark:
    fontFamily: "Alfa Slab One, Rockwell, Georgia, serif"
    fontSize: "clamp(3rem, 9vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.02em"
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline-lg:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.25
  headline-md:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.67
  body-md:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label-caps:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: "0.08em"
  meta:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
  chip: "12px"
spacing:
  unit: "8px"
  gutter: "24px"
  margin-mobile: "16px"
  container-max: "1200px"
  reading-max: "68ch"
  sidebar-width: "280px"
  sectionPadding-desktop: "64px"
  sectionPadding-tablet: "48px"
  sectionPadding-mobile: "32px"
components:
  button-primary:
    backgroundColor: "{colors.nittany-navy}"
    textColor: "{colors.intake-cream}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.nittany-navy}"
    rounded: "{rounded.sm}"
    padding: "11px 19px"
  card:
    backgroundColor: "{colors.backlit-panel}"
    textColor: "{colors.case-file-ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  badge:
    backgroundColor: "{colors.nittany-navy}"
    textColor: "{colors.intake-cream}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  chip:
    backgroundColor: "rgba(0, 30, 68, 0.08)"
    textColor: "{colors.nittany-navy}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  link:
    textColor: "{colors.trial-blue}"
---
<!-- stardust:provenance writtenBy=stardust:direct at=2026-10-23 read=[stardust/reference/midnight-editorial.md, stardust/current/_brand-extraction.json, PRODUCT.md, stardust/direction.md] notes="Colors and type are owner-pinned from midnight-editorial.md; hex kept because the owner's spec is the normative source. Wordmark face (Alfa Slab One) and the stripe motif come from the Maniac / IBM logo reference." -->

## Overview

**Manns Systems** is the fiction: a 1980s technology company, in the
manner of *Maniac*'s Neberdine Pharmaceutical Biotech, whose only product is
Khalil Manns. The site reads like that company's front office and records
room. Warm cream paper, Penn State navy, a heavy slab wordmark cut with
horizontal stripes, numbered subject badges and small corporate form labels.

The theatre is concentrated at the edges: the wordmark, the masthead,
badges and labels. Inside a post the page turns into calm editorial reading.

## Colors

- **Nittany Navy** `#001E44` (Penn State Blue): wordmark, headings, buttons,
  structural rules, and the whole ground in dark mode.
- **Intake Cream** `#F5F5DC`: the light-mode page ground and the dark-mode
  text color.
- **Backlit Panel** `#FBFBEE`: cards and containers sit *lighter* than the
  ground, like the lab's backlit wall panels.
- **Case-file Ink** `#1B2433` body text; **Memo Grey** `#4A5160` secondary
  text (7.2:1 on cream).
- **Trial Blue** `#2D6194`: links and interactive text in light mode
  (5.8:1).
- **Ice Blue** `#6B9BD1`: accent only in light mode (hover rules, stripe
  highlights, focus rings) because it is 2.6:1 on cream. In dark mode it is
  usable as text (5.7:1).
- **Night Panel** `#0A2C5A`, **Phosphor Ice** `#98C7FF` (dark-mode links,
  9.4:1), **Night Muted** `#B9C9E0` (navy-tinted secondary text, 9.8:1;
  replaced the grey `#C8C8B0` after the detector flagged grey-on-navy).

No other hues. The site never uses neon, gradients-as-decoration or
synthwave pink and purple.

## Typography

- **Wordmark:** Alfa Slab One, all caps, sliced by horizontal stripes. Used
  for the "MANNS" mark and the home masthead only, never for running
  headings.
- **Headings:** Source Serif 4, 600–700, tight tracking.
- **Body:** Inter 16–18px, line-height ~1.65, measure capped at 68ch.
- **Labels and metadata:** JetBrains Mono caps at 12px, tracked 0.08em,
  for form-style labels, dates, subject numbers and tags.

Scale steps 48 → 32 → 24 → 18 → 16 (owner's spec), ratio 1.33–1.5 at the
display end.

## Layout

8px grid. 1200px container; desktop pages use a main column plus a 280px
sidebar where a sidebar has a job (post table of contents, archive filters).
Section padding 64 / 48 / 32px (desktop / tablet / mobile). Reading column
caps at 68ch. The header is not sticky. Mobile collapses to one column with
16px gutters.

## Elevation & Depth

No drop shadows. Depth comes from tonal layers (backlit panels on cream
ground, night panels on navy) and 1px rules. Hover changes the panel tone or
draws an ice-blue rule; nothing lifts.

## Shapes

Mostly square: 2px on buttons and badges, 8px on cards and images, 12px on
chips. Panels may carry one clipped (chamfered) corner, the lab-panel
signature, applied to cards and the masthead only.

## Components

- **Wordmark lockup:** "MANNS" in the striped slab, with "SYSTEMS" or the
  owner's subtitle in label caps. Stripes are drawn with a mask so the
  letters stay real text for assistive tech.
- **Subject badge:** navy tag with label-caps text, e.g. a post's ordinal
  and date, derived only from real content order and dates.
- **Form field label:** label-caps text used only as a field or column
  label (NAME, OCCUPATIONS, No., Filed). Never as an eyebrow above a
  heading: headings carry plain language on their own.
- **Intake form:** 2px navy top rule, rows split by 1px rules, a label column
  and a value column; collapses to stacked rows under 640px.
- **Records ledger:** numbered rows (No., Filed, Record, Department) with a
  2px ice-blue rule that draws across the row top on hover.
- **Boot screen:** first visit only; navy field, striped MANNS lockup,
  version label, striped progress fill and a mono percentage; ≤ 1.6s, skippable,
  never shown without JS or with reduced motion.
- **Post card:** backlit panel, serif title, badge row, excerpt; hover draws
  a 2px ice-blue rule along the top edge.
- **Buttons:** navy solid primary; outlined secondary that fills cream on
  hover.
- **Chips:** tags as soft navy-tint pills in label caps.
- **Admonition and blockquote:** 4px navy rule with a cream-panel tint.
- **Inputs (search):** bottom rule only, thickening to ice blue on focus.

## Do's and Don'ts

- **Do** keep the company fiction in field labels, marks and badges; keep the
  owner's prose untouched.
- **Do** give every number on the page a real source (post order, dates,
  counts from the content collections).
- **Do** keep posts calm: no stripes or badges inside the reading column
  beyond the post header.
- **Don't** add glassmorphism, drop shadows, neon, gradient text or synthwave
  imagery.
- **Don't** make the nav sticky or put a two-button CTA pair in the hero.
- **Don't** invent a bio, job titles or stats; mark missing copy as a
  placeholder.
