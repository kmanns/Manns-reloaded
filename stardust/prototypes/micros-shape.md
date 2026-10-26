<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-24T00:10:00Z
  page:             micros
  pageUrl:          https://www.khalilmanns.com/micros/
  againstDirection: stardust/direction.md (Active 2026-10-23T02:40:00Z)
  consumedBy:       impeccable:craft
  canon:            stardust/prototypes/index-proposed.html, posts-mar8-25-mar8-25-proposed.html (approved: header, footer, boot screen, tokens, ledger rows, field rows)
  stardustVersion:  0.34.1
  _provenance:
    capturedSourceLineage:
      - { section: header/footer/boot-screen, source: "approved canon" }
      - { section: masthead, source: "pages/micros.json title 'Anti-Social Media' + lede" }
      - { section: log, source: "pages/micros.json 3 entries; src/content/microposts frontmatter" }
    antiTemplatePass:
      - { pattern: micro feed, defaultReflex: "tweet cards with avatar and like counts", alternatives: ["teletype log rows (date | text | tags) as on the approved home band", "masonry of quote cards"], picked: "teletype log rows on cream, with one navy console strip for the page header", rationale: "continues the approved home band; micros are dated one-liners, a log reads them fastest" }
    substrateTransitions: { default: "intake-cream", exceptions: [ { section: masthead, substrate: "nittany-navy band", purpose: "the page's console header, same as the home band" } ] }
    voiceClassification:
      - { section: masthead, classification: captured-verbatim, copy: "Anti-Social Media; Quick thoughts, observations, and snippets from daily life." }
      - { section: log, classification: captured-verbatim, copy: "3 micro posts, dates, tags" }
      - { section: log, classification: direction-authorized chrome, copy: "tag filter label 'Filter'; entry count '3 entries'" }
-->
---
slug: micros
register: brand
surprise: low
dominantDimension: composition/teletype-log
mode: read
---

# Page shape: micros

1. **header / boot screen / footer** — approved canon; "Micros" is the current nav item. Replaces the captured page's separate layout (brand-review tension layout-split).
2. **masthead** — navy band (night panel in dark mode): H1 "Anti-Social Media", the lede, and a mono count "3 entries".
3. **log** — on cream: a tag filter row (chips for each tag; selecting one filters the list with a few lines of JS; without JS every entry shows and chips link to nothing) then entries as ruled rows: mono date (2024-05-20) | the text at 18px | tags in trial blue. Newest first.

Data attributes: `section[data-section="masthead"][data-intent="orient"][data-layout="band"]`, `section[data-section="log"][data-intent="browse"][data-layout="teletype"][data-items="3"]`.

Unsourced content: (none)
