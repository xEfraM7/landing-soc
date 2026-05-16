---
  📋 Brief de Marketing — SOC Dashboard

  1. Posicionamiento (lo primero que ve el visitante)

  Categoría: Plataforma SOC unificada multi-tenant

  Propuesta de valor (1 línea):

  ▎ Centraliza Wazuh, TheHive y DefectDojo en un solo panel: detecta, investiga y responde a amenazas en tiempo real.

  Taglines alternativos para el hero:
  - "Tu Centro de Operaciones de Seguridad, unificado y en tiempo real."
  - "De la alerta a la contención, sin cambiar de pestaña."
  - "Visibilidad total de tu postura de seguridad. Multi-cliente. En vivo."

  Subtítulo de apoyo:

  ▎ Integra SIEM, gestión de casos y vulnerabilidades en una plataforma con mapeo MITRE ATT&CK, respuesta activa y aislamiento
  ▎ por organización para MSSPs y equipos de seguridad.

  ---
  2. ¿Para quién es? (segmentos / personas)

  Persona: MSSP / SOC gestionado
  Dolor que resuelve: Multi-tenancy real: aísla datos, agentes y casos por cliente desde un solo despliegue
  ────────────────────────────────────────
  Persona: Analista SOC (Tier 1/2)
  Dolor que resuelve: Cola de alertas priorizada, threat hunting y respuesta activa sin saltar entre 4 consolas
  ────────────────────────────────────────
  Persona: Líder de seguridad / CISO
  Dolor que resuelve: Métricas MTTR/MTTD, cobertura MITRE y trazabilidad de auditoría para reportar postura
  ────────────────────────────────────────
  Persona: Equipo de respuesta a incidentes
  Dolor que resuelve: Kanban de casos con TLP/PAP, enriquecimiento IOC y timeline de identidades

  ---
  3. Cómo funciona (flujo para explicar en la landing)

  Ideal para una sección de 4 pasos con iconos:

  1. Conecta tus fuentes — Integra Wazuh (SIEM/EDR), TheHive/Cortex (casos) y DefectDojo (vulnerabilidades) con tus
  credenciales. Modo mock para evaluar sin infraestructura.
  2. Detecta en tiempo real — Las alertas entran vía streaming (SSE), se clasifican por severidad y se mapean automáticamente a
   tácticas y técnicas MITRE ATT&CK.
  3. Investiga con contexto — Threat hunting, enriquecimiento de IOCs con GreyNoise, timeline de identidades y panel de detalle
   con todo el contexto del evento.
  4. Responde y contén — Ejecuta respuestas activas (aislar host, deshabilitar cuenta, matar proceso, poner archivo en
  cuarentena) y gestiona el caso en un tablero Kanban hasta su resolución.

  ---
  4. Funcionalidades clave (bloques de features)

  🎯 Detección y monitoreo

  - Dashboard en tiempo real — KPIs vivos: alertas abiertas/críticas, MTTR, casos, agentes activos, vulnerabilidades.
  - Cola de alertas — Tabla filtrable por severidad, estado, fuente y agente, con deadline de SLA.
  - Tendencia de amenazas — Series temporales de alertas por severidad (24h a 30d).
  - Salud de agentes — Estado de conectividad y sincronización de despliegues Wazuh.

  🗺️  MITRE ATT&CK

  - Heatmap de cobertura — Táctica × técnica, coloreado por volumen de alertas.
  - Análisis de brechas — Qué técnicas están cubiertas por reglas activas y cuáles no.
  - Top técnicas — Ranking por frecuencia con desglose de severidad y tendencia temporal.

  🔍 Investigación

  - Threat Hunting Workbench — Editor de consultas libre sobre telemetría Wazuh con validación y biblioteca de consultas
  guardadas/compartidas.
  - Timeline de Identidades (ITDR) — Rastrea cuentas humanas y de servicio observadas en eventos, clasificación automática,
  watchlist para analistas y actividad cruzada entre máquinas (FIM, auth, rootcheck).
  - Enriquecimiento de IOC — Reputación de IPs vía GreyNoise con cola asíncrona y reintentos.
  - Cortex Analyzers — Análisis automático de observables (IP, dominio, hash, archivo).

  🗂️  Gestión de casos

  - Tablero Kanban — Flujo arrastrar-y-soltar: Nuevo → Triaje → Investigando → Contenido → Resuelto.
  - Panel de caso — Asignado, TLP/PAP, tags, tareas, observables enriquecidos y comentarios.
  - SLA automático — Deadlines por severidad (crítico: 15 min → bajo: 24h) con detección de incumplimiento.

  ⚡ Respuesta activa

  - 6 acciones de respuesta — Reversibles (reiniciar agente, deshabilitar cuenta) y disruptivas (bloqueo firewall, aislamiento
  de host, matar proceso, cuarentena de archivo) con control de permisos por rol.

  🛡️  Vulnerabilidades

  - Hallazgos DefectDojo — CVSS v3, EPSS, CWE/CVE, endpoints afectados y estado de mitigación.
  - Sincronización automática — Vulnerabilidades de Wazuh mapeadas a DefectDojo vía cron.

  ---
  5. Diferenciadores (sección "por qué nosotros")

  - Multi-tenancy real — Aislamiento por organización con conmutador de cliente para administradores sin re-login. Pensado para
   MSSPs.
  - RBAC granular — 4 roles (admin, company_owner, analyst, viewer) con matriz de permisos estática y acciones diferenciadas
  (incluyendo respuestas reversibles vs. disruptivas).
  - Auditoría inmutable — Cada acción mutativa queda registrada (usuario, org, entidad, IP, metadata) para cumplimiento.
  - Tiempo real de verdad — Server-Sent Events para ingesta de alertas en vivo, no polling lento.
  - Una sola fuente de verdad — Reemplaza el cambio constante entre consolas de Wazuh, TheHive y DefectDojo.
  - Métricas que importan — MTTD, MTTC y MTTR calculados automáticamente para reportes ejecutivos.

  ---
  6. Métricas / números para destacar (prueba social técnica)

  - 3 integraciones core + 1 de enriquecimiento (Wazuh, TheHive/Cortex, DefectDojo, GreyNoise)
  - 6 acciones de respuesta activa automatizables
  - 5 estados de workflow de casos
  - 4 roles RBAC con permisos granulares
  - SLA desde 15 minutos para alertas críticas

  ---
  7. Stack tecnológico (para audiencia técnica / página "Tecnología")

  - Frontend: Next.js 16 (App Router, RSC), React 19, TypeScript strict, Tailwind v4, shadcn/ui, Recharts
  - Backend: API Routes, better-auth, Prisma 7, PostgreSQL
  - Tiempo real: Server-Sent Events + cola de jobs asíncrona
  - Calidad: Vitest + property-based testing (fast-check), validación Zod end-to-end
  - Seguridad: RBAC sin lookups en DB, filtrado por tenant en cada query, auditoría completa, sin logging de PII

  ---
  8. Ideas de copy para CTAs

  - Primario: "Solicita una demo" / "Empieza tu prueba"
  - Secundario: "Ver cómo funciona" / "Explora las integraciones"
  - Hero: "Unifica tu SOC hoy"

  ---
  9. FAQ sugeridas (sección de cierre)

  - ¿Con qué herramientas se integra? Wazuh (SIEM/EDR), TheHive/Cortex (casos), DefectDojo (vulnerabilidades) y GreyNoise
  (enriquecimiento IOC).
  - ¿Sirve para MSSPs / múltiples clientes? Sí, multi-tenancy con aislamiento total de datos, agentes y casos por organización.
  - ¿Puedo evaluarlo sin mi infraestructura? Sí, modo mock con datos de ejemplo para cada integración.
  - ¿Soporta MITRE ATT&CK? Sí, mapeo automático, heatmap de cobertura y análisis de brechas.
  - ¿Cumple requisitos de auditoría? Registro inmutable de todas las acciones con usuario, IP y metadata.

  ---