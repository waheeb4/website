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
export interface ContactInfo {
  tag: SvgComponent;
  label: string;
  link: string;
}
