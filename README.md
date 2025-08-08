# Khalil Manns - Personal Blog

A modern personal blog built with [Astro](https://astro.build) and the [Fuwari](https://github.com/saicaca/fuwari) theme. This site serves as my digital space for sharing thoughts, insights, and updates on technology, retro tech, content creation, and more.

## Features

- **📝 Blog Posts** - Long-form articles and deep dives into topics I'm passionate about
- **🐦 Micro Posts** - Short, tweet-like updates and quick thoughts (similar to Twitter/X posts)
- **🌙 Dark/Light Mode** - Automatic theme switching with user preference
- **📱 Responsive Design** - Optimized for all devices
- **🔍 Search Functionality** - Find content quickly across all posts
- **📋 Table of Contents** - Easy navigation for longer articles
- **💬 Comments** - Engage with readers through integrated comments
- **🏷️ Tags & Categories** - Organized content discovery

## Content Types

### Blog Posts
Traditional long-form articles covering:
- Technology insights and tutorials
- Retro technology exploration
- Content creation and commerce
- Political commentary and analysis
- Parenting and personal reflections

### Micro Posts
Quick thoughts and updates, similar to social media posts:
- Brief tech observations
- Daily insights
- Quick tips and tricks
- Real-time thoughts and reactions
- Links to interesting content

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Theme**: [Fuwari](https://github.com/saicaca/fuwari) - Clean, customizable Astro theme
- **Deployment**: [Github Pages](https://github.com) - Fast, reliable hosting
- **Icons**: [Iconify](https://iconify.design) - Comprehensive icon library

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
pnpm install
pnpm add sharp
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Available Commands

| Command | Action |
|---------|--------|
| `pnpm install && pnpm add sharp` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview build locally before deploying |
| `pnpm new-post <filename>` | Create a new blog post |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Content Management

### Creating Blog Posts

Create new blog posts in the `src/content/posts/` directory:

```bash
pnpm new-post my-new-post
```

### Creating Micro Posts

Micro posts are stored in the `src/content/micro-posts/` directory. Each micro post should include:

```yaml
---
published: 2024-01-01
tags: [tag1, tag2]
---

Your short content here (tweet-like format)
```

### Configuration

Customize the blog by editing `src/config.ts`:
- Site information (title, description, author)
- Navigation menu items
- Social media links
- Theme colors and settings
- Banner and favicon configuration

## Deployment

This blog is optimized for deployment on various platforms:

1. **Vercel** (recommended):
   - Connect your GitHub repository
   - Deploy automatically on push

2. **Netlify**:
   - Build command: `pnpm build`
   - Publish directory: `dist`

3. **GitHub Pages**:
   - Follow the [Astro deployment guide](https://docs.astro.build/en/guides/deploy/)

## About the Author

**Khalil Manns** - "The Manns with the Plan"
- Girl Dad passionate about technology and family
- Technology enthusiast with a love for both cutting-edge and retro tech
- Content creator focused on commerce and digital experiences
- Political hobbyist with thoughtful commentary
- Connect with me on [Bluesky](https://bsky.app/profile/kmanns.bsky.social), [GitHub](https://github.com/kmanns), and [LinkedIn](https://www.linkedin.com/in/khalilmanns/)

## License

This project is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) - feel free to use and modify with attribution.

---

*Built with ❤️ using Astro and the Fuwari theme*