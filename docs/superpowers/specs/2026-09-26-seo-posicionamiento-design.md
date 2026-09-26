# Spec — SEO técnico, bilingüe es/en, páginas pilar y plan de posicionamiento

**Fecha:** 2026-09-26
**Estado:** Aprobado (diseño)
**Autor:** brainstorming + sequential thinking
**Dominio:** `https://ciberem.com` (Vercel, estático)

## 1. Objetivo

Convertir la landing de CyberEM (una sola URL en español, sin señales SEO válidas en producción) en un
sitio indexable, bilingüe (es/en) con páginas pilar por keyword comercial y datos estructurados, y
entregar un plan de marketing/posicionamiento a 90 días para publicitarla y llegar a más público.

## 2. Diagnóstico de partida (ciberem.com, 2026-09-26)

| Hallazgo | Impacto |
| --- | --- |
| `canonical`, `og:url`, `og:image` apuntan a `https://landing-soc.local` | Alto: señal rota en cada rastreo |
| `ciberem.com` y `www.ciberem.com` responden 200 sin redirección | Alto: contenido duplicado entre hosts |
| `robots.txt`, `sitemap`, `og-image.png` devuelven 404 | Alto / Medio |
| Sin JSON-LD (Organization, WebSite, FAQ) | Medio |
| Título de 71 caracteres; H1 sin keyword comercial | Medio |
| Una sola URL indexable, un solo idioma | Alto: solo rankea por marca |
| Sin analítica ni Search Console | Medio: no se puede medir |

## 3. Decisiones tomadas

- **Mercado:** global. Español como idioma por defecto (`/`), inglés en `/en/`.
- **Contenido:** landing + 4 páginas pilar + política de privacidad, por idioma. Sin blog (la
  arquitectura lo permite después con content collections).
- **Skills instalados** (fuera del repo, en `~/.claude/skills/`): `coreyhaines31/marketingskills`
  (40+ skills) y `zubair-trabzada/geo-seo-claude` (`/geo *`). `every-app/open-seo` descartado
  (plataforma SaaS con API de pago; Google Search Console cubre la necesidad actual).
- **Contacto público:** solo Calendly. Sin email ni redes de empresa todavía; el schema
  `Organization` lleva `url`, `logo`, `sameAs` con los LinkedIn de los fundadores y `contactPoint`
  con la URL de Calendly. Cuando exista LinkedIn de empresa se añade a `sameAs`.
- **Analítica:** GA4 vía `gtag.js` cargado con `defer` solo en producción, con ID configurable en
  `siteContent.seo.analytics`. Verificación de Search Console vía meta tag configurable. Ambos
  campos opcionales: si están vacíos no se renderiza nada.
- **Hosting:** se mantiene Vercel estático. Redirección `www` → apex con `vercel.json`.
- **Source of truth:** sigue siendo `src/data/` pero se divide por idioma. Prohibido copy en
  componentes. Ningún `TODO` ni placeholder en el contenido publicado.

## 4. Arquitectura de información

```text
/                         (es) Landing                       ─┐
/soc-como-servicio        (es) Pilar: SOC como servicio       │
/mdr                      (es) Pilar: MDR                     │ hreflang es ↔ en
/soc-para-msp             (es) Pilar: SOC para MSP            │ x-default → es
/preguntas-frecuentes     (es) Pilar: FAQ                     │
/privacidad               (es) Legal                          │
/en/                      (en) Landing                        │
/en/soc-as-a-service      (en) Pillar                         │
/en/mdr                   (en) Pillar                         │
/en/soc-for-msps          (en) Pillar                         │
/en/faq                   (en) Pillar                         │
/en/privacy               (en) Legal                         ─┘
```

**Keyword map (una intención primaria por URL):**

| URL es | Keyword primaria es | URL en | Keyword primaria en |
| --- | --- | --- | --- |
| `/` | plataforma SOC / detección y respuesta ante amenazas | `/en/` | SOC platform / threat detection and response |
| `/soc-como-servicio` | SOC como servicio | `/en/soc-as-a-service` | SOC as a service |
| `/mdr` | MDR (detección y respuesta gestionada) | `/en/mdr` | managed detection and response (MDR) |
| `/soc-para-msp` | SOC para MSP / SOC multi-tenant | `/en/soc-for-msps` | SOC for MSPs / multi-tenant SOC |
| `/preguntas-frecuentes` | preguntas sobre SOC, MDR, Wazuh, MITRE ATT&CK | `/en/faq` | SOC / MDR FAQ |

**Navegación:** header con `Inicio`, menú `Servicios` (3 pilares), `FAQ`, `Equipo` (ancla), CTA
`Solicitar Demo` y selector de idioma `ES | EN`. Footer con columnas `Plataforma` (anclas de la
landing), `Servicios` (pilares + FAQ) y `Empresa` (equipo, demo, privacidad). Los enlaces de ancla
desde páginas pilar apuntan a `/#seccion` (o `/en/#seccion`), no a `#seccion`.

**Enlazado interno:** la landing enlaza a los 3 pilares desde la sección Solución (tarjeta por pilar
con anchor descriptivo). Cada pilar enlaza a los otros dos y a la FAQ. Breadcrumb `Inicio > Página` en
pilares y legal.

## 5. Componentes y archivos

### 5.1 Datos (`src/data/`)

```text
src/data/
├── site.content.ts        # Tipos compartidos + getSiteContent(locale) + CALENDLY_URL + SITE_URL
├── content/
│   ├── es.ts              # siteContent en español (actual + nuevos slices)
│   └── en.ts              # siteContent en inglés (misma forma, tipado por SiteContent)
```

Nuevos slices tipados en `SiteContent`:

- `seo: { title; description; analytics?: { ga4Id?: string; searchConsoleToken?: string } }`
  Título ≤ 60 caracteres, descripción 120-160.
- `organization: { legalName; foundingYear; sameAs: string[]; contactUrl }` (para JSON-LD).
- `pillars: Record<PillarSlug, PillarPageContent>` con
  `PillarPageContent = { slug; seo; eyebrow; title; lead; sections: { heading; paragraphs; bullets? }[]; faq: { question; answer }[]; cta: { heading; lead } }`.
  `PillarSlug = 'soc-service' | 'mdr' | 'msp' | 'faq'`. El slug de URL por idioma vive en el contenido.
- `legal: { privacy: { seo; title; updatedAt; sections } }`.
- `nav.services: NavLink[]`, `nav.languageSwitcher: { label; ariaLabel }`.
- `breadcrumb: { homeLabel }`.

`getSiteContent(locale: Locale)` devuelve `es` o `en`. `Locale = 'es' | 'en'`. Se elimina la
exportación directa de `siteContent`: todos los componentes reciben el locale de
`Astro.currentLocale` a través del helper `useSiteContent(Astro)` en `src/utils/i18n.ts`.

### 5.2 Utilidades (`src/utils/`)

- `i18n.ts`: `locales`, `defaultLocale`, `useSiteContent(astro)`, `localizePath(path, locale)`,
  `alternateFor(pathname)` (devuelve las URLs es/en equivalentes de una ruta usando el mapa de slugs
  de los pilares).
- `seo.ts`: `buildTitle`, `absoluteUrl(path)`, `buildOrganizationJsonLd(content)`,
  `buildWebSiteJsonLd(content, locale)`, `buildFaqJsonLd(faq)`, `buildBreadcrumbJsonLd(items)`,
  `buildServiceJsonLd(pillar)`. Todos devuelven objetos serializables; el layout los combina en un
  `@graph`.

### 5.3 Layout y componentes

- `BaseLayout.astro`: `lang` dinámico desde el locale; `canonical` con `Astro.site` real;
  `<link rel="alternate" hreflang>` es, en y `x-default`; OG `og:locale` y `og:locale:alternate`;
  `<JsonLd graph={[...]} />`; preload de la fuente Geist; GA4 + meta de Search Console
  condicionales. Props: `title`, `description`, `image?`, `jsonLd?: object[]`, `noindex?`.
- `components/seo/JsonLd.astro`: renderiza `<script type="application/ld+json">` con `@graph`.
- `components/layout/Breadcrumb.astro`: lista con `aria-label` y anchors; recibe items.
- `components/layout/LanguageSwitcher.astro`: dos enlaces `ES | EN` hacia `alternateFor`.
- `Header.astro` y `Footer.astro`: consumen contenido por locale, añaden `Servicios`, FAQ,
  privacidad y el switcher. Los anchors se generan con `localizePath`.
- `features/pillar/PillarPage.astro`: hero corto + breadcrumb + secciones + bloque FAQ
  (`<details>`) + enlaces a los otros pilares. Reutilizable por las 4 páginas pilar. El CTA final
  lo añade la página orquestadora con `<Cta />` (las features no se importan entre sí).
- `features/legal/LegalPage.astro`: título, fecha de actualización y secciones.
- `features/problem-solution/ProblemSolution.astro`: los 3 pilares de Solución enlazan a las
  páginas pilar (anchor descriptivo). El copy se mantiene.
- `Hero.astro`: sin cambios estructurales; el H1 pasa a incluir la keyword primaria vía contenido.

### 5.4 Páginas (`src/pages/`)

```text
src/pages/
├── index.astro                    # es landing
├── [pillar].astro                 # es pilares (getStaticPaths desde content es)
├── privacidad.astro
└── en/
    ├── index.astro
    ├── [pillar].astro
    └── privacy.astro
```

Las páginas solo orquestan: resuelven locale + slice y renderizan `PillarPage` o `LegalPage`.

### 5.5 Público (`public/`)

- `robots.txt`: `User-agent: *` `Allow: /`, `Sitemap: https://ciberem.com/sitemap-index.xml`.
  Sin bloqueo de GPTBot, ClaudeBot, PerplexityBot ni Google-Extended.
- `og-image.png` 1200×630 generado desde una plantilla HTML con los tokens de `global.css`
  (fondo zinc-950, acento #ff3241, nombre y tagline). Generación con Playwright en un script
  `scripts/generate-og-image.ts` ejecutado manualmente (`pnpm og:image`), no en el build.
- `llms.txt`: resumen del producto, audiencias y enlaces a las páginas pilar en ambos idiomas.

### 5.6 Configuración

- `astro.config.mjs`: `site: 'https://ciberem.com'`, `i18n: { defaultLocale: 'es', locales:
  ['es','en'], routing: { prefixDefaultLocale: false } }`, integración `@astrojs/sitemap` con
  `i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } }`.
- `vercel.json`: redirect 301 `www.ciberem.com/(.*)` → `https://ciberem.com/$1`. `cleanUrls`
  no se usa (Astro genera `/ruta/index.html`; `trailingSlash: 'ignore'`).
- `package.json`: nuevas dependencias `@astrojs/sitemap` (dep) y `playwright` (devDep, solo para
  el script de OG). Script `og:image`.

## 6. Datos estructurados

Todas las páginas: `@graph` con `Organization` (name, legalName, url, logo, foundingDate,
sameAs, contactPoint{contactType, url}) y `WebSite` (name, url, inLanguage).
Páginas pilar: + `Service` (name, description, provider→Organization, areaServed `Worldwide`,
serviceType), `FAQPage` (solo si la página muestra el bloque FAQ) y `BreadcrumbList`.
Legal: + `BreadcrumbList`. Nada de schema para contenido que no esté visible.

## 7. Plan de marketing y posicionamiento (entregable documental)

Archivo `docs/marketing/estrategia-seo-posicionamiento.md`, escrito para los fundadores:

1. Posicionamiento y mensaje por audiencia (MSP, CISO, analista SOC, IR), derivado de
   `landing-data.md` y del contenido actual.
2. Keyword map (tabla de la sección 4) con intención y página destino.
3. Plan a 90 días por semanas: Search Console + GA4; Bing Webmaster; LinkedIn company page;
   fichas en Clutch, Crunchbase, G2, Capterra, AlternativeTo, SaaSHub y directorios de
   ciberseguridad; cadencia de publicación en LinkedIn (2 posts/semana por fundador); secuencia de
   cold email a MSPs (3 toques); guest posts / podcasts del sector; revisión mensual.
4. Rutina de medición: Search Console (impresiones, CTR, posición por URL), GA4 (demo clicks vía
   evento en el enlace de Calendly), y `/geo audit https://ciberem.com` mensual para visibilidad en
   buscadores IA.
5. Backlog de siguientes pasos: blog con content collections, páginas comparativas, caso de estudio.

Contexto de producto para los skills de marketing en `.agents/product-marketing.md` (producto,
ICP, propuesta de valor, diferenciadores, tono).

## 8. Verificación

- `pnpm check` y `pnpm build` sin errores.
- `pnpm preview` + `curl`: cada una de las 12 URLs responde 200; `canonical` y `hreflang`
  correctos y recíprocos; `robots.txt`, `sitemap-index.xml`, `og-image.png`, `llms.txt` responden
  200; el sitemap lista las 12 URLs con alternates.
- Validación de JSON-LD: extraer el bloque con Playwright y comprobar que parsea y contiene los
  tipos esperados por página. Tras el deploy, Rich Results Test manual.
- Lighthouse (Playwright/Chrome) sobre `/` y un pilar: Performance ≥ 90, SEO = 100,
  Accessibility ≥ 95.
- Títulos ≤ 60 y descripciones 120-160 caracteres: `assertSeoLengths(seo)` en `src/utils/seo.ts`,
  invocada en el frontmatter de `BaseLayout`. Un valor fuera de rango rompe `pnpm build` con un
  mensaje que nombra la página. Sin runner de tests nuevo.

## 9. Fuera de alcance

- Blog, páginas comparativas y casos de estudio (backlog).
- Formulario de contacto / backend.
- Google Business Profile (sin sede física pública).
- Campañas de pago.

## 10. Actualización de CLAUDE.md

En el mismo cambio: sección 1 (bilingüe, URLs), sección 3 (nuevas carpetas), sección 5 (script
`og:image`), sección 7 (dependencias), sección 8 (pendientes cerrados y nuevos).
