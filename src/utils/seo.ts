export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SITE_NAME = 'VenTech';
const DEFAULT_DESCRIPTION =
  'Todas las herramientas de deteccion y proteccion en un solo panel: detecta, investiga y responde a amenazas en tiempo real.';

export const buildTitle = (title: string, suffix = SITE_NAME): string =>
  title === suffix ? title : `${title} | ${suffix}`;

export const defaultSeo: SeoMeta = {
  title: `${SITE_NAME} — Plataforma SOC unificada para MSSPs y equipos de seguridad`,
  description: DEFAULT_DESCRIPTION,
  type: 'website',
};

export const siteName = SITE_NAME;
