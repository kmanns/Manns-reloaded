<!-- stardust:provenance
  writtenBy:        stardust:prototype/shape
  writtenAt:        2026-10-24T00:10:00Z
  page:             about
  pageUrl:          https://www.khalilmanns.com/about/
  againstDirection: stardust/direction.md (Active 2026-10-23T02:40:00Z)
  consumedBy:       impeccable:craft
  canon:            stardust/prototypes/index-proposed.html, posts-mar8-25-mar8-25-proposed.html (approved: header, footer, boot screen, tokens, ledger rows, field rows)
  stardustVersion:  0.34.1
  _provenance:
    capturedSourceLineage:
      - { section: header/footer/boot-screen, source: "approved canon" }
      - { section: statement, source: "src/content/spec/about.md (verbatim)" }
      - { section: repository, source: "about.md ::github{repo='kmanns/Manns-reloaded'}; pages/about.json repo card (description 'Replatform project for khalilmanns.com', MIT, Astro)" }
      - { section: notice, source: "about.md :::note 'This site is still a work in progress!'" }
      - { section: credits, source: "about.md image sources list" }
    antiTemplatePass:
      - { pattern: about page, defaultReflex: "portrait + long bio card", alternatives: ["subject file: the approved intake-form rows reused (Statement, Repository, Status, Image credits)", "plain article page in the post template"], picked: "subject file rows", rationale: "the owner's About is four short facts, not prose; the form grammar from the approved home holds them" }
    substrateTransitions: { default: "intake-cream", exceptions: [] }
    voiceClassification:
      - { section: statement, classification: captured-verbatim, copy: "This is the home base for Khalil Manns." }
      - { section: statement, classification: placeholder, copy: "longer bio" }
      - { section: repository, classification: captured-verbatim, copy: "kmanns / Manns-reloaded; Replatform project for khalilmanns.com; MIT; Astro" }
      - { section: notice, classification: captured-verbatim, copy: "This site is still a work in progress!" }
      - { section: credits, classification: captured-verbatim, copy: "Sources of images used in this site; Unsplash; 星と少女 by Stella; Rabbit - v1.4 Showcase by Rabbit_YourMajesty" }
      - { section: all, classification: direction-authorized chrome, copy: "field labels Statement, Repository, Status, Image credits" }
-->
---
slug: about
register: brand
surprise: low
dominantDimension: composition/subject-file
mode: read
---

# Page shape: about

1. **header / boot screen / footer** — approved canon; "About" current.
2. **title** — H1 "About".
3. **subject file** — the home page's intake-form rows with the ID card at left:
   - Statement: "This is the home base for Khalil Manns." plus the same bio placeholder as home (one bio, written once, used in both places).
   - Repository: kmanns / Manns-reloaded, "Replatform project for khalilmanns.com", MIT · Astro, linked.
   - Status: "This site is still a work in progress!" as a navy notice tag.
   - Image credits: H2 "Sources of images used in this site" with the three credits verbatim.

Data attributes: `section[data-section="subject-file"][data-intent="introduce"][data-layout="intake-form"][data-items="4"]`.

Unsourced content:
- `[data-placeholder="bio"]` — longer bio (same slot as the home Statement).
