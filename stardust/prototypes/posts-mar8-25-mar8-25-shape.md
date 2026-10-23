<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-23T04:50:00Z
  page:             posts-mar8-25-mar8-25
  pageUrl:          https://www.khalilmanns.com/posts/mar8-25/mar8-25/
  againstDirection: stardust/direction.md (Active 2026-10-23T02:40:00Z)
  consumedBy:       impeccable:craft
  readArtifacts:
    - stardust/current/pages/posts-mar8-25-mar8-25.json
    - stardust/current/pages/posts-guide.json (stress-test render)
    - src/content/posts/mar8-25/mar8-25.md, src/content/posts/guide/index.md
    - src/config.ts (licenseConfig)
    - stardust/prototypes/index-proposed.html (approved canon: header, footer, tokens, badges, boot screen)
    - DESIGN.md, DESIGN.json, stardust/direction.md
  stardustVersion:  0.34.1
  _provenance:
    capturedSourceLineage:
      - { section: boot-screen, source: "site-wide system-component from approved index (owner request)" }
      - { section: header, source: "site-wide system-component from approved index" }
      - { section: record-header, source: "pages/posts-mar8-25-mar8-25.json post meta (date, category, tags, 57 words, 1 minute) + frontmatter description; ordinal from chronological order of published posts" }
      - { section: reading, source: "pages/posts-mar8-25-mar8-25.json body (verbatim)" }
      - { section: record-footer, source: "pages/posts-mar8-25-mar8-25.json license block (author, published, CC BY-NC-SA 4.0) + neighbouring posts from src/content" }
      - { section: footer, source: "site-wide system-component from approved index" }
    antiTemplatePass:
      - pattern: post header
        defaultReflex: "title + icon-badged meta row (captured Fuwari)"
        alternatives:
          - "records row: one ruled field row (No. / Filed / Department / Length) above a large serif title and the description as standfirst"
          - "striped post number as display element beside the title"
        picked: "records row above serif title"
        rationale: "continues the approved home ledger exactly; striped type stays reserved for the wordmark so the reading page stays calm (Read mode)"
      - pattern: table of contents
        defaultReflex: "floating TOC card in a sidebar on every post"
        alternatives:
          - "right-rail contents list at ≥ 1100px, only when the post has ≥ 2 section headings"
          - "inline contents block under the standfirst"
        picked: "right-rail list, conditional"
        rationale: "most of the owner's posts have no sections; an empty TOC card is noise"
      - pattern: license block
        defaultReflex: "grey card with a giant (cc) watermark"
        alternatives:
          - "record footer: ruled field rows (Author / Filed / License) like the home intake form, plus previous/next records"
        picked: "record footer"
        rationale: "same form grammar as the home page; keeps the captured licence text verbatim"
    substrateTransitions:
      default: "intake-cream ground"
      exceptions: []
    voiceClassification:
      - { section: boot-screen, classification: captured-verbatim, copy: "Version 2.023.9", source: "owner chat" }
      - { section: header, classification: captured-verbatim, copy: "Home, Micros, Archive, About" }
      - { section: record-header, classification: captured-verbatim, copy: "March Update and To-Do; Long time, no blog; 2025-03-08; Blogging; 57 words; 1 minute" }
      - { section: record-header, classification: direction-authorized chrome, copy: "field labels No., Filed, Department, Length; ordinal No. 006" }
      - { section: reading, classification: captured-verbatim, copy: "post body" }
      - { section: record-footer, classification: captured-verbatim, copy: "Khalil Manns; 2025-03-08; CC BY-NC-SA 4.0; neighbour titles" }
      - { section: footer, classification: captured-verbatim, copy: "© 2025 Khalil Manns. All Rights Reserved. / RSS / Sitemap" }
    signatureElements: []
-->
---
slug: posts-mar8-25-mar8-25
url: https://www.khalilmanns.com/posts/mar8-25/mar8-25/
register: brand
surprise: low
dominantDimension: composition/records-row-reading
mode: read
---

# Page shape: post (archetype)

One template, rendered twice:
`posts-mar8-25-mar8-25-proposed.html` (the owner's real post) and
`posts-guide-proposed.html` (the theme's longest post, as a stress test of
headings, code, tables, quotes and a cover image).

## Sections (in render order)

0. **boot screen** — shared with the approved home page (first visit only).
1. **header** — identical to the approved home header; no nav item is
   current on a post.
2. **record header** — a ruled field row like the home ledger:
   No. 006 · Filed 2025-03-08 · Department Blogging · Length 57 words.
   Below it the title (H1, Source Serif 700, up to 3rem) and the description
   as a standfirst. Tags as chips. Cover image when the post has one,
   column width, 8px radius, eager-loaded.
3. **reading** — the post body in a 68ch column, Inter 18px / 1.67, Source
   Serif H2/H3, code blocks on the night panel in JetBrains Mono with
   horizontal scroll, inline code as a navy-tint chip, blockquotes with the
   owner-pinned 4px navy rule, tables with 1px rules and mono headers. A
   contents list sits in a right rail at ≥ 1100px only when the post has
   ≥ 2 section headings (the guide does; the March post does not).
4. **record footer** — ruled rows: Author Khalil Manns · Filed 2025-03-08 ·
   License CC BY-NC-SA 4.0 (linked). Then previous / next records as two
   ledger rows (March post: previous No. 005 "Inching Toward Launch"; no
   next).
5. **footer** — identical to the approved home footer.

## Layout strategy

Container 1200px. Reading column centred at 68ch; with a contents rail the
grid is [column 68ch | rail 240px] left-aligned within the container.
Header-to-title spacing 48px; section padding 64 / 48 / 32.

## Key states

- No description: standfirst omitted. No tags: chip row omitted.
- No cover: header goes straight into the body.
- First or last post: the missing neighbour row is omitted.

## Interaction model

Plain links. Contents links jump to section anchors; the active section is
not tracked (no scroll script). Code blocks scroll horizontally with a
visible focus ring when tabbed.

## Data attributes

- `div[data-section="boot-screen"][data-intent="brand-moment"][data-layout="overlay"]`
- `header[data-section="header"][data-intent="navigate"][data-layout="bar"]`
- `section[data-section="record-header"][data-intent="orient"][data-layout="records-row"]`
- `article[data-section="reading"][data-intent="read"][data-layout="column-68ch"]`
- `section[data-section="record-footer"][data-intent="navigate"][data-layout="ruled-rows"][data-items="2"]`
- `footer[data-section="footer"][data-intent="navigate"][data-layout="bar"]`

## Unsourced content (placeholder list)

(none)

## Open questions for craft

- The post's markdown repeats its title as an H1 inside the body
  ("# March Update and To-Do"). The prototype drops that duplicate; the
  Astro build should do the same.
