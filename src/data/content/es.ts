import { CALENDLY_URL } from '../site.config';
import type { SiteContent } from '../site.types';

const LINKEDIN_MAURIZIO = 'https://www.linkedin.com/in/maurizio-cucina-50899a232/';
const LINKEDIN_EFRAIN = 'https://www.linkedin.com/in/efrain-cabrera-b25489216/';

export const es: SiteContent = {
  brand: {
    name: 'CyberEM',
    icon: 'shield',
    homeHref: '/',
  },

  seo: {
    title: 'Plataforma SOC de detección y respuesta | CyberEM',
    description:
      'Plataforma SOC con monitoreo 24/7, gestión de incidentes y respuesta ante amenazas para empresas y MSPs. Detecta, investiga y responde sin un SOC interno.',
    analytics: {
      ga4Id: '',
      searchConsoleToken: '',
    },
  },

  organization: {
    legalName: 'CyberEM',
    foundingYear: 2025,
    sameAs: [LINKEDIN_MAURIZIO, LINKEDIN_EFRAIN],
    contactUrl: CALENDLY_URL,
  },

  nav: {
    links: [
      { label: 'Solución', href: '/#solucion' },
      { label: 'Perfiles', href: '/#perfiles' },
      { label: 'Equipo', href: '/#equipo' },
    ],
    servicesLabel: 'Servicios',
    services: [
      { label: 'SOC como servicio', href: '/soc-como-servicio' },
      { label: 'MDR', href: '/mdr' },
      { label: 'SOC para MSP', href: '/soc-para-msp' },
      { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
    ],
    cta: { label: 'Solicitar Demo', href: '/#contacto' },
    languageSwitcher: { ariaLabel: 'Cambiar idioma' },
  },

  breadcrumb: { homeLabel: 'Inicio' },

  hero: {
    eyebrow: 'SOC · Detección y Respuesta',
    title: 'Plataforma SOC: detectamos y respondemos antes de que la amenaza afecte tu negocio.',
    lead: 'Monitoreo SOC 24/7, gestión de incidentes, hardening y protección continua desde una sola plataforma.',
    description:
      'Ayudamos a empresas y MSPs a identificar, investigar, fortalecer y responder amenazas en tiempo real sin necesidad de construir un SOC interno.',
    primaryCta: { label: 'Solicitar Demo', href: '/#contacto' },
    secondaryCta: { label: 'Ver Plataforma', href: '/#solucion' },
    highlights: [
      'Monitoreo 24/7',
      'Respuesta rápida ante incidentes',
      'Visibilidad completa de tu entorno',
      'Reportes ejecutivos y técnicos',
    ],
  },

  problem: {
    eyebrow: 'El reto',
    heading: 'El Problema',
    paragraphs: [
      'Las amenazas cibernéticas crecen cada día, pero muchas organizaciones siguen sin contar con la visibilidad y capacidad de respuesta necesarias para detectarlas a tiempo.',
      'Los equipos de seguridad se enfrentan a miles de eventos y alertas provenientes de múltiples herramientas. Entre tanto ruido, las amenazas reales pueden pasar desapercibidas, aumentando el riesgo de brechas de seguridad, interrupciones operativas y pérdidas económicas.',
    ],
  },

  solution: {
    eyebrow: 'Nuestra propuesta',
    heading: 'Nuestra Solución',
    lead: 'CyberEM centraliza la detección, investigación y respuesta ante amenazas en una sola plataforma.',
    paragraphs: [
      'Ayudamos a organizaciones y proveedores de servicios gestionados (MSP) a reducir el ruido, priorizar los incidentes que realmente importan y responder más rápido ante posibles ataques.',
      'Con monitoreo continuo, visibilidad centralizada y automatización de procesos, los equipos de seguridad pueden enfocarse en proteger el negocio en lugar de gestionar herramientas aisladas.',
    ],
    pillars: [
      {
        title: 'Reduce el ruido',
        body: 'Correlación y enriquecimiento automático para que solo escales lo que de verdad importa.',
        icon: 'activity',
        href: '/soc-como-servicio',
        linkLabel: 'Conoce el SOC como servicio',
      },
      {
        title: 'Prioriza lo crítico',
        body: 'Clasifica incidentes por riesgo real y enfoca al equipo en las amenazas de mayor impacto.',
        icon: 'target',
        href: '/mdr',
        linkLabel: 'Descubre el MDR',
      },
      {
        title: 'Responde más rápido',
        body: 'Monitoreo continuo y automatización para acortar el tiempo de detección y respuesta.',
        icon: 'zap',
        href: '/soc-para-msp',
        linkLabel: 'SOC multi-tenant para MSP',
      },
    ],
  },

  personas: {
    eyebrow: 'Para tu equipo',
    heading: 'Pensado para los cuatro perfiles',
    lead: 'Una sola plataforma que se adapta a cómo trabaja cada rol del equipo de seguridad.',
    items: [
      {
        tag: 'MSP / SOC Gestionado',
        title: 'Gestiona múltiples clientes desde una sola plataforma',
        body: 'Aísla datos, alertas y activos por organización mientras mantienes una operación centralizada y eficiente.',
        icon: 'workflow',
      },
      {
        tag: 'Analista SOC',
        title: 'Investiga y responde amenazas más rápido',
        body: 'Correlación de eventos, enriquecimiento automático y workflows diseñados para reducir el tiempo de respuesta.',
        icon: 'search',
      },
      {
        tag: 'CISO / Líder de Seguridad',
        title: 'Obtén visibilidad real del riesgo',
        body: 'Métricas de seguridad, tendencias, cumplimiento y reportes ejecutivos para apoyar la toma de decisiones.',
        icon: 'gauge',
      },
      {
        tag: 'Equipo de Respuesta a Incidentes',
        title: 'Toda la evidencia en un solo lugar',
        body: 'IOC, timeline, casos, observables y documentación centralizada para investigaciones más eficientes.',
        icon: 'shield',
      },
    ],
  },

  differentiators: {
    eyebrow: 'Por qué CyberEM',
    heading: 'Diferenciadores',
    lead: 'Lo que hace distinta a nuestra plataforma frente a un stack de herramientas aisladas.',
    items: [
      {
        number: '01',
        title: 'Un SOC para todos tus clientes',
        body: 'Gestiona múltiples organizaciones desde una sola consola sin perder aislamiento ni control.',
      },
      {
        number: '02',
        title: 'Control de acceso inteligente',
        body: 'Cada usuario ve únicamente la información que necesita según su función y organización.',
      },
      {
        number: '03',
        title: 'Trazabilidad completa',
        body: 'Toda acción queda registrada para auditorías, cumplimiento y análisis forense.',
      },
      {
        number: '04',
        title: 'Detección y respuesta en tiempo real',
        body: 'Recibe alertas al instante y acelera la investigación con automatización integrada.',
      },
      {
        number: '05',
        title: 'Menos herramientas, más productividad',
        body: 'Centraliza monitoreo, investigaciones, casos y reportes en una única plataforma.',
      },
      {
        number: '06',
        title: 'Métricas que importan',
        body: 'Mide MTTD, MTTR, cobertura de amenazas y desempeño operativo con paneles ejecutivos.',
      },
    ],
  },

  team: {
    eyebrow: 'Quiénes somos',
    heading: 'Conócenos',
    about: {
      heading: 'Acerca de nosotros',
      paragraphs: [
        'Somos dos co-fundadores con perfiles complementarios: ciberseguridad técnica e ingeniería de software. Creamos CyberEM convencidos de que la detección y respuesta ante amenazas debe ser accesible para empresas de todos los tamaños, no solo para grandes corporaciones con equipos SOC internos.',
        'Combinamos experiencia operativa en seguridad ofensiva y defensiva con ingeniería de producto para construir una plataforma que reduce el tiempo de detección, elimina el ruido y permite a los equipos responder con rapidez y contexto.',
      ],
    },
    members: [
      {
        name: 'Maurizio Cucina',
        role: 'Co-Fundador · Ciberseguridad',
        bio: 'Licenciado en Ciberseguridad. Responsable de la estrategia técnica de detección, investigación y respuesta ante amenazas en CyberEM.',
        photo: '/team/maurizio-cucina.jpg',
        linkedin: LINKEDIN_MAURIZIO,
      },
      {
        name: 'Efrain Cabrera',
        role: 'Co-Fundador · Desarrollo',
        bio: 'Ingeniero en Informática con experiencia en ciberseguridad y desarrollo de aplicaciones web. Responsable de arquitectura y producto en CyberEM.',
        photo: '/team/efrain-cabrera.png',
        linkedin: LINKEDIN_EFRAIN,
      },
    ],
  },

  cta: {
    heading: 'Protege tu negocio con detección y respuesta gestionada',
    lead: 'Solicita una demo y descubre cómo CyberEM unifica el monitoreo, la investigación y la respuesta en una sola plataforma.',
    primaryCta: { label: 'Agendar una reunión', href: CALENDLY_URL },
    secondaryCta: { label: 'Ver Plataforma', href: '/#solucion' },
  },

  pillars: {
    'soc-service': {
      slug: 'soc-como-servicio',
      seo: {
        title: 'SOC como servicio 24/7 para empresas | CyberEM',
        description:
          'SOC como servicio con monitoreo 24/7, detección con MITRE ATT&CK y respuesta ante incidentes. Sin construir un SOC interno: empieza con una demo de CyberEM.',
      },
      eyebrow: 'SOC como servicio',
      title: 'SOC como servicio: monitoreo, detección y respuesta 24/7',
      lead: 'Un Centro de Operaciones de Seguridad completo, operado desde la plataforma CyberEM, sin contratar un equipo interno ni integrar cinco consolas distintas.',
      serviceType: 'SOC como servicio',
      sections: [
        {
          heading: 'Qué es un SOC como servicio',
          paragraphs: [
            'Un SOC como servicio (SOC as a Service o SOCaaS) es un Centro de Operaciones de Seguridad externo que monitorea tu infraestructura, detecta amenazas y coordina la respuesta ante incidentes. La empresa cliente obtiene la capacidad de un SOC sin asumir el coste de personal, herramientas y turnos 24/7.',
            'A diferencia de un SOC interno, que exige contratar analistas, licenciar un SIEM y mantener guardias, el modelo como servicio se paga por uso y entra en operación en días. La detección, la investigación y la respuesta siguen siendo visibles para tu equipo desde la misma plataforma.',
          ],
        },
        {
          heading: 'Qué incluye el SOC de CyberEM',
          paragraphs: [
            'CyberEM unifica en una sola consola las piezas que normalmente viven en herramientas separadas: SIEM y EDR con Wazuh, gestión de casos con TheHive y Cortex, vulnerabilidades con DefectDojo y enriquecimiento de indicadores con GreyNoise.',
          ],
          bullets: [
            'Monitoreo continuo con alertas en tiempo real vía streaming, clasificadas por severidad.',
            'Mapeo automático de cada alerta a tácticas y técnicas MITRE ATT&CK, con heatmap de cobertura.',
            'Gestión de casos en tablero Kanban con SLA automático: desde 15 minutos para alertas críticas.',
            'Respuesta activa: aislar host, deshabilitar cuenta, matar proceso, cuarentena de archivo, bloqueo firewall y reinicio de agente.',
            'Reportes ejecutivos y técnicos con MTTD, MTTR, cobertura de amenazas y estado de vulnerabilidades.',
          ],
        },
        {
          heading: 'Para quién es',
          paragraphs: [
            'Para empresas de 50 a 1.000 empleados que necesitan detección y respuesta profesional pero no justifican un SOC propio, y para equipos de TI que ya tienen herramientas de seguridad pero no la capacidad de vigilarlas a todas horas.',
            'También para líderes de seguridad que deben reportar postura de riesgo a la dirección: la plataforma calcula las métricas y genera los reportes sin hojas de cálculo manuales.',
          ],
        },
        {
          heading: 'Cómo empezamos',
          paragraphs: [
            'La puesta en marcha sigue cuatro pasos y no requiere cambiar tu infraestructura actual.',
          ],
          bullets: [
            'Conectamos tus fuentes: Wazuh, TheHive/Cortex y DefectDojo con tus credenciales. Existe un modo de evaluación con datos de ejemplo.',
            'Detectamos en tiempo real: las alertas entran, se clasifican por severidad y se mapean a MITRE ATT&CK.',
            'Investigamos con contexto: threat hunting sobre la telemetría, enriquecimiento de IOC y timeline de identidades.',
            'Respondemos y contenemos: acciones de respuesta activa y seguimiento del caso hasta su resolución.',
          ],
        },
      ],
      faqHeading: 'Preguntas frecuentes sobre el SOC como servicio',
      faq: [
        {
          question: '¿Qué diferencia un SOC como servicio de un SOC interno?',
          answer:
            'El SOC interno requiere contratar analistas, licenciar herramientas y cubrir turnos 24/7. El SOC como servicio entrega la misma capacidad de detección y respuesta como un servicio operado desde la plataforma CyberEM, con costes previsibles y puesta en marcha en días.',
        },
        {
          question: '¿Qué herramientas integra?',
          answer:
            'Wazuh (SIEM/EDR), TheHive y Cortex (gestión de casos y análisis de observables), DefectDojo (vulnerabilidades) y GreyNoise (reputación de IPs). Todas se consultan desde una única consola.',
        },
        {
          question: '¿Cuánto tarda la puesta en marcha?',
          answer:
            'La conexión de fuentes se hace con tus credenciales existentes y las alertas empiezan a fluir en cuanto se completa. En la demo definimos el alcance y el calendario concreto para tu entorno.',
        },
        {
          question: '¿Puedo evaluarlo sin mi infraestructura?',
          answer:
            'Sí. La plataforma incluye un modo de evaluación con datos de ejemplo para cada integración, de modo que puedes recorrer alertas, casos y respuestas antes de conectar tus sistemas.',
        },
        {
          question: '¿Qué reportes recibo?',
          answer:
            'Reportes ejecutivos con MTTD, MTTR, cobertura MITRE ATT&CK y tendencia de alertas, y reportes técnicos con detalle de casos, observables y vulnerabilidades por severidad.',
        },
      ],
      relatedHeading: 'También te puede interesar',
    },

    mdr: {
      slug: 'mdr',
      seo: {
        title: 'MDR: detección y respuesta gestionada | CyberEM',
        description:
          'MDR de CyberEM: detección gestionada mapeada a MITRE ATT&CK, respuesta activa en el endpoint y métricas MTTD y MTTR para tu equipo de seguridad.',
      },
      eyebrow: 'MDR',
      title: 'MDR: detección y respuesta gestionada ante amenazas',
      lead: 'Detección continua, investigación con contexto y acciones de contención ejecutadas desde la misma plataforma, con métricas que puedes mostrar a la dirección.',
      serviceType: 'Detección y respuesta gestionada (MDR)',
      sections: [
        {
          heading: 'Qué es MDR',
          paragraphs: [
            'MDR (Managed Detection and Response) es un servicio de seguridad que combina tecnología de detección con analistas que investigan las alertas y ejecutan la respuesta. Mientras un EDR o un SIEM generan señales, el MDR se hace cargo de convertirlas en incidentes gestionados hasta su contención.',
            'En CyberEM el MDR se apoya en la telemetría de Wazuh, la gestión de casos de TheHive y el enriquecimiento de Cortex y GreyNoise, todo dentro de una consola con trazabilidad completa.',
          ],
        },
        {
          heading: 'Detección con MITRE ATT&CK',
          paragraphs: [
            'Cada alerta se mapea automáticamente a tácticas y técnicas del framework MITRE ATT&CK. El heatmap de cobertura muestra qué técnicas están vigiladas por reglas activas y cuáles no, y el ranking de técnicas más frecuentes orienta dónde reforzar la detección.',
            'El threat hunting sobre la telemetría permite validar hipótesis con consultas guardadas y compartidas, y la timeline de identidades rastrea cuentas humanas y de servicio a través de eventos de autenticación, integridad de archivos y rootcheck.',
          ],
        },
        {
          heading: 'Respuesta activa',
          paragraphs: [
            'La respuesta se ejecuta desde el propio caso, con control de permisos por rol. Las acciones se dividen en reversibles y disruptivas para que cada equipo decida quién puede ejecutar cada una.',
          ],
          bullets: [
            'Reversibles: reiniciar agente y deshabilitar cuenta.',
            'Disruptivas: bloqueo en firewall, aislamiento de host, matar proceso y cuarentena de archivo.',
            'Cada acción queda registrada con usuario, organización, entidad, IP y metadatos.',
          ],
        },
        {
          heading: 'Métricas MTTD, MTTC y MTTR',
          paragraphs: [
            'El tiempo medio de detección (MTTD), de contención (MTTC) y de resolución (MTTR) se calculan automáticamente a partir del ciclo de vida de cada caso. Los SLA por severidad, desde 15 minutos para alertas críticas hasta 24 horas para las de baja prioridad, alertan cuando un caso está a punto de incumplirse.',
          ],
        },
      ],
      faqHeading: 'Preguntas frecuentes sobre MDR',
      faq: [
        {
          question: '¿MDR es lo mismo que EDR?',
          answer:
            'No. El EDR es la tecnología que recoge telemetría y detecta en el endpoint. El MDR es el servicio que investiga esas detecciones y ejecuta la respuesta. CyberEM usa Wazuh como capa EDR/SIEM y añade la gestión, la investigación y la respuesta.',
        },
        {
          question: '¿Qué acciones de respuesta se ejecutan?',
          answer:
            'Seis acciones: reiniciar agente, deshabilitar cuenta, bloqueo en firewall, aislamiento de host, matar proceso y cuarentena de archivo. Se lanzan desde el caso y quedan auditadas.',
        },
        {
          question: '¿Quién autoriza una acción disruptiva?',
          answer:
            'Depende del rol. La plataforma distingue cuatro roles (administrador, propietario de organización, analista y visor) y las acciones disruptivas se restringen a los roles que tu organización defina.',
        },
        {
          question: '¿Cómo se mide el tiempo de respuesta?',
          answer:
            'Cada caso registra cuándo se detectó, cuándo se contuvo y cuándo se resolvió. Con esos tiempos se calculan MTTD, MTTC y MTTR y se comparan con el SLA de su severidad.',
        },
        {
          question: '¿Cubre servidores y endpoints?',
          answer:
            'Sí. La telemetría proviene de agentes Wazuh desplegados en servidores y estaciones de trabajo, y el panel de salud de agentes muestra su conectividad y sincronización.',
        },
      ],
      relatedHeading: 'También te puede interesar',
    },

    msp: {
      slug: 'soc-para-msp',
      seo: {
        title: 'SOC multi-tenant para MSP y MSSP | CyberEM',
        description:
          'SOC multi-tenant para MSP y MSSP: aísla datos por cliente, RBAC de 4 roles, auditoría completa y reportes por organización desde una sola consola.',
      },
      eyebrow: 'Para MSP y MSSP',
      title: 'SOC multi-tenant para MSP: todos tus clientes, una consola',
      lead: 'Ofrece detección y respuesta gestionada a cada cliente con aislamiento real de datos, permisos por rol y reportes individuales, sin duplicar despliegues.',
      serviceType: 'SOC gestionado multi-tenant para MSP',
      sections: [
        {
          heading: 'Por qué un MSP necesita un SOC multi-tenant',
          paragraphs: [
            'Un proveedor de servicios gestionados atiende a decenas de clientes con infraestructuras distintas. Operar una consola de seguridad por cliente multiplica el coste y el tiempo de respuesta; mezclar los datos en una sola rompe la confidencialidad. La multi-tenancy resuelve ambos problemas: un solo despliegue, datos separados por organización.',
            'CyberEM está diseñado desde el origen para MSP y MSSP: cada organización tiene sus propios agentes, alertas, casos y vulnerabilidades, y el administrador cambia de cliente desde un conmutador sin volver a iniciar sesión.',
          ],
        },
        {
          heading: 'Aislamiento por organización',
          paragraphs: [
            'El filtrado por tenant se aplica en cada consulta a la base de datos, no solo en la interfaz. Un analista de una organización no puede ver alertas, observables ni casos de otra, y las acciones de respuesta solo alcanzan a los activos del cliente correspondiente.',
          ],
        },
        {
          heading: 'RBAC de 4 roles y auditoría',
          paragraphs: [
            'El control de acceso basado en roles define qué puede hacer cada usuario dentro de su organización.',
          ],
          bullets: [
            'Administrador: gestiona todas las organizaciones y la configuración global.',
            'Propietario de organización: administra su propio tenant, usuarios y políticas.',
            'Analista: investiga, gestiona casos y ejecuta las respuestas que su rol permita.',
            'Visor: acceso de solo lectura a paneles y reportes.',
            'Toda acción mutativa se registra con usuario, organización, entidad, IP y metadatos para auditorías.',
          ],
        },
        {
          heading: 'Reportes por cliente',
          paragraphs: [
            'Cada organización obtiene sus propios KPIs: alertas abiertas y críticas, MTTR, casos, agentes activos y vulnerabilidades por CVSS y EPSS. Los reportes ejecutivos se generan por cliente y sirven como entregable mensual del servicio.',
          ],
        },
      ],
      faqHeading: 'Preguntas frecuentes para MSP',
      faq: [
        {
          question: '¿Cómo se aíslan los datos de cada cliente?',
          answer:
            'Cada consulta a la base de datos se filtra por organización. Alertas, casos, observables, agentes y vulnerabilidades pertenecen a un tenant y no son visibles desde otro.',
        },
        {
          question: '¿Puedo dar acceso a mis clientes?',
          answer:
            'Sí. Puedes crear usuarios con rol de propietario de organización, analista o visor dentro del tenant del cliente, de modo que vean solo su propia información.',
        },
        {
          question: '¿Qué roles existen?',
          answer:
            'Cuatro: administrador, propietario de organización, analista y visor. La matriz de permisos distingue además entre acciones de respuesta reversibles y disruptivas.',
        },
        {
          question: '¿Se registra cada acción?',
          answer:
            'Sí. Toda acción que modifica datos queda en un registro de auditoría con usuario, organización, entidad afectada, IP y metadatos, útil para cumplimiento y análisis forense.',
        },
        {
          question: '¿Cómo escala con más clientes?',
          answer:
            'Añadir un cliente es crear una organización y conectar sus fuentes. El despliegue es el mismo; el conmutador de organización permite al equipo del MSP operar todos los tenants desde una consola.',
        },
      ],
      relatedHeading: 'También te puede interesar',
    },

    faq: {
      slug: 'preguntas-frecuentes',
      seo: {
        title: 'Preguntas frecuentes sobre SOC y MDR | CyberEM',
        description:
          'Respuestas a las preguntas frecuentes sobre la plataforma SOC de CyberEM: integraciones, MDR, MITRE ATT&CK, multi-tenancy, auditoría y cómo agendar una demo.',
      },
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes',
      lead: 'Lo que suelen preguntarnos antes de una demo sobre la plataforma, sus integraciones y el modelo de servicio.',
      sections: [
        {
          heading: 'Sobre la plataforma',
          paragraphs: [
            'CyberEM es una plataforma SOC que centraliza detección, investigación y respuesta ante amenazas. Se ofrece como SOC como servicio y como MDR para empresas, y como consola multi-tenant para MSP y MSSP.',
          ],
        },
        {
          heading: 'Integraciones',
          paragraphs: [
            'La plataforma se apoya en herramientas de código abierto consolidadas en la industria y las unifica en una sola consola: Wazuh, TheHive y Cortex, DefectDojo y GreyNoise.',
          ],
        },
        {
          heading: 'Seguridad y cumplimiento',
          paragraphs: [
            'El acceso se controla por roles, el filtrado por organización se aplica en cada consulta y toda acción queda auditada. La plataforma no registra información personal en los logs de aplicación.',
          ],
        },
      ],
      faqHeading: 'Todas las preguntas',
      faq: [
        {
          question: '¿Con qué herramientas se integra CyberEM?',
          answer:
            'Wazuh (SIEM/EDR), TheHive y Cortex (gestión de casos y analizadores), DefectDojo (vulnerabilidades) y GreyNoise (enriquecimiento de IOC).',
        },
        {
          question: '¿Sirve para MSSP o para varios clientes?',
          answer:
            'Sí. La multi-tenancy aísla datos, agentes, alertas y casos por organización, y el administrador cambia de cliente desde un conmutador sin volver a iniciar sesión.',
        },
        {
          question: '¿Puedo evaluarlo sin mi infraestructura?',
          answer:
            'Sí. Existe un modo de evaluación con datos de ejemplo para cada integración que permite recorrer toda la plataforma antes de conectar sistemas reales.',
        },
        {
          question: '¿Soporta MITRE ATT&CK?',
          answer:
            'Sí. Cada alerta se mapea automáticamente a tácticas y técnicas, con heatmap de cobertura, análisis de brechas y ranking de técnicas más frecuentes.',
        },
        {
          question: '¿Cumple requisitos de auditoría?',
          answer:
            'Toda acción que modifica datos queda registrada con usuario, organización, entidad, IP y metadatos. El registro sirve para auditorías, cumplimiento y análisis forense.',
        },
        {
          question: '¿Qué son MTTD y MTTR?',
          answer:
            'MTTD es el tiempo medio hasta detectar una amenaza y MTTR el tiempo medio hasta resolverla. CyberEM los calcula automáticamente a partir del ciclo de vida de cada caso, junto con el MTTC (contención).',
        },
        {
          question: '¿Cómo agendo una demo?',
          answer:
            'Desde el botón "Solicitar Demo" eliges un hueco de 30 minutos en nuestro calendario. En la sesión recorremos la plataforma con tus casos de uso y definimos los siguientes pasos.',
        },
        {
          question: '¿En qué idiomas está disponible?',
          answer:
            'El sitio y la atención comercial están disponibles en español e inglés. La plataforma se opera en inglés, el idioma habitual de las herramientas de seguridad que integra.',
        },
      ],
      relatedHeading: 'Conoce nuestros servicios',
    },
  },

  legal: {
    privacy: {
      slug: 'privacidad',
      seo: {
        title: 'Política de privacidad | CyberEM',
        description:
          'Política de privacidad de ciberem.com: qué datos recogemos, qué servicios de terceros usamos (Calendly, Vercel, Google Analytics) y cómo ejercer tus derechos.',
      },
      title: 'Política de privacidad',
      updatedAt: '2026-09-26',
      updatedLabel: 'Última actualización: 26 de septiembre de 2026',
      sections: [
        {
          heading: 'Responsable',
          paragraphs: [
            'CyberEM es responsable del tratamiento de los datos recogidos a través de ciberem.com. Para cualquier consulta sobre privacidad puedes contactarnos agendando una reunión desde el botón "Solicitar Demo" o a través de los perfiles de LinkedIn de los fundadores enlazados en la sección Equipo.',
          ],
        },
        {
          heading: 'Datos que recogemos',
          paragraphs: [
            'Este sitio es estático y no contiene formularios: no recogemos nombre, email ni ningún dato que introduzcas directamente en él.',
            'Si la analítica está activa, Google Analytics 4 recoge datos de uso agregados (páginas vistas, país aproximado, tipo de dispositivo y el clic en el botón de demo). GA4 no almacena direcciones IP y no usamos esos datos para identificarte.',
          ],
        },
        {
          heading: 'Servicios de terceros',
          paragraphs: [
            'Al agendar una demo eres redirigido a Calendly, que trata tus datos según su propia política de privacidad. El sitio se aloja en Vercel, que registra datos técnicos de acceso para servir las páginas. La analítica, cuando está activa, la presta Google Analytics.',
          ],
        },
        {
          heading: 'Tus derechos',
          paragraphs: [
            'Puedes solicitar acceso, rectificación o supresión de cualquier dato personal que tratemos, así como oponerte a la analítica desactivando cookies en tu navegador. Para ejercer estos derechos contáctanos por los medios indicados en la sección Responsable.',
          ],
        },
        {
          heading: 'Cambios en esta política',
          paragraphs: [
            'Publicaremos cualquier cambio en esta misma página e indicaremos la fecha de la última actualización en la cabecera.',
          ],
        },
      ],
    },
  },

  footer: {
    tagline: 'Detección, investigación y respuesta ante amenazas desde una sola plataforma.',
    cta: { label: 'Solicitar Demo', href: '/#contacto' },
    columns: [
      {
        heading: 'Plataforma',
        links: [
          { label: 'Solución', href: '/#solucion' },
          { label: 'Perfiles', href: '/#perfiles' },
          { label: 'Diferenciadores', href: '/#diferenciadores' },
          { label: 'Equipo', href: '/#equipo' },
        ],
      },
      {
        heading: 'Servicios',
        links: [
          { label: 'SOC como servicio', href: '/soc-como-servicio' },
          { label: 'MDR', href: '/mdr' },
          { label: 'SOC para MSP', href: '/soc-para-msp' },
          { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
        ],
      },
      {
        heading: 'Empresa',
        links: [
          { label: 'Solicitar Demo', href: '/#contacto' },
          { label: 'Política de privacidad', href: '/privacidad' },
        ],
      },
    ],
    copyright: 'CyberEM. Todos los derechos reservados.',
  },
};
