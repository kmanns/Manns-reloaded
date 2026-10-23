// Renders the post archetype for two posts, reusing the approved home prototype's chrome verbatim.
import { readFileSync, writeFileSync } from 'node:fs';
import MarkdownIt from 'markdown-it';

const home = readFileSync('stardust/prototypes/index-proposed.html', 'utf8').split('\n');
const L = (a, b) => home.slice(a - 1, b).join('\n'); // 1-based inclusive line ranges of index-proposed.html
const find = (re) => home.findIndex((l) => re.test(l)) + 1;
const at = {
  identity: find(/^\/\* Identity: the intake form \*\//),
  terminalCss: find(/^\/\* Terminal: desktop only/),
  footerCss: find(/^\/\* Footer \*\//),
  styleEnd: find(/^<\/style>$/) && home.lastIndexOf('</style>') + 1,
  body: find(/^<body>$/),
  main: find(/^<main id="main">$/),
  stripe: find(/^<div class="stripe-rule"/),
  bodyEnd: find(/^<\/body>$/),
  terminalJs: find(/^  \/\/ Manns Systems terminal/),
  bootJs: find(/^  \/\/ Boot screen: a timed/),
};
const headTop = L(1, at.identity - 1);
const sharedCss = L(at.identity, at.terminalCss - 1) + '\n' + L(at.footerCss, at.styleEnd - 1);
const chrome = L(at.body, at.main - 1).replace(' aria-current="page"', '');
const footer = L(at.stripe, home.indexOf('<script>', at.stripe) );
const themeJs = L(home.indexOf('<script>', at.stripe) + 2, at.terminalJs - 1);
const bootJs = L(at.bootJs, at.bodyEnd);

const POSTS = [
  ['006', '2025-03-08', 'March Update and To-Do', '/posts/mar8-25/mar8-25/'],
  ['005', '2025-01-30', 'Inching Toward Launch', '/posts/feb1-25/feb1-25/'],
  ['004', '2025-01-15', 'This is a Jan Test', '/posts/test/'],
  ['003', '2024-12-19', 'OK, This is the start', '/posts/start/'],
  ['002', '2024-05-01', 'Markdown Extended Features', '/posts/markdown-extended/'],
  ['001', '2024-04-01', 'Simple Guides for Fuwari', '/posts/guide/'],
];
const BASE = 'https://www.khalilmanns.com';
const md = new MarkdownIt({ html: true, linkify: false, typographer: true });

function parse(path) {
  const src = readFileSync(path, 'utf8');
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/); if (!kv) continue;
    let v = kv[2].trim().replace(/^['"]|['"]$/g, '');
    if (v.startsWith('[')) v = v.slice(1, -1).split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    fm[kv[1]] = v;
  }
  let body = m[2].replace(new RegExp('^\\s*#\\s+' + fm.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\n'), ''); // drop duplicate title H1
  return { fm, body };
}
const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function render({ slug, file, cover, words, provenance }) {
  const { fm, body } = parse(file);
  const idx = POSTS.findIndex((p) => p[2] === fm.title);
  const [no, filed] = POSTS[idx];
  const prev = POSTS[idx + 1], next = POSTS[idx - 1];
  const heads = [];
  let html = md.render(body).replace(/<h2>(.*?)<\/h2>/g, (_, t) => {
    const id = slugify(t.replace(/<[^>]+>/g, '')); heads.push([id, t]); return `<h2 id="${id}">${t}</h2>`;
  });
  html = html.replace(/<pre><code([^>]*)>/g, '<pre tabindex="0"><code$1>').replace(/<table>/g, '<div class="table-wrap" tabindex="0"><table>').replace(/<\/table>/g, '</table></div>');
  const toc = heads.length >= 2 ? `
        <nav class="contents" aria-labelledby="contents-title">
          <p id="contents-title" class="label">Contents</p>
          <ol>${heads.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol>
        </nav>` : '';
  const tags = (fm.tags || []).length ? `<ul class="chips post-tags" aria-label="Tags">${fm.tags.map((t) => `<li><a class="chip" href="${BASE}/archive/tag/${t}/">${t}</a></li>`).join('')}</ul>` : '';
  const coverHtml = cover ? `<img class="cover" src="${cover.src}" width="${cover.w}" height="${cover.h}" alt="${cover.alt}" loading="eager" fetchpriority="high">` : '';
  const neighbour = (p, rel) => p ? `
          <li class="entry neighbour">
            <span class="label">${rel}</span>
            <span class="no mono">No. ${p[0]}</span>
            <a href="${BASE}${p[3]}">${p[2]}</a>
          </li>` : '';
  const page = `${headTop.replace(/<!-- stardust:provenance[\s\S]*?-->/, provenance).replace(/<title>.*<\/title>/, `<title>${fm.title} - Khalil Manns</title>`).replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${fm.description || ''}">`)}
${sharedCss}

/* Post archetype */
.record { padding-block: var(--spacing-xl) 0; }
.record-row { display: grid; grid-template-columns: repeat(4, max-content); gap: var(--spacing-xl); padding-block: 12px; border-top: 2px solid var(--color-rule-strong); border-bottom: 1px solid var(--color-rule); }
.record-row div { display: flex; flex-direction: column; gap: 2px; }
.record-row dd { margin: 0; font: 500 var(--body-sm)/1.5 var(--mono-font-family); color: var(--color-heading); font-variant-numeric: tabular-nums; }
.post-title { margin-top: var(--spacing-xl); max-width: 22ch; font: 700 var(--heading-xl)/1.1 var(--heading-font-family); letter-spacing: -0.02em; }
.standfirst { margin-top: var(--spacing-md); max-width: 52ch; font: 400 1.25rem/1.5 var(--heading-font-family); color: var(--color-muted); }
.post-tags { margin-top: var(--spacing-lg); }
.post-tags a { text-decoration: none; }
.post-tags a:hover { background: var(--color-rule); }
.cover { margin-top: var(--spacing-xl); width: 100%; max-width: 68ch; aspect-ratio: 2 / 1; object-fit: cover; border-radius: var(--radius); }
.post-grid { display: grid; grid-template-columns: minmax(0, 68ch); gap: var(--spacing-2xl); padding-block: var(--spacing-xl) var(--section-padding); }
.has-contents .post-grid { grid-template-columns: minmax(0, 68ch) 240px; }
.prose { font-size: 1.125rem; line-height: 1.67; }
.prose > * + * { margin-top: 1.1em; }
.prose h2 { margin-top: 2.2em; font: 600 var(--heading-md)/1.3 var(--heading-font-family); scroll-margin-top: 24px; }
.prose h3 { margin-top: 1.8em; font: 600 1.25rem/1.35 var(--heading-font-family); }
.prose h2 + *, .prose h3 + * { margin-top: 0.6em; }
.prose a { color: var(--color-link); }
.prose code { padding: 0.1em 0.35em; border-radius: var(--radius-sm); background: var(--color-chip); color: var(--color-heading); font: 500 0.88em/1 var(--mono-font-family); }
.prose pre { margin-inline: 0; padding: 18px 20px; overflow-x: auto; border-radius: var(--radius); background: var(--nittany-navy); color: var(--intake-cream); font: 500 0.875rem/1.65 var(--mono-font-family); scrollbar-width: thin; }
:root[data-theme="dark"] .prose pre { background: var(--night-panel); }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) .prose pre { background: var(--night-panel); } }
.prose pre code { padding: 0; background: none; color: inherit; font: inherit; }
.prose blockquote { margin-inline: 0; padding: 14px 18px; border-left: 4px solid var(--color-rule-strong); background: var(--color-chip); color: var(--color-fg); font-size: 1rem; }
.prose blockquote p { overflow-wrap: anywhere; }
.table-wrap { overflow-x: auto; }
.prose table { width: 100%; border-collapse: collapse; font-size: 0.9375rem; line-height: 1.55; }
.prose th { text-align: left; padding: 10px 12px; border-bottom: 2px solid var(--color-rule-strong); font: 500 var(--label)/1.4 var(--mono-font-family); letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-muted); }
.prose td { padding: 10px 12px; border-bottom: 1px solid var(--color-rule); vertical-align: top; }
.prose td:first-child { white-space: nowrap; }
.contents { position: sticky; top: 24px; align-self: start; }
.contents ol { margin: 12px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--color-rule); }
.contents li { border-bottom: 1px solid var(--color-rule); }
.contents a { display: block; padding: 10px 0; color: var(--color-heading); text-decoration: none; font-size: var(--body-sm); font-weight: 500; }
.contents a:hover { color: var(--color-link); text-decoration: underline; }
.record-footer { padding-bottom: var(--section-padding); }
.record-footer .fields { max-width: 68ch; border-top: 2px solid var(--color-rule-strong); }
.neighbours { max-width: 68ch; margin: var(--spacing-xl) 0 0; padding: 0; list-style: none; border-top: 1px solid var(--color-rule); }
.neighbour { display: grid; grid-template-columns: 6rem 5.5rem 1fr; gap: var(--spacing-md); align-items: baseline; padding-block: 16px; border-bottom: 1px solid var(--color-rule); position: relative; }
.neighbour .no { font-weight: 700; color: var(--color-heading); }
.neighbour a { font: 600 1.125rem/1.35 var(--heading-font-family); color: var(--color-heading); text-decoration: none; }
.neighbour a::after { content: ''; position: absolute; inset: 0; }
.neighbour:hover { background: var(--color-panel); }
.neighbour:hover a { text-decoration: underline; }
@media (max-width: 1099px) {
  .has-contents .post-grid { grid-template-columns: minmax(0, 68ch); }
  .contents { display: none; }
}
@media (max-width: 640px) {
  .record-row { grid-template-columns: repeat(2, 1fr); gap: 12px var(--spacing-md); }
  .prose { font-size: 1.0625rem; }
  .neighbour { grid-template-columns: auto 1fr; gap: 4px var(--spacing-md); }
  .neighbour a { grid-column: 1 / -1; }
}
</style>
</head>
${chrome}
<main id="main" class="${toc ? 'has-contents' : ''}">
  <div class="wrap">
    <section class="record" data-section="record-header" data-intent="orient" data-layout="records-row" aria-labelledby="post-title">
      <dl class="record-row">
        <div><dt class="label">No.</dt><dd>${no}</dd></div>
        <div><dt class="label">Filed</dt><dd><time datetime="${filed}">${filed}</time></dd></div>
        <div><dt class="label">Department</dt><dd><a href="${BASE}/archive/category/${fm.category}/">${fm.category}</a></dd></div>
        <div><dt class="label">Length</dt><dd>${words} words</dd></div>
      </dl>
      <h1 id="post-title" class="post-title">${fm.title}</h1>
      ${fm.description ? `<p class="standfirst">${fm.description}</p>` : ''}
      ${tags}
      ${coverHtml}
    </section>

    <div class="post-grid">
      <article class="prose" data-section="reading" data-intent="read" data-layout="column-68ch" aria-labelledby="post-title">
${html}      </article>${toc}
    </div>

    <section class="record-footer" data-section="record-footer" data-intent="navigate" data-layout="ruled-rows" data-items="${[prev, next].filter(Boolean).length}" aria-label="Record details">
      <dl class="fields">
        <div class="field"><dt class="label">Author</dt><dd>Khalil Manns</dd></div>
        <div class="field"><dt class="label">Filed</dt><dd class="mono">${filed}</dd></div>
        <div class="field"><dt class="label">License</dt><dd><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></dd></div>
      </dl>
      <ul class="neighbours" aria-label="More records">${neighbour(prev, 'Previous')}${neighbour(next, 'Next')}
      </ul>
    </section>
  </div>
</main>
${footer}
<script>
${themeJs}${bootJs}
</html>
`;
  writeFileSync(`stardust/prototypes/${slug}-proposed.html`, page);
  console.log(slug, { headings: heads.length, prev: prev && prev[0], next: next && next[0] });
}

const prov = (slug, url, extra) => `<!-- stardust:provenance
  writtenBy:         stardust:prototype (rendered via impeccable new-work, code-led; chrome reused verbatim from approved index-proposed.html)
  writtenAt:         ${new Date().toISOString()}
  page:              ${slug}
  pageUrl:           ${url}
  againstDirection:  stardust/direction.md (Active 2026-10-23T02:40:00Z)
  shapeBrief:        stardust/prototypes/posts-mar8-25-mar8-25-shape.md
  generator:         stardust/prototypes/build-post.mjs
  readArtifacts:
    - stardust/current/pages/${slug}.json
    - ${extra}
    - stardust/prototypes/index-proposed.html (approved canon)
    - DESIGN.md, DESIGN.json
  fidelity:          quick
  scriptExceptions:  [ "head: boot gate + theme restore", "body: theme toggle + boot counter" ]
  unsourcedContent:  []
  critique:
    - { at: 2026-10-23, by: "impeccable finish review (in-thread substitute)", findings: [ { priority: P3, text: "reading column left-aligned to the record row instead of centred (brief said centred)", status: "accepted: one strong left edge; brief updated" } ] }
  audit:
    - { at: 2026-10-23, detector: "impeccable detect --json", findings: [
        { priority: P3, text: "flat-type-hierarchy", status: "dismissed: static read; rendered h1 48px / h2 24px / body 18px (steps 2.0, 1.33)" },
        { priority: P3, text: "cramped-padding on ruled rows", status: "dismissed: rows carry 12-18px block padding" },
        { priority: P3, text: "repeating-stripes-gradient", status: "dismissed: brand stripe motif" } ],
      manual: [ "contents label is text, not a heading", "code blocks and tables scroll inside their own box and are focusable", "cover eager + fetchpriority high", "duplicate title H1 dropped from body" ] }
  adapt:
    - { viewports: [1440, 768, 390, 360], result: "no overflow; contents rail hidden under 1100px; record row 2x2 under 640px" }
  stardustVersion:   0.34.1
-->`;

render({ slug: 'posts-mar8-25-mar8-25', file: 'src/content/posts/mar8-25/mar8-25.md', words: 57,
  provenance: prov('posts-mar8-25-mar8-25', BASE + '/posts/mar8-25/mar8-25/', 'src/content/posts/mar8-25/mar8-25.md') });
render({ slug: 'posts-guide', file: 'src/content/posts/guide/index.md', words: 160,
  cover: { src: 'assets/guide-cover.webp', w: 1360, h: 680, alt: 'Illustrated cover image for the Fuwari guide post' },
  provenance: prov('posts-guide', BASE + '/posts/guide/', 'src/content/posts/guide/index.md (stress-test render of the post archetype)') });
