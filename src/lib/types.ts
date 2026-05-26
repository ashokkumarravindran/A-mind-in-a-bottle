// Type definitions for better IDE support and type safety
// Extend these as your project grows

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  imageAlt: string;
  publishedDate?: Date;
}

export interface BlogMeta {
  title: string;
  description: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}
