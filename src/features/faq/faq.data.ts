export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: '¿Con qué herramientas se integra?',
    a: 'Wazuh (SIEM/EDR), TheHive/Cortex (gestión de casos y analyzers), DefectDojo (vulnerabilidades) y GreyNoise (enriquecimiento de IOCs). Conexión vía credenciales propias — no hospedamos ni proxyeamos tus datos.',
  },
  {
    q: '¿Sirve para MSSPs o múltiples clientes?',
    a: 'Sí. Multi-tenancy con aislamiento total de datos, agentes y casos por organización. Los administradores cambian entre clientes sin re-login. Diseñado desde el día uno para operadores que gestionan varios SOCs.',
  },
  {
    q: '¿Puedo evaluarlo sin mi infraestructura?',
    a: 'Sí. Cada integración tiene modo mock con datos de ejemplo realistas (alertas, casos, vulnerabilidades). Puedes recorrer el flujo completo sin conectar nada real.',
  },
  {
    q: '¿Soporta MITRE ATT&CK?',
    a: 'Sí. Mapeo automático de alertas a tácticas y técnicas, heatmap de cobertura, análisis de brechas por reglas activas y ranking de top técnicas con tendencia temporal.',
  },
  {
    q: '¿Cumple requisitos de auditoría?',
    a: 'Cada acción mutativa queda registrada de forma inmutable: usuario, organización, entidad afectada, IP de origen y metadata contextual. Sin logging de PII. RBAC granular para acciones reversibles vs. disruptivas.',
  },
];
