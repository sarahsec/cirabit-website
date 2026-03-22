export const LANG_STORAGE_KEY = 'cirabit-language';
export const THEME_STORAGE_KEY = 'cirabit-theme';
export const HOME_ROUTE = '/';
export const PRIVACY_ROUTE = '/privacy';

export const labels = {
  en: {
    pageLanguage: 'en-US',
    siteTitle: 'Cirabit',
    projectBadge: 'Android Project',
    heroMeta: '// decentralized android messaging',
    heroTitle: 'Mesh-native Android messaging, with no central servers.',
    heroDescription:
      'Cirabit brings a decentralized, peer-to-peer messaging model to Android, built to stay useful in local range even when internet is unstable or unavailable.',
    primaryButton: 'Open Cirabit on GitHub',
    secondaryButton: 'View roadmap',
    logoAlt: 'Cirabit app logo',
    languageSwitcherAria: 'Language switcher',
    themeSwitcherAria: 'Theme switcher',
    languageEnglishAria: 'English (US)',
    languagePortugueseAria: 'Portuguese (Brazil)',
    themeLightAria: 'Light theme',
    themeDarkAria: 'Dark theme',
    themeLight: 'LIGHT',
    themeDark: 'DARK',
    facts: [
      {
        value: 'No central servers',
        label: 'Messages move device-to-device through local mesh paths'
      },
      {
        value: 'Truly local-first',
        label: 'Nearby communication does not depend on cloud accounts'
      },
      {
        value: 'Real-world resilience',
        label: 'Designed for unstable networks, crowded events, and offline moments'
      }
    ],
    highlightsTitle: 'Why this messaging model matters',
    highlightsDescription:
      'Cirabit follows a privacy-conscious, mesh-first direction focused on autonomy, continuity, and practical reliability.',
    highlights: [
      {
        title: 'Mesh-First Communication',
        description:
          'Peer-to-peer exchange is the baseline, reducing dependency on centralized infrastructure.'
      },
      {
        title: 'Offline-Ready Experience',
        description:
          'Local conversations remain usable even when internet access is weak, unstable, or unavailable.'
      },
      {
        title: 'Privacy by Default',
        description:
          'The architecture minimizes unnecessary exposure of metadata to central services.'
      },
      {
        title: 'Practical Reliability',
        description: 'The focus stays on a lightweight, predictable app that holds up in daily use.'
      }
    ],
    roadmapTitle: 'Roadmap in motion',
    roadmapDescription:
      'The roadmap keeps strengthening the decentralized core while preserving simplicity and usability.',
    roadmap: [
      {
        tag: 'NOW',
        title: 'Mesh reliability tuning',
        description: 'Improve peer discovery and message relay consistency in dense environments.'
      },
      {
        tag: 'NEXT',
        title: 'Better continuity between sessions',
        description: 'Refine reconnection and state handling so conversations recover with less friction.'
      },
      {
        tag: 'NEXT',
        title: 'Bilingual polish',
        description: 'Keep EN-US and PT-BR first-class while preparing the base for future community locales.'
      },
      {
        tag: 'SOON',
        title: 'Safer defaults and controls',
        description: 'Add UX refinements that make private, local-first messaging easier for everyone.'
      }
    ],
    maintainersTitle: 'Main maintainers',
    maintainersDescription:
      'Cirabit is actively maintained by people focused on decentralized communication, collaboration, and practical improvements.',
    maintainerProfiles: {
      sarah: {
        role: 'Lead maintainer',
        focus: 'Focuses on Android implementation details, tooling, and bug triage.'
      },
      andre: {
        role: 'Core maintainer',
        focus: 'Coordinates releases, language quality, and long-term direction.'
      }
    },
    contributeTitle: 'Contribute to Cirabit',
    contributeDescription:
      'Ideas, bug reports, and pull requests are welcome. Community feedback helps harden the mesh experience and prioritize what comes next.',
    contributePrimary: 'Open Issues',
    contributeSecondary: 'Open Pull Requests',
    website: 'Website',
    github: 'GitHub',
    homeLink: 'Home',
    privacyPolicy: 'Privacy Policy',
    privacyPageTitle: 'Cirabit · Privacy Policy',
    privacyBadge: 'Privacy Policy',
    privacyTitle: 'Cirabit Privacy Policy',
    privacyUpdated: 'Last updated: March 22, 2026',
    privacyIntro: 'This policy explains how Cirabit handles privacy for both the Android app and this website.',
    privacyBack: 'Back to main page',
    footer:
      'Cirabit is an independent fork of Bitchat Android. Credit to the original effort by Permissionless Tech.',
    footerMeta: 'Built with 💚 · {year}'
  },
  pt: {
    pageLanguage: 'pt-BR',
    siteTitle: 'Cirabit',
    projectBadge: 'Projeto Android',
    heroMeta: '// chat android descentralizado',
    heroTitle: 'Chat Android descentralizado, sem servidores centrais.',
    heroDescription:
      'O Cirabit usa uma rede em malha descentralizada: chat ponto a ponto que continua útil no alcance local, mesmo com internet instável ou indisponível.',
    primaryButton: 'Abrir Cirabit no GitHub',
    secondaryButton: 'Ver roadmap',
    logoAlt: 'Logo do aplicativo Cirabit',
    languageSwitcherAria: 'Seletor de idioma',
    themeSwitcherAria: 'Seletor de tema',
    languageEnglishAria: 'Inglês (EUA)',
    languagePortugueseAria: 'Português (Brasil)',
    themeLightAria: 'Tema claro',
    themeDarkAria: 'Tema escuro',
    themeLight: 'CLARO',
    themeDark: 'ESCURO',
    facts: [
      {
        value: 'Sem servidor central',
        label: 'As mensagens circulam de aparelho para aparelho em rede local'
      },
      {
        value: 'Local-first de verdade',
        label: 'A comunicação por proximidade não depende de conta em nuvem'
      },
      {
        value: 'Resiliência no mundo real',
        label: 'Pensado para eventos lotados, sinal fraco e cenários offline'
      }
    ],
    highlightsTitle: 'Por que esse modelo importa',
    highlightsDescription:
      'O Cirabit prioriza chat em malha com foco em autonomia, continuidade da conversa e privacidade por padrão.',
    highlights: [
      {
        title: 'Comunicação Mesh-First',
        description: 'A troca entre pares é prioridade, reduzindo a dependência de infraestrutura centralizada.'
      },
      {
        title: 'Experiência pronta para offline',
        description: 'Mesmo sem internet estável, a conversa local continua funcional entre dispositivos próximos.'
      },
      {
        title: 'Privacidade por padrão',
        description: 'A arquitetura reduz exposição desnecessária de metadados em serviços centrais.'
      },
      {
        title: 'Confiabilidade prática',
        description: 'O foco permanece em um app leve, previsível e robusto para o uso diário.'
      }
    ],
    roadmapTitle: 'Roadmap em andamento',
    roadmapDescription:
      'A evolução segue fortalecendo o núcleo descentralizado sem perder simplicidade e usabilidade.',
    roadmap: [
      {
        tag: 'AGORA',
        title: 'Ajustes de confiabilidade da malha',
        description: 'Melhorar descoberta de pares e consistência de retransmissão em ambientes densos.'
      },
      {
        tag: 'PRÓXIMO',
        title: 'Continuidade entre sessões',
        description: 'Refinar reconexão e recuperação de estado para retomar conversas com menos fricção.'
      },
      {
        tag: 'PRÓXIMO',
        title: 'Polimento bilíngue',
        description: 'Elevar a qualidade nativa de EN-US e PT-BR e preparar a base para novos idiomas da comunidade.'
      },
      {
        tag: 'EM BREVE',
        title: 'Padrões de segurança e controle',
        description: 'Adicionar refinamentos de UX para deixar o chat local mais seguro e intuitivo.'
      }
    ],
    maintainersTitle: 'Principais mantenedores',
    maintainersDescription:
      'O Cirabit é mantido ativamente por pessoas focadas em comunicação descentralizada, colaboração e melhorias práticas.',
    maintainerProfiles: {
      sarah: {
        role: 'Mantenedora principal',
        focus: 'Atua em implementação Android, tooling e triagem de bugs.'
      },
      andre: {
        role: 'Mantenedor principal',
        focus: 'Coordena releases, qualidade de idiomas e direção de longo prazo.'
      }
    },
    contributeTitle: 'Contribua com o Cirabit',
    contributeDescription:
      'Ideias, relatos de bugs e pull requests são bem-vindos. O feedback da comunidade ajuda a fortalecer a experiência em malha e definir os próximos passos.',
    contributePrimary: 'Abrir Issues',
    contributeSecondary: 'Abrir Pull Requests',
    website: 'Site',
    github: 'GitHub',
    homeLink: 'Início',
    privacyPolicy: 'Política de Privacidade',
    privacyPageTitle: 'Cirabit · Política de Privacidade',
    privacyBadge: 'Política de Privacidade',
    privacyTitle: 'Política de Privacidade do Cirabit',
    privacyUpdated: 'Última atualização: 22 de março de 2026',
    privacyIntro: 'Esta política explica como o Cirabit trata privacidade, tanto no app Android quanto neste site.',
    privacyBack: 'Voltar para a página principal',
    footer: 'Cirabit é um fork independente do Bitchat Android. Créditos ao esforço original da Permissionless Tech.',
    footerMeta: 'Feito com 💚 · {year}'
  }
};

export const maintainers = [
  {
    id: 'sarah',
    name: 'Sarah Maia',
    website: 'https://www.smaia.dev',
    github: 'https://github.com/sarahsec',
    photo: 'https://bucket.smaia.dev/assets/smaia.jpg'
  },
  {
    id: 'andre',
    name: 'André Ribas',
    website: 'https://ribassu.com',
    github: 'https://github.com/RibasSu',
    photo: 'https://ribassu.com/assets/profiles/profile_84fcfa8e-cb5b-4d10-a4b9-dcf2668911b9_1769358881244.jpg'
  }
];
