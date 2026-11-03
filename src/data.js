// Content ported verbatim from the vanilla app.js.

export const LEVELS = [
  { label: 'N0 / Découverte', title: ['Le premier pas vers', 'la compréhension.'], skills: ['Découvrir le rôle de la monnaie', 'Comprendre la crypto simplement', 'Distinguer faits et promesses'] },
  { label: 'N1 / Sécurité', title: ['Les bons réflexes', 'commencent ici.'], skills: ['Repérer les arnaques', 'Protéger ses accès', 'Comprendre les risques'] },
  { label: 'N2 / Fondamentaux', title: ['Comprendre ce qui', 'fait tourner la crypto.'], skills: ['Comprendre Bitcoin et Ethereum', 'Découvrir les stablecoins et la DeFi', 'Identifier les bases d’un projet'] },
  { label: 'N3 / Lire le marché', title: ['Observer avant', 'de se positionner.'], skills: ['Lire les mouvements du marché', 'Mettre les informations en contexte', 'Reconnaître ses biais'] },
  { label: 'N4 / Décision & exécution', title: ['Passer de l’intuition', 'à la méthode.'], skills: ['Structurer une décision', 'Comprendre les types d’ordres', 'Évaluer un scénario'] },
  { label: 'N5 / Risque & portefeuille', title: ['Le risque se comprend.', 'Et se prépare.'], skills: ['Comprendre la diversification', 'Définir ses limites', 'Suivre un portefeuille'] },
  { label: 'N6 / Maîtrise pro', title: ['Approfondir.', 'Prendre du recul.'], skills: ['Affiner sa méthode', 'Analyser avec discipline', 'Consolider ses connaissances'] },
  { label: 'Élite / Cercle Élite', title: ['Grandir ensemble.', 'Transmettre à son tour.'], skills: ['Partager ses apprentissages', 'Confronter les points de vue', 'Cultiver une progression durable'] },
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

