## Documentation

Full documentation: https://docs.astro.build

### Current-documentation rule

For every Astro-specific decision — implementation, configuration, routing,
rendering, assets, styling, deployment, integration, upgrade, or debugging —
consult current official documentation before acting. Check the installed
version in `package.json` first; do not rely on remembered Astro, integration,
or third-party API behavior.

Use Context7 with the official Astro documentation (`/withastro/docs`) as the
first source for Astro and official-integration questions. For every added or
configured package, consult that package's current official documentation too.
Use a primary source (official docs, maintained repository documentation, or
release notes) when Context7 lacks the relevant material, and say when a
decision is based on an unverified assumption.

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

Also consider the official documentation for [islands](https://docs.astro.build/en/concepts/islands/),
[client-side scripts](https://docs.astro.build/en/guides/client-side-scripts/),
[assets and images](https://docs.astro.build/en/guides/images/),
[view transitions](https://docs.astro.build/en/guides/view-transitions/),
[integrations](https://docs.astro.build/en/guides/integrations-guide/), and
[deployment](https://docs.astro.build/en/guides/deploy/), whenever they could
materially affect the requested outcome.

### Astro-first solution design

Treat Astro's server-first, islands architecture — static HTML by default with
small opt-in JavaScript regions — as the baseline. Before adding a framework,
hydrating a component, or introducing a general-purpose client-side library,
consider the smallest viable approach in this order:

1. Static `.astro` markup, CSS, and build-time data.
2. A scoped standard `<script>` in an Astro component for local browser
   behavior.
3. A narrowly hydrated client island when component state or an existing UI
   framework is justified.
4. An official Astro integration or a maintained ecosystem package only when
   native Astro/browser capabilities do not meet a real requirement.

For non-trivial work — a feature with architectural, performance, accessibility,
deployment, or maintenance consequences — investigate the viable approaches
before implementation. Briefly state the options considered, why the chosen
approach fits this project, and the material tradeoff it accepts. This is not a
requirement to add packages or to over-engineer simple work.

When evaluating an approach, explicitly account for:

- server rendering and the amount/timing of JavaScript sent to the browser;
- accessibility, keyboard support, and reduced-motion behavior;
- responsive behavior, image/video/WebGL loading, and Core Web Vitals;
- Astro-native facilities such as routes, layouts, content collections,
  `astro:assets`, integrations, and view transitions where applicable;
- the package's maintenance, bundle cost, compatibility with the installed
  Astro version, and whether its behavior can be achieved more simply without
  it.

Pin the implementation to documented APIs rather than copied or remembered
patterns.
