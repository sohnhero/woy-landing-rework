// Content ported verbatim from the vanilla app.js.

export const LEVELS = [
  {
    code: 'N0',
    number: 0,
    name: 'Découverte',
    subtitle: "L'Argent & les Marchés • Fondations de l'Initié",
    volume: '10 modules',
    title: ['Le premier pas vers', 'la compréhension.'],
    description: "Comprendre les fondamentaux : de la monnaie à l'inflation. Poser sa première question à l'argent.",
    skills: [
      'La règle des 40/40/20 pour son épargne',
      'Fonctionnement du système financier moderne',
      'Monnaie fiduciaire vs actifs réels tangibles',
      'Origines & raison d’être des cryptomonnaies',
    ],
    reward: 'Attestation Éveil',
    status: 'Inclus & débloqué d’office',
    icon: 'compass',
  },
  {
    code: 'N1',
    number: 1,
    name: 'Sécurité Totale',
    subtitle: 'Se Protéger • La Muraille de Protection',
    volume: '10 modules',
    title: ['Les bons réflexes', 'commencent ici.'],
    description: "Maîtriser son budget personnel, bâtir une épargne de précaution solide et forger l'état d'esprit de l'investisseur avisé.",
    skills: [
      'Anti-phishing & ingénierie sociale déjouée',
      '2FA matériel & sécurisation des accès critiques',
      'Sécurisation des clés privées et des portefeuilles',
      'Sanctuarisation et préservation du capital',
    ],
    reward: 'Badge Bouclier',
    status: 'Étape fondatrice',
    icon: 'shield',
  },
  {
    code: 'N2',
    number: 2,
    name: 'Fondamentaux',
    subtitle: 'Comprendre les Fondations • L’Écosystème',
    volume: '12 modules',
    title: ['Comprendre ce qui', 'fait tourner la crypto.'],
    description: "Construire un portefeuille équilibré, évaluer les risques systémiques et saisir les opportunités offertes par les grands marchés.",
    skills: [
      'Architecture Bitcoin & Ethereum en profondeur',
      'Finance Décentralisée (DeFi) & stablecoins',
      'Mécanique on-chain & gestion des frais de gaz',
      'Wallets froids & interaction smart contracts',
    ],
    reward: 'Badge Architecte',
    status: 'Écosystème actif',
    icon: 'blocks',
  },
  {
    code: 'N3',
    number: 3,
    name: 'Lire le Marché',
    subtitle: 'Lire les Signaux • Le Langage des Graphiques',
    volume: '16 modules',
    title: ['Observer avant', 'de se positionner.'],
    description: "Approfondir les stratégies d'investissement, apprendre à lire la dynamique des cours, diversifier et optimiser ses allocations d'actifs.",
    skills: [
      'Supports, résistances & identification des tendances',
      'Indicateurs techniques & dynamiques de momentum',
      'Carnets d’ordres, profondeur & liquidité',
      'Accès exclusif LAAMB Spectateur',
    ],
    reward: 'Certification SkillProof N3',
    status: 'Analyse technique',
    icon: 'chart',
  },
  {
    code: 'N4',
    number: 4,
    name: 'Décision & Exécution',
    subtitle: 'Décider avec Méthode • Le Trader Discipliné',
    volume: '21 modules',
    title: ['Passer de l’intuition', 'à la méthode.'],
    description: "Maîtriser l'allocation d'actifs avancée, les investissements alternatifs et développer une vision stratégique à long terme.",
    skills: [
      'Trading simulé en conditions réelles sans risque',
      'Gestion stricte du risque & ratios Risk/Reward',
      'Psychologie face aux gains et aux pertes',
      'Accès exclusif LAAMB Trader',
    ],
    reward: 'Certification SkillProof N4',
    status: 'Pratique immersive',
    icon: 'spark',
  },
  {
    code: 'N5',
    number: 5,
    name: 'Risk & Portefeuille',
    subtitle: 'Protéger son Capital • Protéger & Diversifier',
    volume: '16 modules',
    title: ['Le risque se comprend.', 'Et se prépare.'],
    description: "Analyse fondamentale approfondie, macroéconomie appliquée et conservation multi-signatures. L'art de préserver et faire croître le capital à grande échelle.",
    skills: [
      'Grille d’analyse fondamentale propriétaire WÔY',
      'Hedging & couverture stratégique de portefeuille',
      'Conservation institutionnelle multi-signatures',
      'Macroéconomie appliquée aux marchés africains et globaux',
    ],
    reward: 'Certification SkillProof N5',
    status: 'Stratégie institutionnelle',
    icon: 'shield',
  },
  {
    code: 'N6',
    number: 6,
    name: 'Maîtrise Pro',
    subtitle: 'Maîtrise Avancée • Synthèse & Transmission',
    volume: '11 modules',
    title: ['Approfondir.', 'Prendre du recul.'],
    description: "Devenir un pilier de la communauté, un maître capable de transmettre le savoir. La maîtrise complète et sereine de l'écosystème financier.",
    skills: [
      'Stratégies de marché & valorisation avancées',
      'Grand Examen de Certification WÔY',
      'Éligibilité aux instances supérieures de l’Académie',
      'Transmission & pédagogie financière communautaire',
    ],
    reward: 'Badge Maîtrise WÔY',
    status: 'Consécration académique',
    icon: 'book',
  },
  {
    code: 'Élite',
    number: 7,
    name: 'Le Cercle Élite',
    subtitle: 'Cercle des Djélis • Héritage & Impact',
    volume: 'Ordre Supérieur',
    title: ['Grandir ensemble.', 'Transmettre à son tour.'],
    description: "« Héritage & Impact. Le Cercle rassemble les maîtres de l'Académie. Seuls les initiés ayant validé les 7 niveaux franchiront ces portes. »",
    skills: [
      'Mentorat direct & parrainage des nouveaux apprentis',
      'Gestion de trésorerie de guilde & capital collectif',
      'Statut & dignité suprême de Djéli WÔY',
      'Accès Légendaire sur invitation après examen N6',
    ],
    reward: 'Sceau Djéli Élite (Accès Légendaire)',
    status: 'Sur invitation exclusive',
    icon: 'spark',
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

