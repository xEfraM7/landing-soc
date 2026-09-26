import {
  SITE_URL,
  type FaqItem,
  type Locale,
  type PillarPageContent,
  type SeoMeta,
  type SiteContent,
} from '@data/site.content';

const TITLE_MAX = 60;
const DESCRIPTION_MIN = 120;
const DESCRIPTION_MAX = 160;

export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).toString();

/** Rompe el build si un título o descripción sale del rango que muestra Google. */
export const assertSeoLengths = (seo: SeoMeta, page: string): void => {
  if (seo.title.length > TITLE_MAX) {
    throw new Error(`SEO [${page}]: título de ${seo.title.length} caracteres (máx ${TITLE_MAX})`);
  }
  const length = seo.description.length;
  if (length < DESCRIPTION_MIN || length > DESCRIPTION_MAX) {
    throw new Error(
      `SEO [${page}]: descripción de ${length} caracteres (rango ${DESCRIPTION_MIN}-${DESCRIPTION_MAX})`,
    );
  }
};

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const buildOrganizationJsonLd = (content: SiteContent) => ({
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: content.brand.name,
  legalName: content.organization.legalName,
  // Desambigua la marca frente a otras entidades llamadas "Ciberem".
  description: content.footer.tagline,
  knowsAbout: ['Security Operations Center', 'Managed Detection and Response', 'MITRE ATT&CK'],
  url: SITE_URL,
  logo: absoluteUrl('/logo.png'),
  foundingDate: String(content.organization.foundingYear),
  sameAs: content.organization.sameAs,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: content.organization.contactUrl,
    availableLanguage: ['es', 'en'],
  },
});

export const buildWebSiteJsonLd = (content: SiteContent, locale: Locale) => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: content.brand.name,
  url: SITE_URL,
  inLanguage: locale,
  publisher: { '@id': ORGANIZATION_ID },
});

export const buildServiceJsonLd = (pillar: PillarPageContent, url: string) => ({
  '@type': 'Service',
  name: pillar.title,
  serviceType: pillar.serviceType,
  description: pillar.seo.description,
  url,
  areaServed: 'Worldwide',
  provider: { '@id': ORGANIZATION_ID },
});

export const buildFaqJsonLd = (faq: FaqItem[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const buildBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
