// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aastmt-triton.com",
  integrations: [sitemap()],
  fonts: [
    {
      name: "Special Gothic Expanded One",
      cssVariable: "--font-special-gothic-expanded-one",
      provider: fontProviders.google(),
    },
    {
      name: "Plus Jakarta Sans",
      cssVariable: "--font-plus-jakarta-sans",
      provider: fontProviders.google(),
      weights: [400, 800],
      styles: ["normal"],
    },
    {
      name: "Cormorant Garamond",
      cssVariable: "--font-cormorant-garamond",
      provider: fontProviders.google(),
      weights: [600],
      styles: ["italic"],
    },
    {
      name: "DM Serif Display",
      cssVariable: "--font-dm-serif-display",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["italic"],
    },
  ],
});
