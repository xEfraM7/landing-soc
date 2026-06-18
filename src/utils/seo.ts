import { siteContent } from '@data/site.content';

export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SITE_NAME = siteContent.brand.name;

export const buildTitle = (title: string, suffix = SITE_NAME): string =>
  title === suffix ? title : `${title} | ${suffix}`;

export const defaultSeo: SeoMeta = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  type: 'website',
};

export const siteName = SITE_NAME;
