# CLAUDE.md — Landing SOC

Documento maestro de contexto del proyecto. **Debe actualizarse en cada cambio relevante** (nuevas dependencias, nueva feature, cambio de estructura, cambio de scripts, etc.). Si modificas el proyecto y este archivo queda desincronizado, actualízalo en el mismo cambio.

---

## 1. Resumen del proyecto

- **Nombre:** landing-soc
- **Producto:** **CyberEM** — plataforma SOC (detección, investigación y respuesta ante amenazas) para empresas y MSPs.
- **Tipo:** Landing page estática (español)
- **Framework:** [Astro](https://docs.astro.build) 4.x
- **Lenguaje:** TypeScript (modo strict)
- **Gestor de paquetes:** **pnpm** (obligatorio, ver `packageManager` en `package.json`)
- **Estilos:** CSS plano con variables CSS en `src/styles/global.css` (scoped styles por componente vía `<style>` de Astro)
- **Aesthetic direction:** Dark `zinc-950` (#09090b) + acento rojo-coral (#ff3241). Tipografía Geist Variable, layouts max-w-6xl, secciones py-20, patrones border-grid + tarjetas + glows.
- **Source of truth:** **todo el copy del sitio vive en `src/data/site.content.ts`** (alias `@data`). Los componentes no llevan texto hardcodeado: importan su slice de `siteContent`.
- **Estado actual:** Landing de CyberEM con 6 secciones (Hero, Problema/Solución, Perfiles, Diferenciadores, Equipo/Conócenos, CTA).

---

## 2. Principios obligatorios

Estos principios son **vinculantes** para cualquier cambio en el código.

### 2.1 Clean Code

- Nombres descriptivos en variables, funciones, componentes y archivos. Nada de `data`, `tmp`, `foo`.
- Funciones y componentes pequeños, con **una sola responsabilidad**.
- Cada componente `.astro` debe ser autocontenido y exponer una API clara vía `Props`.
- No mezclar lógica de presentación con lógica de negocio: la lógica reutilizable vive en `src/utils/`, y **todo el contenido textual del sitio vive en el source of truth `src/data/site.content.ts`** (no hardcodear copy en los componentes).
- Comentarios solo cuando el *por qué* no sea obvio. No comentar lo que el código ya dice.
- Tipar siempre las `Props` con `interface Props`.
- Eliminar código muerto inmediatamente. Nada de `// TODO` huérfanos ni archivos `*.old`.
- Formateo y estilo consistentes en todo el proyecto.

### 2.2 DRY (Don't Repeat Yourself)

- Si una pieza de UI aparece dos veces, **se extrae** a `src/components/ui/` o `src/components/layout/`.
- **Source of truth único de contenido:** todos los textos, listas, navegación, SEO y datos de secciones viven en `src/data/site.content.ts` (objeto `siteContent`, tipado por sección). Cada feature importa su slice (`siteContent.hero`, `siteContent.personas`, …). **No** se crean archivos `*.data.ts` por feature ni se hardcodea copy en el markup.
- Tokens visuales (colores, fuentes, spacing) **solo** en `src/styles/global.css` como variables CSS. Prohibido hardcodear colores en componentes.
- Helpers reutilizables (SEO, formateo, slugs, etc.) en `src/utils/`.
- Rutas de import largas se sustituyen por los alias `@components`, `@features`, `@layouts`, `@styles`, `@utils`, `@assets`, `@data`, `@/*` (definidos en `tsconfig.json`).

### 2.3 Estructura: **por tipo + feature**

Combinación de dos criterios de organización:

- **Por tipo:** elementos transversales que sirven a toda la app — `layouts/`, `pages/`, `styles/`, `utils/`, `assets/`, y componentes reutilizables en `components/`.
- **Por feature:** cada sección de la landing es una carpeta autocontenida dentro de `src/features/` con su componente y, si aplica, sus estilos y subcomponentes. El **contenido** no vive en la feature, sino en `src/data/site.content.ts`.

**Reglas:**

1. Un componente **reutilizable en más de una feature** vive en `src/components/` (subcarpeta por tipo: `ui/`, `layout/`).
2. Un componente **específico de una feature** vive en `src/features/<feature>/`.
3. Las features **no se importan entre sí**. Si dos features necesitan lo mismo, sube ese elemento a `src/components/` o `src/utils/`.
4. Las `pages/` solo orquestan: importan layouts y features, no contienen lógica.

---

## 3. Estructura de carpetas

```
landing-soc/
├── public/                       # Assets servidos tal cual (favicon, robots, og-images)
│   └── favicon.svg
├── docs/
│   └── superpowers/specs/        # Specs de diseño aprobados
├── src/
│   ├── data/                     # [TIPO] SOURCE OF TRUTH — todo el contenido del sitio
│   │   └── site.content.ts       #   - `siteContent`: brand, seo, nav, hero, problem, solution,
│   │                             #     personas, differentiators, team, cta, footer (tipado por sección)
│   ├── pages/                    # [TIPO] Rutas (cada archivo = una URL). Requerido por Astro.
│   │   └── index.astro           #   - Orquesta layout + 6 features de la landing
│   ├── layouts/                  # [TIPO] Layouts compartidos (HTML base, wrappers)
│   │   └── BaseLayout.astro      #   - <html lang="es"> + <head> + SEO meta + slots header/main/footer
│   ├── components/               # [TIPO] Componentes reutilizables (no atados a una feature)
│   │   ├── ui/                   #   - Primitivos visuales
│   │   │   ├── Button.astro      #     · primary (rojo #ff3241) / secondary (zinc outline) / ghost
│   │   │   ├── Container.astro   #     · max-w 1152px + px 24/48px
│   │   │   ├── SectionHeading.astro
│   │   │   ├── Card.astro        #     · variantes default/feature/bento/persona (legacy)
│   │   │   ├── Badge.astro       #     · neutral/brand/cyan + severidad (legacy)
│   │   │   └── Icon.astro        #     · renderiza SVG inline desde assets/icons.ts
│   │   └── layout/               #   - Composición de página
│   │       ├── Header.astro      #     · pill flotante (top-4) con nav desde siteContent.nav
│   │       └── Footer.astro      #     · brand + columnas desde siteContent.footer
│   ├── features/                 # [FEATURE] 6 secciones autocontenidas (orden: top→bottom)
│   │   ├── hero/                 #   - Badge + H1 + lead + 2 CTAs + 4 highlights + mockup SOC
│   │   │   └── Hero.astro
│   │   ├── problem-solution/     #   - "El Problema" (#problema) + "Nuestra Solución" (#solucion, 3 pilares)
│   │   │   └── ProblemSolution.astro
│   │   ├── personas/             #   - "Pensado para los cuatro perfiles" — grid de 4 tarjetas (#perfiles)
│   │   │   └── Personas.astro
│   │   ├── differentiators/      #   - "Diferenciadores" — border-grid 6 ítems numerados (#diferenciadores)
│   │   │   └── Differentiators.astro
│   │   ├── team/                 #   - "Conócenos" + "Acerca de nosotros" + tarjetas de equipo (#equipo)
│   │   │   └── Team.astro
│   │   └── cta/                  #   - CTA final con glows (#contacto)
│   │       └── Cta.astro
│   ├── styles/                   # [TIPO] Estilos globales y tokens
│   │   └── global.css            #   - Variables CSS (surfaces, brand, severidad, tipografía)
│   ├── utils/                    # [TIPO] Helpers puros y reutilizables
│   │   └── seo.ts                #   - buildTitle + defaultSeo (derivados de siteContent.seo)
│   ├── scripts/                  # [TIPO] Scripts client-side bundleados por Astro
│   │   └── smooth-scroll.ts      #   - Init GSAP ScrollSmoother + respeta reduced-motion
│   └── assets/                   # [TIPO] Assets procesados por Astro
│       └── icons.ts              #   - Map { name → SVG paths } consumido por <Icon />
├── astro.config.mjs              # Configuración de Astro
├── tsconfig.json                 # TS strict + alias de imports
├── package.json                  # Manifest (packageManager: pnpm)
├── .npmrc                        # Config de pnpm
├── .gitignore
└── CLAUDE.md                     # Este archivo
```

**Cómo añadir una nueva feature:**

1. Crear `src/features/<nombre-feature>/`.
2. Dentro, el componente principal `<NombreFeature>.astro` y subcomponentes locales si aplica. **El contenido NO va aquí:** añade su slice tipado a `src/data/site.content.ts` y consúmelo con `import { siteContent } from '@data/site.content'`.
3. Importarla desde `src/pages/index.astro` (o la página correspondiente) usando el alias `@features/<nombre>/...`.
4. Si algún elemento se vuelve reutilizable por otra feature, **moverlo** a `src/components/` y actualizar imports.
5. **Actualizar la sección 3 de este CLAUDE.md** con la nueva carpeta.

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
pnpm dev                # Servidor de desarrollo (http://localhost:4321)
pnpm build              # Build de producción a dist/
pnpm preview            # Previsualizar el build
pnpm check              # Type-check con astro check
pnpm astro add <pkg>    # Añadir integraciones / adapters de Astro
```

**No usar `npm` ni `yarn`** en este proyecto. El campo `packageManager` y `engines.pnpm` en `package.json` lo fuerzan.

---

## 6. Convenciones de código

- **Componentes Astro:** PascalCase (`Hero.astro`, `Button.astro`).
- **Contenido:** un único `src/data/site.content.ts` (objeto `siteContent` tipado por sección). No crear `*.data.ts` por feature.
- **Utils:** camelCase (`seo.ts`, `formatDate.ts`).
- **CSS:** clases en kebab-case. Estilos *scoped* dentro del componente; globales solo en `src/styles/global.css`.
- **Props:** siempre declaradas vía `interface Props` con tipos explícitos y valores por defecto donde aplique.
- **Imports:** primero externos, luego alias internos, separados por una línea en blanco.

---

## 7. Estado de dependencias

| Paquete | Versión | Notas |
| ------- | ------- | ----- |
| astro                          | ^4.16.0 | Framework base |
| @fontsource-variable/geist     | ^5.2.8  | Fuente UI (sans body) — auto-hospedada |
| @fontsource/instrument-serif   | ^5.2.8  | Fuente display (titulares editoriales) |
| @fontsource/jetbrains-mono     | ^5.2.8  | Fuente monoespaciada (datos / IOCs) |
| gsap                           | ^3.15.0 | Animaciones + ScrollSmoother (smooth scroll). 100% free desde 2024 — incluye plugins Club |

*Actualizar esta tabla al añadir o subir cualquier dependencia.*

---

## 8. Pendientes conocidos

- [ ] Definir adapter de despliegue (Vercel / Netlify / Cloudflare / Node).
- [ ] Completar datos reales del equipo y copy de "Acerca de nosotros" en `site.content.ts` (placeholders marcados con `TODO`).
- [ ] Definir la URL de "Ver Plataforma".
- [ ] Añadir meta tags OG / Twitter (`src/utils/seo.ts` ya está preparado).
- [ ] Añadir `robots.txt` y `sitemap` (`@astrojs/sitemap`).
- [ ] Decidir si se incorporará Tailwind o se mantiene CSS plano.

---

## 9. Regla de mantenimiento de este archivo

> **En cada cambio que afecte estructura, dependencias, scripts, principios o convenciones, este `CLAUDE.md` se actualiza en el mismo commit / mismo cambio.**
>
> Antes de cerrar una tarea, revisa: ¿la sección 3 (estructura), 5 (comandos) y 7 (dependencias) siguen siendo verdad? Si no, actualízalas.
