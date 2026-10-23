---
name: Khalil Manns (current: Fuwari)
description: Stock Fuwari blog theme at hue 250, as captured 2026-10-23
colors:
  page-bg: "oklch(0.95 0.01 250)"
  card-bg: "#ffffff"
  banner-floor: "#041e42"
  primary: "oklch(0.70 0.14 250)"
  btn-content: "oklch(0.55 0.12 250)"
  btn-regular-bg: "oklch(0.95 0.025 250)"
  heading: "#111827"
  text: "rgba(0, 0, 0, 0.75)"
  border: "#e1e4e8"
  codeblock-bg: "oklch(0.2 0.015 250)"
typography:
  heading:
    fontFamily: "Roboto, sans-serif"
    fontSize: "30px"
    fontWeight: 800
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  mono:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
rounded:
  sm: "5.25px"
  md: "8px"
  lg: "16px"
  pill: "9999px"
spacing:
  base: "4px"
components:
  card:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.lg}"
  button-regular:
    backgroundColor: "{colors.btn-regular-bg}"
    textColor: "{colors.btn-content}"
    rounded: "{rounded.md}"
---
<!-- stardust:provenance writtenBy=stardust:extract at=2026-10-23 mode=descriptive read=[stardust/current/_computed-styles.json, stardust/current/_brand-extraction.json, src/styles/variables.styl, tailwind.config.cjs] -->

## Overview

The site is the stock Fuwari Astro theme with its hue set to 250 (a soft
periwinkle blue). It is a white-card-on-pale-blue blog layout: a full-width
banner photo (laptop internals), a floating white nav bar overlapping it, a
left sidebar (profile card, categories, tags) and a right column of post
cards. Nothing about the visual system is specific to Khalil Manns except the
two images.

## Colors

All theme colors derive from one OKLCH hue (250) through `--hue`, which
visitors can change with the palette button in the nav. The page floor under
the banner is a fixed navy `#041e42`. Text is translucent black. There is no
warm color anywhere.

## Typography

Roboto for everything except code (JetBrains Mono). Headings are heavy
(700–800). The size steps (40 → 30 → 28 → 26.25 → 24px) do not follow a
modular scale.

## Layout

12-column-ish two-pane layout capped around 1200px: 280px sidebar plus a
main column of stacked cards. The banner occupies the first ~470px. On
mobile the sidebar stacks below the posts.

## Elevation & Depth

Flat white cards; one large soft shadow on floating panels (search, theme
menu).

## Shapes

16px card radius, 8px controls, pill tags. Card cover images clip to the
card radius.

## Components

Post card (title with a left accent bar, icon-badged meta row, word count,
optional cover image on the right, a chevron "enter" block), profile card,
category list with counts, tag chips, license block under posts, pagination
squares.
