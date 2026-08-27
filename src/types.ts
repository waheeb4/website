import type { SvgComponent } from "astro/types";
import type { ImageMetadata } from "astro";

export interface Metadata {
  title: string;
  description: string;
  og: {
    image: string;
    alt: string;
    type: string;
  };
}

export interface Content {
  title: string;
  body: string;
}

export interface Cards extends Content {
  image: ImageMetadata;
  alt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface Achievements extends Content {
  international: string;
}

export interface Link {
  label: string;
  link: string;
}

export interface ContactLink extends Link {
  tag: SvgComponent;
}
