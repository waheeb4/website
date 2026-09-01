import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
const site = "https://docs.aastmt-triton.com";

export default defineConfig({
  title: "Triton",
  titleTemplate: "Triton Documentation | :title",
  description:
    "Technical documentation for AASTMT Triton, covering the ROV’s hardware, electronics, software, development workflow, and team resources.",
  appearance: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        href: "/favicon-48x48.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
  ],
  sitemap: {
    hostname: site,
  },
  transformPageData(pageData) {
    const canonicalPath = pageData.relativePath
      .replace(/index\.md$/, "")
      .replace(/\.md$/, ".html");
    const canonicalURL = new URL(canonicalPath, site).href;

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalURL },
    ]);
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Website",
        link: "https://aastmt-triton.com/",
      },
    ],

    sidebar: [
      {
        text: "Start Here",
        items: [{ text: "Getting Started", link: "/getting-started" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/AAST-Triton-ROVs",
        ariaLabel: "AASTMT Triton on GitHub",
      },
    ],
  },
});
