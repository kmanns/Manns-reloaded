<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-23T02:55:00Z
  page:             index
  pageUrl:          https://www.khalilmanns.com/
  againstDirection: stardust/direction.md (Active 2026-10-23T02:40:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/index.json
    - stardust/current/_brand-extraction.json
    - src/config.ts (profileConfig, navBarConfig)
    - src/content/posts/** frontmatter, src/content/microposts/*.md
    - DESIGN.md
    - DESIGN.json
    - stardust/direction.md
  stardustVersion:  0.34.1
  _provenance:
    capturedSourceLineage:
      - { section: boot-screen, source: "direction-authorized new: owner request 2026-10-23 ('Loading Screen' for first-time visitors, Manns Systems logo, 0-100%, Version 2.023.9)" }
      - { section: header, source: "site-wide system-component (_brand-extraction.json#systemComponents[kind=header]); nav labels from navBarConfig" }
      - { section: identity, source: "pages/index.json profile card (name, bio, avatar, social links) + src/config.ts siteConfig.subtitle; promoted from sidebar to first viewport (direction-authorized: iaPriorities identity-first)" }
      - { section: records, source: "pages/index.json post-card list (6 posts) + src/content/posts frontmatter" }
      - { section: transmissions, source: "pages/micros.json (page title 'Anti-Social Media', 3 entries); direction-authorized new on home: iaPriorities latest-writing" }
      - { section: footer, source: "site-wide system-component (_brand-extraction.json#systemComponents[kind=footer])" }
    antiTemplatePass:
      - pattern: hero composition
        defaultReflex: "centered-stack hero (avatar circle, name, tagline, two buttons)"
        alternatives:
          - "letterhead: striped wordmark full-width, name and tagline in a typed memo block below"
          - "subject ID card: identity as a Maniac-style badge panel (avatar as ID photo, label-caps fields) beside a striped MANNS wordmark"
          - "type-only manifesto: tagline set huge in Source Serif, no image"
        picked: "subject ID card beside striped wordmark"
        rationale: "Maniac key art centers on numbered subject badges; the avatar already reads as an ID photo; keeps the owner's 'M' image at its identity position"
      - pattern: post list
        defaultReflex: "card grid with cover images and chevron blocks (captured Fuwari cards)"
        alternatives:
          - "records ledger: one row per post, badge column (No., date), title, excerpt, category"
          - "featured latest + compact list"
        picked: "records ledger with the latest entry given a taller row"
        rationale: "six short posts with two covers do not fill a card grid; a ledger reads like a company records index and keeps dates scannable"
      - pattern: micro posts
        defaultReflex: "tweet-style cards with avatars"
        alternatives:
          - "teletype strip: monospace timestamp + one line per entry on a night-panel band"
          - "three plain quote blocks"
        picked: "teletype strip on a night-panel band"
        rationale: "micros are short, dated, and the owner titles them 'Anti-Social Media'; a terminal readout nods to GRTA's computer room"
    substrateTransitions:
      default: "intake-cream ground"
      note: "boot screen is a transient overlay, not a page section; not counted"
      exceptions:
        - { section: transmissions, substrate: "nittany-navy band", purpose: "the one dark 'computer room' moment on the page" }
    voiceClassification:
      - { section: boot-screen, classification: captured-verbatim, copy: "Version 2.023.9", source: "owner chat 2026-10-23" }
      - { section: boot-screen, classification: direction-authorized chrome, copy: "MANNS / SYSTEMS lockup; 0–100% counter" }
      - { section: header, classification: captured-verbatim, copy: "Home, Micros, Archive, About", source: navBarConfig }
      - { section: header, classification: direction-authorized rewrite, copy: "MANNS wordmark, SYSTEMS sub-label", source: "direction.md § Named assumptions" }
      - { section: identity, classification: captured-verbatim, copy: "Khalil Manns; Homepage of the Manns himself; The Manns with the Plan: Girl Dad, Tech, Retro Tech, Content & Commerce, political hobbyist; Bluesky / GitHub / LinkedIn", source: "src/config.ts" }
      - { section: identity, classification: direction-authorized chrome, copy: "form labels: SUBJECT FILE, NAME, OCCUPATIONS, CONTACT" }
      - { section: identity, classification: placeholder, copy: "two-sentence professional bio" }
      - { section: records, classification: captured-verbatim, copy: "post titles, dates, descriptions, categories", source: "src/content/posts frontmatter" }
      - { section: records, classification: direction-authorized chrome, copy: "eyebrow TRIAL LOG; heading 'Latest posts'; badge 'No. 006' (ordinal from chronological order of published posts)" }
      - { section: transmissions, classification: captured-verbatim, copy: "Anti-Social Media; Quick thoughts, observations, and snippets from daily life.; 3 micro posts with dates and tags", source: "pages/micros.json" }
      - { section: footer, classification: captured-verbatim, copy: "© 2025 Khalil Manns. All Rights Reserved. / RSS / Sitemap" }
    signatureElements: []
-->
---
slug: index
url: https://www.khalilmanns.com/
register: brand
surprise: high
dominantDimension: composition/subject-id-card
---

# Page shape: index (home)

## Sections (in render order)

0. **boot screen** (owner-requested, 2026-10-23; role `boot-screen`) —
   first visit only. A full-viewport Nittany Navy overlay: the Manns
   Systems wordmark lockup (the striped MANNS mark stands in until the
   owner supplies a real logo), a label-caps line "VERSION 2.023.9", a
   0–100% counter in JetBrains Mono with a thin striped progress bar.
   Runs ≤ 1.6s, then fades out over 300ms. Rules:
   - Shown only when JS runs, `localStorage` is readable, no
     `mns-booted` key exists, and `prefers-reduced-motion` is not
     `reduce`. A tiny inline head script sets `html.boot` before paint so
     there is no flash; without JS the overlay never renders, so the page
     is never stranded behind it.
   - Any click, tap or key press skips it immediately.
   - Overlay is `aria-hidden="true"`; the page underneath stays in the
     accessibility tree and is not delayed for crawlers or LCP.
   - The percentage is a timed count, not a real asset-loading measure
     (the site is static); said plainly in provenance.
1. **header** (role `header`) — cream bar, not sticky. Left: striped
   "MANNS" wordmark lockup with "SYSTEMS" in label caps. Right: nav Home ·
   Micros · Archive · About, a search control, and the light/dark switch.
   The GitHub link moves to the identity contact row (pointing at the
   owner's own profile, not Fuwari's repo).
2. **identity** (role `identity-intro`) — first viewport. Two-column at
   desktop: left a very large striped "KHALIL MANNS" set in the wordmark
   face (H1, real text), with "Homepage of the Manns himself" under it.
   Right: a **subject ID card** (backlit panel, one chamfered corner): the
   "M" avatar as the ID photo, label-caps fields NAME / OCCUPATIONS /
   CONTACT, occupations rendered as chips split from the owner's tagline
   (Girl Dad · Tech · Retro Tech · Content & Commerce · Political
   hobbyist), contact row Bluesky / GitHub / LinkedIn. A short bio slot is a
   visible placeholder for the owner to write.
3. **records** — eyebrow TRIAL LOG, H2 "Latest posts". Ledger of the six
   published posts, newest first. Each row: navy subject badge
   (`No. 006`, `2025-03-08`), serif title linking to the post, the post's
   description, category chip. Latest row taller. Link to the full archive
   at the end ("All posts in the archive").
4. **transmissions** — full-bleed Nittany Navy band. Eyebrow
   ANTI-SOCIAL MEDIA (the owner's own title), lede "Quick thoughts,
   observations, and snippets from daily life." Three micros as
   teletype rows: mono timestamp, the text in cream, tags in phosphor ice.
   Link "All micros".
5. **footer** (role `footer`) — cream, top rule. Copyright, RSS, Sitemap,
   social links. A thin striped rule (stripe motif divider) above it. No
   Fuwari credit.

## Layout strategy

- Container 1200px, 24px gutters (16px on mobile), section padding 64 / 48 /
  32px.
- Identity: 7/5 split at ≥ 1100px; stacks below (ID card second) at < 1100px.
  Wordmark H1 uses `clamp()` so "KHALIL MANNS" breaks to two lines and
  never overflows at 360px.
- Records ledger: grid columns [badge 9rem | title+excerpt | category] at
  desktop; badge moves above the title on mobile.

## Key states

- Default as above.
- Fewer than 3 micros: the band still renders with what exists.
- Hover on a ledger row: 2px ice-blue rule along the row's top edge,
  panel tone lifts to backlit; no shadow.

## Interaction model

- Nav and ledger rows are plain links. The whole row is not a link; the
  title is (keeps text selectable).
- Theme switch toggles `data-theme` on `<html>` (light/dark); prototype
  includes it so both modes can be reviewed.
- Search is a visual stub in the prototype (Pagefind wires up in Astro).

## Data attributes

- `div[data-section="boot-screen"][data-intent="brand-moment"][data-layout="overlay"]`

- `header[data-section="header"][data-intent="navigate"][data-layout="bar"]`
- `section[data-section="identity"][data-intent="introduce"][data-layout="split-7-5"][data-items="2"]`
- `section[data-section="records"][data-intent="browse"][data-layout="ledger"][data-items="6"]`
- `section[data-section="transmissions"][data-intent="browse"][data-layout="teletype"][data-items="3"]`
- `footer[data-section="footer"][data-intent="navigate"][data-layout="bar"]`

## Unsourced content (placeholder list)

- `section[data-section="identity"] [data-placeholder="bio"]` — a
  two-sentence professional bio. The captured site has none; the owner
  writes it. Render with the placeholder signature (dashed outline,
  PLACEHOLDER label).

## Open questions for craft

- Stripe count in the H1: 7 bars across cap height reads best at large
  sizes; the header lockup at ~28px may need 5. Craft decides by eye.
- Whether the ID card shows the post count ("RECORDS ON FILE: 6") —
  allowed, since it is a real count; drop it if it crowds the card.
