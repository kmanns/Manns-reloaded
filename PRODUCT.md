<!-- stardust:provenance writtenBy=stardust:direct at=2026-10-23 input="owner phrase (redesign, Maniac retro-futurist tech company, Penn State Blue + cream, identity-first home, stays in Astro)" read=[stardust/current/PRODUCT.md, stardust/current/_brand-extraction.json, stardust/reference/midnight-editorial.md, stardust/direction.md] synthesized=[Positioning, Product Principles] -->
# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Professional contacts** (recruiters, collaborators, peers) who look Khalil
  up and need to learn in under a minute who he is, what he works on, and
  where to reach him.
- **Hobby readers** who share his interests (retro tech, tech, content and
  commerce, politics, parenting) and come for the posts and micro posts.

Both arrive mostly from links (social profiles, search, shared posts), on
phones and laptops alike.

## Product Purpose

Khalil Manns's home base: one place that introduces him professionally and
personally, then carries his writing. Success means a visitor leaves knowing
who he is and has read at least one post.

## Positioning

_provenance: inferred_ — basis: the owner's tagline "The Manns with the Plan:
Girl Dad, Tech, Retro Tech, Content & Commerce, political hobbyist" and the
chosen reference.

A personal site presented as if it were a 1980s technology company that never
existed, the way *Maniac*'s Neberdine Pharmaceutical Biotech is. The joke is
played straight: corporate labels, test-subject badges and a striped
wordmark, applied to one person's blog. It suits someone who writes about
retro tech, and a generic portfolio template could not claim it.

## Capabilities and Constraints

- Stays an Astro static site, deployed to GitHub Pages at
  `www.khalilmanns.com`. The redesign replaces the Fuwari theme's layouts,
  components and styles; it does not change hosting.
- Keeps: `posts` and `microposts` content collections, the About page,
  Pagefind search, RSS, archive by category and tag, table of contents on
  posts, light/dark/system switching.
- Removes: the visitor hue picker (one fixed palette), Fuwari credit and the
  nav link to Fuwari's repository.
- Micros must use the same layout system as every other page.
- Undecided (owner to confirm): whether the theme demo posts ("Markdown
  Extended Features", "Simple Guides for Fuwari", `test.mdx`) are deleted.
  The redesign does not delete content on its own.

## Brand Commitments

- **Name:** Khalil Manns. Existing title line "Homepage of the Manns
  himself" and tagline "The Manns with the Plan" are his and stay.
- **Register:** `brand`, with long-form reading surfaces.
- **Colors (owner-pinned):** Penn State Blue `#001E44` and soft cream
  `#F5F5DC`, from the owner's reference spec
  (`stardust/reference/midnight-editorial.md`). He is a Penn State graduate.
- **Type (owner-pinned):** Source Serif 4 for headings, Inter for body,
  JetBrains Mono for metadata.
- **References (owner-named, binding):** *Maniac* (Netflix, 2018), its
  IBM-inspired striped logo and the fictional Neberdine Pharmaceutical
  Biotech; the 1980s Microsoft logo; striped 1980s tech wordmarks generally.
- **Personality:** deadpan corporate, retro-futurist, quietly funny, warm
  underneath. Mind-bending and dystopian only as flavor, never menace.
- **Anti-references:**
  - The stock Fuwari look the site has now.
  - Synthwave retro: neon grid horizons, sunset gradients, chrome text,
    Orbitron-style fonts.
  - Glassmorphism (the owner's spec suggested a blurred nav; dropped).
  - The Generic-2026-SaaS silhouette: huge sans hero, two-button CTA pair,
    sticky nav, serial footer.

## Evidence on Hand

- Real writing: posts "March Update and To-Do" (2025-03-08), "Inching Toward
  Launch" (2025-01-30), short posts "This is a Jan Test" and "OK, This is the
  start"; three micro posts (May 2024). Captured under
  `stardust/current/pages/`.
- Profile: tagline above, social links to Bluesky, GitHub and LinkedIn.
- Images: the "M" avatar (`src/assets/images/demo-avatar.jpg`), the laptop
  internals banner (`src/assets/images/demo-banner.png`), post covers.
- **Absent, must not be invented:** job titles, employers, project list, work
  history, testimonials, stats. The "who I am" section uses the tagline and
  the About copy, and marks any further bio as a placeholder for the owner to
  write.

## Product Principles

1. **Lead with the person.** The first screen says who Khalil is before it
   lists anything.
2. **Play the company straight.** The corporate fiction lives in labels,
   marks and badges; it never gets in the way of reading.
3. **Reading comes first inside a post.** Posts are calm, warm paper with a
   comfortable measure; the theatrics stay at the edges.
4. **One system, every page.** Home, posts, micros, archive and About share
   one set of parts.
5. **His words, not ours.** No invented biography, numbers or claims.

## Accessibility & Inclusion

WCAG 2.2 AA: text contrast ≥ 4.5:1 in both modes, visible keyboard focus,
`prefers-reduced-motion` respected, decorative stripes hidden from assistive
technology with a real text name behind the wordmark.
