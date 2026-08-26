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

export interface Cards {
  title: string;
  body: string;
  image: ImageMetadata;
  alt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface Link {
  label: string;
  link: string;
}

export interface ContactLink extends Link {
  tag: SvgComponent;
}
