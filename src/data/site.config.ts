/** Dominio público del sitio. Base de canonical, hreflang, OG y JSON-LD. */
export const SITE_URL = 'https://ciberem.com';

/** Evento público de Calendly donde se agendan las demos. */
export const CALENDLY_URL = 'https://calendly.com/contact-cyberem/30min';

/** Mercado prioritario. Alimenta `areaServed` en el JSON-LD de Organization y Service. */
/** Contacto directo. `wa.me` abre WhatsApp personal o Business indistintamente. */
export const CONTACT_PHONE = '+58-414-5599785';
export const WHATSAPP_URL = 'https://wa.me/584145599785';

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
