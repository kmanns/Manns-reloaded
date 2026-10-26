import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Khalil Manns',
  subtitle: 'Homepage of the Manns himself',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    {
      name: 'Micros',
      url: '/micros/',                                   // This should match your micros.astro route
      external: false,                                  // Internal link, so set to false
    },
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.jpg',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Khalil Manns',
  bio: 'The Manns with the Plan: Girl Dad, Tech, Retro Tech, Content & Commerce, political hobbyist',
  links: [
    {
      name: 'Bluesky',
      icon: 'fa6-brands:bluesky',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://bsky.app/profile/kmanns.bsky.social',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/kmanns',
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/khalilmanns/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

// Manns Systems redesign. Everything a visitor reads that is not post content lives here.
export const mannsConfig = {
  company: 'Manns Systems',        // The fictional company name in the wordmark lockup ("MANNS" + "SYSTEMS")
  version: '2.023.9',              // Shown on the first-visit loading screen and by the terminal's `version` command
  designation: 'Homepage of the Manns himself',
  // Your bio, in your own words. Shown on the home page (Statement) and the About page.
  // Leave it empty to hide that row; in `pnpm dev` an outlined placeholder shows where it goes.
  statement: 'Im a Dad and I work. More coming later.',
  occupations: ['Girl Dad', 'Tech', 'Retro Tech', 'Content & Commerce', 'Political hobbyist'],
  nav: [
    { name: 'Home', url: '/' },
    { name: 'Micros', url: '/micros/' },
    { name: 'Archive', url: '/archive/' },
    { name: 'About', url: '/about/' },
  ],
  about: {
    intro: 'This is the home base for Khalil Manns.',
    repository: {
      name: 'kmanns / Manns-reloaded',
      url: 'https://github.com/kmanns/Manns-reloaded',
      description: 'Replatform project for khalilmanns.com · MIT · Astro',
    },
    status: 'This site is still a work in progress!',  // Set to '' to hide the Status row
    // Image credits for third-party images on the site, e.g.
    // { label: 'Photo title', url: 'https://…', by: 'Author', byUrl: 'https://…' }
    // The row is hidden while the list is empty.
    credits: [] as { label: string; url: string; by?: string; byUrl?: string }[],
  },
}
