export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: ('AI/ML' | 'Backend' | 'Frontend' | 'Embedded' | 'Security' | 'Research' | 'Mobile')[];
  status: 'Shipped' | 'Active Research' | 'Hackathon' | 'Ongoing';
  statusLabel?: string;
  badge?: string;
  badgeColor?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  isResearch?: boolean;
  architecture?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'cyborg-agi',
    title: 'Cyborg AGI',
    subtitle: 'Local Autonomous General Intelligence OS',
    description:
      'A high-performance, modular, locally-hosted AGI OS — self-healing, containerized, and horizontally scalable — that reasons, remembers, monitors the world, teaches, and assists clinically without sending a single byte to the cloud.',
    longDescription:
      'Built for the Kaggle × Google DeepMind Gemma 4 Good Hackathon, Cyborg AGI is a production-grade distributed AI system running fully offline. It serves 6 specialized tracks — general reasoning, clinical health (MedGemma 4B with SigLIP vision), adaptive education, global disaster monitoring via GDELT + USGS, semantic knowledge graph visualization, and Jarvis-style voice interaction — all containerized via Docker and orchestrated with Kubernetes concepts.',
    tags: ['Flutter', 'FastAPI', 'Gemma 4', 'MedGemma 4B', 'Python', 'Docker', 'Kubernetes', 'Firebase', 'LangGraph', 'Whisper', 'Local AI', 'FHIR', 'Self-Healing'],
    category: ['AI/ML', 'Backend'],
    status: 'Shipped',
    statusLabel: 'V1.0 Stable',
    badge: '🏆 Gemma 4 Good Hackathon — Kaggle × Google DeepMind',
    repoUrl: 'https://github.com/ankit-sengupta05/CyborgAI',
    featured: true,
    highlights: [
      '6 specialized AI tracks in one offline OS',
      'MedGemma 4B with SigLIP vision for X-ray & clinical reasoning',
      '60+ tokens/sec (RTX 3070+) · Cold start < 8s',
      'Force-directed semantic knowledge graph (10,000+ nodes tested)',
      'Full Whisper STT + Kokoro/ONNX TTS with interrupt support',
      'Runs on Windows, Android, Raspberry Pi 5, NVIDIA Jetson',
    ],
  },
  {
    id: 'flood-guard-ai',
    title: 'Flood-Guard AI',
    subtitle: 'Hydrodynamic Flood Simulation & Emergency Decision System',
    description:
      'Given a dam, reservoir state, and breach scenario — it runs a full hydrodynamic simulation, predicts where the flood goes AND when it arrives, validates against satellite imagery, and converts everything into a time-aware evacuation plan with a ranked emergency action list.',
    longDescription:
      'Flood-Guard AI goes beyond existing dam-break tools. It combines SPH + Delft3D hydrodynamic engines with Google Earth Engine satellite validation, uncertain-ensemble simulation, and networkx + osmnx road-network routing to produce explainable, audit-trail emergency decisions. The 3D React dashboard (Three.js / WebGL) visualizes real terrain from SRTM DEMs. Every recommendation is auditable back to its inputs and assumptions.',
    tags: ['React', 'Three.js', 'FastAPI', 'Python', 'PostGIS', 'PostgreSQL', 'Celery', 'Redis', 'Google Earth Engine', 'Sentinel-2', 'networkx', 'osmnx', 'SPH', 'Delft3D', 'Vercel'],
    category: ['AI/ML', 'Frontend', 'Backend'],
    status: 'Shipped',
    statusLabel: 'Deployed',
    repoUrl: 'https://github.com/ankit-sengupta05/Flood-Guard-AI',
    featured: true,
    highlights: [
      '12 unique features: multi-scenario simulation, uncertainty-aware prediction, time-to-flood mapping',
      'Dynamic road & bridge safety evaluated as a function of time',
      'Google Earth Engine satellite validation (Sentinel/Landsat vs simulated extent)',
      'Full 3D terrain visualization (WebGL) from SRTM DEMs',
      'Explainability trail on every recommendation ("Why is Village A Priority 1?")',
      'Offline / low-connectivity mode with pre-downloadable scenario data',
    ],
  },
  {
    id: 'news-alpha-ai',
    title: 'NewsAlphaAI',
    subtitle: '8-Node Distributed LangGraph Stock Prediction Pipeline',
    description:
      'AI-powered stock direction prediction using an 8-node distributed agent pipeline — real-time news ingestion, LLM reasoning, RAG pipelines, concurrency & multi-threading, and a reinforcement learning feedback loop that retrains on real outcomes.',
    tags: ['LangGraph', 'LangChain', 'FastAPI', 'React', 'Vite', 'ChromaDB', 'XGBoost', 'Gemma 3 4B', 'TailwindCSS', 'WebSockets', 'APScheduler', 'LangSmith', 'RL Feedback'],
    category: ['AI/ML', 'Backend', 'Frontend'],
    status: 'Shipped',
    statusLabel: 'Completed',
    highlights: [
      '8-node distributed LangGraph pipeline with concurrency & multi-threading',
      'Gemma-3-4B-IT local LLM for news reasoning',
      'ChromaDB / FAISS RAG with sentence-transformers embeddings',
      'Reward-weighted XGBoost + RL feedback loop retraining on real outcomes',
      'LangSmith observability for full pipeline tracing',
    ],
  },
  {
    id: 'meetmind',
    title: 'MeetMind',
    subtitle: 'AI Co-Pilot for Microsoft Teams',
    description:
      'An AI Teams co-pilot that turns meeting transcripts into structured, searchable knowledge artifacts — surfacing decisions and action items using Azure OpenAI GPT-4o, Semantic Kernel, Cosmos DB, and Azure Cognitive Search.',
    longDescription:
      'Built for a Microsoft Hackathon, MeetMind integrates deep into the Teams ecosystem via the Bot Framework and Fluent UI v9. A Semantic Kernel agent pipeline processes transcripts asynchronously via Azure Functions, indexes them in Azure Cognitive Search with vector + semantic retrieval, and syncs action items to Microsoft Planner via the Graph API.',
    tags: ['TypeScript', 'React 18', 'Fluent UI', 'Node.js', 'Azure OpenAI', 'GPT-4o', 'Semantic Kernel', 'Cosmos DB', 'Azure Functions', 'Azure Cognitive Search', 'Microsoft Teams', 'Microsoft Planner'],
    category: ['AI/ML', 'Backend', 'Frontend'],
    status: 'Hackathon',
    badge: '🏆 Microsoft Hackathon',
    repoUrl: 'https://github.com/ankit-sengupta05/MeetMind',
    highlights: [
      'GPT-4o + Semantic Kernel agent pipeline via Azure Functions',
      'Vector + semantic search over meeting corpus (Azure Cognitive Search)',
      'Microsoft Planner sync via Graph API for action item tracking',
      'Real-time transcript ingestion via Teams Bot Framework',
    ],
  },
  {
    id: 'mesh-guard',
    title: 'mesh_guard',
    subtitle: 'AgentOps Security Mesh — AI Swarm Security Framework',
    description:
      'A security OS for fleets of AI agents — featuring a Prompt Injection Firewall, Neo4j Trust Graph, Self-Healing Daemon with snapshot/rollback, and a built-in Attack Simulator to test swarm resilience against prompt injections and context overflows.',
    tags: ['LangGraph', 'Neo4j', 'Redis', 'FastAPI', 'React', 'Vite', 'Zustand', 'Python', 'Prompt Injection', 'AI Security', 'Self-Healing'],
    category: ['AI/ML', 'Security', 'Backend', 'Frontend'],
    status: 'Hackathon',
    badge: '🏆 Security Hackathon',
    repoUrl: 'https://github.com/ankit-sengupta05/mesh_guard',
    highlights: [
      'Prompt Injection Firewall: heuristic + LLM-based real-time evaluation',
      'Neo4j Trust Graph: agents earn/lose trust, below-threshold agents sandboxed',
      'Self-Healing Daemon: automated snapshotting & rollback of compromised agents',
      'Attack Simulator: simulate API poisonings, context overflows, prompt injections',
      'Hot-swappable LLMs: switch OpenAI / Azure / local LM Studio mid-execution',
    ],
  },
  {
    id: 'comic-companion',
    title: 'Comic Companion',
    subtitle: 'Geolocation-Based Comedy Performer Matching Platform',
    description:
      'A Turborepo monorepo connecting open-mic performers with their ideal audience via geolocation-based video matching — artists upload short comedy clips, audiences swipe to discover local talent and attend live events. Web + iOS + Android + API in one codebase.',
    tags: ['Next.js 14', 'Expo', 'React Native', 'Express', 'MongoDB', 'TypeScript', 'Turborepo', 'Geolocation', 'PWA', 'TurboRepo Monorepo'],
    category: ['Frontend', 'Backend', 'Mobile'],
    status: 'Shipped',
    statusLabel: 'Deployed',
    repoUrl: 'https://github.com/ankit-sengupta05/Comic-Companion',
    highlights: [
      'Turborepo monorepo: Next.js 14 web + Expo mobile + Express API in one repo',
      'Sliding-window video memory manager (@comic-companion/video-engine)',
      'Shared TypeScript types package across all 3 platforms',
      'Geolocation-based performer ↔ audience matching',
    ],
  },
  {
    id: 'vitap-eats',
    title: 'VIT-AP Eats',
    subtitle: 'Campus Food Delivery PWA — Next.js 16 + Firebase',
    description:
      'The campus food delivery platform for VIT-AP University students. Order from any canteen, track in real-time, straight to your hostel. Progressive Web App deployable on iOS & Android. Includes a Flutter-native admin dashboard with live order management.',
    tags: ['Next.js 16', 'Firebase', 'Firestore', 'TypeScript', 'Flutter', 'PWA', 'Vercel', 'Firebase Auth', 'Google SSO', 'Real-time', 'WhatsApp Integration'],
    category: ['Frontend', 'Mobile', 'Backend'],
    status: 'Shipped',
    statusLabel: 'Live on Vercel',
    liveUrl: 'https://vit-ap-eats.vercel.app/',
    repoUrl: 'https://github.com/ankit-sengupta05/VIT-AP-Eats',
    highlights: [
      'Next.js 16 App Router + Turbopack with Vercel Edge Network deployment',
      'Firestore onSnapshot for real-time order tracking across all roles',
      'Flutter native admin app with FCM push notifications on new orders',
      'Live analytics: revenue charts, top dishes, order status pie from Firestore',
      'WhatsApp integration: one-tap customer chat from admin order view',
    ],
  },
  {
    id: 'smart-vision-aid',
    title: 'Smart Vision Aid',
    subtitle: 'AI-Powered Assistive Smart Glasses — VIT Internal Expo Selected',
    description:
      'Real-time AI-powered assistive smart glasses with 3× synchronized ESP32-CAM modules, multi-threaded ultrasonic telemetry, YOLO object detection for sub-100ms obstacle identification, and an Android companion app with live audio navigation.',
    tags: ['ESP32', 'YOLO', 'OpenCV', 'Android', 'C++', 'Arduino', 'IoT', 'Computer Vision', 'Kotlin'],
    category: ['Embedded', 'AI/ML'],
    status: 'Shipped',
    badge: '🏅 VIT Internal Expo — Selected',
    highlights: [
      '3× synchronized ESP32-CAM modules for 360° spatial coverage',
      'YOLO real-time object detection — sub-100ms obstacle identification',
      'Multi-threaded concurrency-safe C++ firmware on Arduino IDE',
      'Android companion with live audio alerts & navigation feedback',
    ],
  },
  {
    id: 'open-bci-eeg',
    title: 'Open-BCI EEG → Text Translation & Robotic Implementation',
    subtitle: '🔬 Active Research — BCI Signal Processing + Robotics Commercialization',
    description:
      'An active research project translating raw EEG brainwave signals captured via OpenBCI hardware into text commands, with further investigation into robotic control implementations. Exploring signal processing pipelines, NLP decoding strategies, and real-world commercialization pathways for non-invasive BCI technology.',
    longDescription:
      'Actively researching novel approaches to decode EEG waveforms (alpha, beta, theta, delta bands) into structured text using signal processing and transformer-based decoders. The research explores direct robotic actuation from thought — a potential step toward non-invasive brain-computer interfaces for accessibility and industrial applications. Developing new strategy around commercialization — targeting assistive technology, neurorehabilitation, and human-robot collaboration markets.',
    tags: ['OpenBCI', 'EEG', 'Python', 'MATLAB', 'Signal Processing', 'NLP', 'Transformers', 'Robotics', 'BCI', 'Neurotechnology', 'MNE-Python'],
    category: ['Research', 'AI/ML', 'Embedded'],
    status: 'Active Research',
    statusLabel: '🔬 Actively Researching',
    isResearch: true,
    repoUrl: 'https://github.com/ankit-sengupta05/Open-BCI-EEG-To-Text',
    highlights: [
      'OpenBCI hardware integration for non-invasive EEG signal capture',
      'Multi-band signal processing: alpha, beta, theta, delta wave analysis',
      'Transformer-based EEG-to-text decoding pipeline under development',
      'Robotic control actuation from decoded thought signals',
      'Commercialization strategy: assistive tech, neurorehabilitation, human-robot collaboration',
      'Actively exploring new architectures and real-world deployment approaches',
    ],
  },
  {
    id: 'smart-agriculture',
    title: 'Smart Agriculture Assistant',
    subtitle: 'AI-Powered Crop Analysis & Farmer-Buyer Marketplace',
    description:
      'AI-powered platform connecting farmers and buyers through intelligent crop analysis, disease detection via OpenCV, and ML-driven pricing logic with a Django REST marketplace backend.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Django', 'Pandas', 'REST API', 'Computer Vision'],
    category: ['AI/ML', 'Backend'],
    status: 'Shipped',
    highlights: [
      'TensorFlow crop disease classification with confidence scoring',
      'OpenCV disease detection pipeline',
      'Django REST marketplace connecting farmers with buyers',
    ],
  },
  {
    id: 'smart-budget',
    title: 'Smart Budget Manager',
    subtitle: 'Zero-Effort Expense Tracking via Bank SMS Parsing',
    description:
      'Zero-effort expense tracking by securely parsing bank transaction SMS on Android. Real-time financial insights with Firebase auth and encrypted cloud backup.',
    tags: ['Android', 'Kotlin', 'Java', 'Firebase', 'Firebase Auth'],
    category: ['Mobile'],
    status: 'Shipped',
    highlights: [
      'Automatic expense categorization from bank SMS',
      'Real-time dashboard with visual breakdowns',
      'Firebase auth + encrypted cloud backup',
    ],
  },
  {
    id: 'ai-mental-health',
    title: 'AI Mental Health Chatbot + OCR Scanner',
    subtitle: 'Emotion Intelligence + Medical Report Parsing',
    description:
      'TensorFlow sentiment analysis for real-time emotional state detection, combined with Pytesseract OCR for extracting and cross-referencing medical report data.',
    tags: ['Python', 'TensorFlow', 'Pytesseract', 'OCR', 'Pandas', 'NLP', 'Sentiment Analysis'],
    category: ['AI/ML'],
    status: 'Shipped',
    highlights: [
      'TensorFlow NLP for real-time emotional state detection',
      'Pytesseract OCR medical report extraction',
      'Cross-references health info with curated medical datasets',
    ],
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const allCategories = ['All', 'AI/ML', 'Backend', 'Frontend', 'Mobile', 'Embedded', 'Security', 'Research'] as const;
