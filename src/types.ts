import type { SvgComponent } from "astro/types";

export interface Metadata {
  title: string;
  description: string;
  og: {
    image: string;
    alt: string;
    type: string;
  };
}
export interface Link {
  label: string;
  link: string;
}

export interface ContactLink extends Link {
  tag: SvgComponent;
}
