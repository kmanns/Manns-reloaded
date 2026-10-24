<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-24T00:10:00Z
  page:             archive (+ archive-category-blogging as the filtered state)
  pageUrl:          https://www.khalilmanns.com/archive/
  againstDirection: stardust/direction.md (Active 2026-10-23T02:40:00Z)
  consumedBy:       impeccable:craft
  canon:            stardust/prototypes/index-proposed.html, posts-mar8-25-mar8-25-proposed.html (approved: header, footer, boot screen, tokens, ledger rows, field rows)
  stardustVersion:  0.34.1
  _provenance:
    capturedSourceLineage:
      - { section: header/footer/boot-screen, source: "approved canon" }
      - { section: filters, source: "pages/archive.json categories (Blogging 2, Examples 1, Guides 1, mannstech 2) and tags" }
      - { section: records, source: "pages/archive.json year groups 2025 (3) / 2024 (3); src/content/posts frontmatter" }
    antiTemplatePass:
      - { pattern: archive timeline, defaultReflex: "vertical timeline with dots (captured Fuwari)", alternatives: ["records register: year headings with ledger rows (No. | Filed | Record | Department)", "calendar grid by month"], picked: "records register", rationale: "same ledger as the approved home list; six posts do not fill a calendar" }
    substrateTransitions: { default: "intake-cream", exceptions: [] }
    voiceClassification:
      - { section: records, classification: captured-verbatim, copy: "years, dates, titles, categories, tags, counts" }
      - { section: filters, classification: direction-authorized chrome, copy: "field labels Department, Tags; 'Show all records'" }
-->
---
slug: archive
register: brand
surprise: low
dominantDimension: composition/records-register
mode: read
---

# Page shape: archive

1. **header / boot screen / footer** — approved canon; "Archive" current.
2. **title** — H1 "Archive", mono count "6 records".
3. **filters** — two ruled field rows: Department (category chips with counts) and Tags (chips). The active filter is a navy chip. These are links to the existing /archive/category/… and /archive/tag/… routes.
4. **records** — H2 per year (2025, 2024) with its count, then ledger rows identical to the home list: No. | Filed | Record (title link) | Department chip.

**Filtered state** (archive-category-blogging): same page, Department "Blogging" chip active, title line "Archive · Blogging", only matching rows, and a "Show all records" link.

Data attributes: `section[data-section="filters"][data-intent="filter"][data-layout="ruled-rows"]`, `section[data-section="records"][data-intent="browse"][data-layout="ledger"][data-items="6"]`.

Unsourced content: (none)
