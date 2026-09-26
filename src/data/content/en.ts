import { CALENDLY_URL } from '../site.config';
import type { SiteContent } from '../site.types';

const LINKEDIN_MAURIZIO = 'https://www.linkedin.com/in/maurizio-cucina-50899a232/';
const LINKEDIN_EFRAIN = 'https://www.linkedin.com/in/efrain-cabrera-b25489216/';

export const en: SiteContent = {
  brand: {
    name: 'CyberEM',
    icon: 'shield',
    homeHref: '/',
  },

  seo: {
    title: 'SOC Platform for Threat Detection and Response | CyberEM',
    description:
      'SOC platform with 24/7 monitoring, incident management and threat response for businesses and MSPs. Detect, investigate and respond without an in-house SOC.',
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
      { label: 'Solution', href: '/#solucion' },
      { label: 'Roles', href: '/#perfiles' },
      { label: 'Team', href: '/#equipo' },
    ],
    servicesLabel: 'Services',
    services: [
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
    eyebrow: 'SOC · Detection and Response',
    title: 'SOC platform: we detect and respond before the threat hits your business.',
    lead: '24/7 SOC monitoring, incident management, hardening and continuous protection from a single platform.',
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
    lead: 'CyberEM centralizes threat detection, investigation and response in a single platform.',
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
    eyebrow: 'Why CyberEM',
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

  team: {
    eyebrow: 'Who we are',
    heading: 'Meet the team',
    about: {
      heading: 'About us',
      paragraphs: [
        'We are two co-founders with complementary backgrounds: hands-on cybersecurity and software engineering. We built CyberEM convinced that threat detection and response should be accessible to companies of every size, not only to large corporations with in-house SOC teams.',
        'We combine operational experience in offensive and defensive security with product engineering to build a platform that shortens detection time, removes noise and lets teams respond quickly and with context.',
      ],
    },
    members: [
      {
        name: 'Maurizio Cucina',
        role: 'Co-Founder · Cybersecurity',
        bio: 'Bachelor in Cybersecurity. Leads the technical strategy for threat detection, investigation and response at CyberEM.',
        photo: '/team/maurizio-cucina.jpg',
        linkedin: LINKEDIN_MAURIZIO,
      },
      {
        name: 'Efrain Cabrera',
        role: 'Co-Founder · Engineering',
        bio: 'Computer Engineer with experience in cybersecurity and web application development. Leads architecture and product at CyberEM.',
        photo: '/team/efrain-cabrera.png',
        linkedin: LINKEDIN_EFRAIN,
      },
    ],
  },

  cta: {
    heading: 'Protect your business with managed detection and response',
    lead: 'Request a demo and see how CyberEM unifies monitoring, investigation and response in a single platform.',
    primaryCta: { label: 'Book a meeting', href: CALENDLY_URL },
    secondaryCta: { label: 'See the Platform', href: '/#solucion' },
  },

  pillars: {
    'soc-service': {
      slug: 'soc-as-a-service',
      seo: {
        title: 'SOC as a Service 24/7 for Businesses | CyberEM',
        description:
          'SOC as a Service with 24/7 monitoring, MITRE ATT&CK detection and incident response. No in-house SOC required: start with a CyberEM demo.',
      },
      eyebrow: 'SOC as a Service',
      title: 'SOC as a Service: 24/7 monitoring, detection and response',
      lead: 'A complete Security Operations Center, run from the CyberEM platform, without hiring an in-house team or stitching together five different consoles.',
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
          heading: 'What the CyberEM SOC includes',
          paragraphs: [
            'CyberEM unifies in one console the pieces that usually live in separate tools: SIEM and EDR with Wazuh, case management with TheHive and Cortex, vulnerabilities with DefectDojo and indicator enrichment with GreyNoise.',
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
            'An in-house SOC requires hiring analysts, licensing tools and covering 24/7 shifts. SOC as a Service delivers the same detection and response capability as a service run from the CyberEM platform, with predictable costs and go-live in days.',
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
        title: 'MDR: Managed Detection and Response | CyberEM',
        description:
          'CyberEM MDR: managed detection mapped to MITRE ATT&CK, active response on the endpoint and MTTD and MTTR metrics for your security team.',
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
            'At CyberEM, MDR relies on Wazuh telemetry, TheHive case management and enrichment from Cortex and GreyNoise, all inside one console with full traceability.',
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
            'No. EDR is the technology that collects telemetry and detects on the endpoint. MDR is the service that investigates those detections and executes the response. CyberEM uses Wazuh as the EDR/SIEM layer and adds management, investigation and response.',
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
        title: 'Multi-tenant SOC for MSPs and MSSPs | CyberEM',
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
            'CyberEM is designed from the ground up for MSPs and MSSPs: each organization has its own agents, alerts, cases and vulnerabilities, and the administrator switches clients from a selector without logging in again.',
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
        title: 'SOC and MDR Frequently Asked Questions | CyberEM',
        description:
          'Answers to frequently asked questions about the CyberEM SOC platform: integrations, MDR, MITRE ATT&CK, multi-tenancy, auditing and how to book a demo.',
      },
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      lead: 'What we usually get asked before a demo about the platform, its integrations and the service model.',
      sections: [
        {
          heading: 'About the platform',
          paragraphs: [
            'CyberEM is a SOC platform that centralizes threat detection, investigation and response. It is offered as SOC as a Service and MDR for businesses, and as a multi-tenant console for MSPs and MSSPs.',
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
          question: 'Which tools does CyberEM integrate with?',
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
            'MTTD is the mean time to detect a threat and MTTR the mean time to resolve it. CyberEM computes both automatically from each case lifecycle, together with MTTC (containment).',
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
        title: 'Privacy Policy | CyberEM',
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
            'CyberEM is the controller of the data collected through ciberem.com. For any privacy question you can contact us by booking a meeting from the "Request a Demo" button or through the founders’ LinkedIn profiles linked in the Team section.',
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
    tagline: 'Threat detection, investigation and response from a single platform.',
    cta: { label: 'Request a Demo', href: '/#contacto' },
    columns: [
      {
        heading: 'Platform',
        links: [
          { label: 'Solution', href: '/#solucion' },
          { label: 'Roles', href: '/#perfiles' },
          { label: 'Differentiators', href: '/#diferenciadores' },
          { label: 'Team', href: '/#equipo' },
        ],
      },
      {
        heading: 'Services',
        links: [
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
          { label: 'Privacy Policy', href: '/privacy' },
        ],
      },
    ],
    copyright: 'CyberEM. All rights reserved.',
  },
};
