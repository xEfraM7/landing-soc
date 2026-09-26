import { CALENDLY_URL, WHATSAPP_URL } from '../site.config';
import type { SiteContent } from '../site.types';

const LINKEDIN_MAURIZIO = 'https://www.linkedin.com/in/maurizio-cucina-50899a232/';
const LINKEDIN_EFRAIN = 'https://www.linkedin.com/in/efrain-cabrera-b25489216/';

export const en: SiteContent = {
  brand: {
    name: 'CiberEm',
    icon: 'shield',
    homeHref: '/',
  },

  seo: {
    title: 'SOC Platform for Threat Detection and Response | CiberEm',
    description:
      'SOC platform with 24/7 monitoring, incident management and threat response for businesses and MSPs. Detect, investigate and respond without an in-house SOC.',
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
      { label: 'Solution', href: '/#solucion' },
      { label: 'Roles', href: '/#perfiles' },
      { label: 'Plans', href: '/#planes' },
      { label: 'Team', href: '/#equipo' },
    ],
    servicesLabel: 'Services',
    services: [
      { label: 'Cybersecurity in Venezuela', href: '/cybersecurity-venezuela' },
      { label: 'SOC as a Service', href: '/soc-as-a-service' },
      { label: 'MDR', href: '/mdr' },
      { label: 'SOC for MSPs', href: '/soc-for-msps' },
      { label: 'FAQ', href: '/faq' },
    ],
    cta: { label: 'Request a Demo', href: '/#contacto' },
    languageSwitcher: { ariaLabel: 'Change language' },
  },

  breadcrumb: { homeLabel: 'Home' },

  hero: {
    eyebrow: 'SOC · Venezuela & Latin America',
    title: 'SOC platform: we detect and respond before the threat hits your business.',
    lead: '24/7 SOC monitoring, incident management, hardening and continuous protection for companies in Venezuela and Latin America, from a single platform.',
    description:
      'We help businesses and MSPs identify, investigate, harden and respond to threats in real time without building an in-house SOC.',
    primaryCta: { label: 'Request a Demo', href: '/#contacto' },
    secondaryCta: { label: 'See the Platform', href: '/#solucion' },
    highlights: [
      '24/7 monitoring',
      'Fast incident response',
      'Full visibility of your environment',
      'Executive and technical reports',
    ],
  },

  problem: {
    eyebrow: 'The challenge',
    heading: 'The Problem',
    paragraphs: [
      'Cyber threats grow every day, yet many organizations still lack the visibility and response capacity needed to detect them in time.',
      'Security teams face thousands of events and alerts coming from multiple tools. Amid that noise, real threats slip through unnoticed, raising the risk of breaches, operational downtime and financial loss.',
    ],
  },

  solution: {
    eyebrow: 'Our approach',
    heading: 'Our Solution',
    lead: 'CiberEm centralizes threat detection, investigation and response in a single platform.',
    paragraphs: [
      'We help organizations and managed service providers (MSPs) cut through the noise, prioritize the incidents that matter and respond faster to potential attacks.',
      'With continuous monitoring, centralized visibility and process automation, security teams can focus on protecting the business instead of juggling isolated tools.',
    ],
    pillars: [
      {
        title: 'Cut the noise',
        body: 'Automatic correlation and enrichment so you only escalate what truly matters.',
        icon: 'activity',
        href: '/soc-as-a-service',
        linkLabel: 'Learn about SOC as a Service',
      },
      {
        title: 'Prioritize what is critical',
        body: 'Rank incidents by real risk and focus the team on the highest-impact threats.',
        icon: 'target',
        href: '/mdr',
        linkLabel: 'Discover MDR',
      },
      {
        title: 'Respond faster',
        body: 'Continuous monitoring and automation to shorten detection and response times.',
        icon: 'zap',
        href: '/soc-for-msps',
        linkLabel: 'Multi-tenant SOC for MSPs',
      },
    ],
  },

  personas: {
    eyebrow: 'For your team',
    heading: 'Built for the four roles',
    lead: 'One platform that adapts to how each role on the security team works.',
    items: [
      {
        tag: 'MSP / Managed SOC',
        title: 'Manage multiple clients from a single platform',
        body: 'Isolate data, alerts and assets per organization while keeping a centralized, efficient operation.',
        icon: 'workflow',
      },
      {
        tag: 'SOC Analyst',
        title: 'Investigate and respond to threats faster',
        body: 'Event correlation, automatic enrichment and workflows designed to reduce response time.',
        icon: 'search',
      },
      {
        tag: 'CISO / Security Lead',
        title: 'Get real visibility into risk',
        body: 'Security metrics, trends, compliance and executive reports to support decision-making.',
        icon: 'gauge',
      },
      {
        tag: 'Incident Response Team',
        title: 'All the evidence in one place',
        body: 'IOCs, timeline, cases, observables and centralized documentation for more efficient investigations.',
        icon: 'shield',
      },
    ],
  },

  differentiators: {
    eyebrow: 'Why CiberEm',
    heading: 'Differentiators',
    lead: 'What sets our platform apart from a stack of isolated tools.',
    items: [
      {
        number: '01',
        title: 'One SOC for all your clients',
        body: 'Manage multiple organizations from a single console without losing isolation or control.',
      },
      {
        number: '02',
        title: 'Smart access control',
        body: 'Each user sees only the information they need based on their role and organization.',
      },
      {
        number: '03',
        title: 'Full traceability',
        body: 'Every action is recorded for audits, compliance and forensic analysis.',
      },
      {
        number: '04',
        title: 'Real-time detection and response',
        body: 'Receive alerts instantly and speed up investigation with built-in automation.',
      },
      {
        number: '05',
        title: 'Fewer tools, more productivity',
        body: 'Centralize monitoring, investigations, cases and reporting in a single platform.',
      },
      {
        number: '06',
        title: 'Metrics that matter',
        body: 'Measure MTTD, MTTR, threat coverage and operational performance with executive dashboards.',
      },
    ],
  },

  plans: {
    eyebrow: 'Plans',
    heading: 'Cybersecurity plans for your business',
    lead: '24/7 SOC monitoring, vulnerability management and penetration testing as a monthly service. We send you a quote in USD based on the size of your infrastructure.',
    featuredLabel: 'Most complete',
    items: [
      {
        name: 'Max Plan',
        summary: 'Continuous protection and monitoring to keep your business secure.',
        features: [
          '24/7 SOC: continuous security monitoring and threat detection.',
          'Vulnerability management: identification, tracking and prioritization.',
          '1 pentest per year: security assessment through controlled penetration testing.',
        ],
        idealFor:
          'Ideal for companies that want continuous protection and a periodic assessment of their security posture.',
      },
      {
        name: 'Max+ Plan',
        summary: 'More frequent assessments and a hardened security infrastructure.',
        includesLabel: 'Everything in the Max Plan, plus:',
        features: [
          '3 pentests per year: one penetration test every 4 months.',
          'Hardening: configuration and hardening of servers and systems to reduce the attack surface.',
        ],
        idealFor:
          'Ideal for companies that need more frequent assessments and ongoing hardening of their systems.',
        featured: true,
      },
    ],
    perks: [
      {
        title: 'Annual commitment discount',
        body: 'Choose annual billing and get a discount on the total cost of the service.',
      },
      {
        title: 'Your rate is locked in',
        body: 'As long as you stay with us you keep your contracted rate and get every new capability we add, with no price increase.',
      },
    ],
    cta: { label: 'Request a quote', href: '/#contacto' },
  },

  team: {
    eyebrow: 'Who we are',
    heading: 'Meet the team',
    about: {
      heading: 'About us',
      paragraphs: [
        'We are two co-founders with complementary backgrounds: hands-on cybersecurity and software engineering. We built CiberEm convinced that threat detection and response should be accessible to companies of every size, not only to large corporations with in-house SOC teams.',
        'We combine operational experience in offensive and defensive security with product engineering to build a platform that shortens detection time, removes noise and lets teams respond quickly and with context.',
      ],
    },
    members: [
      {
        name: 'Maurizio Cucina',
        role: 'Co-Founder · Cybersecurity',
        bio: 'Bachelor in Cybersecurity. Leads the technical strategy for threat detection, investigation and response at CiberEm.',
        photo: '/team/maurizio-cucina.jpg',
        linkedin: LINKEDIN_MAURIZIO,
      },
      {
        name: 'Efrain Cabrera',
        role: 'Co-Founder · Engineering',
        bio: 'Computer Engineer with experience in cybersecurity and web application development. Leads architecture and product at CiberEm.',
        photo: '/team/efrain-cabrera.png',
        linkedin: LINKEDIN_EFRAIN,
      },
    ],
  },

  cta: {
    heading: 'Protect your business with managed detection and response',
    lead: 'Request a demo and see how CiberEm unifies monitoring, investigation and response in a single platform.',
    primaryCta: { label: 'Book a meeting', href: CALENDLY_URL },
    secondaryCta: { label: 'Message us on WhatsApp', href: WHATSAPP_URL },
  },

  pillars: {
    venezuela: {
      slug: 'cybersecurity-venezuela',
      seo: {
        title: 'Cybersecurity in Venezuela: A Guide for Companies | CiberEm',
        description:
          'Cybersecurity in Venezuela for companies: current laws, recent attacks, the most common fraud schemes and how to protect your organization with a 24/7 SOC.',
      },
      eyebrow: 'Guide · Venezuela',
      title: 'Cybersecurity in Venezuela: a guide for companies',
      lead: 'Which laws apply, which attacks are hitting Venezuelan organizations and what a company needs to detect them and respond in time.',
      serviceType: 'Cybersecurity and SOC services for companies in Venezuela',
      updated: { date: '2026-09-26', label: 'Updated: September 26, 2026' },
      sections: [
        {
          heading: 'What corporate cybersecurity means in Venezuela',
          paragraphs: [
            'Corporate cybersecurity in Venezuela is the set of controls, processes and monitoring that protects an organization’s systems, data and operations against cyberattacks. It sits within the 2001 Special Law against Computer Crimes and, for banks, within the rules issued by SUDEBAN, the banking regulator.',
            'Pressure on Venezuelan companies is high. According to Fortinet’s FortiGuard Labs, Venezuela received more than 11 billion attempted cyberattacks in 2023. Across Latin America, Kaspersky reported in September 2025 an 85% increase in blocked phishing attacks over the previous twelve months.',
          ],
        },
        {
          heading: 'Recent attacks on Venezuelan organizations',
          paragraphs: [
            'Public incidents over recent months show that no sector is safe, and that the damage is measured in weeks of disrupted operations and exposed customer data.',
          ],
          bullets: [
            'PDVSA, December 2025: the state oil company reported a cyberattack on its administrative systems. According to Bloomberg Línea, more than a month later it was still running daily processes manually.',
            'Movistar Venezuela, April 2025: data on 3.2 million customers was published, as verified by VE Sin Filtro.',
            'Cashea, February 2026: the company confirmed a leak of user data.',
          ],
        },
        {
          heading: 'The most common fraud against companies and users',
          paragraphs: [
            'Many attacks start by deceiving a person. Venezuelan outlet Efecto Cocuyo identified the five most frequent digital scams of 2025. As a volume reference, Banco de Venezuela reported blocking 19,322 fraud attempts in the first quarter of 2025 alone.',
          ],
          bullets: [
            'Phishing and QR-code phishing with fake bonus, raffle or bank portals.',
            'Impersonation of banks and brands on social media.',
            'Fake job offers used to steal data or money.',
            'Vishing and WhatsApp account takeover by callers posing as CICPC officers.',
            'Money mules and "mistaken" payments through Pago Móvil, the local instant-payment system.',
          ],
        },
        {
          heading: 'Cybersecurity legal framework in Venezuela',
          paragraphs: [
            'Venezuela has not yet enacted a general cybersecurity law. Obligations and offenses are spread across several laws and sector rules.',
          ],
          bullets: [
            'Special Law against Computer Crimes (Official Gazette No. 37,313, October 30, 2001): punishes unauthorized access with 1 to 5 years in prison, system sabotage with 4 to 8 years and computer fraud with 3 to 7 years.',
            'Law on Data Messages and Electronic Signatures (Official Gazette No. 37,148, February 28, 2001): gives legal value to data messages and electronic signatures, and creates SUSCERTE.',
            'Infogovernment Law (Official Gazette No. 40,274, October 17, 2013): names SUSCERTE the authority for state information security and creates the National Information Protection and Security System.',
            'SUDEBAN Resolution 641.10 of 2010: requires banks to use authentication factors, per-channel limits and education campaigns in electronic banking.',
            'SUDEBAN circular of January 2024: bars banks from moving their main data centers and databases abroad, and requires strong encryption and penetration tests at least once a year.',
            'National Cybersecurity Council (Decree 4,975, August 2024) and National Cyber Defense and Security Center (Decree 5,232, January 2026).',
            'Cybersecurity Law: listed as a bill in the 2026-2027 Legislative Plan approved by the National Assembly on January 22, 2026.',
          ],
        },
        {
          heading: 'Agencies involved',
          paragraphs: ['Knowing who to call saves time when an incident happens.'],
          bullets: [
            'SUSCERTE, the Superintendency of Electronic Certification Services: root certification authority and head of the National Information Security System.',
            'VenCERT: the state computer emergency response team, part of SUSCERTE, focused on public systems and critical infrastructure.',
            'CICPC Computer Crimes Division: receives complaints about computer crimes against companies and individuals.',
          ],
        },
        {
          heading: 'What a Venezuelan company needs to stay protected',
          paragraphs: [
            'A company does not need to build its own SOC to be protected, but it does need someone watching its systems continuously who knows how to act when something happens.',
          ],
          bullets: [
            '24/7 monitoring of servers, endpoints and accounts, with alerts prioritized by severity.',
            'Detection mapped to MITRE ATT&CK to know which attack techniques are covered.',
            'A defined response process: isolate hosts, disable accounts and contain before damage spreads.',
            'An audit log of every action, useful for compliance and as evidence in a criminal complaint.',
            'Regular penetration tests, required at least once a year in banking.',
            'Staff training against phishing, vishing and impersonation.',
          ],
        },
        {
          heading: 'How CiberEm helps companies in Venezuela',
          paragraphs: [
            'CiberEm runs a remote SOC with 24/7 monitoring for companies and MSPs in Venezuela and Latin America, with support in Spanish and English. The platform brings Wazuh, TheHive and Cortex, DefectDojo and GreyNoise into one console, maps every alert to MITRE ATT&CK and executes active responses from the case, with a full audit trail of every action.',
          ],
        },
      ],
      faqHeading: 'Cybersecurity in Venezuela FAQ',
      faq: [
        {
          question: 'Which law punishes computer crimes in Venezuela?',
          answer:
            'The Special Law against Computer Crimes, published in Official Gazette No. 37,313 on October 30, 2001. It covers, among others, unauthorized access (1 to 5 years in prison), system sabotage (4 to 8 years), computer fraud (3 to 7 years) and violation of personal data privacy (2 to 6 years).',
        },
        {
          question: 'Where do you report a cyberattack in Venezuela?',
          answer:
            'To the CICPC Computer Crimes Division. Before filing, preserve the evidence: system logs, screenshots, original emails and messages, without wiping or reinstalling the affected machines.',
        },
        {
          question: 'What is VenCERT?',
          answer:
            'VenCERT is the Venezuelan state computer emergency response team. It is part of SUSCERTE and works to prevent, detect and manage incidents in public systems and critical infrastructure.',
        },
        {
          question: 'Is there a cybersecurity law in Venezuela?',
          answer:
            'As of September 2026 no general cybersecurity law has been enacted. A Cybersecurity Law bill is listed in the 2026-2027 Legislative Plan. Meanwhile, the Special Law against Computer Crimes, the Infogovernment Law and sector rules such as SUDEBAN’s for banking apply.',
        },
        {
          question: 'What does SUDEBAN require from banks on information security?',
          answer:
            'Resolution 641.10 requires authentication factors, per-channel limits and education campaigns in electronic banking. A January 2024 circular bars moving main data centers and databases abroad, and requires strong encryption and penetration tests at least once a year.',
        },
        {
          question: 'Does a Venezuelan SMB need a SOC?',
          answer:
            'It needs SOC capabilities, not necessarily its own SOC. With SOC as a Service, an SMB gets 24/7 monitoring, detection and incident response without hiring a team of analysts or buying tools separately.',
        },
      ],
      relatedHeading: 'Our services',
      sources: {
        heading: 'Sources',
        links: [
          {
            label: 'Special Law against Computer Crimes (CONATEL, Spanish)',
            url: 'https://conatel.gob.ve/wp-content/uploads/2024/08/PDF-Ley-Especial-contra-los-Delitos-Informaticos.pdf',
          },
          {
            label: 'Law on Data Messages and Electronic Signatures (SUSCERTE, Spanish)',
            url: 'https://www.suscerte.gob.ve/wp-content/uploads/2022/07/Ley-sobre-Mensajes-de-Datos-y-Firmas-Electronicas.pdf',
          },
          {
            label: 'Infogovernment Law (CONATI, Spanish)',
            url: 'https://www.conati.gob.ve/wp-content/uploads/Ley-de-infogobierno.pdf',
          },
          { label: 'SUDEBAN regulations (Spanish)', url: 'https://sudeban.gob.ve/index.php/normativas/' },
          {
            label: 'Banca y Negocios: SUDEBAN regulates cloud computing in banking (Spanish)',
            url: 'https://www.bancaynegocios.com/sudeban-regula-estrictamente-uso-de-computacion-de-nube-en-la-banca/',
          },
          {
            label: 'Acceso a la Justicia: National Cybersecurity Council created (Spanish)',
            url: 'https://accesoalajusticia.org/creado-el-consejo-nacional-de-ciberseguridad/',
          },
          {
            label: 'Acceso a la Justicia: National Cyber Defense and Security Center created (Spanish)',
            url: 'https://accesoalajusticia.org/creado-el-centro-nacional-de-defensa-y-seguridad-cibernetica/',
          },
          {
            label: 'National Assembly: 2026-2027 Legislative Plan (Spanish)',
            url: 'https://www.asambleanacional.gob.ve/noticias/parlamento-aprueba-plan-basico-legislativo-2026-2027',
          },
          { label: 'SUSCERTE', url: 'https://www.suscerte.gob.ve/' },
          { label: 'VenCERT', url: 'https://vencert.suscerte.gob.ve/' },
          {
            label: 'CICPC Computer Crimes Division',
            url: 'https://delitosinformaticos.cicpc.gob.ve/',
          },
          {
            label: 'El Estímulo: Fortinet on cyberattacks in Venezuela (Spanish)',
            url: 'https://elestimulo.com/tecnologia/2024-04-27/fortinet-ciberseguridad-en-caracas/',
          },
          {
            label: 'Kaspersky: phishing attacks up 85% in Latin America (Spanish)',
            url: 'https://latam.kaspersky.com/about/press-releases/ataques-con-mensajes-falsos-aumentan-85-en-america-latina-mas-de-12-mil-millones-de-casos-detectados-kaspersky',
          },
          {
            label: 'Banca y Negocios: PDVSA reports a cyberattack (Spanish)',
            url: 'https://www.bancaynegocios.com/pdvsa-denuncia-ataque-cibernetico-dirigido-a-detener-su-operatividad-areas-operativas-no-sufrieron-afectacion',
          },
          {
            label: 'Bloomberg Línea: PDVSA runs processes over WhatsApp after the attack (Spanish)',
            url: 'https://www.bloomberglinea.com/latinoamerica/venezuela/la-venezolana-pdvsa-lleva-procesos-diarios-via-whatsapp-tras-ciberataque-de-diciembre/',
          },
          {
            label: 'El Estímulo: Movistar data leak (Spanish)',
            url: 'https://elestimulo.com/elinteres/de-interes/2025-04-30/movistar-filtracion/',
          },
          {
            label: 'El Diario: Cashea data leak (Spanish)',
            url: 'https://eldiario.com/2026/02/22/cashea-sufrio-filtracion-datos/',
          },
          {
            label: 'Efecto Cocuyo: digital scams of 2025 (Spanish)',
            url: 'https://efectococuyo.com/cocuyo-chequea/estafas-digitales-2025/',
          },
          {
            label: 'Banco de Venezuela: fraud attempts blocked (Spanish)',
            url: 'https://www.bancodevenezuela.com/index.html@p=28747.html',
          },
        ],
      },
    },

    'soc-service': {
      slug: 'soc-as-a-service',
      seo: {
        title: 'SOC as a Service 24/7 for Businesses | CiberEm',
        description:
          'SOC as a Service with 24/7 monitoring, MITRE ATT&CK detection and incident response. No in-house SOC required: start with a CiberEm demo.',
      },
      eyebrow: 'SOC as a Service',
      title: 'SOC as a Service: 24/7 monitoring, detection and response',
      lead: 'A complete Security Operations Center, run from the CiberEm platform, without hiring an in-house team or stitching together five different consoles.',
      serviceType: 'SOC as a Service',
      sections: [
        {
          heading: 'What is SOC as a Service',
          paragraphs: [
            'SOC as a Service (SOCaaS) is an external Security Operations Center that monitors your infrastructure, detects threats and coordinates incident response. The client company gets SOC capability without carrying the cost of staff, tooling and 24/7 shifts.',
            'Unlike an in-house SOC, which requires hiring analysts, licensing a SIEM and staffing on-call rotations, the service model is paid per use and goes live in days. Detection, investigation and response remain visible to your team from the same platform.',
          ],
        },
        {
          heading: 'What the CiberEm SOC includes',
          paragraphs: [
            'CiberEm unifies in one console the pieces that usually live in separate tools: SIEM and EDR with Wazuh, case management with TheHive and Cortex, vulnerabilities with DefectDojo and indicator enrichment with GreyNoise.',
          ],
          bullets: [
            'Continuous monitoring with real-time streamed alerts, classified by severity.',
            'Automatic mapping of every alert to MITRE ATT&CK tactics and techniques, with a coverage heatmap.',
            'Kanban case management with automatic SLAs: from 15 minutes for critical alerts.',
            'Active response: isolate host, disable account, kill process, quarantine file, firewall block and agent restart.',
            'Executive and technical reports with MTTD, MTTR, threat coverage and vulnerability status.',
          ],
        },
        {
          heading: 'Who it is for',
          paragraphs: [
            'For companies of 50 to 1,000 employees that need professional detection and response but cannot justify their own SOC, and for IT teams that already own security tools but lack the capacity to watch them around the clock.',
            'Also for security leaders who must report risk posture to management: the platform computes the metrics and generates the reports without manual spreadsheets.',
          ],
        },
        {
          heading: 'How we get started',
          paragraphs: [
            'Onboarding follows four steps and does not require changing your current infrastructure.',
          ],
          bullets: [
            'We connect your sources: Wazuh, TheHive/Cortex and DefectDojo with your credentials. An evaluation mode with sample data is available.',
            'We detect in real time: alerts come in, are classified by severity and mapped to MITRE ATT&CK.',
            'We investigate with context: threat hunting over telemetry, IOC enrichment and identity timeline.',
            'We respond and contain: active response actions and case tracking through to resolution.',
          ],
        },
      ],
      faqHeading: 'SOC as a Service FAQ',
      faq: [
        {
          question: 'How does SOC as a Service differ from an in-house SOC?',
          answer:
            'An in-house SOC requires hiring analysts, licensing tools and covering 24/7 shifts. SOC as a Service delivers the same detection and response capability as a service run from the CiberEm platform, with predictable costs and go-live in days.',
        },
        {
          question: 'Which tools does it integrate?',
          answer:
            'Wazuh (SIEM/EDR), TheHive and Cortex (case management and observable analysis), DefectDojo (vulnerabilities) and GreyNoise (IP reputation). All are queried from a single console.',
        },
        {
          question: 'How long does onboarding take?',
          answer:
            'Sources are connected with your existing credentials and alerts start flowing as soon as the connection completes. During the demo we define the scope and a concrete timeline for your environment.',
        },
        {
          question: 'Can I evaluate it without my infrastructure?',
          answer:
            'Yes. The platform includes an evaluation mode with sample data for every integration, so you can walk through alerts, cases and responses before connecting your systems.',
        },
        {
          question: 'What reports do I receive?',
          answer:
            'Executive reports with MTTD, MTTR, MITRE ATT&CK coverage and alert trends, plus technical reports detailing cases, observables and vulnerabilities by severity.',
        },
      ],
      relatedHeading: 'You may also be interested in',
    },

    mdr: {
      slug: 'mdr',
      seo: {
        title: 'MDR: Managed Detection and Response | CiberEm',
        description:
          'CiberEm MDR: managed detection mapped to MITRE ATT&CK, active response on the endpoint and MTTD and MTTR metrics for your security team.',
      },
      eyebrow: 'MDR',
      title: 'MDR: managed detection and response to threats',
      lead: 'Continuous detection, contextual investigation and containment actions executed from the same platform, with metrics you can show to management.',
      serviceType: 'Managed Detection and Response (MDR)',
      sections: [
        {
          heading: 'What is MDR',
          paragraphs: [
            'MDR (Managed Detection and Response) is a security service that combines detection technology with analysts who investigate alerts and execute the response. While an EDR or SIEM produces signals, MDR turns them into managed incidents through to containment.',
            'At CiberEm, MDR relies on Wazuh telemetry, TheHive case management and enrichment from Cortex and GreyNoise, all inside one console with full traceability.',
          ],
        },
        {
          heading: 'Detection with MITRE ATT&CK',
          paragraphs: [
            'Every alert is automatically mapped to MITRE ATT&CK tactics and techniques. The coverage heatmap shows which techniques are watched by active rules and which are not, and the ranking of most frequent techniques points to where detection should be reinforced.',
            'Threat hunting over telemetry validates hypotheses with saved, shared queries, and the identity timeline tracks human and service accounts across authentication, file integrity and rootcheck events.',
          ],
        },
        {
          heading: 'Active response',
          paragraphs: [
            'Response runs from the case itself, with role-based permission control. Actions are split into reversible and disruptive so each team decides who may execute which.',
          ],
          bullets: [
            'Reversible: restart agent and disable account.',
            'Disruptive: firewall block, host isolation, kill process and file quarantine.',
            'Every action is logged with user, organization, entity, IP and metadata.',
          ],
        },
        {
          heading: 'MTTD, MTTC and MTTR metrics',
          paragraphs: [
            'Mean time to detect (MTTD), to contain (MTTC) and to resolve (MTTR) are computed automatically from each case lifecycle. Severity-based SLAs, from 15 minutes for critical alerts to 24 hours for low priority, warn when a case is about to breach.',
          ],
        },
      ],
      faqHeading: 'MDR FAQ',
      faq: [
        {
          question: 'Is MDR the same as EDR?',
          answer:
            'No. EDR is the technology that collects telemetry and detects on the endpoint. MDR is the service that investigates those detections and executes the response. CiberEm uses Wazuh as the EDR/SIEM layer and adds management, investigation and response.',
        },
        {
          question: 'Which response actions are executed?',
          answer:
            'Six actions: restart agent, disable account, firewall block, host isolation, kill process and file quarantine. They are launched from the case and fully audited.',
        },
        {
          question: 'Who authorizes a disruptive action?',
          answer:
            'It depends on the role. The platform distinguishes four roles (admin, organization owner, analyst and viewer) and disruptive actions are restricted to the roles your organization defines.',
        },
        {
          question: 'How is response time measured?',
          answer:
            'Each case records when it was detected, contained and resolved. Those timestamps yield MTTD, MTTC and MTTR, compared against the SLA for its severity.',
        },
        {
          question: 'Does it cover servers and endpoints?',
          answer:
            'Yes. Telemetry comes from Wazuh agents deployed on servers and workstations, and the agent health panel shows their connectivity and sync status.',
        },
      ],
      relatedHeading: 'You may also be interested in',
    },

    msp: {
      slug: 'soc-for-msps',
      seo: {
        title: 'Multi-tenant SOC for MSPs and MSSPs | CiberEm',
        description:
          'Multi-tenant SOC for MSPs and MSSPs: isolate data per client, 4-role RBAC, full audit trail and per-organization reports from a single console.',
      },
      eyebrow: 'For MSPs and MSSPs',
      title: 'Multi-tenant SOC for MSPs: all your clients, one console',
      lead: 'Deliver managed detection and response to every client with true data isolation, role-based permissions and individual reports, without duplicating deployments.',
      serviceType: 'Multi-tenant managed SOC for MSPs',
      sections: [
        {
          heading: 'Why an MSP needs a multi-tenant SOC',
          paragraphs: [
            'A managed service provider serves dozens of clients with different infrastructures. Running one security console per client multiplies cost and response time; mixing their data in one console breaks confidentiality. Multi-tenancy solves both: a single deployment, data separated per organization.',
            'CiberEm is designed from the ground up for MSPs and MSSPs: each organization has its own agents, alerts, cases and vulnerabilities, and the administrator switches clients from a selector without logging in again.',
          ],
        },
        {
          heading: 'Isolation per organization',
          paragraphs: [
            'Tenant filtering is enforced on every database query, not only in the interface. An analyst in one organization cannot see alerts, observables or cases from another, and response actions only reach the assets of the corresponding client.',
          ],
        },
        {
          heading: '4-role RBAC and auditing',
          paragraphs: [
            'Role-based access control defines what each user can do inside their organization.',
          ],
          bullets: [
            'Admin: manages all organizations and global configuration.',
            'Organization owner: manages their own tenant, users and policies.',
            'Analyst: investigates, manages cases and executes the responses their role allows.',
            'Viewer: read-only access to dashboards and reports.',
            'Every mutating action is logged with user, organization, entity, IP and metadata for audits.',
          ],
        },
        {
          heading: 'Per-client reports',
          paragraphs: [
            'Each organization gets its own KPIs: open and critical alerts, MTTR, cases, active agents and vulnerabilities by CVSS and EPSS. Executive reports are generated per client and serve as the monthly deliverable of the service.',
          ],
        },
      ],
      faqHeading: 'FAQ for MSPs',
      faq: [
        {
          question: 'How is each client’s data isolated?',
          answer:
            'Every database query is filtered by organization. Alerts, cases, observables, agents and vulnerabilities belong to one tenant and are not visible from another.',
        },
        {
          question: 'Can I give my clients access?',
          answer:
            'Yes. You can create users with the organization owner, analyst or viewer role inside the client’s tenant, so they see only their own information.',
        },
        {
          question: 'Which roles exist?',
          answer:
            'Four: admin, organization owner, analyst and viewer. The permission matrix also distinguishes between reversible and disruptive response actions.',
        },
        {
          question: 'Is every action logged?',
          answer:
            'Yes. Every data-changing action lands in an audit log with user, organization, affected entity, IP and metadata, useful for compliance and forensic analysis.',
        },
        {
          question: 'How does it scale with more clients?',
          answer:
            'Adding a client means creating an organization and connecting its sources. The deployment stays the same; the organization selector lets the MSP team operate all tenants from one console.',
        },
      ],
      relatedHeading: 'You may also be interested in',
    },

    faq: {
      slug: 'faq',
      seo: {
        title: 'SOC and MDR Frequently Asked Questions | CiberEm',
        description:
          'Answers to frequently asked questions about the CiberEm SOC platform: integrations, MDR, MITRE ATT&CK, multi-tenancy, auditing and how to book a demo.',
      },
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      lead: 'What we usually get asked before a demo about the platform, its integrations and the service model.',
      sections: [
        {
          heading: 'About the platform',
          paragraphs: [
            'CiberEm is a SOC platform that centralizes threat detection, investigation and response. It is offered as SOC as a Service and MDR for businesses, and as a multi-tenant console for MSPs and MSSPs.',
          ],
        },
        {
          heading: 'Integrations',
          paragraphs: [
            'The platform builds on open-source tools established in the industry and unifies them in one console: Wazuh, TheHive and Cortex, DefectDojo and GreyNoise.',
          ],
        },
        {
          heading: 'Security and compliance',
          paragraphs: [
            'Access is role-based, organization filtering is enforced on every query and every action is audited. The platform does not log personal information in application logs.',
          ],
        },
      ],
      faqHeading: 'All questions',
      faq: [
        {
          question: 'Does CiberEm serve companies in Venezuela?',
          answer:
            'Yes. Venezuela is our priority market. CiberEm is based in Acarigua, Portuguesa state, and runs a remote SOC with 24/7 monitoring for companies and MSPs across the country and Latin America, with support in Spanish and English and no need to build a SOC on your premises.',
        },
        {
          question: 'What plans does CiberEm offer?',
          answer:
            'Two monthly plans. The Max Plan includes a 24/7 SOC, vulnerability management and 1 pentest per year. The Max+ Plan adds 3 pentests per year (one every 4 months) and hardening of servers and systems. Annual billing gets you a discount and locks in your rate for as long as you stay with us. Quotes are sent in USD based on your infrastructure.',
        },
        {
          question: 'Which tools does CiberEm integrate with?',
          answer:
            'Wazuh (SIEM/EDR), TheHive and Cortex (case management and analyzers), DefectDojo (vulnerabilities) and GreyNoise (IOC enrichment).',
        },
        {
          question: 'Does it work for MSSPs or multiple clients?',
          answer:
            'Yes. Multi-tenancy isolates data, agents, alerts and cases per organization, and the administrator switches clients from a selector without logging in again.',
        },
        {
          question: 'Can I evaluate it without my infrastructure?',
          answer:
            'Yes. An evaluation mode with sample data for every integration lets you walk through the whole platform before connecting real systems.',
        },
        {
          question: 'Does it support MITRE ATT&CK?',
          answer:
            'Yes. Every alert is automatically mapped to tactics and techniques, with a coverage heatmap, gap analysis and a ranking of the most frequent techniques.',
        },
        {
          question: 'Does it meet audit requirements?',
          answer:
            'Every data-changing action is recorded with user, organization, entity, IP and metadata. The log serves audits, compliance and forensic analysis.',
        },
        {
          question: 'What are MTTD and MTTR?',
          answer:
            'MTTD is the mean time to detect a threat and MTTR the mean time to resolve it. CiberEm computes both automatically from each case lifecycle, together with MTTC (containment).',
        },
        {
          question: 'How do I book a demo?',
          answer:
            'From the "Request a Demo" button you pick a 30-minute slot in our calendar. In the session we walk through the platform with your use cases and define next steps.',
        },
        {
          question: 'Which languages are available?',
          answer:
            'The website and sales support are available in Spanish and English. The platform is operated in English, the usual language of the security tools it integrates.',
        },
      ],
      relatedHeading: 'Explore our services',
    },
  },

  legal: {
    privacy: {
      slug: 'privacy',
      seo: {
        title: 'Privacy Policy | CiberEm',
        description:
          'Privacy policy for ciberem.com: what data we collect, which third-party services we use (Calendly, Vercel, Google Analytics) and how to exercise your rights.',
      },
      title: 'Privacy Policy',
      updatedAt: '2026-09-26',
      updatedLabel: 'Last updated: September 26, 2026',
      sections: [
        {
          heading: 'Controller',
          paragraphs: [
            'CiberEm is the controller of the data collected through ciberem.com. For any privacy question you can contact us by booking a meeting from the "Request a Demo" button or through the founders’ LinkedIn profiles linked in the Team section.',
          ],
        },
        {
          heading: 'Data we collect',
          paragraphs: [
            'This site is static and has no forms: we do not collect your name, email or any data you enter directly on it.',
            'If analytics is enabled, Google Analytics 4 collects aggregated usage data (page views, approximate country, device type and clicks on the demo button). GA4 does not store IP addresses and we do not use that data to identify you.',
          ],
        },
        {
          heading: 'Third-party services',
          paragraphs: [
            'When booking a demo you are redirected to Calendly, which processes your data under its own privacy policy. The site is hosted on Vercel, which records technical access data to serve the pages. Analytics, when enabled, is provided by Google Analytics.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'You can request access to, rectification or erasure of any personal data we process, and object to analytics by disabling cookies in your browser. To exercise these rights, contact us through the channels listed in the Controller section.',
          ],
        },
        {
          heading: 'Changes to this policy',
          paragraphs: [
            'We will publish any change on this same page and show the date of the last update in the header.',
          ],
        },
      ],
    },
  },

  footer: {
    tagline:
      'Cybersecurity for companies in Venezuela: threat detection, investigation and response from a single platform.',
    cta: { label: 'Request a Demo', href: '/#contacto' },
    columns: [
      {
        heading: 'Platform',
        links: [
          { label: 'Solution', href: '/#solucion' },
          { label: 'Roles', href: '/#perfiles' },
          { label: 'Plans', href: '/#planes' },
          { label: 'Differentiators', href: '/#diferenciadores' },
          { label: 'Team', href: '/#equipo' },
        ],
      },
      {
        heading: 'Services',
        links: [
          { label: 'Cybersecurity in Venezuela', href: '/cybersecurity-venezuela' },
          { label: 'SOC as a Service', href: '/soc-as-a-service' },
          { label: 'MDR', href: '/mdr' },
          { label: 'SOC for MSPs', href: '/soc-for-msps' },
          { label: 'FAQ', href: '/faq' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'Request a Demo', href: '/#contacto' },
          { label: 'WhatsApp', href: WHATSAPP_URL },
          { label: 'Privacy Policy', href: '/privacy' },
        ],
      },
    ],
    copyright: 'CiberEm. All rights reserved.',
  },
};
