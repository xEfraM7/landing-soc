import type { IconName } from '@assets/icons';

// ---- Tipos compartidos --------------------------------------------------

export interface Cta {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface SiteSeo extends SeoMeta {
  /** Cadena vacía = desactivado. Se rellena cuando existan las propiedades. */
  analytics: {
    ga4Id: string;
    searchConsoleToken: string;
  };
}

export interface OrganizationContent {
  legalName: string;
  foundingYear: number;
  sameAs: string[];
  contactUrl: string;
}

export type PillarKey = 'venezuela' | 'soc-service' | 'mdr' | 'msp' | 'faq';
export type RouteKey = 'home' | PillarKey | 'privacy';
export const pillarKeys: PillarKey[] = ['venezuela', 'soc-service', 'mdr', 'msp', 'faq'];

export interface SourceLink {
  label: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PillarPageContent {
  /** Segmento de URL sin prefijo de idioma. */
  slug: string;
  seo: SeoMeta;
  eyebrow: string;
  title: string;
  lead: string;
  /** Si existe se emite schema `Service`. La FAQ no lo lleva. */
  serviceType?: string;
  sections: ContentSection[];
  faqHeading: string;
  faq: FaqItem[];
  relatedHeading: string;
  /** Señal de frescura visible. ISO yyyy-mm-dd + etiqueta localizada. */
  updated?: { date: string; label: string };
  /** Fuentes citadas: los buscadores con IA priorizan contenido con referencias. */
  sources?: { heading: string; links: SourceLink[] };
}

export interface LegalPageContent {
  slug: string;
  seo: SeoMeta;
  title: string;
  /** ISO yyyy-mm-dd */
  updatedAt: string;
  updatedLabel: string;
  sections: ContentSection[];
}

// ---- Tipos por sección --------------------------------------------------

export interface BrandContent {
  name: string;
  icon: IconName;
  homeHref: string;
}

export interface NavContent {
  links: NavLink[];
  servicesLabel: string;
  services: NavLink[];
  cta: Cta;
  languageSwitcher: { ariaLabel: string };
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  lead: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  highlights: string[];
}

export interface ProblemContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export interface SolutionPillar {
  title: string;
  body: string;
  icon: IconName;
  /** Ruta interna sin prefijo de idioma hacia la página pilar relacionada. */
  href: string;
  linkLabel: string;
}

export interface SolutionContent {
  eyebrow: string;
  heading: string;
  lead: string;
  paragraphs: string[];
  pillars: SolutionPillar[];
}

export interface PersonaItem {
  tag: string;
  title: string;
  body: string;
  icon: IconName;
}

export interface PersonasContent {
  eyebrow: string;
  heading: string;
  lead: string;
  items: PersonaItem[];
}

export interface DifferentiatorItem {
  number: string;
  title: string;
  body: string;
}

export interface DifferentiatorsContent {
  eyebrow: string;
  heading: string;
  lead: string;
  items: DifferentiatorItem[];
}

export interface PlanItem {
  name: string;
  summary: string;
  /** Texto previo a la lista, p. ej. "Incluye todo lo del Plan Max, además de:". */
  includesLabel?: string;
  features: string[];
  idealFor: string;
  featured?: boolean;
}

export interface PlanPerk {
  title: string;
  body: string;
}

/** Planes sin precios: el precio se da en la cotización. */
export interface PlansContent {
  eyebrow: string;
  heading: string;
  lead: string;
  featuredLabel: string;
  items: PlanItem[];
  perks: PlanPerk[];
  cta: Cta;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
}

export interface TeamContent {
  eyebrow: string;
  heading: string;
  about: {
    heading: string;
    paragraphs: string[];
  };
  members: TeamMember[];
}

export interface CtaContent {
  heading: string;
  lead: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface FooterContent {
  tagline: string;
  cta: Cta;
  columns: FooterColumn[];
  copyright: string;
}

export interface SiteContent {
  brand: BrandContent;
  seo: SiteSeo;
  organization: OrganizationContent;
  nav: NavContent;
  breadcrumb: { homeLabel: string };
  hero: HeroContent;
  problem: ProblemContent;
  solution: SolutionContent;
  personas: PersonasContent;
  differentiators: DifferentiatorsContent;
  plans: PlansContent;
  team: TeamContent;
  cta: CtaContent;
  pillars: Record<PillarKey, PillarPageContent>;
  legal: { privacy: LegalPageContent };
  footer: FooterContent;
}
