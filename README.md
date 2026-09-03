# AASTMT Triton ROV Website 

Built with [Astro](https://astro.build). The technical documentation site is a
separate [VitePress](https://vitepress.dev) project that lives alongside it in
`docs/`.

## Project structure

```text
/
├── src/
│   ├── assets/              images, video, and fonts processed by Astro
│   ├── components/
│   │   ├── idx/              homepage sections: Hero, About, Achievements, Shadow
│   │   ├── BaseHead.astro    document <head>: metadata, canonical URL, OG tags
│   │   ├── Navigation.astro  fixed top navigation
│   │   └── ContactInfo.astro footer / contact links
│   ├── content/members.ts    member roster data, grouped by competition year
│   ├── layouts/BaseLayout.astro base layout providing common shell
│   ├── pages/
│   │   ├── index.astro       home page
│   │   └── members.astro     member roster page
│   ├── styles/global.css
│   └── types.ts
├── public/                   favicons, robots.txt, social preview image
├── docs/                     VitePress documentation site (own build/deploy)
└── astro.config.mjs
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                            |
| :----------------------- | :------------------------------------------------ |
| `bun install`             | Install dependencies                              |
| `bun run dev`                 | Start the Astro dev server at `localhost:4321`    |
| `bun run build`               | Build the production site to `./dist/`            |
| `bun astro preview`             | Preview the production build locally              |
| `bun run check`           | Type-check the project (`astro check`)            |
| `bun run format:check`    | Check formatting with Prettier                    |
| `bun run format:write`    | Apply Prettier formatting                         |
| `bun run docs:dev`        | Start the VitePress docs dev server                |
| `bun run docs:build`      | Build the docs site to `docs/.vitepress/dist`      |
| `bun run docs:preview`    | Preview the built docs site                        |

Requires Node ≥ 22.12 (see `engines` in `package.json`). [bun](https://bun.sh)
is used as the package manager and task runner.

## Deployment

| Site | URL |
| --- | --- |
| Main site | https://aastmt-triton.com |
| Docs site | https://docs.aastmt-triton.com |

These are configured as the `site` option in `astro.config.mjs` and
`docs/.vitepress/config.ts` respectively, which drives canonical URLs and
sitemap generation for each.

- [Astro documentation](https://docs.astro.build)
- [VitePress documentation](https://vitepress.dev)
