import type { AstroGlobal } from 'astro';

import {
  defaultLocale,
  getSiteContent,
  locales,
  type Locale,
  type RouteKey,
  type SiteContent,
} from '@data/site.content';

export const resolveLocale = (value: string | undefined): Locale =>
  (locales as readonly string[]).includes(value ?? '') ? (value as Locale) : defaultLocale;

/** Locale actual + su contenido. Único punto de acceso al copy desde componentes. */
export const useSiteContent = (astro: Pick<AstroGlobal, 'currentLocale'>) => {
  const locale = resolveLocale(astro.currentLocale);
  return { locale, content: getSiteContent(locale) };
};

const isExternal = (path: string) => /^https?:\/\//.test(path);

/**
 * Prefija `/en` a rutas internas cuando el locale no es el por defecto.
 * `/` → `/en`, `/#solucion` → `/en#solucion`, `/mdr` → `/en/mdr`. Sin barra final.
 */
export const localizePath = (path: string, locale: Locale): string => {
  if (locale === defaultLocale || isExternal(path)) return path;
  if (path === '/') return `/${locale}`;
  if (path.startsWith('/#')) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
};

const unprefixedPathFor = (key: RouteKey, content: SiteContent): string => {
  if (key === 'home') return '/';
  if (key === 'privacy') return `/${content.legal.privacy.slug}`;
  return `/${content.pillars[key].slug}`;
};

export const pathFor = (key: RouteKey, locale: Locale): string =>
  localizePath(unprefixedPathFor(key, getSiteContent(locale)), locale);

/** Ruta equivalente de una página en cada idioma (para hreflang y el selector). */
export const alternatePaths = (key: RouteKey): Record<Locale, string> =>
  Object.fromEntries(locales.map((locale) => [locale, pathFor(key, locale)])) as Record<
    Locale,
    string
  >;
