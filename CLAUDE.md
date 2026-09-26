# CLAUDE.md — Landing SOC

Documento maestro de contexto del proyecto. **Debe actualizarse en cada cambio relevante** (nuevas dependencias, nueva feature, cambio de estructura, cambio de scripts, etc.). Si modificas el proyecto y este archivo queda desincronizado, actualízalo en el mismo cambio.

---

## 1. Resumen del proyecto

- **Nombre:** landing-soc
- **Producto:** **CiberEm** — plataforma SOC (detección, investigación y respuesta ante amenazas) para empresas y MSPs.
- **Marca:** siempre **CiberEm** (no "CyberEM"). Única excepción: la URL externa de Calendly (`contact-cyberem`).
- **Dominio público:** `https://ciberem.com`, desplegado en **Vercel** como sitio estático (sin adapter). `www.ciberem.com` redirige 301 al apex (`vercel.json`).
- **Mercado prioritario:** **Venezuela** (luego Latinoamérica). La portada en español, `og:locale es_VE`, el `areaServed` del schema (`SERVICE_AREA` en `site.config.ts`) y la guía `/ciberseguridad-venezuela` lo reflejan. Estrategia en `docs/marketing/estrategia-venezuela.md`.
- **Tipo:** Sitio estático bilingüe: español por defecto en `/`, inglés en `/en`. Landing + 5 páginas pilar + privacidad por idioma (14 URLs).
- **Framework:** [Astro](https://docs.astro.build) 4.x
- **Lenguaje:** TypeScript (modo strict)
- **Gestor de paquetes:** **pnpm** (obligatorio, ver `packageManager` en `package.json`)
- **Estilos:** CSS plano con variables CSS en `src/styles/global.css` (scoped styles por componente vía `<style>` de Astro). **Sin Tailwind, sin GSAP.**
- **Aesthetic direction:** Dark `zinc-950` (#09090b) + acento rojo-coral (#ff3241). Tipografía Geist Variable (display y body) + JetBrains Mono (datos), layouts max-w 1152px, secciones py-20, patrones border-grid + tarjetas + glows.
- **Source of truth:** **todo el copy vive en `src/data/content/es.ts` y `src/data/content/en.ts`**, ambos tipados por `SiteContent` (`src/data/site.types.ts`). Los componentes obtienen su slice con `useSiteContent(Astro)` de `@utils/i18n`; nunca importan un idioma concreto ni llevan texto hardcodeado.
- **Conversión:** el CTA final "Agendar una reunión" enlaza a Calendly (`CALENDLY_URL`) y "Escríbenos por WhatsApp" a `WHATSAPP_URL` (ambos en `src/data/site.config.ts`, junto a `CONTACT_PHONE` y `HEADQUARTERS`). Cada clic envía el evento GA4 `demo_click` o `whatsapp_click` cuando la analítica está activa. No hay formulario ni backend.
- **Planes:** la sección `#planes` muestra Plan Max y Plan Max+ **sin precios** (decisión del negocio: cotización en USD). No publicar importes ni porcentajes de descuento en el sitio, `llms.txt` ni el repo; el PDF de planes no se versiona.
- **Ubicación:** base en Acarigua, Portuguesa; atención remota, sin dirección de calle. El schema Organization lleva `address` (ciudad/estado/país) y `telephone`.
- **SEO:** `BaseLayout` emite canonical, hreflang es/en/x-default, Open Graph, Twitter y un `@graph` JSON-LD (Organization, WebSite y, según la página, Service, FAQPage, BreadcrumbList). `assertSeoLengths` rompe el build si un título pasa de 60 caracteres o una descripción sale de 120-160. Sitemap con `@astrojs/sitemap`, `robots.txt` abierto a bots de IA, `llms.txt`, `og-image.png` y `logo.png`. URLs sin barra final (`trailingSlash: 'never'` + `build.format: 'file'` + `cleanUrls` en Vercel).
- **Analítica:** GA4 y verificación de Search Console se activan rellenando `seo.analytics.ga4Id` y `seo.analytics.searchConsoleToken` en ambos archivos de contenido. Vacío = desactivado. GA4 solo carga en build de producción.
- **Marketing:** contexto de producto en `.agents/product-marketing.md` (lo leen los skills de marketing) y plan de 90 días en `docs/marketing/`.
- **Estado actual:** Landing de CiberEm con 7 features / 8 bloques, 5 páginas pilar (guía de ciberseguridad en Venezuela, SOC como servicio, MDR, SOC para MSP, FAQ) y privacidad, todo en es/en. Las páginas pilar admiten `updated` (fecha visible) y `sources` (fuentes citadas); todo dato o norma publicado debe llevar su fuente. Sin `TODO` pendientes en `src/`.

### 1.0 Rutas

| Clave (`RouteKey`) | es | en | Página |
| --- | --- | --- | --- |
| `home` | `/` | `/en` | `pages/index.astro`, `pages/en/index.astro` |
| `venezuela` | `/ciberseguridad-venezuela` | `/en/cybersecurity-venezuela` | `pages/[pillar].astro`, `pages/en/[pillar].astro` |
| `soc-service` | `/soc-como-servicio` | `/en/soc-as-a-service` | idem |
| `mdr` | `/mdr` | `/en/mdr` | idem |
| `msp` | `/soc-para-msp` | `/en/soc-for-msps` | idem |
| `faq` | `/preguntas-frecuentes` | `/en/faq` | idem |
| `privacy` | `/privacidad` | `/en/privacy` | `pages/privacidad.astro`, `pages/en/privacy.astro` |

Los slugs de pilares viven en el contenido (`pillars[key].slug`). Las rutas internas del contenido van **sin prefijo de idioma** (`/mdr`, `/#solucion`); `localizePath` añade `/en` cuando toca. `pathFor(key, locale)` y `alternatePaths(key)` resuelven URLs y hreflang.

### 1.1 Mapa de secciones (orden top → bottom)

| # | Bloque | id ancla | Componente | Slice de `siteContent` |
| --- | --- | --- | --- | --- |
| 1 | Hero (badge + H1 + lead + 2 CTAs + 4 highlights + mockup SOC) | `#top` | `features/hero/Hero.astro` | `hero` |
| 2 | El Problema | `#problema` | `features/problem-solution/ProblemSolution.astro` | `problem` |
| 3 | Nuestra Solución (3 pilares) | `#solucion` | (mismo componente) | `solution` |
| 4 | Pensado para los cuatro perfiles (grid 4) | `#perfiles` | `features/personas/Personas.astro` | `personas` |
| 5 | Diferenciadores (border-grid, 6 numerados) | `#diferenciadores` | `features/differentiators/Differentiators.astro` | `differentiators` |
| 6 | Planes (Max y Max+, sin precios) + ventajas | `#planes` | `features/plans/Plans.astro` | `plans` |
| 7 | Conócenos + Acerca de nosotros + tarjetas de equipo | `#equipo` | `features/team/Team.astro` | `team` |
| 8 | CTA final con glows | `#contacto` | `features/cta/Cta.astro` | `cta` |

Header (pill flotante con menú "Servicios" solo CSS y selector ES/EN) y Footer (3 columnas: Plataforma, Servicios, Empresa) consumen `nav`, `brand` y `footer`. Los enlaces a anclas usan `/#ancla` para funcionar también desde las páginas pilar; `smooth-scroll.ts` aplica un offset de 80px por el header. La sección Solución enlaza cada pilar a su página pilar.

---

## 2. Principios obligatorios

Estos principios son **vinculantes** para cualquier cambio en el código.

### 2.1 Clean Code

- Nombres descriptivos en variables, funciones, componentes y archivos. Nada de `data`, `tmp`, `foo`.
- Funciones y componentes pequeños, con **una sola responsabilidad**.
- Cada componente `.astro` debe ser autocontenido y exponer una API clara vía `Props`.
- No mezclar lógica de presentación con lógica de negocio: la lógica reutilizable vive en `src/utils/`, y **todo el contenido textual del sitio vive en `src/data/content/{es,en}.ts`** (no hardcodear copy en los componentes).
- Comentarios solo cuando el *por qué* no sea obvio. No comentar lo que el código ya dice.
- Tipar siempre las `Props` con `interface Props`.
- Eliminar código muerto inmediatamente. Nada de `// TODO` huérfanos ni archivos `*.old`.
- Formateo y estilo consistentes en todo el proyecto.

### 2.2 DRY (Don't Repeat Yourself)

- Si una pieza de UI aparece dos veces, **se extrae** a `src/components/ui/` o `src/components/layout/`.
- **Source of truth único de contenido:** todos los textos, listas, navegación, SEO y datos de secciones viven en `src/data/content/es.ts` y `en.ts` (mismo tipo `SiteContent`). Cada feature obtiene su slice con `const { content } = useSiteContent(Astro)` (`content.hero`, `content.personas`, …). Todo texto nuevo se añade **en los dos idiomas**. **No** se crean archivos `*.data.ts` por feature ni se hardcodea copy en el markup.
- Tokens visuales (colores, fuentes, spacing) **solo** en `src/styles/global.css` como variables CSS. Prohibido hardcodear colores en componentes.
- Helpers reutilizables (SEO, formateo, slugs, etc.) en `src/utils/`.
- Rutas de import largas se sustituyen por los alias `@components`, `@features`, `@layouts`, `@styles`, `@utils`, `@assets`, `@data`, `@/*` (definidos en `tsconfig.json`).

### 2.3 Estructura: **por tipo + feature**

Combinación de dos criterios de organización:

- **Por tipo:** elementos transversales que sirven a toda la app — `layouts/`, `pages/`, `styles/`, `utils/`, `assets/`, y componentes reutilizables en `components/`.
- **Por feature:** cada sección de la landing es una carpeta autocontenida dentro de `src/features/` con su componente y, si aplica, sus estilos y subcomponentes. El **contenido** no vive en la feature, sino en `src/data/content/`.

**Reglas:**

1. Un componente **reutilizable en más de una feature** vive en `src/components/` (subcarpeta por tipo: `ui/`, `layout/`).
2. Un componente **específico de una feature** vive en `src/features/<feature>/`.
3. Las features **no se importan entre sí**. Si dos features necesitan lo mismo, sube ese elemento a `src/components/` o `src/utils/`.
4. Las `pages/` solo orquestan: importan layouts y features, no contienen lógica.

---

## 3. Estructura de carpetas

```text
landing-soc/
├── public/                       # Assets servidos tal cual
│   ├── favicon.svg
│   ├── robots.txt                #   - Allow all + referencia al sitemap
│   ├── llms.txt                  #   - Resumen del producto y URLs para buscadores con IA
│   ├── og-image.png              #   - 1200×630, generado con `pnpm og:image`
│   ├── logo.png                  #   - 512×512, usado en el schema Organization
│   └── team/                     #   - Fotos del equipo (referenciadas desde content.team.members[].photo)
├── scripts/                      # Plantillas HTML + generador de og-image.png y logo.png (Playwright CLI)
├── docs/
│   ├── superpowers/specs/        # Specs de diseño aprobados
│   │   ├── 2026-05-16-soc-landing-design.md          #   - Diseño visual original (base: landing-data.md)
│   │   ├── 2026-06-17-cyberem-content-pivot-design.md #   - Pivote de contenido (histórico, marca anterior)
│   │   └── 2026-09-26-seo-posicionamiento-design.md   #   - SEO técnico, bilingüe, pilares y plan
│   ├── superpowers/plans/        # Planes de implementación
│   └── marketing/                # Plan general, estrategia Venezuela y baselines GEO
├── landing-data.md               # Brief de marketing original (posicionamiento, personas, flujo). Referencia, no se importa.
├── src/
│   ├── data/                     # [TIPO] SOURCE OF TRUTH — todo el contenido del sitio
│   │   ├── site.config.ts        #   - SITE_URL, CALENDLY_URL, locales, defaultLocale, tipo Locale
│   │   ├── site.types.ts         #   - SiteContent y todas las interfaces por sección; PillarKey, RouteKey
│   │   ├── site.content.ts       #   - getSiteContent(locale) + re-exports de config y tipos
│   │   └── content/
│   │       ├── es.ts             #   - Contenido en español (brand, seo, organization, nav, secciones,
│   │       └── en.ts             #     pillars, legal, footer). Mismo tipo en ambos idiomas.
│   ├── pages/                    # [TIPO] Rutas (cada archivo = una URL). Requerido por Astro.
│   │   ├── index.astro           #   - Landing es
│   │   ├── [pillar].astro        #   - 5 pilares es (getStaticPaths desde el contenido)
│   │   ├── privacidad.astro
│   │   └── en/                   #   - index.astro, [pillar].astro, privacy.astro
│   ├── layouts/                  # [TIPO] Layouts compartidos (HTML base, wrappers)
│   │   └── BaseLayout.astro      #   - Props: title, description, routeKey, jsonLd, image?
│   │                             #   - lang dinámico, canonical, hreflang, OG, JSON-LD, GA4 opcional,
│   │                             #     preload de Geist, assertSeoLengths
│   │                             #   - Carga smooth-scroll.ts y analytics-events.ts al final del body
│   ├── components/               # [TIPO] Componentes reutilizables (no atados a una feature)
│   │   ├── ui/                   #   - Primitivos visuales
│   │   │   ├── Button.astro      #     · variant primary/secondary/ghost · size sm/md/lg · iconBefore/iconAfter · href o type
│   │   │   ├── Container.astro   #     · max-w 1152px + px 24/48px
│   │   │   ├── Icon.astro        #     · renderiza SVG inline desde assets/icons.ts
│   │   │   ├── SectionHeading.astro #  · SIN USO actualmente (legacy)
│   │   │   ├── Card.astro        #     · SIN USO actualmente (legacy)
│   │   │   └── Badge.astro       #     · SIN USO actualmente (legacy)
│   │   ├── seo/
│   │   │   └── JsonLd.astro      #   - <script type="application/ld+json"> con @graph
│   │   └── layout/               #   - Composición de página
│   │       ├── Header.astro      #     · pill flotante: menú Servicios (CSS) + nav + ES/EN + CTA. Prop routeKey
│   │       ├── Footer.astro      #     · brand + tagline + CTA + 3 columnas
│   │       ├── LanguageSwitcher.astro # · enlaces ES/EN a la página equivalente. Prop routeKey
│   │       └── Breadcrumb.astro  #     · migas con aria-current
│   ├── features/                 # [FEATURE] Secciones autocontenidas
│   │   ├── hero/Hero.astro
│   │   ├── problem-solution/ProblemSolution.astro   # #problema + #solucion (pilares enlazan a páginas pilar)
│   │   ├── personas/Personas.astro                  # #perfiles
│   │   ├── differentiators/Differentiators.astro    # #diferenciadores
│   │   ├── plans/Plans.astro                        # #planes (sin precios)
│   │   ├── team/Team.astro                          # #equipo (fotos + LinkedIn)
│   │   ├── cta/Cta.astro                            # #contacto (CTA → Calendly)
│   │   ├── pillar/PillarPage.astro                  # página pilar: hero + fecha + secciones + FAQ + fuentes + relacionados
│   │   └── legal/LegalPage.astro                    # política de privacidad
│   ├── styles/                   # [TIPO] Estilos globales y tokens
│   │   └── global.css            #   - @import de fuentes, variables CSS (surfaces, brand, severidad,
│   │                             #     tipografía, radius, shadows, container, easing) + reveals
│   ├── utils/                    # [TIPO] Helpers puros y reutilizables
│   │   ├── i18n.ts               #   - useSiteContent, resolveLocale, localizePath, pathFor, alternatePaths
│   │   ├── seo.ts                #   - absoluteUrl, assertSeoLengths, builders JSON-LD
│   │   └── routes.ts             #   - pillarStaticPaths, breadcrumbFor, build{Home,Pillar,Legal}JsonLd
│   ├── scripts/                  # [TIPO] Scripts client-side bundleados por Astro
│   │   ├── smooth-scroll.ts      #   - Scroll suave nativo a anclas + reveals con IntersectionObserver
│   │   └── analytics-events.ts   #   - Evento GA4 demo_click en enlaces a Calendly
│   ├── assets/                   # [TIPO] Assets procesados por Astro
│   │   └── icons.ts              #   - Map { name → SVG paths } + tipo IconName, consumido por <Icon />
│   └── env.d.ts                  # Tipos de Astro
├── .agents/skills/               # Skills de diseño/frontend instaladas para agentes (ver skills-lock.json)
├── .agents/product-marketing.md  # Contexto de producto, ICP, voz y diferenciadores para skills de marketing
├── vercel.json                   # cleanUrls, sin barra final, 301 www → apex
├── .claude/settings.json         # Permisos del agente (comandos vercel / dns / pnpm ya aprobados)
├── .mcp.json                     # MCP servers del proyecto: sequential-thinking, context7
├── skills-lock.json              # Lockfile de las skills de .agents/skills
├── astro.config.mjs              # site https://ciberem.com, i18n es/en, sitemap, trailingSlash never, build.format file
├── tsconfig.json                 # TS strict + alias de imports
├── package.json                  # Manifest (packageManager: pnpm)
├── .npmrc                        # Config de pnpm
├── .gitignore
└── CLAUDE.md                     # Este archivo
```

**Cómo añadir una nueva feature:**

1. Crear `src/features/<nombre-feature>/`.
2. Dentro, el componente principal `<NombreFeature>.astro` y subcomponentes locales si aplica. **El contenido NO va aquí:** añade la interfaz a `src/data/site.types.ts`, el slice a `content/es.ts` **y** `content/en.ts`, y consúmelo con `const { locale, content } = useSiteContent(Astro)`. Pasa cada `href` interno por `localizePath(href, locale)`.
3. Importarla desde `src/pages/index.astro` **y** `src/pages/en/index.astro` (o las páginas correspondientes) usando el alias `@features/<nombre>/...`.
4. Si algún elemento se vuelve reutilizable por otra feature, **moverlo** a `src/components/` y actualizar imports.
5. **Actualizar la sección 1.1 y la sección 3 de este CLAUDE.md** con la nueva sección/carpeta.

**Cómo añadir una página nueva:** añade su clave a `RouteKey` en `site.types.ts`, su slug y SEO al contenido de ambos idiomas, resuelve la ruta en `unprefixedPathFor` (`@utils/i18n`), crea la página es y en pasando `routeKey` y `jsonLd` a `BaseLayout`, y enlázala desde nav o footer. El título debe quedar en ≤ 60 caracteres y la descripción en 120-160, o el build falla.

---

## 4. Alias de imports

Definidos en `tsconfig.json`. Úsalos siempre en lugar de rutas relativas largas:

| Alias           | Apunta a          |
| --------------- | ----------------- |
| `@/*`           | `src/*`           |
| `@components/*` | `src/components/*`|
| `@features/*`   | `src/features/*`  |
| `@layouts/*`    | `src/layouts/*`   |
| `@styles/*`     | `src/styles/*`    |
| `@utils/*`      | `src/utils/*`     |
| `@assets/*`     | `src/assets/*`    |
| `@data/*`       | `src/data/*`      |

---

## 5. Comandos (pnpm)

```bash
pnpm install            # Instalar dependencias
pnpm dev                # Servidor de desarrollo (http://localhost:4321, host: true)
pnpm build              # Build de producción a dist/
pnpm preview            # Previsualizar el build
pnpm check              # Type-check con astro check
pnpm og:image           # Regenera public/og-image.png y public/logo.png desde scripts/*.html
pnpm astro add <pkg>    # Añadir integraciones / adapters de Astro
```

`pnpm og:image` necesita Chromium de Playwright una vez por máquina: `npx playwright install chromium`.

**No usar `npm` ni `yarn`** en este proyecto. El campo `packageManager` y `engines.pnpm` en `package.json` lo fuerzan.

---

## 6. Convenciones de código

- **Componentes Astro:** PascalCase (`Hero.astro`, `Button.astro`).
- **Contenido:** `src/data/content/es.ts` y `en.ts`, tipados por `SiteContent`. No crear `*.data.ts` por feature. Todo cambio de copy se hace en los dos idiomas.
- **Utils:** camelCase (`seo.ts`, `formatDate.ts`).
- **CSS:** clases en kebab-case (BEM-ish: `bloque__elemento`). Estilos *scoped* dentro del componente; globales solo en `src/styles/global.css`.
- **Props:** siempre declaradas vía `interface Props` con tipos explícitos y valores por defecto donde aplique.
- **Imports:** primero externos, luego alias internos, separados por una línea en blanco.
- **Iconos:** cualquier icono nuevo se añade a `src/assets/icons.ts`; el tipo `IconName` se deriva del map, así que `site.content.ts` queda tipado automáticamente.
- **Animaciones:** solo CSS + `smooth-scroll.ts`. Para que un elemento aparezca al hacer scroll, añádele `data-reveal` (el script le pone `reveal-on-scroll` y luego `is-revealed`; `--reveal-index` escalona hermanos 60ms). El hero usa la clase `.reveal` con `--reveal-delay` (CSS puro). Todo respeta `prefers-reduced-motion`. **No reintroducir GSAP.**

---

## 7. Estado de dependencias

| Paquete | Versión | Tipo | Notas |
| ------- | ------- | ---- | ----- |
| astro | ^4.16.0 | dep | Framework base |
| @astrojs/sitemap | 3.2.1 | dep | Sitemap. Fijada; versiones más nuevas no se han probado con Astro 4 |
| @fontsource-variable/geist | ^5.2.8 | dep | Fuente UI (display + body) — auto-hospedada |
| @fontsource/jetbrains-mono | ^5.2.8 | dep | Fuente monoespaciada (datos / IOCs), solo peso 500 |
| @astrojs/check | ^0.9.9 | dev | Requerido por `pnpm check` |
| typescript | ^5.6.3 | dev | Compilador para `astro check` |

**Eliminadas** (no reintroducir sin motivo): `gsap` (reemplazado por scroll nativo + IntersectionObserver, ~110KB menos), `@fontsource/instrument-serif` (el display ahora es Geist).

*Actualizar esta tabla al añadir o subir cualquier dependencia.*

---

## 8. Despliegue

- **Plataforma:** Vercel, proyecto `landing-soc`, output estático de `pnpm build` (`dist/`). No requiere adapter.
- **Dominios:** `ciberem.com` y `www.ciberem.com` añadidos al proyecto en Vercel (ver comandos aprobados en `.claude/settings.json`). `vercel.json` redirige www al apex con 301.
- **Tras cada deploy relevante:** comprobar canonical y hreflang en producción, reenviar el sitemap en Search Console si cambian URLs, y validar schema con Rich Results Test.

---

## 9. Pendientes conocidos

- [ ] Pegar `ga4Id` y `searchConsoleToken` en `seo.analytics` (es y en) cuando existan las propiedades.
- [ ] Añadir LinkedIn de empresa y Crunchbase a `organization.sameAs` (es y en) cuando existan.
- [ ] Contraste del botón primario: texto blanco sobre #ff3241 da 3.1:1 (WCAG AA pide 4.5:1). Decisión de diseño.
- [ ] Menú móvil: por debajo de 880px el nav se oculta; el footer mantiene todos los enlaces.
- [ ] Definir la URL real de "Ver Plataforma" (hoy `/#solucion`).
- [ ] Decidir si se eliminan `Card.astro`, `Badge.astro` y `SectionHeading.astro` (sin uso desde el pivote a CiberEm).
- [ ] Revisar la guía de Venezuela cada 3 meses (fecha `updated`, incidentes y normas nuevas, en especial si se sanciona la Ley de Ciberseguridad).
- [ ] RIF y razón social: faltan para gremios, facturación y `legalName` real en el schema (hoy `legalName` = "CiberEm").
- [ ] Google Business Profile como negocio de área de servicio (Acarigua, dirección oculta) con el teléfono +58 414 5599785.
- [ ] Backlog de contenido (blog, comparativas, casos): ver `docs/marketing/estrategia-seo-posicionamiento.md` y `estrategia-venezuela.md` §3.

**Resueltos:** adapter de despliegue (Vercel estático), datos reales del equipo, meta tags OG/Twitter, decisión Tailwind (CSS plano), `site` real, `og-image.png`, `robots.txt`, sitemap, JSON-LD, hreflang, redirect www, versión en inglés, páginas pilar, marca CiberEm.

---

## 10. Regla de mantenimiento de este archivo

> **En cada cambio que afecte estructura, dependencias, scripts, principios o convenciones, este `CLAUDE.md` se actualiza en el mismo commit / mismo cambio.**
>
> Antes de cerrar una tarea, revisa: ¿las secciones 1.0 (rutas), 1.1 (mapa de secciones), 3 (estructura), 5 (comandos), 7 (dependencias) y 9 (pendientes) siguen siendo verdad? Si no, actualízalas.
