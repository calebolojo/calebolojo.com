import { ReactNode } from 'react';

export type CapababilityType = {
  id: number | string;
  label: string;
  title: string;
  content: ReactNode;
};

export type PostType = {
  id: string | number;
  isFeatured: boolean;
  title: string;
  slug: string;
  tags: string[];
  category: string[];
  featuredImage: ImageType;
  bodyHtml?: string | ReactNode;
  publishDate: string;
  author: string;
  sections?: {
    title: string;
    bodyHtml: string;
    anchorId: string;
  }[];
  intro?: string | ReactNode;
  conclusion?: { title: string; bodyHtml: string };
};

export interface ImageType {
  id?: string | number;
  src?: string;
  svgElement?: ReactNode;
  alt?: string;
  caption?: string;
}

export interface ProjectType {
  id: string | number;
  isFeaturedInHomePage?: boolean;
  title: string;
  slug: string;
  shortSummary?: string;
  description?: string;
  year: string | number;
  category?: string[];
  highlightTags: string[];
  client: string;
  industry: string;
  role: string[] | string;
  sections?: {
    title: string;
    bodyHtml: string;
  }[];
  conclusion?: string;
  highFidelityShots: ImageType[] | null;
  wireframeShots?: ImageType[] | null;
  systemDesignShots?: ImageType[] | null;
  shots?: {
    wireframe: ImageType[] | null;
    systemDesign: ImageType[] | null;
    uiDesign: ImageType[] | null;
  };
  fullscreenFeaturedImage: string;
  fullscreenFeaturedGif: string;
  cardFeaturedImage: ImageType | null;
  cardFeaturedGif: ImageType | null;
  showcaseGallery: ImageType[] | null;
  previewLink?: string;
  repoLink?: string;
}
