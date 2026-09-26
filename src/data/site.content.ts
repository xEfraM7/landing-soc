/**
 * Source of truth del sitio CyberEM.
 *
 * Todo el copy vive en `content/es.ts` y `content/en.ts`, tipados por `SiteContent`.
 * Los componentes obtienen su slice con `useSiteContent(Astro)` (ver `@utils/i18n`);
 * nunca importan un idioma concreto ni llevan texto hardcodeado.
 *
 * Las rutas internas del contenido (`/#solucion`, `/mdr`, …) van sin prefijo de idioma:
 * `localizePath` añade `/en` cuando corresponde.
 */
import type { Locale } from './site.config';
import type { SiteContent } from './site.types';
import { es } from './content/es';
import { en } from './content/en';

export * from './site.config';
export * from './site.types';

export const getSiteContent = (locale: Locale): SiteContent => (locale === 'en' ? en : es);
