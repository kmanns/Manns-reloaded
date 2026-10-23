<!-- stardust:provenance
  writtenBy: stardust:direct
  writtenAt: 2026-10-23T02:40:00Z
  readArtifacts:
    - stardust/state.json
    - stardust/current/_brand-extraction.json
    - stardust/current/PRODUCT.md
    - stardust/current/brand-review.html
    - stardust/reference/midnight-editorial.md
  synthesizedInputs: []
  stardustVersion: 0.34.1
-->
---
title: "Retro-futuristic 1980s tech company, like Maniac; Penn State Blue + cream; identity-first home; stays in Astro"
resolvedAt: 2026-10-23T02:40:00Z
toolkitVersion: "v1.0 (stardust v2)"
schemaVersion: 1
---

# Active direction (2026-10-23T02:40:00Z)

## Phrase

> I'd like to redesign www.khalilmanns.com. The code lives at
> https://github.com/kmanns/Manns-reloaded. I'd like the site to have a
> retro-futuristic technology company feel. Like a 1980's Microsoft logo;
> Look up the Netflix television show Maniac for the EXACT look and feel I
> want. This will be a personal blog/main personal professional (and hobby)
> website. I'd like it to still be based in Astro.

Follow-up answers (2026-10-23):

> I'm a Penn State grad so I want a Penn State Blue, but instead of a white,
> more of a softer cream color. Look at this as a reference: [Midnight
> Editorial spec, saved verbatim at `stardust/reference/midnight-editorial.md`]

> Homepage: Who I am, then posts.

## Restatement

Replace the stock Fuwari theme with a singular identity: Khalil's site as
the front office of a fictional 1980s tech company, the way *Maniac* presents
Neberdine Pharmaceutical Biotech. Committed expression at the edges
(striped slab wordmark, subject badges, form labels, backlit panels),
calm editorial reading inside posts. Owner-pinned Penn State Blue and cream
with Source Serif 4, Inter and JetBrains Mono. Balanced density. The home page
introduces him first, then his writing.

## Movements

- **register** — `brand` (inherited from `current/PRODUCT.md`)
- **expressive axis** — `restrained` → `committed` (masthead and marks
  approach drenched; posts stay committed-calm)
- **tone** — `neutral` → deadpan corporate, quietly funny (Netflix tags:
  Mind-Bending, Dystopian, Dark Comedy)
- **density** — `balanced` (default for brand register; owner spec's 64px
  section gap agrees)
- **distinctiveness** — `familiar` → `singular`
- **audience** — professional contacts plus hobby readers (owner: "personal
  professional (and hobby) website")
- **ia-fidelity** — `reimagined` (owner chose identity-first home over the
  current posts-first feed)
- **constraints** — stays in Astro; all posts and micros kept; WCAG AA;
  owner-pinned palette and type

## Gaps and questions

1. **Q:** How should the two Maniac looks (lab vs ultraviolet) split across
   the site? **A:** Neither; the owner replaced the palette with Penn State
   Blue and soft cream, and supplied the Midnight Editorial spec.
2. **Q:** What should the homepage lead with? **A:** "Who I am, then posts."

## Anchor references

- *Maniac* (Netflix, 2018). Wikipedia: Neberdine Pharmaceutical Biotech;
  GRTA, "an emotionally complex computer"; the show's and NPB's logos were
  inspired by the IBM logo. Netflix: striped slab "MANIAC" logo; key art of
  the two leads in jumpsuits with numbered subject badges; a lab still with
  white backlit angled panels.
- IBM 8-bar logo and the 1980s Microsoft logo (owner-named): striped
  wordmarks.
- Midnight Editorial (owner-supplied spec): palette, type roles, spacing,
  borders-over-shadows, component notes.

## Anti-references

- Stock Fuwari (the current site).
- Synthwave retro: neon grids, sunset gradients, chrome type, Orbitron.
- Glassmorphism (dropped from the owner's spec; impeccable absolute ban).
- Generic-2026-SaaS silhouette.

## Divergence inputs

- **mode** — rebrand: the owner pinned a new palette and type and named the
  captured theme as the thing to replace. No improvements list (Mode A only).
- **seed** — not rolled; every dimension is implied by owner anchors
  (decade 1980s-alternate, craft corporate identity, register deadpan
  corporate fiction, ground cream).
- **font deck** — owner-specified (Source Serif 4 / Inter / JetBrains Mono)
  plus Alfa Slab One for the wordmark only (reasoned: Maniac's IBM-derived
  slab logo).
- **palette** — owner-pinned; brand-native role names in `DESIGN.md`
  (Nittany Navy, Intake Cream, Backlit Panel, Trial Blue, Ice Blue…).
- **anti-toolbox audit** — 5 hits, each justified in
  `DESIGN.json.extensions.divergence.anti_toolbox_hits`: cream ground (owner
  request), mono metadata (owner spec), subject badges (Maniac's badges,
  real data only), institutional voice (eyebrows only), dark navy + cream
  (Penn State Blue). Removed: glass nav, sticky nav.
- **owner-pinned inversions** — hex tokens instead of OKLCH; 4px left rule
  on blockquotes and admonitions.

## Named assumptions

- The fictional company is called **Manns Systems** (wordmark "MANNS",
  sub-label "SYSTEMS"). A naming choice the owner can change in one place.
- Inter stays as the owner chose it (one reflex-list hit, below the refusal
  threshold). Hanken Grotesk is the substitute if he wants to move off it.
- Theme demo posts are restyled, not deleted, until the owner decides.

## Named deviations

- **Astro build instead of `$stardust migrate`.** Stardust's `migrate` emits
  platform-agnostic static HTML. The owner requires the site to stay in
  Astro, so after prototype approval the approved design is implemented
  directly in this repository's Astro layouts, components and styles
  (`src/`). Prototypes still come from `$stardust prototype` and its gates;
  only the final rendering step changes. Replacement lives in `src/` and is
  validated with the same three-viewport loop against `pnpm preview`.

## Command sequence (proposed)

1. `$stardust direct` — this command (target PRODUCT.md, DESIGN.md,
   DESIGN.json, direction).
2. `$impeccable shape` per page — design brief from the direction.
3. `$impeccable typeset`, `$impeccable colorize` — apply the pinned type
   and palette with the wordmark and stripe motif.
4. `$impeccable craft` — render home, post, micros, about/archive
   prototypes.
5. `$impeccable critique`, `$impeccable audit`, `$impeccable adapt` —
   prototype gates (three viewports).
6. `$impeccable polish` — final pass.
7. Owner approval, then the Astro build (named deviation above).

## User confirmation

> "go"

## Pages in scope

- `index` (home), `posts-mar8-25-mar8-25` (post archetype), `micros`,
  `about`, `archive` (with `archive-category-blogging` as its filtered
  variant). `posts-feb1-25-feb1-25` and `posts-guide` follow the post
  archetype.
