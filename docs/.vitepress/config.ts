import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Triton",
  titleTemplate: "Triton Documentation | :title",
  description:
    "Technical documentation for AASTMT Triton, covering the ROV’s hardware, electronics, software, development workflow, and team resources.",
  appearance: true,
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
        ariaLabel: "AASTMT Triton on GitHub"
      },
    ],
  },
});
