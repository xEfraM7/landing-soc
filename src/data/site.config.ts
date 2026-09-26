/** Dominio público del sitio. Base de canonical, hreflang, OG y JSON-LD. */
export const SITE_URL = 'https://ciberem.com';

/** Evento público de Calendly donde se agendan las demos. */
export const CALENDLY_URL = 'https://calendly.com/contact-cyberem/30min';

/** Mercado prioritario. Alimenta `areaServed` en el JSON-LD de Organization y Service. */
export const SERVICE_AREA = [
  { '@type': 'Country', name: 'Venezuela' },
  { '@type': 'Place', name: 'Latin America' },
] as const;

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
