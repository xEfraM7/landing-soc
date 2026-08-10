import type { IconName } from '@assets/icons';

/**
 * Source of truth ÚNICO del sitio CyberEM.
 *
 * Todo el copy, navegación, SEO y datos de cada sección de la landing viven aquí.
 * Las features NO tienen `*.data.ts` propios: importan su slice desde `siteContent`.
 *
 * Para editar contenido (textos, perfiles, diferenciadores, equipo, etc.) modifica
 * este archivo — no toques el markup de los componentes.
 */

/** Evento público de Calendly donde se agendan las demos. */
export const CALENDLY_URL = 'https://calendly.com/contact-cyberem/30min';

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

// ---- Tipos por sección --------------------------------------------------

export interface BrandContent {
  name: string;
  icon: IconName;
  homeHref: string;
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
  seo: SeoMeta;
  nav: {
    links: NavLink[];
    cta: Cta;
  };
  hero: HeroContent;
  problem: ProblemContent;
  solution: SolutionContent;
  personas: PersonasContent;
  differentiators: DifferentiatorsContent;
  team: TeamContent;
  cta: CtaContent;
  footer: FooterContent;
}

// ---- Contenido ----------------------------------------------------------

export const siteContent: SiteContent = {
  brand: {
    name: 'CyberEM',
    icon: 'shield',
    homeHref: '#top',
  },

  seo: {
    title: 'CyberEM — Detección y respuesta ante amenazas en una sola plataforma',
    description:
      'Monitoreo SOC 24/7, gestión de incidentes y protección continua. Ayudamos a empresas y MSPs a detectar, investigar y responder amenazas sin construir un SOC interno.',
  },

  nav: {
    links: [
      { label: 'Problema', href: '#problema' },
      { label: 'Solución', href: '#solucion' },
      { label: 'Perfiles', href: '#perfiles' },
      { label: 'Diferenciadores', href: '#diferenciadores' },
      { label: 'Equipo', href: '#equipo' },
    ],
    cta: { label: 'Solicitar Demo', href: '#contacto' },
  },

  hero: {
    eyebrow: 'SOC · Detección y Respuesta',
    title: 'Detectamos amenazas antes de que afecten tu negocio.',
    lead: 'Monitoreo SOC 24/7, gestión de incidentes, hardening y protección continua desde una sola plataforma.',
    description:
      'Ayudamos a empresas y MSPs a identificar, investigar, fortalecer y responder amenazas en tiempo real sin necesidad de construir un SOC interno.',
    primaryCta: { label: 'Solicitar Demo', href: '#contacto' },
    secondaryCta: { label: 'Ver Plataforma', href: '#solucion' },
    highlights: [
      'Monitoreo 24/7',
      'Respuesta rápida ante incidentes',
      'Visibilidad completa de tu entorno',
      'Reportes ejecutivos y técnicos',
    ],
  },

  problem: {
    eyebrow: 'El reto',
    heading: 'El Problema',
    paragraphs: [
      'Las amenazas cibernéticas crecen cada día, pero muchas organizaciones siguen sin contar con la visibilidad y capacidad de respuesta necesarias para detectarlas a tiempo.',
      'Los equipos de seguridad se enfrentan a miles de eventos y alertas provenientes de múltiples herramientas. Entre tanto ruido, las amenazas reales pueden pasar desapercibidas, aumentando el riesgo de brechas de seguridad, interrupciones operativas y pérdidas económicas.',
    ],
  },

  solution: {
    eyebrow: 'Nuestra propuesta',
    heading: 'Nuestra Solución',
    lead: 'CyberEM centraliza la detección, investigación y respuesta ante amenazas en una sola plataforma.',
    paragraphs: [
      'Ayudamos a organizaciones y proveedores de servicios gestionados (MSP) a reducir el ruido, priorizar los incidentes que realmente importan y responder más rápido ante posibles ataques.',
      'Con monitoreo continuo, visibilidad centralizada y automatización de procesos, los equipos de seguridad pueden enfocarse en proteger el negocio en lugar de gestionar herramientas aisladas.',
    ],
    pillars: [
      {
        title: 'Reduce el ruido',
        body: 'Correlación y enriquecimiento automático para que solo escales lo que de verdad importa.',
        icon: 'activity',
      },
      {
        title: 'Prioriza lo crítico',
        body: 'Clasifica incidentes por riesgo real y enfoca al equipo en las amenazas de mayor impacto.',
        icon: 'target',
      },
      {
        title: 'Responde más rápido',
        body: 'Monitoreo continuo y automatización para acortar el tiempo de detección y respuesta.',
        icon: 'zap',
      },
    ],
  },

  personas: {
    eyebrow: 'Para tu equipo',
    heading: 'Pensado para los cuatro perfiles',
    lead: 'Una sola plataforma que se adapta a cómo trabaja cada rol del equipo de seguridad.',
    items: [
      {
        tag: 'MSP / SOC Gestionado',
        title: 'Gestiona múltiples clientes desde una sola plataforma',
        body: 'Aísla datos, alertas y activos por organización mientras mantienes una operación centralizada y eficiente.',
        icon: 'workflow',
      },
      {
        tag: 'Analista SOC',
        title: 'Investiga y responde amenazas más rápido',
        body: 'Correlación de eventos, enriquecimiento automático y workflows diseñados para reducir el tiempo de respuesta.',
        icon: 'search',
      },
      {
        tag: 'CISO / Líder de Seguridad',
        title: 'Obtén visibilidad real del riesgo',
        body: 'Métricas de seguridad, tendencias, cumplimiento y reportes ejecutivos para apoyar la toma de decisiones.',
        icon: 'gauge',
      },
      {
        tag: 'Equipo de Respuesta a Incidentes',
        title: 'Toda la evidencia en un solo lugar',
        body: 'IOC, timeline, casos, observables y documentación centralizada para investigaciones más eficientes.',
        icon: 'shield',
      },
    ],
  },

  differentiators: {
    eyebrow: 'Por qué CyberEM',
    heading: 'Diferenciadores',
    lead: 'Lo que hace distinta a nuestra plataforma frente a un stack de herramientas aisladas.',
    items: [
      {
        number: '01',
        title: 'Un SOC para todos tus clientes',
        body: 'Gestiona múltiples organizaciones desde una sola consola sin perder aislamiento ni control.',
      },
      {
        number: '02',
        title: 'Control de acceso inteligente',
        body: 'Cada usuario ve únicamente la información que necesita según su función y organización.',
      },
      {
        number: '03',
        title: 'Trazabilidad completa',
        body: 'Toda acción queda registrada para auditorías, cumplimiento y análisis forense.',
      },
      {
        number: '04',
        title: 'Detección y respuesta en tiempo real',
        body: 'Recibe alertas al instante y acelera la investigación con automatización integrada.',
      },
      {
        number: '05',
        title: 'Menos herramientas, más productividad',
        body: 'Centraliza monitoreo, investigaciones, casos y reportes en una única plataforma.',
      },
      {
        number: '06',
        title: 'Métricas que importan',
        body: 'Mide MTTD, MTTR, cobertura de amenazas y desempeño operativo con paneles ejecutivos.',
      },
    ],
  },

  team: {
    eyebrow: 'Quiénes somos',
    heading: 'Conócenos',
    about: {
      heading: 'Acerca de nosotros',
      paragraphs: [
        'Somos dos co-fundadores con perfiles complementarios: ciberseguridad técnica e ingeniería de software. Creamos CyberEM convencidos de que la detección y respuesta ante amenazas debe ser accesible para empresas de todos los tamaños, no solo para grandes corporaciones con equipos SOC internos.',
        'Combinamos experiencia operativa en seguridad ofensiva y defensiva con ingeniería de producto para construir una plataforma que reduce el tiempo de detección, elimina el ruido y permite a los equipos responder con rapidez y contexto.',
      ],
    },
    members: [
      {
        name: 'Maurizio Cucina',
        role: 'Co-Fundador · Ciberseguridad',
        bio: 'Licenciado en Ciberseguridad. Responsable de la estrategia técnica de detección, investigación y respuesta ante amenazas en CyberEM.',
        photo: '/team/maurizio-cucina.jpg',
        linkedin: 'https://www.linkedin.com/in/maurizio-cucina-50899a232/',
      },
      {
        name: 'Efrain Cabrera',
        role: 'Co-Fundador · Desarrollo',
        bio: 'Ingeniero en Informática con experiencia en ciberseguridad y desarrollo de aplicaciones web. Responsable de arquitectura y producto en CyberEM.',
        photo: '/team/efrain-cabrera.png',
        linkedin: 'https://www.linkedin.com/in/efrain-cabrera-b25489216/',
      },
    ],
  },

  cta: {
    heading: 'Protege tu negocio con detección y respuesta gestionada',
    lead: 'Solicita una demo y descubre cómo CyberEM unifica el monitoreo, la investigación y la respuesta en una sola plataforma.',
    primaryCta: { label: 'Agendar una reunión', href: CALENDLY_URL },
    secondaryCta: { label: 'Ver Plataforma', href: '#solucion' },
  },

  footer: {
    tagline: 'Detección, investigación y respuesta ante amenazas desde una sola plataforma.',
    cta: { label: 'Solicitar Demo', href: '#contacto' },
    columns: [
      {
        heading: 'Plataforma',
        links: [
          { label: 'Inicio', href: '#top' },
          { label: 'Solución', href: '#solucion' },
          { label: 'Diferenciadores', href: '#diferenciadores' },
          { label: 'Perfiles', href: '#perfiles' },
        ],
      },
      {
        heading: 'Empresa',
        links: [
          { label: 'Conócenos', href: '#equipo' },
          { label: 'Solicitar Demo', href: '#contacto' },
        ],
      },
    ],
    copyright: 'CyberEM. Todos los derechos reservados.',
  },
};
