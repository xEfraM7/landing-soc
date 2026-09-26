import {
  getSiteContent,
  pillarKeys,
  type Locale,
  type PillarKey,
  type RouteKey,
} from '@data/site.content';
import { pathFor } from '@utils/i18n';
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildServiceJsonLd,
  buildWebSiteJsonLd,
  type BreadcrumbItem,
} from '@utils/seo';

/** `getStaticPaths` de `[pillar].astro`: un path por pilar con su slug en el idioma dado. */
export const pillarStaticPaths = (locale: Locale) => {
  const content = getSiteContent(locale);
  return pillarKeys.map((key) => ({
    params: { pillar: content.pillars[key].slug },
    props: { key },
  }));
};

export const breadcrumbFor = (key: RouteKey, locale: Locale): BreadcrumbItem[] => {
  const content = getSiteContent(locale);
  const home = { name: content.breadcrumb.homeLabel, url: absoluteUrl(pathFor('home', locale)) };
  if (key === 'home') return [home];
  const name = key === 'privacy' ? content.legal.privacy.title : content.pillars[key].title;
  return [home, { name, url: absoluteUrl(pathFor(key, locale)) }];
};

const baseGraph = (locale: Locale) => {
  const content = getSiteContent(locale);
  return [buildOrganizationJsonLd(content), buildWebSiteJsonLd(content, locale)];
};

export const buildHomeJsonLd = (locale: Locale) => baseGraph(locale);

export const buildPillarJsonLd = (key: PillarKey, locale: Locale) => {
  const pillar = getSiteContent(locale).pillars[key];
  const url = absoluteUrl(pathFor(key, locale));
  return [
    ...baseGraph(locale),
    ...(pillar.serviceType ? [buildServiceJsonLd(pillar, url)] : []),
    buildFaqJsonLd(pillar.faq),
    buildBreadcrumbJsonLd(breadcrumbFor(key, locale)),
  ];
};

export const buildLegalJsonLd = (locale: Locale) => [
  ...baseGraph(locale),
  buildBreadcrumbJsonLd(breadcrumbFor('privacy', locale)),
];
