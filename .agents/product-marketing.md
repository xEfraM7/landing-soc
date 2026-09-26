# Product Marketing Context

**Document version:** v2
**Last updated:** 2026-09-26

## Product Overview
**One-liner:** CiberEm es una plataforma SOC que centraliza detección, investigación y respuesta ante amenazas en una sola consola, para empresas y MSPs.
**What it does:** Unifica Wazuh (SIEM/EDR), TheHive/Cortex (gestión de casos y analizadores), DefectDojo (vulnerabilidades) y GreyNoise (enriquecimiento de IOC). Mapea cada alerta a MITRE ATT&CK, gestiona casos en Kanban con SLA automático y ejecuta respuestas activas desde el caso. Es multi-tenant con RBAC de 4 roles y auditoría completa.
**Product category:** Plataforma SOC / MDR (Managed Detection and Response) / SOC como servicio. Búsquedas: "SOC como servicio", "MDR", "SOC para MSP", "SOC multi-tenant".
**Product type:** SaaS B2B + servicio gestionado.
**Business model:** Por definir públicamente. Hoy la conversión es una demo de 30 minutos en Calendly. No hay precios publicados (ver Open decisions en el plan).

## Target Audience
**Target market:** Venezuela primero; Latinoamérica después. El inglés (`/en`) sirve a multinacionales con operaciones en Venezuela.
**Target companies:**
- Empresas venezolanas de 50-1.000 empleados sin equipo SOC interno, sobre todo banca, fintech, retail, salud, telecom y logística.
- MSP y MSSP venezolanos con 10-200 clientes que ofrecen soporte de TI pero no un SOC propio.
**Decision-makers:** Dueño o director técnico del MSP; CISO, responsable de seguridad o director de TI en empresa.
**Primary use case:** Detectar, investigar y responder amenazas 24/7 sin construir un SOC interno ni operar cinco consolas separadas.
**Jobs to be done:**
- "Dame visibilidad real de lo que pasa en mis sistemas y de mis clientes."
- "Reduce el ruido para que el equipo solo atienda lo que importa."
- "Déjame demostrar a la dirección o al cliente que estamos protegidos, con métricas."
- "Ayúdame a cumplir lo que exige SUDEBAN (pentest anual, cifrado) y a tener evidencia si hay que denunciar ante el CICPC."
**Use cases:**
- MSP que quiere vender un servicio de seguridad gestionada a su cartera sin montar un SOC.
- Empresa que ya usa Wazuh pero no tiene capacidad de vigilarlo ni de responder.
- CISO que necesita reportar MTTD/MTTR y cobertura MITRE ATT&CK a la dirección.

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| MSP / MSSP (decisor y usuario) | Margen, escalar a más clientes, aislamiento de datos | Una consola por cliente no escala; mezclar datos rompe la confidencialidad | Multi-tenancy real, conmutador de cliente, reportes por organización |
| Analista SOC (usuario) | Menos ruido, menos saltos entre herramientas | Miles de alertas en cuatro consolas | Cola priorizada, threat hunting, enriquecimiento automático, respuesta desde el caso |
| CISO / líder de seguridad (decisor) | Riesgo, cumplimiento, reporte a dirección | No puede demostrar postura con datos | MTTD, MTTC, MTTR, cobertura MITRE y auditoría inmutable |
| Equipo de respuesta a incidentes (usuario) | Evidencia y trazabilidad | Evidencia dispersa | IOC, timeline de identidades, casos y observables en un lugar |

## Problems & Pain Points
**Core problem:** Las amenazas reales se pierden entre miles de alertas de herramientas aisladas, y la organización no tiene capacidad 24/7 para detectarlas y contenerlas a tiempo.
**Why alternatives fall short:**
- SOC interno: caro en personal, herramientas y guardias.
- Herramientas open source sueltas (Wazuh, TheHive, DefectDojo): potentes pero sin integración ni operación.
- MDR de grandes proveedores: pensados para empresa grande, con poca flexibilidad para MSPs pequeños y medianos.
**What it costs them:** Brechas, interrupciones operativas, pérdidas económicas y horas de analista desperdiciadas.
**Emotional tension:** Miedo a que la brecha ya esté ocurriendo sin que nadie lo vea; cansancio por alertas.

## Competitive Landscape
**Direct (Venezuela):** Ionia Consult, Ovnicom, APT Tecnología y Sistemas, Binaria, Ciberseguridad Venezuela, Delta Protect — ver docs/marketing/estrategia-venezuela.md §5.
**Direct (internacional):** MDR y SOC gestionados comerciales (p. ej. Arctic Wolf, Huntress, Sophos MDR, Blumira) — orientados a mercado anglosajón y con stacks propietarios; menos adaptados a MSPs hispanohablantes que ya usan herramientas open source.
**Secondary:** Operar Wazuh/TheHive/DefectDojo por cuenta propia — sin consola unificada, sin multi-tenancy real, sin métricas automáticas.
**Indirect:** Contratar un SOC interno o no hacer nada y confiar en el antivirus.

## Differentiation
**Key differentiators:**
- Multi-tenancy real con aislamiento por organización en cada consulta.
- RBAC de 4 roles con acciones de respuesta reversibles y disruptivas separadas.
- Auditoría inmutable de toda acción mutativa.
- Tiempo real vía streaming, no polling.
- Una sola consola sobre herramientas open source consolidadas.
- MTTD, MTTC y MTTR calculados automáticamente.
**How we do it differently:** Construimos sobre el stack open source que muchos MSP ya conocen, en lugar de reemplazarlo por uno propietario.
**Why that's better:** Menor coste de entrada, sin lock-in de agente propietario, y la misma consola sirve a todos los clientes del MSP.
**Why customers choose us:** Pendiente de validar con clientes reales.

## Objections
| Objection | Response |
|-----------|----------|
| "Ya tenemos Wazuh, ¿para qué lo necesito?" | Wazuh detecta; CiberEm añade casos, respuesta, multi-tenancy, métricas y la operación. |
| "Somos pequeños para un SOC." | Por eso existe el modelo como servicio: capacidad SOC sin equipo interno. |
| "¿Cómo sé que mis datos no se mezclan con otros clientes?" | Filtrado por organización en cada consulta a base de datos y auditoría completa. |

**Anti-persona:** Grandes corporaciones con SOC propio maduro y stack propietario ya consolidado; particulares.

## Switching Dynamics
**Push:** Alertas sin atender, cinco consolas, incapacidad de reportar a dirección o a clientes.
**Pull:** Una consola, respuesta desde el caso, métricas automáticas, pensado para MSP.
**Habit:** "Siempre lo hemos gestionado a mano con nuestras herramientas."
**Anxiety:** Migración, acceso a sus datos, dependencia de un proveedor pequeño y nuevo.

## Customer Language
**How they describe the problem:** Pendiente de recoger en demos (anotar frases literales).
**How they describe us:** Pendiente.
**Words to use:** SOC, detección y respuesta, MDR, multi-tenant, MITRE ATT&CK, MTTD/MTTR, visibilidad, contener, trazabilidad.
**Words to avoid:** "Revolucionario", "IA mágica", "100% seguro", "garantizamos cero brechas".
**Glossary:**
| Term | Meaning |
|------|---------|
| SOC | Centro de Operaciones de Seguridad |
| MDR | Detección y respuesta gestionada |
| MTTD / MTTC / MTTR | Tiempo medio de detección / contención / resolución |
| IOC | Indicador de compromiso |
| Tenant | Organización cliente aislada dentro de la plataforma |

## Brand Voice
**Tone:** Profesional y técnico sin jerga vacía.
**Style:** Directo, frases cortas, datos concretos. Español con referencias venezolanas (pago móvil, SUDEBAN, CICPC); inglés internacional en `/en`. Citar siempre la fuente de cualquier cifra o norma.
**Personality:** Fiable, técnico, cercano, transparente.
**Name:** Siempre "CiberEm".

## Proof Points
**Metrics:** 4 integraciones (Wazuh, TheHive/Cortex, DefectDojo, GreyNoise); 6 acciones de respuesta activa; 5 estados de caso; 4 roles RBAC; SLA desde 15 minutos para críticos.
**Customers:** Ninguno público todavía.
**Testimonials:** Ninguno todavía.
**Value themes:**
| Theme | Proof |
|-------|-------|
| Menos ruido | Correlación, enriquecimiento automático, cola priorizada |
| Respuesta rápida | 6 acciones desde el caso, SLA automático |
| Escala para MSP | Multi-tenancy, conmutador de cliente, reportes por organización |

## Goals
**Business goal:** Conseguir los primeros clientes de pago (MSPs y empresas) a través de demos.
**Conversion action:** Agendar demo de 30 minutos (Calendly). Evento GA4 `demo_click`.
**Current metrics:** Sin datos; la analítica se activa al pegar el ID de GA4.

## Site
- es: https://ciberem.com · /ciberseguridad-venezuela · /soc-como-servicio · /mdr · /soc-para-msp · /preguntas-frecuentes
- en: https://ciberem.com/en · /en/cybersecurity-venezuela · /en/soc-as-a-service · /en/mdr · /en/soc-for-msps · /en/faq

## Changelog
*Newest first. One line per revision: what changed and why.*
- v2 (2026-09-26) — Venezuela pasa a mercado prioritario: ICP, competencia local, JTBD de cumplimiento SUDEBAN/CICPC y voz con referencias venezolanas.
- v1 (2026-09-26) — Initial context, auto-drafted from site content and landing-data.md.
