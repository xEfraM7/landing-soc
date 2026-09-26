# Estrategia de SEO y posicionamiento — CiberEm

**Fecha:** 2026-09-26
**Para:** fundadores de CiberEm (Maurizio Cucina, Efrain Cabrera)
**Horizonte:** 90 días, con vista a 12 meses
**Contexto de producto:** [.agents/product-marketing.md](../../.agents/product-marketing.md)

---

## 1. Resumen ejecutivo

CiberEm ya tiene un sitio técnicamente correcto: 12 URLs indexables en español e inglés, datos estructurados, sitemap, robots, `llms.txt` e imagen social. Lo que falta es **autoridad** (nadie enlaza a ciberem.com) y **medición** (no hay analítica activa).

Tres apuestas para los próximos 90 días:

1. **Fundación medible.** Search Console, GA4 y Bing Webmaster activos en la semana 1, con el evento `demo_click` como conversión.
2. **Autoridad de entidad.** LinkedIn de empresa, Crunchbase, perfiles en directorios SaaS y de ciberseguridad. Esto alimenta a Google y a los buscadores con IA para reconocer "CiberEm" como marca.
3. **Demanda directa a MSPs.** LinkedIn de los fundadores y outbound a MSPs. Es el canal que produce demos antes de que el SEO madure (el SEO tarda 3-6 meses en mover tráfico).

Resultado esperado a 90 días: marca indexada y reconocida, las 4 páginas pilar con impresiones en Search Console, al menos 20 dominios de referencia y un flujo semanal de demos procedente de LinkedIn y outbound.

---

## 2. Marco estratégico

**Categoría que reclamamos:** plataforma SOC multi-tenant para MSP y empresas medianas, construida sobre herramientas open source consolidadas.

**Por qué este cuadrante:** el problema (amenazas no detectadas) es grande y frecuente. Eso favorece un portfolio de activos que se acumulan (páginas pilar, contenido en LinkedIn, perfiles de directorio) sobre campañas puntuales.

**Mercado:** global, con español como idioma principal y el inglés como segunda vía. En el mundo hispanohablante la competencia en SEO por "SOC como servicio" y "MDR" es mucho menor que en inglés: ahí está la ventaja inicial.

**Voz:** técnica, directa, sin promesas absolutas. Nunca "100% seguro" ni "cero brechas".

---

## 3. Estado actual

| Área | Estado | Nota |
| --- | --- | --- |
| SEO técnico | Resuelto | Canonical, hreflang, sitemap, robots, schema, OG. Lighthouse SEO 100. |
| Contenido | Base | 1 landing + 4 pilares por idioma. Sin blog, sin casos. |
| Analítica | Pendiente | Campos preparados; falta el ID de GA4 y el token de Search Console. |
| Autoridad | Cero | Sin backlinks ni perfiles de empresa. |
| Prueba social | Cero | Sin clientes públicos ni testimonios. |
| Presupuesto | Desconocido | Se asume orgánico hasta confirmarlo. |
| Equipo | 2 fundadores | Sin persona dedicada a marketing. |

---

## 4. Keyword map

Una intención principal por URL. Las variantes long-tail se cubren dentro de cada página (secciones y FAQ).

| URL | Keyword principal | Long-tail que cubre |
| --- | --- | --- |
| `/` | plataforma SOC | detección y respuesta ante amenazas; SOC 24/7; monitoreo de seguridad para empresas |
| `/soc-como-servicio` | SOC como servicio | SOCaaS; SOC externo; SOC gestionado para pymes |
| `/mdr` | MDR detección y respuesta gestionada | qué es MDR; MDR vs EDR; respuesta activa ante incidentes |
| `/soc-para-msp` | SOC para MSP | SOC multi-tenant; SOC para MSSP; plataforma de seguridad para MSP |
| `/preguntas-frecuentes` | preguntas frecuentes SOC | qué es MTTD y MTTR; Wazuh TheHive integración; MITRE ATT&CK SOC |
| `/en` | SOC platform | threat detection and response platform |
| `/en/soc-as-a-service` | SOC as a service | SOCaaS for SMBs; outsourced SOC |
| `/en/mdr` | managed detection and response | MDR vs EDR; MDR service |
| `/en/soc-for-msps` | multi-tenant SOC for MSPs | SOC platform for MSSPs; Wazuh multi-tenant |
| `/en/faq` | SOC MDR FAQ | what is MTTD; Wazuh TheHive DefectDojo integration |

**Oportunidad de nicho:** "Wazuh multi-tenant", "Wazuh TheHive integración" y "Wazuh para MSP" tienen poca competencia y una audiencia exacta (gente que ya usa Wazuh). Son los primeros temas de contenido a crear cuando haya blog.

---

## 5. Plan de 90 días

### Semanas 1-2: Fundación

| Tarea | Responsable | Cómo |
| --- | --- | --- |
| Desplegar esta rama en Vercel | Efrain | Merge a `main`. Comprobar que `www.ciberem.com` redirige con 301 a `ciberem.com`. |
| Google Search Console | Efrain | Verificar el dominio por DNS (propiedad de dominio). Enviar `https://ciberem.com/sitemap-index.xml`. Solicitar indexación de las 12 URLs. |
| GA4 | Efrain | Crear la propiedad, pegar el ID en `seo.analytics.ga4Id` de `src/data/content/es.ts` y `en.ts`. Marcar `demo_click` como evento clave. |
| Bing Webmaster Tools | Efrain | Importar desde Search Console. Bing alimenta Copilot y ChatGPT search. |
| Rich Results Test | Efrain | Validar `/mdr`, `/soc-para-msp` y `/preguntas-frecuentes`. |
| LinkedIn de empresa "CiberEm" | Maurizio | Logo, banner, URL, descripción. Añadir la URL a `organization.sameAs`. |
| Crunchbase | Maurizio | Perfil de organización con los dos fundadores. Añadir a `sameAs`. |
| Actualizar LinkedIn personales | Ambos | Cargo "Co-Fundador en CiberEm" enlazando a la página de empresa. |

### Semanas 3-4: Autoridad

Directorios con enlace y audiencia real. Cada descripción debe ser distinta; los buscadores con IA penalizan el texto duplicado.

| Directorio | Tipo | Enfoque de la descripción |
| --- | --- | --- |
| G2 | Reviews B2B | Resultado y caso de uso (MSP) |
| Capterra / GetApp | Reviews B2B | Resultado y caso de uso (empresa) |
| AlternativeTo | Alternativas | "Alternativa a operar Wazuh + TheHive por separado" |
| SaaSHub | Alternativas | Comparación con MDR comerciales |
| SourceForge | Software | Descripción técnica del stack |
| Clutch | Proveedores de servicios | SOC como servicio |
| Product Hunt | Lanzamiento | Reservar para un lanzamiento preparado (ver semana 9) |
| Wazuh partner program | Ecosistema | Solicitar alta como partner si aplica; enlace de altísima relevancia |

Regla: no pedir reseñas en G2/Capterra hasta tener clientes reales. Un perfil sin reseñas no convierte, pero el enlace y la entidad sí cuentan.

### Semanas 3-12: LinkedIn de fundadores

Dos publicaciones por semana por fundador. Cada tema enlaza a una página pilar. Formato recomendado: historia o dato concreto, lección, enlace en el primer comentario.

| Semana | Tema | Página destino |
| --- | --- | --- |
| 3 | Por qué una empresa de 200 personas no necesita un SOC interno | /soc-como-servicio |
| 4 | MDR vs EDR explicado en 5 líneas | /mdr |
| 5 | Qué significa multi-tenancy real para un MSP | /soc-para-msp |
| 6 | MTTD y MTTR: las dos métricas que un CISO debe llevar a dirección | /mdr |
| 7 | Mapear alertas a MITRE ATT&CK: qué ganas en la práctica | /mdr |
| 8 | Respuestas reversibles vs disruptivas: quién debe poder aislar un host | /mdr |
| 9 | Cómo integramos Wazuh, TheHive y DefectDojo en una consola | /soc-como-servicio |
| 10 | Auditoría inmutable: por qué cada acción debe quedar registrada | /soc-para-msp |
| 11 | El coste real de un SOC interno frente a uno gestionado | /soc-como-servicio |
| 12 | Lecciones de las primeras demos con MSPs | /soc-para-msp |

Maurizio publica el ángulo técnico de seguridad; Efrain el de producto e ingeniería.

### Semanas 3-12: Outbound a MSPs

**Lista:** MSPs con 10-200 clientes que ofrecen soporte de TI pero no anuncian un servicio SOC o MDR. Fuentes: LinkedIn, directorios de partners de fabricantes, búsquedas "soporte informático empresas" por país. 20 contactos nuevos por semana.

**Secuencia de 3 toques (es):**

> **Asunto:** soc para tus clientes
>
> Hola {nombre}, vi que {MSP} da soporte de TI a {sector/tipo de cliente} pero no ofrece monitoreo de seguridad 24/7.
>
> Muchos MSP de vuestro tamaño lo dejan fuera porque montar un SOC por cliente no sale a cuenta. Nosotros lo resolvemos con una consola multi-tenant: cada cliente aislado, reportes por organización y respuesta desde el caso.
>
> ¿Te sería útil ver cómo quedaría con dos o tres de tus clientes?

> **Asunto:** re: soc para tus clientes (día 4)
>
> Un dato que suele sorprender: con SLA por severidad, una alerta crítica tiene 15 minutos antes de escalar. Eso es lo que un cliente espera cuando le vendes "seguridad gestionada".
>
> Si te interesa, te enseño el flujo completo en 30 minutos.

> **Asunto:** cierro el hilo (día 10)
>
> No quiero llenarte la bandeja. Si en algún momento añadir un servicio SOC a tu catálogo entra en planes, aquí tienes el resumen: ciberem.com/soc-para-msp
>
> Suerte con todo.

**Secuencia (en):**

> **Subject:** soc for your clients
>
> Hi {name}, noticed {MSP} covers IT support for {client type} but doesn't list 24/7 security monitoring.
>
> Most MSPs your size skip it because running a SOC per client doesn't pay. We solve that with a multi-tenant console: every client isolated, per-organization reports and response from the case.
>
> Would it help to see how it would look for two or three of your clients?

> **Subject:** re: soc for your clients (day 4)
>
> One number that usually lands: with severity-based SLAs, a critical alert gets 15 minutes before it escalates. That's what a client expects when you sell "managed security".
>
> Happy to walk you through the full flow in 30 minutes.

> **Subject:** closing the loop (day 10)
>
> Don't want to crowd your inbox. If adding a SOC service ever makes your roadmap, here's the short version: ciberem.com/en/soc-for-msps
>
> All the best.

Enviar desde un dominio secundario calentado (por ejemplo `ciberem.io` o `getciberem.com`) para proteger la reputación de `ciberem.com`.

### Semanas 5-8: Comunidad y PR

- **Comunidades:** r/msp y r/sysadmin en inglés; foros y grupos de la comunidad Wazuh (Slack y GitHub Discussions). Regla 90/10: responder preguntas reales y solo enlazar cuando aporta.
- **Podcasts y newsletters:** preparar una ficha de invitado para cada fundador y proponerse a podcasts de ciberseguridad en español e inglés que acepten invitados. Usar el skill `public-relations` para la lista y el pitch.
- **Contenido invitado:** un artículo técnico sobre "Wazuh multi-tenant para MSP" en un medio o blog del sector, con enlace a `/soc-para-msp`.

### Semanas 9-12: Compuesto

- **Product Hunt:** solo si hay una demo pública o vídeo de 60-90 segundos y una base de 100 contactos para avisar. Lanzar martes a jueves a las 00:01 hora del Pacífico. Pedir opinión, nunca votos.
- **Primer caso de estudio:** con el primer cliente o piloto, publicar una página `/casos/{cliente}` con métricas antes y después.
- **Revisión de Search Console:** qué consultas generan impresiones sin clics. Reescribir título y descripción de esas páginas.

---

## 6. Medición

| KPI | Fuente | Mes 1 | Mes 2 | Mes 3 |
| --- | --- | --- | --- | --- |
| URLs indexadas | Search Console | 12 | 12 | 12 |
| Impresiones orgánicas | Search Console | 500 | 2.000 | 5.000 |
| Clics orgánicos | Search Console | 20 | 80 | 200 |
| Posición media pilares es | Search Console | < 50 | < 30 | < 20 |
| Dominios de referencia | Search Console / Ahrefs Webmaster Tools (gratis) | 8 | 15 | 25 |
| `demo_click` | GA4 | 5 | 15 | 30 |
| Demos agendadas | Calendly | 3 | 8 | 15 |
| Respuestas outbound | Bandeja | 5% | 7% | 8% |
| Menciones en IA | `/geo audit https://ciberem.com` | baseline | +1 | +3 |

Los objetivos son hipótesis iniciales. Se recalibran al cierre del mes 1 con datos reales.

**Rutina mensual (primer lunes de cada mes):**

1. Search Console: consultas, páginas y cobertura.
2. GA4: `demo_click` por página de origen.
3. `/geo audit https://ciberem.com` y comparar con el baseline en `docs/marketing/`.
4. Preguntar a ChatGPT, Perplexity y Claude "mejor plataforma SOC para MSP" y "SOC como servicio" y registrar si aparece CiberEm (3 intentos por consulta).

---

## 7. Decisiones abiertas

| Decisión | Por qué importa | Quién |
| --- | --- | --- |
| Publicar precios o rango de precios | Los directorios y los buscadores con IA descartan productos sin precio visible | Ambos |
| Presupuesto mensual de marketing | Define si se prueba LinkedIn Ads o Google Ads en el mes 3 | Ambos |
| Primer piloto o cliente de referencia | Sin prueba social no hay reseñas ni caso de estudio | Maurizio |
| Demo pública o vídeo de producto | Bloquea Product Hunt y mejora la conversión de todas las páginas | Efrain |
| Dominio secundario para outbound | Protege la reputación de correo de ciberem.com | Efrain |
| Contraste del botón rojo de marca | Blanco sobre #ff3241 tiene contraste 3.1:1 (WCAG pide 4.5:1) | Ambos |

---

## 8. Backlog tras los 90 días

- Blog con content collections de Astro (`/blog`), empezando por los temas de nicho Wazuh.
- Páginas comparativas honestas (`/comparativas/{competidor}`).
- Casos de estudio (`/casos/{cliente}`).
- Menú móvil (hoy la navegación se oculta por debajo de 880px; el footer mantiene los enlaces).
- Página de precios y `pricing.md` para agentes de IA.

---

## 9. Skills instalados que ejecutan este plan

| Tarea | Skill |
| --- | --- |
| Auditoría GEO mensual | `geo-audit`, `geo-compare` |
| Nuevas páginas y copy | `copywriting`, `copy-editing` |
| Contenido de LinkedIn | `social`, `content-strategy` |
| Outbound | `prospecting`, `cold-email` |
| Directorios | `directory-submissions` |
| PR y podcasts | `public-relations` |
| Schema y SEO técnico | `schema`, `seo-audit`, `ai-seo` |
| Comparativas | `competitors`, `competitor-profiling` |
| Analítica | `analytics` |
