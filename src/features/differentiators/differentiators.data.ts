import type { IconName } from '@assets/icons';

export interface Differentiator {
  num: string;
  title: string;
  description: string;
  icon: IconName;
}

export const differentiators: Differentiator[] = [
  {
    num: '01',
    title: 'Multi-tenancy real',
    description:
      'Aislamiento por organización con conmutador de cliente para administradores sin re-login. Pensado para MSSPs desde el día uno.',
    icon: 'workflow',
  },
  {
    num: '02',
    title: 'RBAC granular',
    description:
      'Cuatro roles (admin, company owner, analyst, viewer) con matriz de permisos estática y acciones diferenciadas — incluyendo respuestas reversibles vs. disruptivas.',
    icon: 'users',
  },
  {
    num: '03',
    title: 'Auditoría inmutable',
    description:
      'Cada acción mutativa queda registrada con usuario, organización, entidad, IP y metadata — listo para cumplimiento.',
    icon: 'lock',
  },
  {
    num: '04',
    title: 'Tiempo real de verdad',
    description:
      'Server-Sent Events para ingesta de alertas en vivo. No polling lento. Cola asíncrona con reintentos para enriquecimientos.',
    icon: 'activity',
  },
  {
    num: '05',
    title: 'Una sola fuente de verdad',
    description:
      'Reemplaza el cambio constante entre consolas. Todo en un panel — sin perder fidelidad de los datos.',
    icon: 'database',
  },
  {
    num: '06',
    title: 'Métricas que importan',
    description:
      'MTTD, MTTC y MTTR calculados automáticamente. Cobertura MITRE y trazabilidad de auditoría para reportes ejecutivos.',
    icon: 'gauge',
  },
];
