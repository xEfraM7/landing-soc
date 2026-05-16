import type { IconName } from '@assets/icons';

export interface Persona {
  role: string;
  short: string;
  pain: string;
  icon: IconName;
}

export const personas: Persona[] = [
  {
    role: 'MSSP / SOC gestionado',
    short: 'Operadores multi-cliente',
    pain: 'Multi-tenancy real: aísla datos, agentes y casos por cliente desde un solo despliegue.',
    icon: 'workflow',
  },
  {
    role: 'Analista SOC',
    short: 'Tier 1 / Tier 2',
    pain: 'Cola de alertas priorizada, threat hunting y respuesta activa sin saltar entre 4 consolas.',
    icon: 'eye',
  },
  {
    role: 'Líder de seguridad / CISO',
    short: 'Reporting y postura',
    pain: 'Métricas MTTR/MTTD, cobertura MITRE y trazabilidad de auditoría para reportar postura.',
    icon: 'gauge',
  },
  {
    role: 'Equipo de respuesta',
    short: 'Incident Response',
    pain: 'Kanban de casos con TLP/PAP, enriquecimiento IOC y timeline de identidades.',
    icon: 'fingerprint',
  },
];
