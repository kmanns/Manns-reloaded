// Renders micros, archive (+ category state) and about from the approved home canon.
import { readFileSync, writeFileSync } from 'node:fs';

const home = readFileSync('stardust/prototypes/index-proposed.html', 'utf8').split('\n');
const L = (a, b) => home.slice(a - 1, b).join('\n'); // 1-based inclusive
const find = (re) => home.findIndex((l) => re.test(l)) + 1;
const at = {
  identity: find(/^\/\* Identity: the intake form \*\//), terminalCss: find(/^\/\* Terminal: desktop only/),
  recordsCss: find(/^\/\* Records ledger \*\//), styleEnd: home.lastIndexOf('</style>') + 1,
  body: find(/^<body>$/), main: find(/^<main id="main">$/), stripe: find(/^<div class="stripe-rule"/),
  bodyEnd: find(/^<\/body>$/), terminalJs: find(/^  \/\/ Manns Systems terminal/), bootJs: find(/^  \/\/ Boot screen: a timed/),
};
const scriptLine = home.indexOf('<script>', at.stripe) + 1; // 1-based line of the body <script>
const headTop = L(1, at.identity - 1);
const sharedCss = L(at.identity, at.terminalCss - 1) + '\n' + L(at.recordsCss, at.styleEnd - 1);
const chrome = (current) => L(at.body, at.main - 1).replace(' aria-current="page"', '')
  .replace(new RegExp(`(<a href="[^"]*">${current}</a>)`), (m) => m.replace('<a ', '<a aria-current="page" '));
const footer = L(at.stripe, scriptLine - 1);
const themeJs = L(scriptLine + 1, at.terminalJs - 1);
const bootJs = L(at.bootJs, at.bodyEnd);
const BASE = 'https://www.khalilmanns.com';

const POSTS = [
  ['006', '2025-03-08', 'March Update and To-Do', '/posts/mar8-25/mar8-25/', 'Blogging', ['Blogging']],
  ['005', '2025-01-30', 'Inching Toward Launch', '/posts/feb1-25/feb1-25/', 'mannstech', ['rss']],
  ['004', '2025-01-15', 'This is a Jan Test', '/posts/test/', 'mannstech', []],
  ['003', '2024-12-19', 'OK, This is the start', '/posts/start/', 'Blogging', ['Start']],
  ['002', '2024-05-01', 'Markdown Extended Features', '/posts/markdown-extended/', 'Examples', ['Demo', 'Example', 'Markdown', 'Fuwari']],
  ['001', '2024-04-01', 'Simple Guides for Fuwari', '/posts/guide/', 'Guides', ['Fuwari', 'Blogging', 'Customization']],
];
const MICROS = [
  ['2024-05-20', 'Just discovered this amazing CSS trick for smooth animations. Sometimes the simplest solutions are the most elegant.', ['css', 'animation']],
  ['2024-05-18', 'Coffee shop coding session is hitting different today. There’s something about the ambient noise that just clicks.', ['productivity', 'coding']],
  ['2024-05-15', 'Reminder: document your code like you’re writing for your future self who has no memory of why you made these decisions.', ['documentation', 'best-practices']],
];

const pageCss = `
/* Inner pages */
.page-title { padding-block: var(--spacing-xl) var(--spacing-lg); }
.page-title h1 { font: 700 var(--heading-xl)/1.1 var(--heading-font-family); letter-spacing: -0.02em; }
.page-title .count { margin-top: 8px; }
.masthead { background: var(--nittany-navy); color: var(--intake-cream); padding-block: var(--spacing-xl); }
:root[data-theme="dark"] .masthead { background: var(--night-panel); }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) .masthead { background: var(--night-panel); } }
.masthead h1 { color: var(--intake-cream); font: 700 var(--heading-xl)/1.1 var(--heading-font-family); letter-spacing: -0.02em; }
.masthead .lede { margin-top: 10px; max-width: 52ch; color: var(--night-muted); font-size: 1.125rem; }
.masthead .count { margin-top: var(--spacing-md); color: var(--phosphor-ice); }
.log { padding-block: var(--spacing-xl) var(--section-padding); }
.filter-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.filter-row[hidden] { display: none; }
.filter-row .label { margin-right: 8px; }
.filter-chip { border: 0; cursor: pointer; text-decoration: none; }
.filter-chip:hover { background: var(--color-rule); }
.filter-chip[aria-pressed="true"], .filter-chip[aria-current="page"] { background: var(--color-accent); color: var(--color-ink-on-accent); }
.filter-chip .n { opacity: 0.75; margin-left: 4px; }
.micro-list { margin: var(--spacing-lg) 0 0; padding: 0; list-style: none; border-top: 2px solid var(--color-rule-strong); }
.micro { display: grid; grid-template-columns: 8rem minmax(0, 68ch); gap: var(--spacing-lg); padding-block: 22px; border-bottom: 1px solid var(--color-rule); }
.micro[hidden] { display: none; }
.micro time { color: var(--color-muted); font: 500 var(--body-sm)/1.9 var(--mono-font-family); }
.micro p { font-size: 1.125rem; line-height: 1.6; color: var(--color-fg); }
.micro .tags { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 4px 14px; font: 500 var(--label)/1.5 var(--mono-font-family); letter-spacing: 0.04em; color: var(--color-link); }
.filters { border-top: 2px solid var(--color-rule-strong); }
.filters .field { grid-template-columns: 8.5rem 1fr; }
.filters .chips a { text-decoration: none; }
.year { margin-top: var(--spacing-xl); display: flex; align-items: baseline; gap: var(--spacing-md); }
.year h2 { font: 700 var(--heading-lg)/1.2 var(--heading-font-family); }
.show-all { display: inline-block; margin-top: var(--spacing-lg); font-weight: 500; }
.records-page { padding-bottom: var(--section-padding); }
.about-file .intake { margin-top: 0; }
.notice { display: inline-flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: var(--radius-sm); background: var(--color-accent); color: var(--color-ink-on-accent); font-weight: 500; }
.notice::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--phosphor-ice); }
.repo a { font-weight: 600; }
.repo .meta { margin-top: 4px; color: var(--color-muted); font-size: var(--body-sm); }
.credits h2 { font: 600 1.25rem/1.4 var(--heading-font-family); }
.credits ul { margin: 8px 0 0; padding-left: 1.1em; }
.credits li + li { margin-top: 4px; }
@media (max-width: 767px) {
  .micro { grid-template-columns: 1fr; gap: 4px; }
  .filters .field { grid-template-columns: 1fr; }
}
`;

const prov = (slug, url, brief, extra = '', unsourced = '[]') => `<!-- stardust:provenance
  writtenBy:         stardust:prototype (impeccable new-work, code-led; chrome reused verbatim from approved index-proposed.html)
  writtenAt:         ${new Date().toISOString()}
  page:              ${slug}
  pageUrl:           ${url}
  againstDirection:  stardust/direction.md (Active 2026-10-23T02:40:00Z)
  shapeBrief:        stardust/prototypes/${brief}
  generator:         stardust/prototypes/build-pages.mjs
  readArtifacts:     [ stardust/current/pages/${slug}.json, stardust/prototypes/index-proposed.html, DESIGN.md, DESIGN.json${extra} ]
  fidelity:          quick
  scriptExceptions:  [ "head: boot gate + theme restore", "body: theme toggle + boot counter"${slug === 'micros' ? ', "body: tag filter (progressive; all entries show without JS)"' : ''} ]
  unsourcedContent:  ${unsourced}
  critique:          [ { by: "impeccable finish review (in-thread substitute)", findings: "none material; layouts reuse approved canon" } ]
  audit:             [ { detector: "impeccable detect --json", findings: [ "cramped-padding on ruled rows: dismissed (12-22px block padding)", "repeating-stripes-gradient: dismissed (brand motif)", "type-ramp advisories: accepted", "about flat-type-hierarchy: credits H2 raised to 20px; h1 renders 48px" ] } ]
  adapt:             [ { viewports: [1440, 768, 390, 360], result: "no overflow; nav gap 10px at 360" } ]
  stardustVersion:   0.34.1
-->`;

function page({ slug, title, desc, current, main, extraJs = '', provenance }) {
  const head = headTop.replace(/<!-- stardust:provenance[\s\S]*?-->/, provenance)
    .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`);
  const html = `${head}\n${sharedCss}\n${pageCss}</style>\n</head>\n${chrome(current)}\n<main id="main">\n${main}\n</main>\n${footer}\n<script>\n${themeJs}${extraJs}${bootJs}\n</html>\n`;
  writeFileSync(`stardust/prototypes/${slug}-proposed.html`, html);
  console.log('wrote', slug);
}

// ---------- micros ----------
const allTags = [...new Set(MICROS.flatMap((m) => m[2]))];
page({
  slug: 'micros', title: 'Micro Posts - Khalil Manns', desc: 'Quick thoughts, observations, and snippets from daily life.', current: 'Micros',
  provenance: prov('micros', BASE + '/micros/', 'micros-shape.md', ', src/content/microposts/*.md'),
  main: `  <section class="masthead" data-section="masthead" data-intent="orient" data-layout="band">
    <div class="wrap">
      <h1>Anti-Social Media</h1>
      <p class="lede">Quick thoughts, observations, and snippets from daily life.</p>
      <p class="count label">${MICROS.length} entries</p>
    </div>
  </section>
  <section class="log" data-section="log" data-intent="browse" data-layout="teletype" data-items="${MICROS.length}" aria-label="Micro posts">
    <div class="wrap">
      <div class="filter-row" role="group" aria-label="Filter by tag" hidden>
        <span class="label">Filter</span>
        <button type="button" class="chip filter-chip" aria-pressed="true" data-tag="">All</button>
${allTags.map((t) => `        <button type="button" class="chip filter-chip" aria-pressed="false" data-tag="${t}">#${t}</button>`).join('\n')}
      </div>
      <ol class="micro-list">
${MICROS.map(([d, t, tags]) => `        <li class="micro" data-tags="${tags.join(' ')}">
          <time datetime="${d}">${d}</time>
          <div><p>${t}</p><p class="tags">${tags.map((g) => `<span>#${g}</span>`).join('')}</p></div>
        </li>`).join('\n')}
      </ol>
    </div>
  </section>`,
  extraJs: `  // Tag filter: progressive. Without JS the row stays hidden and every entry shows.
  (function () {
    var row = document.querySelector('.filter-row'); if (!row) return;
    var chips = row.querySelectorAll('.filter-chip'), items = document.querySelectorAll('.micro');
    row.hidden = false;
    row.addEventListener('click', function (e) {
      var b = e.target.closest('.filter-chip'); if (!b) return;
      var tag = b.dataset.tag;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === b ? 'true' : 'false'); });
      items.forEach(function (li) { li.hidden = !!tag && li.dataset.tags.split(' ').indexOf(tag) < 0; });
    });
  })();
`,
});

// ---------- archive ----------
const cats = {}; POSTS.forEach((p) => { cats[p[4]] = (cats[p[4]] || 0) + 1; });
const tagsAll = [...new Set(POSTS.flatMap((p) => p[5]))];
function archive(slug, filterCat) {
  const rows = POSTS.filter((p) => !filterCat || p[4] === filterCat);
  const years = [...new Set(rows.map((p) => p[1].slice(0, 4)))];
  const entry = (p) => `          <li class="entry">
            <span class="no mono">No. ${p[0]}</span>
            <time class="filed mono" datetime="${p[1]}">${p[1].slice(5)}</time>
            <div class="body"><h3><a href="${BASE}${p[3]}">${p[2]}</a></h3>${p[5].length ? `<p class="excerpt">${p[5].map((t) => '#' + t).join(' ')}</p>` : ''}</div>
            <a class="dept chip" href="${BASE}/archive/category/${p[4]}/">${p[4]}</a>
          </li>`;
  page({
    slug, title: 'Archive - Khalil Manns', desc: 'Every post by Khalil Manns, by year.', current: 'Archive',
    provenance: prov(slug, BASE + (filterCat ? `/archive/category/${filterCat}/` : '/archive/'), 'archive-shape.md', ', src/content/posts/** frontmatter'),
    main: `  <div class="wrap records-page">
    <div class="page-title">
      <h1>Archive${filterCat ? ` <span aria-hidden="true">·</span> ${filterCat}` : ''}</h1>
      <p class="count label">${rows.length} record${rows.length === 1 ? '' : 's'}${filterCat ? ' in this department' : ''}</p>
    </div>
    <section data-section="filters" data-intent="filter" data-layout="ruled-rows" aria-label="Filter the archive">
      <dl class="fields filters">
        <div class="field"><dt class="label">Department</dt><dd><ul class="chips">${Object.entries(cats).map(([c, n]) => `<li><a class="chip filter-chip" href="${BASE}/archive/category/${c}/"${c === filterCat ? ' aria-current="page"' : ''}>${c}<span class="n">${n}</span></a></li>`).join('')}</ul></dd></div>
        <div class="field"><dt class="label">Tags</dt><dd><ul class="chips">${tagsAll.map((t) => `<li><a class="chip filter-chip" href="${BASE}/archive/tag/${t}/">${t}</a></li>`).join('')}</ul></dd></div>
      </dl>
    </section>
    <section data-section="records" data-intent="browse" data-layout="ledger" data-items="${rows.length}" aria-label="Records">
${years.map((y) => {
  const yr = rows.filter((p) => p[1].startsWith(y));
  return `      <div class="year"><h2>${y}</h2><span class="label">${yr.length} record${yr.length === 1 ? '' : 's'}</span></div>
      <div class="ledger-cols label" aria-hidden="true"><span>No.</span><span>Filed</span><span>Record</span><span class="dept">Department</span></div>
      <ol class="ledger">
${yr.map(entry).join('\n')}
      </ol>`;
}).join('\n')}
${filterCat ? `      <a class="show-all" href="${BASE}/archive/">Show all records</a>` : ''}
    </section>
  </div>`,
  });
}
archive('archive', null);
archive('archive-category-blogging', 'Blogging');

// ---------- about ----------
page({
  slug: 'about', title: 'About - Khalil Manns', desc: 'This is the home base for Khalil Manns.', current: 'About',
  provenance: prov('about', BASE + '/about/', 'about-shape.md', ', src/content/spec/about.md',
    '[ { selector: "[data-placeholder]", type: other, reason: "longer bio; the captured About has one sentence (same slot as the home Statement)" } ]'),
  main: `  <div class="wrap">
    <div class="page-title"><h1>About</h1></div>
    <section class="about-file" data-section="subject-file" data-intent="introduce" data-layout="intake-form" data-items="4" aria-label="Subject file">
      <div class="intake">
        <figure class="subject-card">
          <img src="assets/avatar-480.webp" width="480" height="480" alt="Khalil's avatar: a metallic letter M with a game-controller pad and glowing amber and cyan lights" loading="eager" fetchpriority="high">
          <figcaption class="badge-row"><span class="badge">Subject</span><span class="label">Khalil Manns</span></figcaption>
        </figure>
        <dl class="fields">
          <div class="field"><dt class="label">Statement</dt><dd>
            <p>This is the home base for Khalil Manns.</p>
            <span data-placeholder="true" data-placeholder-type="other" data-placeholder-source="longer bio; not in src/content/spec/about.md" style="margin-top:12px">
              <span class="placeholder-eyebrow">PLACEHOLDER · other</span>
              <span class="placeholder-shape">A few sentences in Khalil's words. The same text fills the home page Statement.</span>
            </span>
          </dd></div>
          <div class="field"><dt class="label">Repository</dt><dd class="repo">
            <a href="https://github.com/kmanns/Manns-reloaded">kmanns / Manns-reloaded</a>
            <p class="meta">Replatform project for khalilmanns.com · MIT · Astro</p>
          </dd></div>
          <div class="field"><dt class="label">Status</dt><dd><span class="notice">This site is still a work in progress!</span></dd></div>
          <div class="field credits"><dt class="label">Image credits</dt><dd>
            <h2>Sources of images used in this site</h2>
            <ul>
              <li><a href="https://unsplash.com/">Unsplash</a></li>
              <li><a href="https://www.pixiv.net/artworks/108916539">星と少女</a> by <a href="https://www.pixiv.net/users/93273965">Stella</a></li>
              <li><a href="https://civitai.com/posts/586908">Rabbit - v1.4 Showcase</a> by <a href="https://civitai.com/user/Rabbit_YourMajesty">Rabbit_YourMajesty</a></li>
            </ul>
          </dd></div>
        </dl>
      </div>
    </section>
  </div>`,
});
