/** Dominio público del sitio. Base de canonical, hreflang, OG y JSON-LD. */
export const SITE_URL = 'https://ciberem.com';

/** Evento público de Calendly donde se agendan las demos. */
export const CALENDLY_URL = 'https://calendly.com/contact-cyberem/30min';

/** Mercado prioritario. Alimenta `areaServed` en el JSON-LD de Organization y Service. */
/**
 * El número de WhatsApp no aparece en el HTML: el contenido enlaza a `WHATSAPP_HREF` y
 * `scripts/whatsapp-link.ts` lo cambia por `wa.me/<número>` en el navegador.
 */
export const WHATSAPP_HREF = '/#whatsapp';
// ponytail: troceado para que no salga entero ni en el bundle; frena scrapers simples, no a un humano.
export const WHATSAPP_NUMBER_PARTS = ['58', '414', '559', '9785'];

/** Ciudad base. Sin dirección de calle: CiberEm atiende en remoto. */
export const HEADQUARTERS = {
  '@type': 'PostalAddress',
  addressLocality: 'Acarigua',
  addressRegion: 'Portuguesa',
  addressCountry: 'VE',
} as const;

export const SERVICE_AREA = [
  { '@type': 'Country', name: 'Venezuela' },
  { '@type': 'Place', name: 'Latin America' },
] as const;

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
