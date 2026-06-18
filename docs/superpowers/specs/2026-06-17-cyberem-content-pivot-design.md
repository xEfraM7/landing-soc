# Spec — Pivote de contenido a CyberEM (SOC)

**Fecha:** 2026-06-17
**Estado:** Aprobado (diseño) — implementación en curso
**Autor:** brainstorming + implementación

## 1. Objetivo

Reemplazar el contenido placeholder de la réplica de repteam.net (inglés, networking/MSP) por
contenido real de **CyberEM**, una plataforma SOC (detección, investigación y respuesta ante
amenazas), en español. Todo el copy del sitio vive en **un único source of truth tipado**.

## 2. Decisiones tomadas

- **Alcance:** se eliminan las secciones no usadas (`integrations/`, `how-it-works/`, `faq/`).
- **Source of truth:** un módulo TS central `src/data/site.content.ts` (alias `@data`). Las features
  dejan de tener `*.data.ts` propios y consumen su slice de `siteContent`.
- **Equipo:** sección con copy "Acerca de nosotros" + tarjetas de equipo con datos **placeholder**
  editables (sin datos reales todavía).
- **Orden narrativo:** Hero → Problema → Solución → Perfiles → Diferenciadores → Equipo → CTA.
- **Problema/Solución:** una sola feature `problem-solution/` que renderiza ambos bloques.
- **Marca:** `REP` → `CyberEM`. Idioma del sitio → `es`.

## 3. Estructura final de la página

| # | Sección | id ancla | Componente | Acción |
|---|---------|----------|-----------|--------|
| 1 | Hero | `#top` | `features/hero/Hero.astro` | Reescribir + 4 highlights |
| 2 | El Problema | `#problema` | `features/problem-solution/ProblemSolution.astro` (nuevo) | Nuevo |
| 3 | Nuestra Solución | `#solucion` | (mismo componente) | Nuevo |
| 4 | Pensado para los cuatro perfiles | `#perfiles` | `features/personas/Personas.astro` | Reescribir (marquee → grid 4) |
| 5 | Diferenciadores | `#diferenciadores` | `features/differentiators/Differentiators.astro` | Reescribir (6 numerados) |
| 6 | Conócenos | `#equipo` | `features/team/Team.astro` (nuevo) | Nuevo |
| 7 | CTA | `#contacto` | `features/cta/Cta.astro` | Reescribir |

Se eliminan: `features/integrations/`, `features/how-it-works/`, `features/faq/`.

## 4. Source of truth — forma del módulo

`src/data/site.content.ts` exporta `siteContent` (objeto único) con interfaces por sección:

```
brand            { name, mark(icon), tagline }
seo              { title, description }
nav              { links: [{ label, href }] }, cta { label, href }
hero             { eyebrow, title, lead, description, primaryCta, secondaryCta, highlights[4] }
problem          { eyebrow, heading, paragraphs[] }
solution         { eyebrow, heading, lead, paragraphs[], pillars[3] }
personas         { eyebrow, heading, items[4]: { tag, title, body, icon } }
differentiators  { eyebrow, heading, items[6]: { number, title, body } }
team             { eyebrow, heading, about: { heading, paragraphs[] }, members[]: { name, role, initials } }
cta              { heading, lead, primaryCta, secondaryCta }
footer           { tagline, columns[], copyright }
```

`Cta = { label, href }`. Iconos: del set existente en `src/assets/icons.ts`.

## 5. Contenido final (copy real)

### Hero
- eyebrow: `SOC · Detección y Respuesta`
- title: `Detectamos amenazas antes de que afecten tu negocio.`
- lead: `Monitoreo SOC 24/7, gestión de incidentes, hardening y protección continua desde una sola plataforma.`
- description: `Ayudamos a empresas y MSPs a identificar, investigar, fortalecer y responder amenazas en tiempo real sin necesidad de construir un SOC interno.`
- primaryCta: `Solicitar Demo` → `#contacto`
- secondaryCta: `Ver Plataforma` → `#solucion`
- highlights: `Monitoreo 24/7` · `Respuesta rápida ante incidentes` · `Visibilidad completa de tu entorno` · `Reportes ejecutivos y técnicos`

### El Problema
- heading: `El Problema`
- p1: `Las amenazas cibernéticas crecen cada día, pero muchas organizaciones siguen sin contar con la visibilidad y capacidad de respuesta necesarias para detectarlas a tiempo.`
- p2: `Los equipos de seguridad se enfrentan a miles de eventos y alertas provenientes de múltiples herramientas. Entre tanto ruido, las amenazas reales pueden pasar desapercibidas, aumentando el riesgo de brechas de seguridad, interrupciones operativas y pérdidas económicas.`

### Nuestra Solución
- heading: `Nuestra Solución`
- lead: `CyberEM centraliza la detección, investigación y respuesta ante amenazas en una sola plataforma.`
- p1: `Ayudamos a organizaciones y proveedores de servicios gestionados (MSP) a reducir el ruido, priorizar los incidentes que realmente importan y responder más rápido ante posibles ataques.`
- p2: `Con monitoreo continuo, visibilidad centralizada y automatización de procesos, los equipos de seguridad pueden enfocarse en proteger el negocio en lugar de gestionar herramientas aisladas.`
- pilares: `Reduce el ruido` (activity) · `Prioriza lo crítico` (target) · `Responde más rápido` (zap)

### Perfiles (heading: "Pensado para los cuatro perfiles")
1. MSP / SOC Gestionado — `Gestiona múltiples clientes desde una sola plataforma` — *Aísla datos, alertas y activos por organización mientras mantienes una operación centralizada y eficiente.* (workflow)
2. Analista SOC — `Investiga y responde amenazas más rápido` — *Correlación de eventos, enriquecimiento automático y workflows diseñados para reducir el tiempo de respuesta.* (search)
3. CISO / Líder de Seguridad — `Obtén visibilidad real del riesgo` — *Métricas de seguridad, tendencias, cumplimiento y reportes ejecutivos para apoyar la toma de decisiones.* (gauge)
4. Equipo de Respuesta a Incidentes — `Toda la evidencia en un solo lugar` — *IOC, timeline, casos, observables y documentación centralizada para investigaciones más eficientes.* (shield)

### Diferenciadores (6 numerados)
- 01 `Un SOC para todos tus clientes` — Gestiona múltiples organizaciones desde una sola consola sin perder aislamiento ni control.
- 02 `Control de acceso inteligente` — Cada usuario ve únicamente la información que necesita según su función y organización.
- 03 `Trazabilidad completa` — Toda acción queda registrada para auditorías, cumplimiento y análisis forense.
- 04 `Detección y respuesta en tiempo real` — Recibe alertas al instante y acelera la investigación con automatización integrada.
- 05 `Menos herramientas, más productividad` — Centraliza monitoreo, investigaciones, casos y reportes en una única plataforma.
- 06 `Métricas que importan` — Mide MTTD, MTTR, cobertura de amenazas y desempeño operativo con paneles ejecutivos.

### Conócenos / Acerca de nosotros (placeholder editable)
- heading: `Conócenos`
- about.heading: `Acerca de nosotros`
- about copy: placeholder editable sobre misión/equipo de CyberEM.
- members: 4 tarjetas placeholder `{ name, role, initials }`.

### CTA
- heading: `Protege tu negocio con detección y respuesta gestionada`
- lead: `Solicita una demo y descubre cómo CyberEM unifica el monitoreo, la investigación y la respuesta en una sola plataforma.`
- primaryCta: `Solicitar Demo` → `#contacto`; secondaryCta: `Ver Plataforma` → `#solucion`

## 6. Plan de implementación (orden)

1. `src/data/site.content.ts` + alias `@data/*` en `tsconfig.json`.
2. `Hero.astro` ← siteContent.hero (+ highlights, mockup con métricas SOC).
3. `problem-solution/ProblemSolution.astro` (nuevo).
4. `personas/Personas.astro` → grid 4 perfiles; borrar `personas.data.ts`.
5. `differentiators/Differentiators.astro` → 6 numerados; borrar `differentiators.data.ts`.
6. `team/Team.astro` (nuevo).
7. `cta/Cta.astro` ← siteContent.cta.
8. `Header.astro` + `Footer.astro` ← siteContent (marca CyberEM, nav ES).
9. `seo.ts` ← siteContent.seo; `BaseLayout.astro` `lang="es"`.
10. `index.astro` → nuevo orden, sin features eliminadas.
11. Borrar `integrations/`, `how-it-works/`, `faq/`.
12. Actualizar `CLAUDE.md` (estructura, convención source of truth, secciones).
13. Verificación: `pnpm check` + `pnpm build`.

## 7. Fuera de alcance

Formulario/backend de demo, URL real de plataforma, fotos y datos reales del equipo, copy final de
"Acerca de nosotros", adapter de despliegue.
