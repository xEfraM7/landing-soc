# Baseline GEO — ciberem.com (pre-deploy)

**Fecha:** 2026-09-26
**Herramienta:** `/geo quick` (skill geo-seo-claude) + comprobaciones con curl y búsqueda web
**Estado medido:** sitio en producción antes de desplegar la rama `feat/seo-posicionamiento`

## Puntuación rápida estimada: 18/100

| Categoría | Peso | Estado | Nota |
| --- | --- | --- | --- |
| Citabilidad IA | 25% | Bajo | Una sola página de ~700 palabras, sin bloques de respuesta ni FAQ |
| Autoridad de marca | 20% | Muy bajo | Sin menciones de "CiberEm" como empresa SOC en la web |
| Contenido y E-E-A-T | 20% | Medio | Fundadores con nombre, cargo y LinkedIn; sin fechas ni fuentes |
| Fundamentos técnicos | 15% | Bajo | Canonical a `landing-soc.local`; www y apex duplicados |
| Datos estructurados | 10% | Nulo | Sin JSON-LD |
| Optimización por plataforma | 10% | Bajo | Sin robots, sitemap ni llms.txt |

## Comprobaciones

| Recurso | HTTP | Resuelto en esta rama |
| --- | --- | --- |
| `/robots.txt` | 404 | Sí, permite todos los bots, incluidos los de IA |
| `/sitemap-index.xml` | 404 | Sí, 12 URLs |
| `/llms.txt` | 404 | Sí |
| `/og-image.png` | 404 | Sí, 1200×630 |
| JSON-LD | 0 bloques | Sí: Organization, WebSite, Service, FAQPage, BreadcrumbList |
| Canonical | `https://landing-soc.local/` | Sí, `https://ciberem.com/...` |
| Páginas indexables | 1 | 12 (es + en) |

## Riesgo de entidad

Una búsqueda de "ciberem.com" devuelve sobre todo **Desa Ciberem**, una aldea de Banyumas (Indonesia), y perfiles sociales ajenos. La búsqueda "CiberEm SOC ciberseguridad" no devuelve ningún resultado de la empresa.

Implicaciones:

- La marca debe aparecer siempre junto a su categoría ("CiberEm, plataforma SOC") en perfiles externos.
- El schema Organization ya incluye `description` y `knowsAbout` para desambiguar.
- Crear LinkedIn de empresa, Crunchbase y, cuando haya cobertura de terceros, una entrada en Wikidata. Añadir cada URL a `organization.sameAs`.

## Top 5 acciones

1. Desplegar la rama y verificar canonical, redirect www y sitemap en producción. **Resuelto por esta rama, pendiente de deploy.**
2. Search Console + Bing Webmaster con envío de sitemap. Pendiente, semana 1 del plan.
3. LinkedIn de empresa y Crunchbase añadidos a `sameAs`. Pendiente, semana 1.
4. Contenido extractable: FAQ y definiciones en las páginas pilar. **Resuelto por esta rama.**
5. Menciones de terceros: directorios, comunidad Wazuh, artículos invitados. Pendiente, semanas 3-8.

## Próxima medición

Primer lunes de noviembre de 2026 con `/geo audit https://ciberem.com` y `/geo compare ciberem.com`.
