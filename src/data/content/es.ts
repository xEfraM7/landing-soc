import { CALENDLY_URL, WHATSAPP_URL } from '../site.config';
import type { SiteContent } from '../site.types';

const LINKEDIN_MAURIZIO = 'https://www.linkedin.com/in/maurizio-cucina-50899a232/';
const LINKEDIN_EFRAIN = 'https://www.linkedin.com/in/efrain-cabrera-b25489216/';

export const es: SiteContent = {
  brand: {
    name: 'CiberEm',
    icon: 'shield',
    homeHref: '/',
  },

  seo: {
    title: 'Empresa de ciberseguridad y SOC en Venezuela | CiberEm',
    description:
      'Ciberseguridad para empresas en Venezuela: SOC 24/7, detección y respuesta ante amenazas y gestión de incidentes para empresas y MSPs, sin un SOC interno.',
    analytics: {
      ga4Id: '',
      searchConsoleToken: '',
    },
  },

  organization: {
    legalName: 'CiberEm',
    foundingYear: 2025,
    sameAs: [LINKEDIN_MAURIZIO, LINKEDIN_EFRAIN],
    contactUrl: CALENDLY_URL,
  },

  nav: {
    links: [
      { label: 'Solución', href: '/#solucion' },
      { label: 'Perfiles', href: '/#perfiles' },
      { label: 'Planes', href: '/#planes' },
      { label: 'Equipo', href: '/#equipo' },
    ],
    servicesLabel: 'Servicios',
    services: [
      { label: 'Ciberseguridad en Venezuela', href: '/ciberseguridad-venezuela' },
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
    eyebrow: 'Ciberseguridad en Venezuela · SOC 24/7',
    title:
      'Ciberseguridad en Venezuela: detectamos y respondemos antes de que la amenaza afecte tu negocio.',
    lead: 'Monitoreo SOC 24/7, gestión de incidentes, hardening y protección continua para empresas en Venezuela y Latinoamérica, desde una sola plataforma.',
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
    lead: 'CiberEm centraliza la detección, investigación y respuesta ante amenazas en una sola plataforma.',
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
    eyebrow: 'Por qué CiberEm',
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

  plans: {
    eyebrow: 'Planes',
    heading: 'Planes de ciberseguridad para tu empresa',
    lead: 'Monitoreo SOC 24/7, gestión de vulnerabilidades y pruebas de penetración en un servicio mensual. Te enviamos la cotización en USD según el tamaño de tu infraestructura.',
    featuredLabel: 'Más completo',
    items: [
      {
        name: 'Plan Max',
        summary: 'Protección y monitoreo continuo para mantener tu empresa segura.',
        features: [
          'SOC 24/7: monitoreo continuo de seguridad y detección de amenazas.',
          'Gestión de vulnerabilidades: identificación, seguimiento y priorización.',
          '1 pentest anual: evaluación de seguridad mediante pruebas de penetración controladas.',
        ],
        idealFor:
          'Ideal para empresas que buscan protección continua y una evaluación periódica de su postura de seguridad.',
      },
      {
        name: 'Plan Max+',
        summary: 'Más evaluaciones y refuerzo de la infraestructura de seguridad.',
        includesLabel: 'Incluye todo lo del Plan Max, además de:',
        features: [
          '3 pentests al año: una prueba de penetración cada 4 meses.',
          'Hardening: configuración y refuerzo de servidores y sistemas para reducir la superficie de ataque.',
        ],
        idealFor:
          'Ideal para empresas que necesitan evaluaciones más frecuentes y un fortalecimiento continuo de sus sistemas.',
        featured: true,
      },
    ],
    perks: [
      {
        title: 'Descuento por compromiso anual',
        body: 'Si eliges el pago anual, obtienes un descuento sobre el costo total del servicio.',
      },
      {
        title: 'Tu tarifa queda protegida',
        body: 'Mientras sigas con nosotros mantienes la tarifa contratada y recibes las nuevas capacidades que incorporemos sin pagar aumentos.',
      },
    ],
    cta: { label: 'Solicitar cotización', href: '/#contacto' },
  },

  team: {
    eyebrow: 'Quiénes somos',
    heading: 'Conócenos',
    about: {
      heading: 'Acerca de nosotros',
      paragraphs: [
        'Somos dos co-fundadores con perfiles complementarios: ciberseguridad técnica e ingeniería de software. Creamos CiberEm convencidos de que la detección y respuesta ante amenazas debe ser accesible para empresas de todos los tamaños, no solo para grandes corporaciones con equipos SOC internos.',
        'Combinamos experiencia operativa en seguridad ofensiva y defensiva con ingeniería de producto para construir una plataforma que reduce el tiempo de detección, elimina el ruido y permite a los equipos responder con rapidez y contexto.',
      ],
    },
    members: [
      {
        name: 'Maurizio Cucina',
        role: 'Co-Fundador · Ciberseguridad',
        bio: 'Licenciado en Ciberseguridad. Responsable de la estrategia técnica de detección, investigación y respuesta ante amenazas en CiberEm.',
        photo: '/team/maurizio-cucina.jpg',
        linkedin: LINKEDIN_MAURIZIO,
      },
      {
        name: 'Efrain Cabrera',
        role: 'Co-Fundador · Desarrollo',
        bio: 'Ingeniero en Informática con experiencia en ciberseguridad y desarrollo de aplicaciones web. Responsable de arquitectura y producto en CiberEm.',
        photo: '/team/efrain-cabrera.png',
        linkedin: LINKEDIN_EFRAIN,
      },
    ],
  },

  cta: {
    heading: 'Protege tu negocio con detección y respuesta gestionada',
    lead: 'Solicita una demo y descubre cómo CiberEm unifica el monitoreo, la investigación y la respuesta en una sola plataforma.',
    primaryCta: { label: 'Agendar una reunión', href: CALENDLY_URL },
    secondaryCta: { label: 'Escríbenos por WhatsApp', href: WHATSAPP_URL },
  },

  pillars: {
    venezuela: {
      slug: 'ciberseguridad-venezuela',
      seo: {
        title: 'Ciberseguridad en Venezuela: guía para empresas | CiberEm',
        description:
          'Guía de ciberseguridad en Venezuela para empresas: leyes vigentes, ataques recientes, fraudes más comunes y cómo proteger tu organización con un SOC 24/7.',
      },
      eyebrow: 'Guía · Venezuela',
      title: 'Ciberseguridad en Venezuela: guía para empresas',
      lead: 'Qué leyes aplican, qué ataques están afectando a organizaciones venezolanas y qué necesita una empresa para detectarlos y responder a tiempo.',
      serviceType: 'Servicios de ciberseguridad y SOC para empresas en Venezuela',
      updated: { date: '2026-09-26', label: 'Actualizado: 26 de septiembre de 2026' },
      sections: [
        {
          heading: 'Qué es la ciberseguridad empresarial en Venezuela',
          paragraphs: [
            'La ciberseguridad empresarial en Venezuela es el conjunto de controles, procesos y monitoreo que protege los sistemas, los datos y la operación de una organización frente a ataques informáticos. Se enmarca en la Ley Especial contra los Delitos Informáticos de 2001 y, en la banca, en las normas de SUDEBAN.',
            'La presión sobre las empresas venezolanas es alta. Según FortiGuard Labs de Fortinet, Venezuela recibió más de 11.000 millones de intentos de ciberataque en 2023. En América Latina, Kaspersky reportó en septiembre de 2025 un aumento del 85 % en los ataques con mensajes falsos (phishing) bloqueados en los doce meses anteriores.',
          ],
        },
        {
          heading: 'Ataques recientes contra organizaciones venezolanas',
          paragraphs: [
            'Los incidentes públicos de los últimos meses muestran que ningún sector está a salvo, y que el daño se mide en semanas de operación afectada y en datos de clientes expuestos.',
          ],
          bullets: [
            'PDVSA, diciembre de 2025: la empresa denunció un ciberataque contra sus sistemas administrativos. Según Bloomberg Línea, más de un mes después seguía operando procesos diarios de forma manual.',
            'Movistar Venezuela, abril de 2025: se publicaron datos de 3,2 millones de clientes, contenido verificado por VE Sin Filtro.',
            'Cashea, febrero de 2026: la empresa confirmó una filtración de datos de sus usuarios.',
          ],
        },
        {
          heading: 'Fraudes más comunes contra empresas y usuarios',
          paragraphs: [
            'Buena parte de los ataques empieza por engañar a una persona. Efecto Cocuyo identificó las cinco estafas digitales más frecuentes de 2025 en Venezuela. Como referencia de volumen, el Banco de Venezuela informó que neutralizó 19.322 intentos de estafa solo en el primer trimestre de 2025.',
          ],
          bullets: [
            'Phishing y QRishing con portales falsos de bonos, sorteos o bancos.',
            'Suplantación de bancos y marcas en redes sociales.',
            'Ofertas de empleo falsas para robar datos o dinero.',
            'Vishing y robo de cuentas de WhatsApp con falsos funcionarios del CICPC.',
            'Mulas bancarias y pagos "por error" a través de pago móvil.',
          ],
        },
        {
          heading: 'Marco legal de ciberseguridad en Venezuela',
          paragraphs: [
            'Venezuela no tiene todavía una ley general de ciberseguridad sancionada. Las obligaciones y los delitos se reparten entre varias leyes y normas sectoriales.',
          ],
          bullets: [
            'Ley Especial contra los Delitos Informáticos (Gaceta Oficial N° 37.313, 30 de octubre de 2001): castiga el acceso indebido con 1 a 5 años de prisión, el sabotaje de sistemas con 4 a 8 años y el fraude informático con 3 a 7 años.',
            'Ley sobre Mensajes de Datos y Firmas Electrónicas (Gaceta Oficial N° 37.148, 28 de febrero de 2001): da valor jurídico a los mensajes de datos y a la firma electrónica, y crea SUSCERTE.',
            'Ley de Infogobierno (Gaceta Oficial N° 40.274, 17 de octubre de 2013): designa a SUSCERTE como órgano competente en seguridad informática del Estado y crea el Sistema Nacional de Protección y Seguridad Informática.',
            'SUDEBAN, Resolución 641.10 de 2010: exige a los bancos factores de autenticación, límites por canal y campañas educativas en la banca electrónica.',
            'SUDEBAN, circular de enero de 2024: prohíbe a los bancos trasladar al exterior sus centros de cómputo y bases de datos principales, y exige cifrado robusto y pruebas de penetración al menos una vez al año.',
            'Consejo Nacional de Ciberseguridad (Decreto 4.975, agosto de 2024) y Centro Nacional de Defensa y Seguridad Cibernética (Decreto 5.232, enero de 2026).',
            'Ley de Ciberseguridad: figura como proyecto en el Plan Legislativo 2026-2027 aprobado por la Asamblea Nacional el 22 de enero de 2026.',
          ],
        },
        {
          heading: 'Organismos que intervienen',
          paragraphs: [
            'Conocer a quién acudir ahorra tiempo cuando ocurre un incidente.',
          ],
          bullets: [
            'SUSCERTE, la Superintendencia de Servicios de Certificación Electrónica: autoridad de certificación raíz y responsable del Sistema Nacional de Seguridad Informática.',
            'VenCERT: equipo de respuesta ante emergencias informáticas del Estado, adscrito a SUSCERTE, enfocado en sistemas públicos e infraestructuras críticas.',
            'CICPC, División contra Delitos Informáticos: recibe las denuncias por delitos informáticos contra empresas y personas.',
          ],
        },
        {
          heading: 'Qué necesita una empresa venezolana para protegerse',
          paragraphs: [
            'Una empresa no necesita construir un SOC propio para estar protegida, pero sí necesita que alguien vigile sus sistemas de forma continua y sepa actuar cuando algo ocurre.',
          ],
          bullets: [
            'Monitoreo 24/7 de servidores, equipos y cuentas, con alertas priorizadas por severidad.',
            'Detección mapeada a MITRE ATT&CK para saber qué técnicas de ataque están cubiertas.',
            'Un proceso de respuesta definido: aislar equipos, deshabilitar cuentas y contener antes de que el daño crezca.',
            'Registro de auditoría de cada acción, útil para cumplimiento y como evidencia en una denuncia.',
            'Pruebas de penetración periódicas, obligatorias al menos una vez al año en la banca.',
            'Formación del personal contra phishing, vishing y suplantación.',
          ],
        },
        {
          heading: 'Cómo ayuda CiberEm a empresas en Venezuela',
          paragraphs: [
            'CiberEm opera un SOC remoto con monitoreo 24/7 para empresas y MSPs en Venezuela y Latinoamérica, con atención en español. La plataforma integra Wazuh, TheHive y Cortex, DefectDojo y GreyNoise en una sola consola, mapea cada alerta a MITRE ATT&CK y ejecuta respuestas activas desde el caso, con auditoría completa de cada acción.',
          ],
        },
      ],
      faqHeading: 'Preguntas frecuentes sobre ciberseguridad en Venezuela',
      faq: [
        {
          question: '¿Qué ley castiga los delitos informáticos en Venezuela?',
          answer:
            'La Ley Especial contra los Delitos Informáticos, publicada en la Gaceta Oficial N° 37.313 el 30 de octubre de 2001. Tipifica, entre otros, el acceso indebido (1 a 5 años de prisión), el sabotaje de sistemas (4 a 8 años), el fraude informático (3 a 7 años) y la violación de la privacidad de datos personales (2 a 6 años).',
        },
        {
          question: '¿Dónde se denuncia un ciberataque en Venezuela?',
          answer:
            'Ante la División contra Delitos Informáticos del CICPC. Antes de denunciar conviene conservar la evidencia: registros de los sistemas, capturas de pantalla, correos y mensajes originales, sin borrar ni reinstalar los equipos afectados.',
        },
        {
          question: '¿Qué es VenCERT?',
          answer:
            'VenCERT es el equipo de respuesta ante emergencias informáticas del Estado venezolano. Está adscrito a SUSCERTE y se ocupa de prevenir, detectar y gestionar incidentes en los sistemas públicos y en las infraestructuras críticas.',
        },
        {
          question: '¿Existe una ley de ciberseguridad en Venezuela?',
          answer:
            'A septiembre de 2026 no hay una ley general de ciberseguridad sancionada. Un proyecto de Ley de Ciberseguridad figura en el Plan Legislativo 2026-2027. Mientras tanto rigen la Ley Especial contra los Delitos Informáticos, la Ley de Infogobierno y las normas sectoriales, como las de SUDEBAN para la banca.',
        },
        {
          question: '¿Qué exige SUDEBAN a los bancos en seguridad informática?',
          answer:
            'La Resolución 641.10 exige factores de autenticación, límites por canal y campañas educativas en la banca electrónica. Una circular de enero de 2024 prohíbe trasladar al exterior los centros de cómputo y las bases de datos principales, y exige cifrado robusto y pruebas de penetración al menos una vez al año.',
        },
        {
          question: '¿Una pyme venezolana necesita un SOC?',
          answer:
            'Necesita las capacidades de un SOC, no necesariamente uno propio. Con un SOC como servicio, una pyme obtiene monitoreo 24/7, detección y respuesta ante incidentes sin contratar un equipo de analistas ni comprar herramientas por separado.',
        },
      ],
      relatedHeading: 'Nuestros servicios',
      sources: {
        heading: 'Fuentes',
        links: [
          {
            label: 'Ley Especial contra los Delitos Informáticos (CONATEL)',
            url: 'https://conatel.gob.ve/wp-content/uploads/2024/08/PDF-Ley-Especial-contra-los-Delitos-Informaticos.pdf',
          },
          {
            label: 'Ley sobre Mensajes de Datos y Firmas Electrónicas (SUSCERTE)',
            url: 'https://www.suscerte.gob.ve/wp-content/uploads/2022/07/Ley-sobre-Mensajes-de-Datos-y-Firmas-Electronicas.pdf',
          },
          {
            label: 'Ley de Infogobierno (CONATI)',
            url: 'https://www.conati.gob.ve/wp-content/uploads/Ley-de-infogobierno.pdf',
          },
          { label: 'SUDEBAN, normativas', url: 'https://sudeban.gob.ve/index.php/normativas/' },
          {
            label: 'Banca y Negocios: SUDEBAN regula el uso de computación en la nube en la banca',
            url: 'https://www.bancaynegocios.com/sudeban-regula-estrictamente-uso-de-computacion-de-nube-en-la-banca/',
          },
          {
            label: 'Acceso a la Justicia: creado el Consejo Nacional de Ciberseguridad',
            url: 'https://accesoalajusticia.org/creado-el-consejo-nacional-de-ciberseguridad/',
          },
          {
            label: 'Acceso a la Justicia: creado el Centro Nacional de Defensa y Seguridad Cibernética',
            url: 'https://accesoalajusticia.org/creado-el-centro-nacional-de-defensa-y-seguridad-cibernetica/',
          },
          {
            label: 'Asamblea Nacional: Plan Legislativo 2026-2027',
            url: 'https://www.asambleanacional.gob.ve/noticias/parlamento-aprueba-plan-basico-legislativo-2026-2027',
          },
          { label: 'SUSCERTE', url: 'https://www.suscerte.gob.ve/' },
          { label: 'VenCERT', url: 'https://vencert.suscerte.gob.ve/' },
          {
            label: 'CICPC, División contra Delitos Informáticos',
            url: 'https://delitosinformaticos.cicpc.gob.ve/',
          },
          {
            label: 'El Estímulo: Fortinet y los ciberataques en Venezuela',
            url: 'https://elestimulo.com/tecnologia/2024-04-27/fortinet-ciberseguridad-en-caracas/',
          },
          {
            label: 'Kaspersky: los ataques con mensajes falsos aumentan 85 % en América Latina',
            url: 'https://latam.kaspersky.com/about/press-releases/ataques-con-mensajes-falsos-aumentan-85-en-america-latina-mas-de-12-mil-millones-de-casos-detectados-kaspersky',
          },
          {
            label: 'Banca y Negocios: PDVSA denuncia un ataque cibernético',
            url: 'https://www.bancaynegocios.com/pdvsa-denuncia-ataque-cibernetico-dirigido-a-detener-su-operatividad-areas-operativas-no-sufrieron-afectacion',
          },
          {
            label: 'Bloomberg Línea: PDVSA opera procesos por WhatsApp tras el ciberataque',
            url: 'https://www.bloomberglinea.com/latinoamerica/venezuela/la-venezolana-pdvsa-lleva-procesos-diarios-via-whatsapp-tras-ciberataque-de-diciembre/',
          },
          {
            label: 'El Estímulo: filtración de datos de Movistar',
            url: 'https://elestimulo.com/elinteres/de-interes/2025-04-30/movistar-filtracion/',
          },
          {
            label: 'El Diario: Cashea sufrió una filtración de datos',
            url: 'https://eldiario.com/2026/02/22/cashea-sufrio-filtracion-datos/',
          },
          {
            label: 'Efecto Cocuyo: las estafas digitales de 2025',
            url: 'https://efectococuyo.com/cocuyo-chequea/estafas-digitales-2025/',
          },
          {
            label: 'Banco de Venezuela: intentos de estafa neutralizados',
            url: 'https://www.bancodevenezuela.com/index.html@p=28747.html',
          },
        ],
      },
    },

    'soc-service': {
      slug: 'soc-como-servicio',
      seo: {
        title: 'SOC como servicio 24/7 para empresas | CiberEm',
        description:
          'SOC como servicio con monitoreo 24/7, detección con MITRE ATT&CK y respuesta ante incidentes. Sin construir un SOC interno: empieza con una demo de CiberEm.',
      },
      eyebrow: 'SOC como servicio',
      title: 'SOC como servicio: monitoreo, detección y respuesta 24/7',
      lead: 'Un Centro de Operaciones de Seguridad completo, operado desde la plataforma CiberEm, sin contratar un equipo interno ni integrar cinco consolas distintas.',
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
          heading: 'Qué incluye el SOC de CiberEm',
          paragraphs: [
            'CiberEm unifica en una sola consola las piezas que normalmente viven en herramientas separadas: SIEM y EDR con Wazuh, gestión de casos con TheHive y Cortex, vulnerabilidades con DefectDojo y enriquecimiento de indicadores con GreyNoise.',
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
            'El SOC interno requiere contratar analistas, licenciar herramientas y cubrir turnos 24/7. El SOC como servicio entrega la misma capacidad de detección y respuesta como un servicio operado desde la plataforma CiberEm, con costes previsibles y puesta en marcha en días.',
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
        title: 'MDR: detección y respuesta gestionada | CiberEm',
        description:
          'MDR de CiberEm: detección gestionada mapeada a MITRE ATT&CK, respuesta activa en el endpoint y métricas MTTD y MTTR para tu equipo de seguridad.',
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
            'En CiberEm el MDR se apoya en la telemetría de Wazuh, la gestión de casos de TheHive y el enriquecimiento de Cortex y GreyNoise, todo dentro de una consola con trazabilidad completa.',
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
            'No. El EDR es la tecnología que recoge telemetría y detecta en el endpoint. El MDR es el servicio que investiga esas detecciones y ejecuta la respuesta. CiberEm usa Wazuh como capa EDR/SIEM y añade la gestión, la investigación y la respuesta.',
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
        title: 'SOC multi-tenant para MSP y MSSP | CiberEm',
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
            'CiberEm está diseñado desde el origen para MSP y MSSP: cada organización tiene sus propios agentes, alertas, casos y vulnerabilidades, y el administrador cambia de cliente desde un conmutador sin volver a iniciar sesión.',
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
        title: 'Preguntas frecuentes sobre SOC y MDR | CiberEm',
        description:
          'Respuestas a las preguntas frecuentes sobre la plataforma SOC de CiberEm: integraciones, MDR, MITRE ATT&CK, multi-tenancy, auditoría y cómo agendar una demo.',
      },
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes',
      lead: 'Lo que suelen preguntarnos antes de una demo sobre la plataforma, sus integraciones y el modelo de servicio.',
      sections: [
        {
          heading: 'Sobre la plataforma',
          paragraphs: [
            'CiberEm es una plataforma SOC que centraliza detección, investigación y respuesta ante amenazas. Se ofrece como SOC como servicio y como MDR para empresas, y como consola multi-tenant para MSP y MSSP.',
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
          question: '¿CiberEm presta servicio a empresas en Venezuela?',
          answer:
            'Sí. Venezuela es nuestro mercado prioritario. CiberEm tiene su base en Acarigua, estado Portuguesa, y opera un SOC remoto con monitoreo 24/7 para empresas y MSPs de todo el país y de Latinoamérica, con atención en español y sin necesidad de instalar un SOC en tus oficinas.',
        },
        {
          question: '¿Qué planes ofrece CiberEm?',
          answer:
            'Dos planes mensuales. El Plan Max incluye SOC 24/7, gestión de vulnerabilidades y 1 pentest anual. El Plan Max+ añade 3 pentests al año (uno cada 4 meses) y hardening de servidores y sistemas. Con pago anual obtienes un descuento y mantienes tu tarifa mientras sigas con nosotros. La cotización se envía en USD según tu infraestructura.',
        },
        {
          question: '¿Con qué herramientas se integra CiberEm?',
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
            'MTTD es el tiempo medio hasta detectar una amenaza y MTTR el tiempo medio hasta resolverla. CiberEm los calcula automáticamente a partir del ciclo de vida de cada caso, junto con el MTTC (contención).',
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
        title: 'Política de privacidad | CiberEm',
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
            'CiberEm es responsable del tratamiento de los datos recogidos a través de ciberem.com. Para cualquier consulta sobre privacidad puedes contactarnos agendando una reunión desde el botón "Solicitar Demo" o a través de los perfiles de LinkedIn de los fundadores enlazados en la sección Equipo.',
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
    tagline:
      'Ciberseguridad para empresas en Venezuela: detección, investigación y respuesta ante amenazas desde una sola plataforma.',
    cta: { label: 'Solicitar Demo', href: '/#contacto' },
    columns: [
      {
        heading: 'Plataforma',
        links: [
          { label: 'Solución', href: '/#solucion' },
          { label: 'Perfiles', href: '/#perfiles' },
          { label: 'Planes', href: '/#planes' },
          { label: 'Diferenciadores', href: '/#diferenciadores' },
          { label: 'Equipo', href: '/#equipo' },
        ],
      },
      {
        heading: 'Servicios',
        links: [
          { label: 'Ciberseguridad en Venezuela', href: '/ciberseguridad-venezuela' },
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
          { label: 'WhatsApp', href: WHATSAPP_URL },
          { label: 'Política de privacidad', href: '/privacidad' },
        ],
      },
    ],
    copyright: 'CiberEm. Todos los derechos reservados.',
  },
};
