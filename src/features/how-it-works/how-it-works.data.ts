import type { IconName } from '@assets/icons';

export interface Step {
  num: string;
  title: string;
  description: string;
  icon: IconName;
  detail: string; // small label shown as monospace caption
}

export const steps: Step[] = [
  {
    num: '01',
    title: 'Conecta tus fuentes',
    description:
      'Integra Wazuh (SIEM/EDR), TheHive/Cortex (casos) y DefectDojo (vulnerabilidades) con tus credenciales. Modo mock para evaluar sin infraestructura.',
    icon: 'plug',
    detail: 'wazuh · thehive · defectdojo',
  },
  {
    num: '02',
    title: 'Detecta en tiempo real',
    description:
      'Las alertas entran vía streaming (SSE), se clasifican por severidad y se mapean automáticamente a tácticas y técnicas MITRE ATT&CK.',
    icon: 'activity',
    detail: 'SSE · mapeo MITRE automático',
  },
  {
    num: '03',
    title: 'Investiga con contexto',
    description:
      'Threat hunting, enriquecimiento de IOCs con GreyNoise, timeline de identidades y panel de detalle con todo el contexto del evento.',
    icon: 'search',
    detail: 'hunting · ITDR · IOC enrichment',
  },
  {
    num: '04',
    title: 'Responde y contén',
    description:
      'Ejecuta respuestas activas (aislar host, deshabilitar cuenta, matar proceso, cuarentena) y gestiona el caso en un tablero Kanban hasta su resolución.',
    icon: 'zap',
    detail: '6 acciones · kanban · SLA',
  },
];
