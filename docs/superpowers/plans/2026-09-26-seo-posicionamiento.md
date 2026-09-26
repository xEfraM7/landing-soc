# SEO técnico + bilingüe + páginas pilar — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dejar ciberem.com indexable y bilingüe (es/en) con 12 URLs, datos estructurados, robots/sitemap/OG reales, analítica opcional y un plan de posicionamiento a 90 días.

**Architecture:** El contenido se divide en `src/data/content/{es,en}.ts` tipados por `SiteContent`; `getSiteContent(locale)` reemplaza el import directo. Astro i18n nativo sirve `/` (es) y `/en/` (en). Un `PillarPage` reutilizable renderiza 4 páginas pilar por idioma desde rutas dinámicas `[pillar].astro`. `BaseLayout` emite canonical, hreflang, OG y un `@graph` JSON-LD construido en `utils/seo.ts`.

**Tech Stack:** Astro 4.16 (i18n nativo), `@astrojs/sitemap` 3.2.1 (compatible con Astro 4), CSS plano con tokens, Playwright CLI (ya disponible vía `npx`) para generar `og-image.png` y `logo.png`.

## Global Constraints

- pnpm obligatorio. Nunca `npm`/`yarn`.
- Todo copy en `src/data/content/*.ts`. Cero texto hardcodeado en componentes. Cero `TODO`/placeholder publicado.
- Features no se importan entre sí. UI reutilizable en `src/components/`.
- Colores y tokens solo desde `global.css`.
- `<title>` ≤ 60 caracteres; `description` 120-160. Lo verifica `assertSeoLengths` en build.
- Contacto público: solo Calendly (`https://calendly.com/contact-cyberem/30min`). `sameAs`: LinkedIn de los dos fundadores.
- Hechos del producto solo desde `landing-data.md` y el contenido actual (Wazuh, TheHive/Cortex, DefectDojo, GreyNoise, MITRE ATT&CK, multi-tenant, RBAC 4 roles, 6 respuestas activas, SLA 15 min críticos, MTTD/MTTR).
- Commits con pathspec explícito: el repo tiene cambios ajenos sin commitear en `CLAUDE.md`, `.gitignore` y 3 borrados staged. No tocarlos hasta la Task 12.
- Cada commit termina con `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`.

---

## File map

| Acción | Archivo | Responsabilidad |
| --- | --- | --- |
| Create | `src/data/site.types.ts` | Todas las interfaces de contenido + `Locale`, `PillarKey`, `RouteKey` |
| Create | `src/data/site.config.ts` | `SITE_URL`, `CALENDLY_URL`, `locales`, `defaultLocale` |
| Create | `src/data/content/es.ts` | Contenido español (migrado + nuevo) |
| Create | `src/data/content/en.ts` | Contenido inglés |
| Rewrite | `src/data/site.content.ts` | `getSiteContent(locale)` + re-exports |
| Create | `src/utils/i18n.ts` | `resolveLocale`, `localizePath`, `pathFor`, `alternatePaths` |
| Rewrite | `src/utils/seo.ts` | `absoluteUrl`, `assertSeoLengths`, builders JSON-LD |
| Create | `src/utils/routes.ts` | `pillarStaticPaths`, `buildPillarJsonLd`, `buildLegalJsonLd`, `buildHomeJsonLd` |
| Create | `src/components/seo/JsonLd.astro` | `<script type="application/ld+json">` |
| Create | `src/components/layout/Breadcrumb.astro` | Migas + aria |
| Create | `src/components/layout/LanguageSwitcher.astro` | `ES | EN` |
| Modify | `src/layouts/BaseLayout.astro` | lang, canonical, hreflang, OG locale, JsonLd, GA4, Search Console, preload |
| Modify | `src/components/layout/Header.astro` | locale, menú Servicios (CSS), switcher |
| Modify | `src/components/layout/Footer.astro` | locale, 3 columnas |
| Modify | 6 features | `useSiteContent` en lugar de `siteContent` |
| Modify | `src/features/problem-solution/ProblemSolution.astro` | pilares enlazan a páginas pilar |
| Create | `src/features/pillar/PillarPage.astro` | Página pilar reutilizable |
| Create | `src/features/legal/LegalPage.astro` | Página legal |
| Create | `src/pages/[pillar].astro`, `src/pages/privacidad.astro`, `src/pages/en/index.astro`, `src/pages/en/[pillar].astro`, `src/pages/en/privacy.astro` | Rutas |
| Create | `src/scripts/analytics-events.ts` | Evento `demo_click` en enlaces a Calendly |
| Create | `public/robots.txt`, `public/llms.txt`, `public/og-image.png`, `public/logo.png` | Público |
| Create | `scripts/og-image.html`, `scripts/logo.html`, `scripts/generate-brand-images.mjs` | Generación de imágenes |
| Create | `vercel.json` | 301 www → apex |
| Modify | `astro.config.mjs`, `package.json` | site, i18n, sitemap, script `og:image` |
| Create | `.agents/product-marketing.md` | Contexto para skills de marketing |
| Create | `docs/marketing/estrategia-seo-posicionamiento.md` | Plan a 90 días |
| Modify | `CLAUDE.md` | Secciones 1, 3, 5, 7, 8 |

---

### Task 1: Configuración base (site, i18n, sitemap, vercel, robots)

**Files:**
- Modify: `astro.config.mjs`
- Modify: `package.json`
- Create: `vercel.json`, `public/robots.txt`

- [ ] **Step 1: Instalar sitemap compatible con Astro 4**

Run: `pnpm add @astrojs/sitemap@3.2.1`
Expected: `package.json` lista `"@astrojs/sitemap": "3.2.1"`.

- [ ] **Step 2: Reescribir `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ciberem.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
  server: { port: 4321, host: true },
});
```

- [ ] **Step 3: Crear `vercel.json`**

```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "www.ciberem.com" }],
      "destination": "https://ciberem.com/$1",
      "permanent": true
    }
  ]
}
```

- [ ] **Step 4: Crear `public/robots.txt`**

```text
User-agent: *
Allow: /

Sitemap: https://ciberem.com/sitemap-index.xml
```

- [ ] **Step 5: Verificar build**

Run: `pnpm build`
Expected: build OK; `dist/sitemap-index.xml` y `dist/sitemap-0.xml` existen y listan `https://ciberem.com/`.

- [ ] **Step 6: Commit**

```bash
git add astro.config.mjs package.json pnpm-lock.yaml vercel.json public/robots.txt
git commit -m "feat(seo): site real, i18n es/en, sitemap y redirect www" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
```

---

### Task 2: Tipos, config y contenido español migrado

**Files:**
- Create: `src/data/site.types.ts`, `src/data/site.config.ts`, `src/data/content/es.ts`
- Rewrite: `src/data/site.content.ts`

**Interfaces (Produces):**

```ts
// src/data/site.config.ts
export const SITE_URL = 'https://ciberem.com';
export const CALENDLY_URL = 'https://calendly.com/contact-cyberem/30min';
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
```

```ts
// src/data/site.types.ts (fragmento nuevo; el resto son las interfaces actuales sin cambios)
import type { IconName } from '@assets/icons';

export interface Cta { label: string; href: string }
export interface NavLink { label: string; href: string }
export interface SeoMeta { title: string; description: string }
export interface SiteSeo extends SeoMeta {
  /** Vacío = desactivado. */
  analytics: { ga4Id: string; searchConsoleToken: string };
}
export interface OrganizationContent {
  legalName: string;
  foundingYear: number;
  sameAs: string[];
  contactUrl: string;
}
export type PillarKey = 'soc-service' | 'mdr' | 'msp' | 'faq';
export type RouteKey = 'home' | PillarKey | 'privacy';
export const pillarKeys: PillarKey[] = ['soc-service', 'mdr', 'msp', 'faq'];

export interface FaqItem { question: string; answer: string }
export interface ContentSection { heading: string; paragraphs: string[]; bullets?: string[] }
export interface PillarPageContent {
  slug: string;
  seo: SeoMeta;
  eyebrow: string;
  title: string;
  lead: string;
  /** Si existe se emite schema Service. La FAQ no lo lleva. */
  serviceType?: string;
  sections: ContentSection[];
  faqHeading: string;
  faq: FaqItem[];
  relatedHeading: string;
}
export interface LegalPageContent {
  slug: string;
  seo: SeoMeta;
  title: string;
  updatedAt: string; // ISO yyyy-mm-dd
  updatedLabel: string;
  sections: ContentSection[];
}
export interface NavContent {
  links: NavLink[];
  servicesLabel: string;
  services: NavLink[];
  cta: Cta;
  languageSwitcher: { ariaLabel: string };
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
  team: TeamContent;
  cta: CtaContent;
  pillars: Record<PillarKey, PillarPageContent>;
  legal: { privacy: LegalPageContent };
  footer: FooterContent;
}
```

`SolutionPillar` gana `href: string` (ruta sin prefijo de idioma, p. ej. `/soc-como-servicio`) y `linkLabel: string`.

```ts
// src/data/site.content.ts
import type { Locale } from './site.config';
import type { SiteContent } from './site.types';
import { es } from './content/es';
import { en } from './content/en';

export * from './site.config';
export * from './site.types';

export const getSiteContent = (locale: Locale): SiteContent => (locale === 'en' ? en : es);
```

- [ ] **Step 1: Crear `site.config.ts` y `site.types.ts`** con el contenido anterior más las interfaces existentes (`BrandContent`, `HeroContent`, `ProblemContent`, `SolutionPillar`, `SolutionContent`, `PersonaItem`, `PersonasContent`, `DifferentiatorItem`, `DifferentiatorsContent`, `TeamMember`, `TeamContent`, `CtaContent`, `FooterColumn`, `FooterContent`) copiadas tal cual de `site.content.ts` actual.

- [ ] **Step 2: Crear `src/data/content/es.ts`** exportando `export const es: SiteContent = {...}` con el contenido actual migrado y estos cambios/adiciones:

- `seo.title`: `Plataforma SOC de detección y respuesta | CiberEm` (49).
- `seo.description`: `Plataforma SOC con monitoreo 24/7, gestión de incidentes y respuesta ante amenazas para empresas y MSPs. Detecta, investiga y responde sin construir un SOC interno.` (≤160; ajustar si el build falla).
- `seo.analytics`: `{ ga4Id: '', searchConsoleToken: '' }`.
- `organization`: `{ legalName: 'CiberEm', foundingYear: 2025, sameAs: [LinkedIn Maurizio, LinkedIn Efrain], contactUrl: CALENDLY_URL }`.
- `nav.links`: `[{ label: 'Solución', href: '/#solucion' }, { label: 'Perfiles', href: '/#perfiles' }, { label: 'Equipo', href: '/#equipo' }]`; `nav.servicesLabel: 'Servicios'`; `nav.services`: SOC como servicio → `/soc-como-servicio`, MDR → `/mdr`, SOC para MSP → `/soc-para-msp`, Preguntas frecuentes → `/preguntas-frecuentes`; `nav.cta: { label: 'Solicitar Demo', href: '/#contacto' }`; `languageSwitcher.ariaLabel: 'Cambiar idioma'`.
- `brand.homeHref: '/'`. `breadcrumb.homeLabel: 'Inicio'`.
- `hero.title`: `Plataforma SOC: detectamos y respondemos antes de que la amenaza afecte tu negocio.`
- `hero.secondaryCta.href: '/#solucion'`, `primaryCta.href: '/#contacto'`.
- `solution.pillars[i]` añaden `href` y `linkLabel`: Reduce el ruido → `/soc-como-servicio` / `Conoce el SOC como servicio`; Prioriza lo crítico → `/mdr` / `Descubre el MDR`; Responde más rápido → `/soc-para-msp` / `SOC multi-tenant para MSP`.
- `cta.secondaryCta.href: '/#solucion'`.
- `footer.columns`: Plataforma (`/#solucion`, `/#perfiles`, `/#diferenciadores`, `/#equipo`), Servicios (los 4 de `nav.services`), Empresa (`Solicitar Demo` → `/#contacto`, `Política de privacidad` → `/privacidad`). `footer.cta.href: '/#contacto'`.
- `pillars` y `legal`: se rellenan en Task 3 (crear con el contenido de Task 3 directamente; no dejar vacío).

- [ ] **Step 3: Reescribir `site.content.ts`** con el snippet anterior. `en.ts` todavía no existe: crear un `en.ts` temporal `export const en = es;`? **No.** Task 3 crea `en.ts` real; hasta entonces `site.content.ts` no compila. Ejecutar Task 2 y 3 antes de correr `pnpm check`.

---

### Task 3: Contenido de páginas pilar, legal y versión inglesa

**Files:**
- Modify: `src/data/content/es.ts` (añadir `pillars`, `legal`)
- Create: `src/data/content/en.ts`

**Outline obligatorio por pilar (es / en).** Cuerpo: 2-3 párrafos por sección de 40-70 palabras, primer párrafo define el término. Hechos solo de `landing-data.md`.

| Key | slug es / en | title (≤60) | H1 | Secciones (H2) | FAQ (5) |
| --- | --- | --- | --- | --- | --- |
| `soc-service` | `soc-como-servicio` / `soc-as-a-service` | `SOC como servicio 24/7 para empresas \| CiberEm` / `SOC as a Service 24/7 for Businesses \| CiberEm` | `SOC como servicio: monitoreo, detección y respuesta 24/7` | Qué es un SOC como servicio · Qué incluye el SOC de CiberEm · Para quién es · Cómo empezamos (4 pasos de landing-data §3) | ¿Qué diferencia un SOC como servicio de un SOC interno? · ¿Qué herramientas integra? · ¿Cuánto tarda la puesta en marcha? · ¿Puedo evaluarlo sin infraestructura? · ¿Qué reportes recibo? |
| `mdr` | `mdr` / `mdr` | `MDR: detección y respuesta gestionada \| CiberEm` / `MDR: Managed Detection and Response \| CiberEm` | `MDR: detección y respuesta gestionada ante amenazas` | Qué es MDR · Detección con MITRE ATT&CK · Respuesta activa (6 acciones) · Métricas MTTD, MTTC y MTTR | ¿MDR es lo mismo que EDR? · ¿Qué acciones de respuesta se ejecutan? · ¿Quién autoriza una acción disruptiva? · ¿Cómo se mide el tiempo de respuesta? · ¿Cubre servidores y endpoints? |
| `msp` | `soc-para-msp` / `soc-for-msps` | `SOC multi-tenant para MSP y MSSP \| CiberEm` / `Multi-tenant SOC for MSPs and MSSPs \| CiberEm` | `SOC multi-tenant para MSP: todos tus clientes, una consola` | Por qué un MSP necesita un SOC multi-tenant · Aislamiento por organización · RBAC de 4 roles y auditoría · Reportes por cliente | ¿Cómo se aíslan los datos de cada cliente? · ¿Puedo dar acceso a mis clientes? · ¿Qué roles existen? · ¿Se registra cada acción? · ¿Cómo escala con más clientes? |
| `faq` | `preguntas-frecuentes` / `faq` | `Preguntas frecuentes sobre SOC y MDR \| CiberEm` / `SOC and MDR Frequently Asked Questions \| CiberEm` | `Preguntas frecuentes` | Sobre la plataforma · Integraciones · Seguridad y cumplimiento (cada sección 1 párrafo introductorio) | 8 preguntas: las 5 de landing-data §9 + ¿Qué es MTTD/MTTR? · ¿Cómo agendo una demo? · ¿En qué idiomas está disponible? |

Sin `serviceType` en `faq`. `serviceType` en los demás: `SOC como servicio` / `MDR` / `SOC gestionado para MSP` (en inglés equivalente).

**Legal `privacy`:** slug `privacidad` / `privacy`; title `Política de privacidad | CiberEm` / `Privacy Policy | CiberEm`; `updatedAt: '2026-09-26'`; secciones: Responsable (CiberEm, contacto vía Calendly y LinkedIn) · Datos que recogemos (sitio estático sin formularios; analítica GA4 solo si está activa, con IP anonimizada por defecto en GA4) · Servicios de terceros (Calendly al agendar, Vercel como hosting, Google Analytics) · Tus derechos (acceso, rectificación, supresión; cómo ejercerlos) · Cambios en esta política.

- [ ] **Step 1: Añadir `pillars` y `legal` a `es.ts`** según outline.
- [ ] **Step 2: Crear `en.ts`** con la misma forma; ids de ancla (`/#solucion`, etc.) idénticos; rutas de pilares con slugs en inglés.
- [ ] **Step 3: Type-check**

Run: `pnpm check`
Expected: 0 errores en `src/data/**`. Errores en componentes que aún importan `siteContent` son esperados y se arreglan en Task 5.

- [ ] **Step 4: Commit**

```bash
git add src/data
git commit -m "feat(content): source of truth por idioma con páginas pilar y legal" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
```

---

### Task 4: Utilidades i18n, SEO y rutas

**Files:**
- Create: `src/utils/i18n.ts`, `src/utils/routes.ts`
- Rewrite: `src/utils/seo.ts`

- [ ] **Step 1: `src/utils/i18n.ts`**

```ts
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

export const useSiteContent = (astro: Pick<AstroGlobal, 'currentLocale'>) => {
  const locale = resolveLocale(astro.currentLocale);
  return { locale, content: getSiteContent(locale) };
};

const isExternal = (path: string) => /^https?:\/\//.test(path);

/** Prefija `/en` a rutas internas cuando el locale no es el por defecto. `/` → `/en/`. */
export const localizePath = (path: string, locale: Locale): string => {
  if (locale === defaultLocale || isExternal(path)) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
};

const unprefixedPathFor = (key: RouteKey, content: SiteContent): string => {
  if (key === 'home') return '/';
  if (key === 'privacy') return `/${content.legal.privacy.slug}`;
  return `/${content.pillars[key].slug}`;
};

export const pathFor = (key: RouteKey, locale: Locale): string =>
  localizePath(unprefixedPathFor(key, getSiteContent(locale)), locale);

export const alternatePaths = (key: RouteKey): Record<Locale, string> =>
  Object.fromEntries(locales.map((l) => [l, pathFor(key, l)])) as Record<Locale, string>;
```

- [ ] **Step 2: `src/utils/seo.ts`**

```ts
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

/** Falla el build si un título o descripción sale de rango. */
export const assertSeoLengths = (seo: SeoMeta, page: string): void => {
  if (seo.title.length > TITLE_MAX) {
    throw new Error(`SEO [${page}]: título de ${seo.title.length} caracteres (máx ${TITLE_MAX})`);
  }
  const len = seo.description.length;
  if (len < DESCRIPTION_MIN || len > DESCRIPTION_MAX) {
    throw new Error(
      `SEO [${page}]: descripción de ${len} caracteres (rango ${DESCRIPTION_MIN}-${DESCRIPTION_MAX})`,
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

export interface BreadcrumbItem { name: string; url: string }

export const buildBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
```

- [ ] **Step 3: `src/utils/routes.ts`**

```ts
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

export const pillarStaticPaths = (locale: Locale) => {
  const content = getSiteContent(locale);
  return pillarKeys.map((key) => ({ params: { pillar: content.pillars[key].slug }, props: { key } }));
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
```

- [ ] **Step 4: Commit**

```bash
git add src/utils
git commit -m "feat(seo): helpers i18n, JSON-LD y rutas" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
```

---

### Task 5: Layout, JsonLd, Header, Footer y features con locale

**Files:**
- Create: `src/components/seo/JsonLd.astro`, `src/components/layout/LanguageSwitcher.astro`, `src/components/layout/Breadcrumb.astro`, `src/scripts/analytics-events.ts`
- Modify: `src/layouts/BaseLayout.astro`, `src/components/layout/Header.astro`, `src/components/layout/Footer.astro`, 6 features

- [ ] **Step 1: `JsonLd.astro`**

```astro
---
interface Props { graph: object[] }
const { graph } = Astro.props;
const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
---

<script type="application/ld+json" set:html={json} is:inline />
```

- [ ] **Step 2: `LanguageSwitcher.astro`**

```astro
---
import { locales, type Locale, type RouteKey } from '@data/site.content';
import { alternatePaths, useSiteContent } from '@utils/i18n';

interface Props { routeKey: RouteKey }
const { routeKey } = Astro.props;
const { locale, content } = useSiteContent(Astro);
const paths = alternatePaths(routeKey);
---

<nav class="lang" aria-label={content.nav.languageSwitcher.ariaLabel}>
  {locales.map((code: Locale) => (
    <a href={paths[code]} hreflang={code} lang={code} aria-current={code === locale ? 'page' : undefined}>
      {code.toUpperCase()}
    </a>
  ))}
</nav>

<style>
  .lang { display: inline-flex; gap: 0.25rem; font-family: var(--font-mono); font-size: 0.75rem; }
  .lang a { padding: 0.25rem 0.4rem; color: var(--fg-muted); border-radius: var(--radius-xs); }
  .lang a[aria-current='page'] { color: var(--fg-strong); background: var(--bg-card); }
  .lang a:hover { color: var(--fg-strong); }
</style>
```

- [ ] **Step 3: `Breadcrumb.astro`**

```astro
---
import type { BreadcrumbItem } from '@utils/seo';

interface Props { items: BreadcrumbItem[]; label: string }
const { items, label } = Astro.props;
const last = items.length - 1;
---

<nav class="crumbs" aria-label={label}>
  <ol role="list">
    {items.map((item, i) => (
      <li>
        {i === last ? <span aria-current="page">{item.name}</span> : <a href={item.url}>{item.name}</a>}
      </li>
    ))}
  </ol>
</nav>

<style>
  .crumbs ol { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0; padding: 0; list-style: none; font-size: 0.85rem; color: var(--fg-muted); }
  .crumbs li + li::before { content: '/'; margin-right: 0.5rem; color: var(--fg-faint); }
  .crumbs a { color: var(--fg-muted); }
  .crumbs a:hover { color: var(--fg-strong); }
  .crumbs [aria-current] { color: var(--fg-default); }
</style>
```

- [ ] **Step 4: `analytics-events.ts`**

```ts
/** Envía `demo_click` a GA4 cuando existe gtag. Sin gtag no hace nada. */
declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

document.querySelectorAll<HTMLAnchorElement>('a[href*="calendly.com"]').forEach((link) => {
  link.addEventListener('click', () => window.gtag?.('event', 'demo_click', { href: link.href }));
});
```

- [ ] **Step 5: `BaseLayout.astro`**

```astro
---
import '@styles/global.css';
import JsonLd from '@components/seo/JsonLd.astro';
import { defaultLocale, locales, type RouteKey } from '@data/site.content';
import { alternatePaths, pathFor, useSiteContent } from '@utils/i18n';
import { absoluteUrl, assertSeoLengths } from '@utils/seo';

interface Props {
  title: string;
  description: string;
  routeKey: RouteKey;
  jsonLd: object[];
  image?: string;
}

const { title, description, routeKey, jsonLd, image = '/og-image.png' } = Astro.props;
const { locale, content } = useSiteContent(Astro);
assertSeoLengths({ title, description }, `${routeKey}/${locale}`);

const canonical = absoluteUrl(pathFor(routeKey, locale));
const alternates = alternatePaths(routeKey);
const imageUrl = absoluteUrl(image);
const ogLocale: Record<string, string> = { es: 'es_ES', en: 'en_US' };
const { ga4Id, searchConsoleToken } = content.seo.analytics;
const analyticsEnabled = import.meta.env.PROD && ga4Id !== '';
---

<!doctype html>
<html lang={locale}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content={Astro.generator} />
    <meta name="color-scheme" content="dark" />
    <meta name="theme-color" content="#09090b" />

    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    {locales.map((code) => <link rel="alternate" hreflang={code} href={absoluteUrl(alternates[code])} />)}
    <link rel="alternate" hreflang="x-default" href={absoluteUrl(alternates[defaultLocale])} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    {searchConsoleToken && <meta name="google-site-verification" content={searchConsoleToken} />}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={content.brand.name} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content={ogLocale[locale]} />
    {locales.filter((c) => c !== locale).map((c) => <meta property="og:locale:alternate" content={ogLocale[c]} />)}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />

    <JsonLd graph={jsonLd} />

    {analyticsEnabled && (
      <>
        <script is:inline async src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}></script>
        <script is:inline define:vars={{ ga4Id }}>
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', ga4Id);
        </script>
      </>
    )}
  </head>
  <body>
    <slot name="header" />
    <main><slot /></main>
    <slot name="footer" />
    <script>
      import '@/scripts/smooth-scroll';
      import '@/scripts/analytics-events';
    </script>
  </body>
</html>
```

Preload de fuente: si `global.css` importa `@fontsource-variable/geist`, añadir en `<head>`:
`import geistUrl from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url';` y
`<link rel="preload" href={geistUrl} as="font" type="font/woff2" crossorigin />`. Verificar que el archivo existe en `node_modules` antes de añadirlo.

- [ ] **Step 6: `Header.astro`** — frontmatter y markup (estilos actuales se conservan; añadir los del menú):

```astro
---
import Button from '@components/ui/Button.astro';
import Icon from '@components/ui/Icon.astro';
import LanguageSwitcher from '@components/layout/LanguageSwitcher.astro';
import type { RouteKey } from '@data/site.content';
import { localizePath, useSiteContent } from '@utils/i18n';

interface Props { routeKey: RouteKey }
const { routeKey } = Astro.props;
const { locale, content } = useSiteContent(Astro);
const { brand, nav } = content;
const href = (path: string) => localizePath(path, locale);
---

<header class="site-header">
  <div class="site-header__inner">
    <a href={href(brand.homeHref)} class="brand" aria-label={brand.name}>
      <span class="brand__mark" aria-hidden="true"><Icon name={brand.icon} size={18} strokeWidth={2} /></span>
      <span class="brand__name">{brand.name}</span>
    </a>

    <nav class="nav" aria-label={nav.servicesLabel}>
      <ul role="list">
        <li class="has-menu">
          <button type="button" aria-haspopup="true">{nav.servicesLabel} <Icon name="chevron-down" size={14} /></button>
          <ul class="menu" role="list">
            {nav.services.map((link) => <li><a href={href(link.href)}>{link.label}</a></li>)}
          </ul>
        </li>
        {nav.links.map((link) => <li><a href={href(link.href)}>{link.label}</a></li>)}
      </ul>
    </nav>

    <div class="actions">
      <LanguageSwitcher routeKey={routeKey} />
      <Button href={href(nav.cta.href)} variant="primary" size="sm" iconAfter="arrow-right">{nav.cta.label}</Button>
    </div>
  </div>
</header>
```

CSS del menú (añadir al `<style>` existente):

```css
.has-menu { position: relative; }
.has-menu > button { display: inline-flex; align-items: center; gap: 0.35rem; height: 33px; padding: 0 1rem; font: inherit; font-size: 0.875rem; color: var(--fg-muted); background: none; border: 0; border-radius: var(--radius-sm); cursor: pointer; }
.has-menu > button:hover, .has-menu:focus-within > button { color: var(--fg-strong); }
.menu { position: absolute; top: calc(100% + 0.5rem); left: 0; min-width: 220px; display: none; flex-direction: column; gap: 0.15rem; padding: 0.4rem; margin: 0; list-style: none; background: var(--bg-elev-1); border: 1px solid var(--border-strong); border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
.has-menu:hover .menu, .has-menu:focus-within .menu { display: flex; }
.menu a { display: block; padding: 0.5rem 0.75rem; font-size: 0.875rem; color: var(--fg-muted); border-radius: var(--radius-sm); }
.menu a:hover { color: var(--fg-strong); background: var(--bg-card); }
```

- [ ] **Step 7: `Footer.astro`** — frontmatter:

```astro
---
import Container from '@components/ui/Container.astro';
import Button from '@components/ui/Button.astro';
import Icon from '@components/ui/Icon.astro';
import { localizePath, useSiteContent } from '@utils/i18n';

const { locale, content } = useSiteContent(Astro);
const { brand, footer } = content;
const href = (path: string) => localizePath(path, locale);
const year = new Date().getFullYear();
---
```

Markup: `href={href(brand.homeHref)}`, `href={href(footer.cta.href)}`, `href={href(link.href)}` en columnas. Grid pasa a `grid-template-columns: 1.6fr 1fr 1fr 1fr` (3 columnas de enlaces).

- [ ] **Step 8: Features** — en `Hero`, `ProblemSolution`, `Personas`, `Differentiators`, `Team`, `Cta` sustituir

```ts
import { siteContent } from '@data/site.content';
const { ... } = siteContent.X;
```
por
```ts
import { localizePath, useSiteContent } from '@utils/i18n';
const { locale, content } = useSiteContent(Astro);
const { ... } = content.X;
const href = (path: string) => localizePath(path, locale);
```
y envolver cada `href` interno con `href(...)`. En `ProblemSolution`, cada `<li class="pillar">` añade al final:
`<a class="pillar__link" href={href(pillar.href)}>{pillar.linkLabel} <Icon name="arrow-right" size={14} /></a>` con estilo `.pillar__link { display: inline-flex; align-items: center; gap: 0.35rem; margin-top: 0.75rem; font-size: 0.875rem; color: var(--brand-500); }`.

- [ ] **Step 9: `src/pages/index.astro`** pasa `routeKey="home"` a `Header` y al layout:

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import Header from '@components/layout/Header.astro';
import Footer from '@components/layout/Footer.astro';
import Hero from '@features/hero/Hero.astro';
import ProblemSolution from '@features/problem-solution/ProblemSolution.astro';
import Personas from '@features/personas/Personas.astro';
import Differentiators from '@features/differentiators/Differentiators.astro';
import Team from '@features/team/Team.astro';
import Cta from '@features/cta/Cta.astro';
import { useSiteContent } from '@utils/i18n';
import { buildHomeJsonLd } from '@utils/routes';

const { locale, content } = useSiteContent(Astro);
---

<BaseLayout title={content.seo.title} description={content.seo.description} routeKey="home" jsonLd={buildHomeJsonLd(locale)}>
  <Header slot="header" routeKey="home" />
  <Hero />
  <ProblemSolution />
  <Personas />
  <Differentiators />
  <Team />
  <Cta />
  <Footer slot="footer" />
</BaseLayout>
```

- [ ] **Step 10: Verificar**

Run: `pnpm check && pnpm build`
Expected: 0 errores. `dist/index.html` contiene `rel="canonical" href="https://ciberem.com/"`, dos `hreflang` + `x-default`, y un `application/ld+json` con `Organization` y `WebSite`.

- [ ] **Step 11: Commit**

```bash
git add src/layouts src/components src/features src/scripts src/pages/index.astro
git commit -m "feat(seo): layout con hreflang, JSON-LD, GA4 opcional y navegación por locale" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
```

---

### Task 6: PillarPage, LegalPage y rutas

**Files:**
- Create: `src/features/pillar/PillarPage.astro`, `src/features/legal/LegalPage.astro`
- Create: `src/pages/[pillar].astro`, `src/pages/privacidad.astro`, `src/pages/en/index.astro`, `src/pages/en/[pillar].astro`, `src/pages/en/privacy.astro`

- [ ] **Step 1: `PillarPage.astro`**

```astro
---
import Container from '@components/ui/Container.astro';
import Icon from '@components/ui/Icon.astro';
import Breadcrumb from '@components/layout/Breadcrumb.astro';
import { pillarKeys, type PillarKey } from '@data/site.content';
import { pathFor, useSiteContent } from '@utils/i18n';
import { breadcrumbFor } from '@utils/routes';

interface Props { pillarKey: PillarKey }
const { pillarKey } = Astro.props;
const { locale, content } = useSiteContent(Astro);
const pillar = content.pillars[pillarKey];
const related = pillarKeys.filter((k) => k !== pillarKey).map((k) => ({ href: pathFor(k, locale), label: content.pillars[k].title }));
---

<article class="pillar-page">
  <header class="pillar-hero">
    <div class="pillar-hero__bg" aria-hidden="true"><div class="pillar-hero__glow"></div></div>
    <Container>
      <Breadcrumb items={breadcrumbFor(pillarKey, locale)} label={content.breadcrumb.homeLabel} />
      <span class="eyebrow-pill"><span class="eyebrow-pill__dot"></span>{pillar.eyebrow}</span>
      <h1 class="pillar-hero__title"><span class="text-gradient">{pillar.title}</span></h1>
      <p class="pillar-hero__lead">{pillar.lead}</p>
    </Container>
  </header>

  <Container class="pillar-body">
    {pillar.sections.map((section) => (
      <section class="block">
        <h2>{section.heading}</h2>
        {section.paragraphs.map((p) => <p>{p}</p>)}
        {section.bullets && (
          <ul role="list" class="bullets">
            {section.bullets.map((b) => <li><Icon name="check" size={16} class="bullets__icon" />{b}</li>)}
          </ul>
        )}
      </section>
    ))}

    <section class="block faq" id="faq">
      <h2>{pillar.faqHeading}</h2>
      {pillar.faq.map((item) => (
        <details class="faq__item">
          <summary>{item.question}<Icon name="chevron-down" size={16} class="faq__chevron" /></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>

    <nav class="block related" aria-label={pillar.relatedHeading}>
      <h2>{pillar.relatedHeading}</h2>
      <ul role="list">
        {related.map((r) => <li><a href={r.href}>{r.label} <Icon name="arrow-right" size={14} /></a></li>)}
      </ul>
    </nav>
  </Container>
</article>
```

Estilos: hero con `padding-block: clamp(7rem, 12vw, 9rem) 3rem`, título `clamp(2rem, 4.5vw, 3.25rem)`, `max-width: 760px` para el cuerpo, `.block { padding-block: 2.5rem; border-top: 1px solid var(--border); }`, `h2` 1.5rem, párrafos `color: var(--fg-default); line-height: 1.7`, `details` con borde `var(--border-strong)`, radio `var(--radius-md)`, `summary` flex con chevron que rota con `details[open]`. Solo tokens.

- [ ] **Step 2: `LegalPage.astro`** — misma estructura sin FAQ/related: breadcrumb, `h1`, `<time datetime={updatedAt}>{updatedLabel}</time>`, secciones.

- [ ] **Step 3: Rutas**

`src/pages/[pillar].astro`:

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import Header from '@components/layout/Header.astro';
import Footer from '@components/layout/Footer.astro';
import PillarPage from '@features/pillar/PillarPage.astro';
import Cta from '@features/cta/Cta.astro';
import type { PillarKey } from '@data/site.content';
import { useSiteContent } from '@utils/i18n';
import { buildPillarJsonLd, pillarStaticPaths } from '@utils/routes';

export const getStaticPaths = () => pillarStaticPaths('es');

const { key } = Astro.props as { key: PillarKey };
const { locale, content } = useSiteContent(Astro);
const pillar = content.pillars[key];
---

<BaseLayout title={pillar.seo.title} description={pillar.seo.description} routeKey={key} jsonLd={buildPillarJsonLd(key, locale)}>
  <Header slot="header" routeKey={key} />
  <PillarPage pillarKey={key} />
  <Cta />
  <Footer slot="footer" />
</BaseLayout>
```

`src/pages/en/[pillar].astro`: idéntico con `pillarStaticPaths('en')`.
`src/pages/en/index.astro`: copia de `index.astro`.
`src/pages/privacidad.astro` y `src/pages/en/privacy.astro`:

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import Header from '@components/layout/Header.astro';
import Footer from '@components/layout/Footer.astro';
import LegalPage from '@features/legal/LegalPage.astro';
import { useSiteContent } from '@utils/i18n';
import { buildLegalJsonLd } from '@utils/routes';

const { locale, content } = useSiteContent(Astro);
const page = content.legal.privacy;
---

<BaseLayout title={page.seo.title} description={page.seo.description} routeKey="privacy" jsonLd={buildLegalJsonLd(locale)}>
  <Header slot="header" routeKey="privacy" />
  <LegalPage />
  <Footer slot="footer" />
</BaseLayout>
```

- [ ] **Step 4: Verificar**

Run: `pnpm check && pnpm build && ls dist dist/en`
Expected: `dist/{index,soc-como-servicio,mdr,soc-para-msp,preguntas-frecuentes,privacidad}` y `dist/en/{index,soc-as-a-service,mdr,soc-for-msps,faq,privacy}`. `dist/sitemap-0.xml` con 12 `<url>` y `xhtml:link` alternates.

- [ ] **Step 5: Commit**

```bash
git add src/features/pillar src/features/legal src/pages
git commit -m "feat(seo): páginas pilar y legal en es/en" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
```

---

### Task 7: Imágenes de marca (OG + logo) y llms.txt

**Files:**
- Create: `scripts/og-image.html`, `scripts/logo.html`, `scripts/generate-brand-images.mjs`, `public/llms.txt`
- Generate: `public/og-image.png` (1200×630), `public/logo.png` (512×512)
- Modify: `package.json` (script `og:image`)

- [ ] **Step 1: `scripts/generate-brand-images.mjs`**

```js
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const jobs = [
  ['scripts/og-image.html', 'public/og-image.png', '1200,630'],
  ['scripts/logo.html', 'public/logo.png', '512,512'],
];

for (const [source, target, size] of jobs) {
  const url = pathToFileURL(resolve(source)).href;
  execSync(`npx playwright screenshot --viewport-size=${size} "${url}" "${target}"`, { stdio: 'inherit' });
}
```

`package.json` → `"og:image": "node scripts/generate-brand-images.mjs"`.

- [ ] **Step 2: Plantillas** — `og-image.html`: `body` 1200×630, fondo `#09090b`, rejilla sutil, marca (escudo SVG de `icons.ts` sobre `#ff3241`) + `CiberEm` en monoespaciada, titular `Plataforma SOC: detección, investigación y respuesta` y línea `ciberem.com`. `logo.html`: 512×512, escudo blanco centrado sobre `#ff3241`, esquinas 96px. Tipografía `system-ui` (no hay fuentes en file://).

- [ ] **Step 3: Generar**

Run: `pnpm og:image`
Expected: `public/og-image.png` y `public/logo.png` creados. Abrir ambos con Read para comprobar visualmente.

- [ ] **Step 4: `public/llms.txt`**

```markdown
# CiberEm

> Plataforma SOC (Security Operations Center) para empresas y MSPs: detección, investigación y respuesta ante amenazas desde una sola consola. Integra Wazuh, TheHive/Cortex, DefectDojo y GreyNoise; mapea alertas a MITRE ATT&CK; multi-tenant con RBAC de 4 roles.

## Páginas (es)
- [Inicio](https://ciberem.com/)
- [SOC como servicio](https://ciberem.com/soc-como-servicio)
- [MDR](https://ciberem.com/mdr)
- [SOC para MSP](https://ciberem.com/soc-para-msp)
- [Preguntas frecuentes](https://ciberem.com/preguntas-frecuentes)

## Pages (en)
- [Home](https://ciberem.com/en/)
- [SOC as a Service](https://ciberem.com/en/soc-as-a-service)
- [MDR](https://ciberem.com/en/mdr)
- [SOC for MSPs](https://ciberem.com/en/soc-for-msps)
- [FAQ](https://ciberem.com/en/faq)

## Contacto
- Demo: https://calendly.com/contact-cyberem/30min
```

- [ ] **Step 5: Commit**

```bash
git add scripts public/og-image.png public/logo.png public/llms.txt package.json
git commit -m "feat(seo): og-image, logo y llms.txt" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
```

---

### Task 8: Verificación end-to-end sobre el build

- [ ] **Step 1:** `pnpm build && pnpm preview --port 4321` en background.
- [ ] **Step 2:** Para las 12 URLs + `/robots.txt`, `/sitemap-index.xml`, `/og-image.png`, `/logo.png`, `/llms.txt`: `curl -s -o /dev/null -w "%{http_code} %{url_effective}\n"`. Expected: todos 200.
- [ ] **Step 3:** Para `/`, `/mdr`, `/en/mdr`: extraer `canonical`, `hreflang`, `og:url`, `<title>` con grep. Expected: canonical = URL propia; hreflang es/en/x-default recíprocos; títulos ≤ 60.
- [ ] **Step 4:** JSON-LD: con Playwright MCP `browser_evaluate` en `/mdr`: `JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)['@graph'].map(n => n['@type'])`. Expected: `['Organization','WebSite','Service','FAQPage','BreadcrumbList']`. En `/preguntas-frecuentes`: sin `Service`.
- [ ] **Step 5:** Lighthouse: `npx -y lighthouse http://localhost:4321/ --only-categories=performance,seo,accessibility --chrome-flags="--headless" --output=json --output-path=<scratchpad>/lh-home.json` y lo mismo para `/mdr`. Expected: SEO 100, Performance ≥ 90, Accessibility ≥ 95. Registrar valores en el resumen final.
- [ ] **Step 6:** Screenshot de `/` y `/mdr` en desktop y 390px con Playwright MCP para revisar header (menú Servicios, switcher) y página pilar.

Sin commit (no hay cambios) salvo que la verificación obligue a corregir algo; entonces commit `fix(seo): ...`.

---

### Task 9: Contexto de producto para skills de marketing

**Files:**
- Create: `.agents/product-marketing.md`

Secciones: Producto (qué es, categoría: plataforma SOC / MDR), ICP (MSP/MSSP 10-200 clientes; empresas 50-1000 empleados sin SOC interno), personas (4, de `landing-data.md` §2), propuesta de valor, diferenciadores (6), pruebas técnicas (§6), objeciones frecuentes y respuestas, tono de voz (directo, técnico sin jerga vacía, español neutro / inglés internacional), CTA principal (demo Calendly), URLs del sitio, keywords primarias por URL (tabla del spec §4), competidores de referencia para posicionamiento (Wazuh Cloud, Sophos MDR, Arctic Wolf, Huntress, Blumira) con una línea de cómo nos diferenciamos de cada uno.

Commit: `git add .agents/product-marketing.md && git commit -m "docs(marketing): contexto de producto para skills" ...`

---

### Task 10: Plan de marketing y posicionamiento a 90 días

**Files:**
- Create: `docs/marketing/estrategia-seo-posicionamiento.md`

Usar los skills `marketing-plan`, `directory-submissions`, `cold-email` y `content-strategy` como guía. Escrito para los fundadores. Estructura fija:

1. Resumen ejecutivo (5 líneas).
2. Posicionamiento y mensaje por audiencia (tabla 4 personas × dolor × mensaje × página destino).
3. Keyword map por URL e idioma (tabla del spec §4 + 3 variantes long-tail por URL).
4. Fundación (semana 1): Search Console (verificar dominio DNS, enviar sitemap), GA4 (crear propiedad, pegar ID en `seo.analytics.ga4Id`), Bing Webmaster (importar desde GSC), LinkedIn company page, Rich Results Test de las 12 URLs.
5. Autoridad (semanas 2-6): tabla de directorios con URL de alta, coste, tipo de enlace y prioridad: Crunchbase, LinkedIn, Clutch, G2, Capterra, GetApp, AlternativeTo, SaaSHub, Product Hunt (lanzamiento), Cybersecurity Excellence Awards, CyberDB, Cybersecurity Ventures directory, Wazuh Partners (si aplica), TheHive community.
6. Contenido (semanas 2-12): cadencia LinkedIn 2 posts/semana por fundador con 12 temas concretos (uno por semana: MITRE ATT&CK coverage, MTTD vs MTTR, multi-tenancy, respuestas activas reversibles vs disruptivas, ...). Cada tema enlaza a una página pilar.
7. Outbound (semanas 3-12): secuencia de cold email a MSPs de 3 toques (asunto + cuerpo ≤ 90 palabras cada uno, en es y en), criterios de lista (MSPs con 10-200 clientes que ofrecen soporte IT pero no SOC), 20 envíos/semana.
8. PR y comunidad: 5 podcasts/newsletters de ciberseguridad en español e inglés a los que proponer entrevista; 3 comunidades (r/msp, r/cybersecurity, Wazuh community) con reglas de participación.
9. Medición mensual: tabla KPI × fuente × objetivo mes 1/2/3 (impresiones GSC, clics, posición media por pilar, demo_click en GA4, demos agendadas, backlinks nuevos, citas en IA vía `/geo audit https://ciberem.com`).
10. Backlog: blog con content collections (`/blog`), páginas comparativas (`/vs/...`), caso de estudio, versión `/en` de LinkedIn.

Commit: `git add docs/marketing && git commit -m "docs(marketing): plan de SEO y posicionamiento a 90 días" ...`

---

### Task 11: Auditoría GEO inicial (baseline)

- [ ] Ejecutar el skill `geo-audit` (o `/geo quick https://ciberem.com`) contra el **preview local** no es posible (necesita URL pública). Ejecutarlo contra `https://ciberem.com` actual para dejar el baseline pre-deploy en `docs/marketing/geo-baseline-2026-09-26.md`. Registrar el score y las 5 primeras recomendaciones; marcar cuáles ya quedan resueltas por este plan.
- Commit: `docs(marketing): baseline GEO pre-deploy`.

---

### Task 12: CLAUDE.md y cierre

**Files:**
- Modify: `CLAUDE.md` (sobre la copia de trabajo actual, que ya tiene cambios del usuario)

- [ ] **Step 1:** Sección 1: tipo → "Sitio estático bilingüe (es por defecto en `/`, en en `/en/`) con landing + 4 páginas pilar + privacidad por idioma (12 URLs)". Añadir párrafo "SEO" con: canonical/hreflang/OG/JSON-LD en `BaseLayout`, `assertSeoLengths`, `robots.txt`, sitemap, `llms.txt`, `og:image` regenerable con `pnpm og:image`, GA4/Search Console opcionales vía `seo.analytics`.
- [ ] **Step 2:** Sección 3: árbol con `src/data/{site.types,site.config,site.content}.ts`, `src/data/content/{es,en}.ts`, `src/utils/{i18n,routes,seo}.ts`, `src/components/seo/JsonLd.astro`, `src/components/layout/{Breadcrumb,LanguageSwitcher}.astro`, `src/features/{pillar,legal}/`, `src/pages/{[pillar],privacidad}.astro`, `src/pages/en/*`, `src/scripts/analytics-events.ts`, `scripts/`, `public/{robots.txt,llms.txt,og-image.png,logo.png}`, `vercel.json`, `.agents/product-marketing.md`, `docs/marketing/`.
- [ ] **Step 3:** Sección 2.2: "Source of truth" pasa a describir `content/es.ts` + `content/en.ts` tipados por `SiteContent` y consumidos vía `useSiteContent(Astro)`; regla: rutas internas en contenido sin prefijo de idioma, siempre pasadas por `localizePath`.
- [ ] **Step 4:** Sección 5: añadir `pnpm og:image`. Sección 7: añadir `@astrojs/sitemap 3.2.1` (nota: fijada por compatibilidad con Astro 4). Sección 8: marcar hechos OG/robots/sitemap; nuevos pendientes: menú móvil (nav oculto < 880px), blog, comparativas, LinkedIn de empresa en `sameAs`, pegar `ga4Id` y `searchConsoleToken`.
- [ ] **Step 5:** Commit final incluyendo los cambios previos del usuario en `CLAUDE.md` y `.gitignore` y los borrados staged, avisándolo en el resumen:

```bash
git add CLAUDE.md .gitignore docs/superpowers/plans
git commit -m "docs: CLAUDE.md al día con SEO bilingüe y páginas pilar" -m "Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
```

---

## Self-review

- **Cobertura del spec:** §4 arquitectura → Tasks 2-3, 6; §5.1-5.6 → Tasks 1, 2, 4, 5, 6, 7; §6 schema → Task 4 + 6; §7 plan → Tasks 9-11; §8 verificación → Task 8 + `assertSeoLengths` (Task 4/5); §10 → Task 12.
- **Placeholders:** el copy de pilares se especifica por outline con títulos, H1, H2 y preguntas exactas; los cuerpos se redactan en Task 3 con la restricción de hechos. `analytics` vacío es un valor válido documentado (desactivado), no un placeholder.
- **Tipos:** `useSiteContent` devuelve `{ locale, content }` en todos los usos; `routeKey: RouteKey` en `BaseLayout`, `Header`, `LanguageSwitcher`; `pillarKey: PillarKey` en `PillarPage`; `breadcrumbFor(key, locale)` en `routes.ts` consumido por `PillarPage`/`LegalPage`.
