export type Project = {
  index: string
  title: string
  eyebrow: string
  description: string
  impact: string
  stack: string[]
  href?: string
  accent: string
}

export type PortfolioProject = {
  index: string
  title: string
  subtitle: string
  description: string
  features: string[]
  stack: string[]
  accent: string
  publication?: {
    badge: string
    title: string
    journal: string
    publisher: string
    year: string
    volume: string
    article: string
    doi: string
    href: string
  }
}

export const experiences: Project[] = [
  {
    index: '01',
    title: 'PICORNE',
    eyebrow: 'INSA Rouen Normandie / INRAE · 2026 — en cours',
    description: "Développeur web complet sur un projet industriel avec client réel : plateforme web et application web progressive, API REST avec Django, MariaDB et modèle CNN de détection de la tuberculose bovine.",
    impact: 'Projet INSA Certifié · travail Agile · livraisons itératives · documentation technique',
    stack: ['Django', 'Python', 'MariaDB', 'CNN', 'PWA', 'Docker', 'GitLab CI/CD', 'API REST'],
    accent: '#c7ff45',
  },
  {
    index: '02',
    title: 'Assistant RAG',
    eyebrow: 'HARMONY · Rabat · 22 juin — 7 septembre 2026',
    description: "Stage de développement serveur et IA : API REST sécurisée avec FastAPI, JWT et Argon2, tableau de bord et assistant RAG interrogeant des documents administratifs.",
    impact: '95,8 % de réponses correctes · 100 % sans erreur · 3,5 s de latence moyenne',
    stack: ['Python', 'FastAPI', 'JWT', 'Argon2', 'MySQL', 'RAG', 'ChromaDB', 'Ollama', 'LangSmith', 'LLM'],
    href: 'https://github.com/ilyassman/moroccan-administrative-rag-assistant',
    accent: '#ff6b35',
  },
  {
    index: '03',
    title: 'TransportPro',
    eyebrow: 'HARMONY · Rabat · juillet — août 2025',
    description: "Stage de développement serveur et mobile : service Java / Spring Boot avec authentification JWT et réservation, application Flutter, suivi cartographique en temps réel, notifications WebSocket et messagerie.",
    impact: 'Application mobile connectée à un service en temps réel',
    stack: ['Java', 'Spring Boot', 'JWT', 'Flutter', 'WebSocket'],
    accent: '#92a7ff',
  },
  {
    index: '04',
    title: 'Al Misbah',
    eyebrow: 'Al Misbah Informatique · Maroc · 2024',
    description: "Stage de développement web et mobile : création d’une boutique en ligne avec Angular et Flutter, utilisation de Firebase et suivi des commandes en temps réel.",
    impact: 'Une expérience cohérente du web au mobile',
    stack: ['Angular', 'Flutter', 'Firebase'],
    accent: '#f3dc63',
  },
  {
    index: '05',
    title: 'Marsa Maroc',
    eyebrow: 'Marsa Maroc · Maroc · 2023',
    description: "Stage de développement web et mobile : réalisation d’une solution de gestion du matériel roulant et des pannes avec Flutter et Spring Boot.",
    impact: 'Numérisation de la gestion du matériel et des incidents',
    stack: ['Flutter', 'Spring Boot'],
    accent: '#9be2d0',
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    index: '01',
    title: 'AI Database Copilot',
    subtitle: 'Assistant agentique SQL',
    description: "Assistant IA conversationnel permettant d’interroger, de créer et de modifier des données en langage naturel grâce à un workflow agentique orchestré avec LangGraph.",
    features: ['Analyse des intentions en langage naturel', 'Génération de requêtes SQL', 'Orchestration avec LangGraph', 'Contrôle des opérations sensibles'],
    stack: ['Python', 'LangGraph', 'PostgreSQL', 'LLM'],
    accent: '#c7ff45',
  },
  {
    index: '02',
    title: 'DevProductivityTracker',
    subtitle: 'Assistant IA intégré à Visual Studio Code',
    description: "Extension VS Code intelligente accompagnée d’un backend Spring Boot, utilisant Spring AI et Gemini pour assister les développeurs dans leurs tâches quotidiennes.",
    features: ['Génération de code', 'Correction de code', 'Création de tests unitaires', 'Intégration de modèles via Spring AI et Gemini'],
    stack: ['TypeScript', 'Spring Boot', 'Spring AI', 'Gemini'],
    accent: '#92a7ff',
  },
  {
    index: '03',
    title: 'Projet ITI — Analyse documentaire et RAG',
    subtitle: 'Recherche sémantique et exploitation documentaire',
    description: "Conception d’un référentiel documentaire structuré permettant d’exploiter des documents à travers une chaîne de recherche sémantique et de génération de réponses par modèles de langage.",
    features: ['Structuration des documents', 'Transformation XML/XSLT', 'Génération d’embeddings', 'Recherche vectorielle', 'Exploitation par des LLM'],
    stack: ['Python', 'XML/XSLT', 'LLM', 'Embeddings', 'Recherche vectorielle'],
    accent: '#f3dc63',
  },
  {
    index: '04',
    title: 'EnviScan+',
    subtitle: 'Application mobile IA de reconnaissance de plantes',
    description: "Application mobile intelligente permettant d’identifier des plantes à partir d’images grâce au Deep Learning embarqué avec TensorFlow Lite, et proposant un assistant conversationnel basé sur Spring AI.",
    features: ['Reconnaissance de plantes par photographie', 'Deep Learning embarqué avec TensorFlow Lite', 'Assistant conversationnel avec Spring AI', 'Application Android'],
    stack: ['Android', 'TensorFlow Lite', 'Spring AI'],
    accent: '#9be2d0',
    publication: {
      badge: 'PUBLICATION SCIENTIFIQUE · SOFTWAREX 2025',
      title: 'EnviScan+: AI-driven plant identification and eco-system management for sustainable agriculture',
      journal: 'SoftwareX',
      publisher: 'Elsevier',
      year: '2025',
      volume: '30',
      article: '102182',
      doi: '10.1016/j.softx.2025.102182',
      href: 'https://doi.org/10.1016/j.softx.2025.102182',
    },
  },
]

export const education = [
  {
    period: '2025 — 2027', school: 'INSA Rouen Normandie', country: 'France',
    degree: "Cycle ingénieur Informatique et Technologies de l’Information",
    details: ['Double diplôme en partenariat avec l’ENSA d’El Jadida', 'Formation d’ingénieur en informatique à Rouen', 'Formation en cours'],
    status: 'DOUBLE DIPLÔME',
  },
  {
    period: '2023 — 2027', school: 'ENSA d’El Jadida', country: 'Maroc',
    degree: 'Cycle ingénieur en Ingénierie Informatique',
    details: ["École Nationale des Sciences Appliquées d’El Jadida", 'Parcours en double diplôme avec l’INSA Rouen Normandie', 'Formation en cours'],
    status: 'DOUBLE DIPLÔME',
  },
  {
    period: '2022 — 2023', school: 'FST de Settat', country: 'Maroc',
    degree: 'Licence en Génie Informatique',
    details: ['Faculté des Sciences et Techniques de Settat', 'Formation universitaire en génie informatique'],
    status: 'FORMATION',
  },
]

export const skillGroups = [
  { id: '01', label: 'SERVEUR', items: ['Java', 'Spring Boot', 'Spring Security', 'FastAPI', 'Django', 'Node.js'] },
  { id: '02', label: 'SYSTÈMES DISTRIBUÉS', items: ['REST', 'Microservices', 'Kafka', 'RabbitMQ', 'WebSocket'] },
  { id: '03', label: 'INTERFACES', items: ['React', 'Angular', 'Vue.js', 'Flutter', 'React Native', 'PWA'] },
  { id: '04', label: 'DONNÉES', items: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Cassandra', 'Spark', 'Superset'] },
  { id: '05', label: 'IA APPLIQUÉE', items: ['Spring AI', 'RAG', 'LangChain', 'LangGraph', 'TensorFlow', 'PyTorch'] },
  { id: '06', label: 'LIVRAISON', items: ['Docker', 'GitLab CI/CD', 'AWS', 'SonarQube', 'Tests unitaires', 'Agile'] },
]
