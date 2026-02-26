// Données du portfolio

export const personalInfo = {
  name: "Acil",
  title: "Développeur Front-End.",
  description:
    "Spécialisé React, je crée des interfaces rapides et soignées. Mon regard de designer nourrit chaque ligne de code pour des expériences qui marquent.",
  location: "Lyon, France",
  availability: "Disponible pour des missions freelance ou CDI.",
  email: "acil.kadri1@gmail.com",
  linkedin: "https://www.linkedin.com/in/acil-kadri-a55201295/",
  github: "https://github.com/acilka",
  photo:
    "/images/photo-acil.webp",
};

export const techStack = [
  { name: "React", icon: "logos:react", width: 24 },
  { name: "Tailwind", icon: "logos:tailwindcss-icon", width: 24 },
  { name: "Redux", icon: "logos:redux", width: 22 },
  { name: "Sass", icon: "logos:sass", width: 24 },
];

export const tools = [
  { name: "VS Code", icon: "logos:visual-studio-code", width: 22 },
  { name: "Figma", icon: "logos:figma", width: 16 },
  { name: "Git", icon: "logos:git-icon", width: 22 },
];

export const creativeTools = [
  { name: "Photoshop", icon: "logos:adobe-photoshop", width: 24 },
  { name: "Illustrator", icon: "logos:adobe-illustrator", width: 24 },
  { name: "Blender", icon: "logos:blender", width: 24 },
];

export const skills = [
  {
    icon: "solar:code-square-linear",
    title: "Code Propre & Modulaire",
    description:
      "Architecture React structurée, composants réutilisables et versioning Git rigoureux. Du code pensé pour durer.",
  },
  {
    icon: "solar:palette-linear",
    title: "Oeil de Designer",
    description:
      "Maîtrise de Photoshop, Illustrator et Figma pour une intégration pixel-perfect fidèle aux maquettes.",
  },
  {
    icon: "solar:chart-2-linear",
    title: "Performance & SEO",
    description:
      "HTML sémantique, accessibilité WCAG et optimisation Core Web Vitals pour un référencement solide.",
  },
];

export const projects = [
  {
    id: "argentbank",
    title: "ArgentBank",
    category: "Fintech",
    description:
      "Application bancaire complète avec authentification JWT, gestion d'état global Redux et édition de profil en temps réel via API REST.",
fullDescription:
  "ArgentBank est une application bancaire full-stack développée dans le cadre de ma formation. Le défi principal était d'implémenter un système d'authentification sécurisé avec JWT et de gérer l'état global de l'application avec Redux Toolkit. J'ai aussi rédigé les endpoints API manquants avec Swagger pour documenter les routes de transactions. Le résultat : une app fonctionnelle avec login, affichage des comptes et édition de profil en temps réel, le tout avec un code structuré et maintenable.",
improvements: [
  "Ajouter un système de refresh token automatique",
  "Implémenter les pages de transactions détaillées",
  "Ajouter des tests unitaires avec Jest et React Testing Library",
],    image:
      "/images/ArgentBank.webp",
    screenshots: [
      "/images/argentbank-2.webp",
      "/images/argentbank-3.webp",
    ],
    techs: ["React", "Redux", "Swagger"],
    challenges: [
      "Mise en place de l'authentification JWT avec refresh token",
      "Architecture Redux Toolkit avec slices et thunks asynchrones",
      "Rédaction de la documentation API Swagger pour les transactions",
    ],
    github: "https://github.com/acilka/ArgentBank-Frontend",
    live: "#",
  },
  {
    id: "kasa",
    title: "Kasa",
    category: "Immobilier",
    description:
      "Plateforme de location immobilière avec routing dynamique, composants collapse animés et galerie d'images interactive.",
    fullDescription:
  "Kasa est une refonte complète d'un site de location immobilière, passant d'ASP.NET à une stack React moderne. J'ai conçu l'architecture front-end from scratch avec React Router pour le routing dynamique, créé des composants réutilisables (collapse, carrousel) et implémenté des animations CSS fluides. Le site final est responsive, rapide et gère proprement les erreurs 404 et les routes inexistantes.",
improvements: [
  "Ajouter un système de favoris avec persistance localStorage",
  "Implémenter un moteur de recherche avec filtres avancés",
  "Optimiser le chargement des images avec du lazy loading natif",
],    image:
      "/images/Kasa.webp",
    screenshots: [
      "/images/kasa-2.webp",
      "/images/kasa-3.webp",
    ],
    techs: ["React Router", "Sass", "Animation"],
    challenges: [
      "Routing dynamique avec paramètres et gestion des 404",
      "Composant Collapse avec animation height auto",
      "Galerie d'images avec navigation circulaire",
    ],
    github: "https://github.com/acilka/KasaProjet7AcilKadri",
    live: "#",
  },
  {
    id: "sophie-bluel",
    title: "Sophie Bluel",
    category: "Architecture",
    description:
      "Portfolio d'architecte avec back-office d'administration complet : ajout, suppression et filtrage de projets via manipulation DOM et API.",
    fullDescription:
  "Sophie Bluel est un portfolio d'architecte avec une interface d'administration complète. Sans framework, j'ai manipulé le DOM en Vanilla JS pour créer un système CRUD complet : modal d'ajout de projets avec upload d'image, suppression, et filtrage par catégorie. Le tout communique avec une API REST. Ce projet m'a montré l'importance de maîtriser les fondamentaux JavaScript avant d'utiliser un framework.",
improvements: [
  "Ajouter une fonctionnalité d'édition des projets existants",
  "Implémenter du drag and drop pour réorganiser les projets",
  "Migrer vers une architecture avec un framework comme React pour comparer les approches",
],
    image:
      "/images/Sophie Bluel.webp",
    screenshots: [
      "/images/sophiebluel-2.webp",
      "/images/sophiebluel-3.webp",
    ],
    techs: ["Vanilla JS", "API REST", "DOM"],
    challenges: [
      "Manipulation DOM pure sans framework pour le CRUD complet",
      "Gestion de modale avec upload de fichier et preview",
      "Système de filtrage dynamique par catégorie",
    ],
    github: "https://github.com/acilka/Project6final",
    live: "#",
  },
];

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

export const pitch = [
  "Je suis Acil Kadri, développeur Front-End basé à Lyon, spécialisé React. Mon approche mêle rigueur technique et sensibilité visuelle pour créer des interfaces performantes et soignées.",
  "Après un bac en mathématiques et économie, j'ai passé la Piscine de l'école 42 — un mois intensif qui m'a forgé en autonomie et en résolution de problèmes. J'ai ensuite intégré une alternance d'intégrateur web avec OpenClassrooms pour structurer mes compétences sur des projets concrets.",
  "Ce qui me distingue, c'est mon double profil développeur et créatif. Je pratique la photographie, le montage vidéo, le motion design et la 3D — des compétences qui nourrissent mon regard sur chaque interface. Je ne me contente pas d'intégrer une maquette : je comprends les intentions de design derrière chaque choix visuel.",
  "Je suis ouvert à un poste en CDI comme à des missions freelance. Mon objectif : rejoindre une équipe où je peux contribuer à des produits ambitieux tout en progressant vers le Full-Stack.",
];