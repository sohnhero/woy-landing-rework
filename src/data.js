// Content ported verbatim from the vanilla app.js.

export const LEVELS = [
  {
    level: 0,
    code: 'N0',
    name: 'Découverte',
    icon: 'compass',
    label: 'N0 / Découverte',
    subtitle: "L'Argent & les Marchés",
    volume: '10 modules',
    status: "Inclus & débloqué d'office",
    reward: 'Attestation Éveil',
    title: ['Fondations de l’Initié :', 'Comprendre l’argent.'],
    description: 'Comprendre les fondamentaux : de la monnaie à l’inflation. Poser sa première question à l’argent.',
    skills: [
      'La règle des 40/40/20 pour son capital',
      'Fonctionnement du système financier moderne',
      'Monnaie fiduciaire vs actifs réels tangibles',
    ],
  },
  {
    level: 1,
    code: 'N1',
    name: 'Sécurité Totale',
    icon: 'shield',
    label: 'N1 / Sécurité Totale',
    subtitle: 'La Muraille de Protection',
    volume: '10 modules',
    status: 'Incontournable',
    reward: 'Badge Bouclier',
    title: ['Les bons réflexes', 'commencent ici.'],
    description: 'Maîtriser son budget personnel, bâtir une épargne de précaution solide et forger l’état d’esprit de l’investisseur avisé.',
    skills: [
      'Anti-phishing & vigilance face aux arnaques',
      '2FA matériel & sécurisation des clés privées',
      'Sanctuarisation du capital & gestion des cold wallets',
    ],
  },
  {
    level: 2,
    code: 'N2',
    name: 'Fondamentaux',
    icon: 'blocks',
    label: 'N2 / Fondamentaux',
    subtitle: 'Comprendre l’Écosystème',
    volume: '12 modules',
    status: 'Pilier technique',
    reward: 'Badge Architecte',
    title: ['Comprendre ce qui', 'fait tourner la crypto.'],
    description: 'Construire un portefeuille équilibré, évaluer les risques systémiques et saisir les opportunités offertes par les grands marchés.',
    skills: [
      'Architecture Bitcoin & Ethereum en profondeur',
      'Finance décentralisée (DeFi) & stablecoins',
      'Mécanique on-chain, wallets & smart contracts',
    ],
  },
  {
    level: 3,
    code: 'N3',
    name: 'Lire le Marché',
    icon: 'chart',
    label: 'N3 / Lire le Marché',
    subtitle: 'Le Langage des Graphiques',
    volume: '16 modules',
    status: 'Analyse technique',
    reward: 'Certification SkillProof N3',
    title: ['Observer les flux avant', 'de se positionner.'],
    description: 'Approfondir les stratégies d’investissement, apprendre à lire la dynamique des cours, diversifier et optimiser ses allocations d’actifs.',
    skills: [
      'Supports, résistances & identification des tendances',
      'Indicateurs techniques & lecture des carnets d’ordres',
      'Accès exclusif LAAMB Spectateur pour suivre les flux',
    ],
  },
  {
    level: 4,
    code: 'N4',
    name: 'Décision & Exéc.',
    icon: 'target',
    label: 'N4 / Décision & Exécution',
    subtitle: 'Le Trader Discipliné',
    volume: '21 modules',
    status: 'Méthode & Discipline',
    reward: 'Certification SkillProof N4',
    title: ['Passer de l’intuition', 'à la méthode stricte.'],
    description: 'Maîtriser l’allocation d’actifs avancée, les investissements alternatifs et développer une vision stratégique à long terme.',
    skills: [
      'Trading simulé en conditions réelles sans risque de perte',
      'Gestion stricte du risque (risk management & stop-loss)',
      'Psychologie du trader & élimination des biais (Accès LAAMB Trader)',
    ],
  },
  {
    level: 5,
    code: 'N5',
    name: 'Risk & Portefeuille',
    icon: 'briefcase',
    label: 'N5 / Risk & Portefeuille',
    subtitle: 'Protéger son Capital',
    volume: '16 modules',
    status: 'Gestion de patrimoine',
    reward: 'Certification SkillProof N5',
    title: ['Préserver et croître :', 'L’art du capital.'],
    description: 'Analyse fondamentale approfondie, macroéconomie appliquée et conservation multi-signatures. L’art de préserver et faire croître le capital à grande échelle.',
    skills: [
      'Grille d’analyse fondamentale WÔY pour chaque actif',
      'Stratégies de hedging (couverture de risque)',
      'Macroéconomie appliquée aux marchés africains et internationaux',
    ],
  },
  {
    level: 6,
    code: 'N6',
    name: 'Maîtrise Pro',
    icon: 'award',
    label: 'N6 / Maîtrise Pro',
    subtitle: 'Synthèse & Maîtrise Avancée',
    volume: '11 modules',
    status: 'Haute Expertise',
    reward: 'Badge Maîtrise WÔY',
    title: ['Devenir un pilier.', 'Transmettre le savoir.'],
    description: 'Devenir un pilier de la communauté, un maître capable de transmettre le savoir. La maîtrise complète et sereine de l’écosystème financier.',
    skills: [
      'Stratégies de marché avancées & arbitrage d’opportunités',
      'Grand Examen de Certification WÔY complet',
      'Éligibilité solennelle à l’Ordre Supérieur de l’Académie',
    ],
  },
  {
    level: 7,
    code: 'Élite',
    name: 'Cercle Élite',
    icon: 'crown',
    label: 'Élite / Cercle des Djélis',
    subtitle: 'Héritage & Impact • L’Aboutissement',
    volume: 'Accès Légendaire',
    status: 'Sur invitation exclusive',
    reward: 'Statut de Djéli WÔY',
    title: ['Le Cercle rassemble', 'les maîtres de l’Académie.'],
    description: 'Héritage & Impact. Le Cercle rassemble les maîtres de l’Académie. Seuls les initiés ayant validé les 7 niveaux franchiront ces portes.',
    skills: [
      'Mentorat des apprentis : accompagnement direct et transmission',
      'Gestion de trésorerie de guilde & initiatives de capital collectif',
      'Plus haute distinction honorifique : Dignité de Djéli WÔY',
    ],
  },
];

export const QUESTIONS = [
  { title: 'Un rendement garanti ?', question: 'Un inconnu te promet de doubler ta mise. Quel est ton premier réflexe ?', answers: ['Investir immédiatement', 'Vérifier les risques et la source', 'Partager la promesse à mes proches'], correct: 1, feedback: 'Une promesse de rendement garanti est un signal d’alerte. Prends le temps de vérifier la source et les risques.' },
  { title: 'Ta phrase de récupération.', question: 'Un prétendu support te demande ta phrase de récupération. Que fais-tu ?', answers: ['Je la partage pour être aidé', 'J’envoie seulement la moitié', 'Je refuse de la communiquer'], correct: 2, feedback: 'Ta phrase de récupération donne accès à ton portefeuille. Un support légitime ne doit jamais te la demander.' },
  { title: 'L’urgence de décider.', question: '« Dernière chance, investis dans les 5 minutes ! » Comment réagis-tu ?', answers: ['Je prends du recul et je vérifie', 'Je suis le groupe', 'J’agis avant de rater l’occasion'], correct: 0, feedback: 'La pression et l’urgence peuvent pousser à une mauvaise décision. Une décision éclairée demande du temps.' },
];

export const FAQ = [
  { q: 'Faut-il déjà connaître la crypto ?', a: 'Non. Le parcours commence par les bases, puis avance étape par étape. L’objectif : comprendre les notions avant de passer à la pratique.' },
  { q: 'Comment progresse-t-on ?', a: 'Chaque niveau introduit des notions, des mises en situation et des quiz. Les compétences acquises permettent d’aborder la suite avec des bases plus solides.' },
  { q: 'Est-ce une plateforme de trading ?', a: 'WÔY Academy est une plateforme d’apprentissage. Les défis présentés ici sont pédagogiques : ils ne nécessitent aucun achat de crypto et ne constituent pas des conseils d’investissement.' },
  { q: 'Comment rejoindre WÔY ?', a: 'Le bouton « Rejoindre la liste » ouvre le formulaire de préinscription. Cette première version est une démonstration : la collecte sera activée lors du lancement.' },
];

export const INFO = {
  privacy: {
    title: 'Confidentialité',
    text: 'Cette version de démonstration ne transmet ni ne conserve les adresses saisies dans le formulaire. Aucun outil publicitaire ni outil de suivi statistique n’est intégré. Les informations de confidentialité du service final seront précisées avant l’ouverture des inscriptions.',
  },
  legal: {
    title: 'Informations légales',
    text: 'Ce site est une version de présentation de WÔY Academy. Les interfaces et les points XP sont des démonstrations pédagogiques. Les informations de l’éditeur et les conditions applicables seront complétées avant le lancement public.',
  },
};

export const NAV_LINKS = [
  { href: '#parcours', label: 'Le parcours' },
  { href: '#experience', label: 'L’expérience' },
  { href: '#esprit', label: 'L’esprit WÔY' },
];

