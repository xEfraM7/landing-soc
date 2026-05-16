# Landing SOC — Design Spec

**Fecha**: 2026-05-16
**Estado**: Aprobado
**Base de contenido**: `landing-data.md` (brief de marketing)
**Audiencia**: MSSPs, analistas SOC, CISOs, equipos IR

---

## 1. Dirección visual

**Estilo**: Enterprise Security (CrowdStrike / Wiz / SentinelOne).
Dark profundo con base azul, tipografía humanista, gradientes suaves, tarjetas con borde sutil (no glass exagerado), micro-detalles tipo "live feed" (badges de severidad con punto pulsante, datos en mono).

**Objetivo**: comunicar *enterprise-ready, listo para CISO*, sin caer en el cliché "otro SaaS azul cloud". Coherente con el dominio (un SOC literal).

---

## 2. Sistema de diseño (variables CSS)

Todas las variables van en `src/styles/global.css`. Prohibido hardcodear colores en componentes.

### Surfaces
```
--bg-base:        #0a0e1a
--bg-elev-1:      #0f1524
--bg-elev-2:      #161e33
--border:         rgba(148, 163, 209, 0.10)
--border-strong:  rgba(148, 163, 209, 0.18)
```

### Brand
```
--brand-500:  #3b82f6
--brand-400:  #60a5fa
--brand-300:  #93c5fd
--brand-glow: rgba(59, 130, 246, 0.35)
```

### Acento secundario
```
--accent-cyan: #22d3ee
```

### Texto
```
--fg-strong:   #f1f5f9
--fg-default:  #cbd5e1
--fg-muted:    #7c8aa8
```

### Severidad (badges, indicadores)
```
--sev-critical: #f43f5e
--sev-high:     #fb923c
--sev-medium:   #facc15
--sev-low:      #38bdf8
--sev-ok:       #34d399
```

### Tipografía
- `--font-sans: 'Inter', system-ui, ...` (400/500/600/700)
- `--font-mono: 'JetBrains Mono', ui-monospace, ...` (400/500)
- Cargadas vía `@fontsource/inter` y `@fontsource/jetbrains-mono` (sin Google Fonts en runtime).

### Radius / Spacing / Sombras
```
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 16px
--radius-xl: 24px

--shadow-sm: 0 1px 2px rgba(0,0,0,0.3)
--shadow-md: 0 8px 24px rgba(0,0,0,0.35)
--shadow-glow: 0 0 0 1px var(--brand-glow), 0 8px 32px var(--brand-glow)
```

Spacing scale via `clamp()` cuando aplique. Container max-width `1200px` (ya existe).

---

## 3. Estructura de secciones

Orden, slot y propósito. Cada sección vive en `src/features/<feature>/`.

| Orden | Feature | Archivo principal | Datos | Propósito |
|-------|---------|-------------------|-------|-----------|
| 1 | hero | `Hero.astro` | — | Tagline + subhead + CTAs + mockup SVG dashboard |
| 2 | integrations | `Integrations.astro` | `integrations.data.ts` | Strip de logos: Wazuh, TheHive/Cortex, DefectDojo, GreyNoise, MITRE |
| 3 | personas | `Personas.astro` | `personas.data.ts` | 4 cards (MSSP, Analista, CISO, IR) |
| 4 | how-it-works | `HowItWorks.astro` | `how-it-works.data.ts` | 4 pasos numerados |
| 5 | features | `Features.astro` | `features.data.ts` | 6 bloques: Detección, MITRE, Investigación, Casos, Respuesta, Vulnerabilidades. Layout bento asimétrico |
| 6 | differentiators | `Differentiators.astro` | `differentiators.data.ts` | 6 razones "por qué nosotros" |
| 7 | metrics | `Metrics.astro` | `metrics.data.ts` | 5 números grandes en banda horizontal |
| 8 | tech-stack | `TechStack.astro` | `tech-stack.data.ts` | Stack agrupado por capa (frontend/backend/realtime/calidad/seguridad) |
| 9 | faq | `Faq.astro` | `faq.data.ts` | 5 preguntas, `<details>/<summary>` nativo |
| 10 | cta | `Cta.astro` | — | Cierre conversion final |

Header y Footer se renuevan al sistema visual nuevo (`src/components/layout/`).

---

## 4. Componentes UI nuevos

Solo cosas usadas en ≥ 2 secciones (regla DRY de CLAUDE.md):

| Componente | Ruta | Uso |
|------------|------|-----|
| `SectionHeading` | `src/components/ui/SectionHeading.astro` | Eyebrow + h2 + lead. En 8/10 secciones. |
| `Card` | `src/components/ui/Card.astro` | Variantes: `default`, `feature`, `bento`. Personas, features, diff. |
| `Badge` | `src/components/ui/Badge.astro` | Severidad + neutral. Hero + features + dashboard mockup. |
| `Icon` | `src/components/ui/Icon.astro` | Renderiza SVG inline desde `src/assets/icons/`. |
| `Button` (existente) | — | Ampliar variantes: `primary` (con glow), `secondary` (ghost outline), `ghost` (sin borde). |

**Iconos**: SVGs custom lineales (estilo Lucide, stroke 1.5px). Sin librería runtime. Mínimo necesario:
- General: `alert`, `shield`, `target`, `search`, `kanban`, `zap`, `bug`, `check`, `arrow-right`, `plus`, `chevron-down`
- Logos integraciones: wordmarks/iconos SVG simplificados para Wazuh, TheHive, DefectDojo, GreyNoise, MITRE ATT&CK

Ubicación: `src/assets/icons/*.svg` (procesados por Astro o leídos como string con `?raw`).

---

## 5. Hero — detalle de imagen

No AI art. No stock. Construyo un **mockup SVG inline del dashboard**:
- Card flotante con header "SOC Dashboard" + dot LIVE pulsante (cyan)
- 3 KPIs mini: "Alertas abiertas: 142", "MTTR: 18m", "Agentes: 1,284"
- Sparkline de tendencia (SVG path)
- Lista compacta de 3 alertas con badges de severidad (CRITICAL / HIGH / MEDIUM)
- Behind: gradient orb radial blur + dot grid sutil

Liviano, escalable, refuerza el producto.

---

## 6. Interacciones / JS

**Cero JavaScript de runtime para el MVP.**
- FAQ: `<details>/<summary>` nativos estilizados.
- Hover/focus: solo CSS.
- Live dots: animación CSS `@keyframes pulse`.
- Sin smooth scroll JS (CSS `scroll-behavior: smooth` en `html`).

Si más adelante hace falta menú móvil con drawer animado, se evalúa entonces (YAGNI).

---

## 7. Accesibilidad y SEO

- HTML semántico: `<header>`, `<main>`, `<section>` con `aria-labelledby`, `<footer>`.
- Contraste mínimo AA en todos los pares texto/fondo.
- `<details>` nativo para FAQ → accesible por defecto.
- Meta tags OG/Twitter en `BaseLayout` (usar `src/utils/seo.ts` ampliado).
- `lang="es"` ya está.
- Imágenes: SVG inline o `<Image>` de Astro con `alt` descriptivo.

---

## 8. Performance

- Sin JS de hidratación.
- Fuentes auto-hospedadas (`@fontsource`), `font-display: swap`.
- SVGs inline para iconos críticos (no `<img>` para iconos pequeños).
- Astro genera HTML estático → carga instantánea.

Target Lighthouse: 95+ en las 4 métricas.

---

## 9. Estructura final de archivos

```
src/
├── pages/
│   └── index.astro                        (orquesta layouts + features)
├── layouts/
│   └── BaseLayout.astro                   (ampliar con SEO meta + fuentes)
├── components/
│   ├── ui/
│   │   ├── Button.astro                   (ampliar variantes)
│   │   ├── Container.astro                (existente)
│   │   ├── SectionHeading.astro           (NUEVO)
│   │   ├── Card.astro                     (NUEVO)
│   │   ├── Badge.astro                    (NUEVO)
│   │   └── Icon.astro                     (NUEVO)
│   └── layout/
│       ├── Header.astro                   (renovar)
│       └── Footer.astro                   (renovar)
├── features/
│   ├── hero/
│   │   ├── Hero.astro
│   │   └── HeroDashboardMockup.astro      (subcomponente local: SVG mockup)
│   ├── integrations/
│   │   ├── Integrations.astro
│   │   └── integrations.data.ts
│   ├── personas/
│   │   ├── Personas.astro
│   │   └── personas.data.ts
│   ├── how-it-works/
│   │   ├── HowItWorks.astro
│   │   └── how-it-works.data.ts
│   ├── features/
│   │   ├── Features.astro
│   │   └── features.data.ts
│   ├── differentiators/
│   │   ├── Differentiators.astro
│   │   └── differentiators.data.ts
│   ├── metrics/
│   │   ├── Metrics.astro
│   │   └── metrics.data.ts
│   ├── tech-stack/
│   │   ├── TechStack.astro
│   │   └── tech-stack.data.ts
│   ├── faq/
│   │   ├── Faq.astro
│   │   └── faq.data.ts
│   └── cta/
│       └── Cta.astro
├── styles/
│   └── global.css                         (ampliar con tokens completos)
├── utils/
│   └── seo.ts                             (ampliar)
└── assets/
    └── icons/                             (NUEVO) — SVGs lineales custom
```

---

## 10. Dependencias nuevas

| Paquete | Versión | Motivo |
|---------|---------|--------|
| `@fontsource/inter` | latest | Auto-hospedar Inter |
| `@fontsource/jetbrains-mono` | latest | Auto-hospedar JetBrains Mono |

Sin Tailwind. Sin librería de iconos. Sin librería de UI. Astro + CSS plano (regla CLAUDE.md respetada).

---

## 11. Criterios de aceptación

- [ ] `pnpm dev` renderiza la landing sin errores
- [ ] `pnpm build` compila sin warnings
- [ ] `pnpm check` pasa (TS strict)
- [ ] 10 secciones presentes y pobladas con copy del brief
- [ ] Dark theme coherente con paleta definida
- [ ] Mobile responsive (320px → 1440px+)
- [ ] FAQ funcional sin JS
- [ ] Sin warnings de console
- [ ] CLAUDE.md sección 3 (estructura) y 7 (deps) actualizados

---

## 12. Fuera de alcance (YAGNI)

- Formulario de contacto funcional (CTAs apuntan a `#contact` placeholder o mailto).
- Internacionalización (solo ES).
- Modo claro.
- Adapter de deploy (sigue siendo pendiente en CLAUDE.md).
- Robots/sitemap (pendientes en CLAUDE.md).
- Animaciones complejas (solo CSS sutil).
