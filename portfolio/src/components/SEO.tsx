import { Helmet } from 'react-helmet-async';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://ankit-sengupta05.vercel.app/#person',
      name: 'Ankit Sengupta',
      alternateName: ['ankit-sengupta05', 'Ankit Sengupta VIT'],
      description:
        'AI Engineer & Full-Stack Developer at VIT Amaravati specializing in RAG pipelines, LangGraph orchestration, distributed systems, EEG/BCI research, and embedded IoT. Open to internships and collaborations.',
      url: 'https://ankit-sengupta05.vercel.app',
      email: 'ankit.sengupta05@gmail.com',
      image: 'https://github.com/ankit-sengupta05.png',
      sameAs: [
        'https://github.com/ankit-sengupta05',
        'https://linkedin.com/in/Sengupta-ankit',
        'https://www.instagram.com/editorcyclops/',
        'https://editor-cyclops.vercel.app/',
      ],
      knowsAbout: [
        'Artificial Intelligence', 'Machine Learning', 'RAG Pipelines', 'AI Agents',
        'LangGraph', 'LangChain', 'LangSmith', 'Large Language Models',
        'FastAPI', 'Django', 'Node.js', 'Distributed Systems', 'Docker', 'Kubernetes',
        'EEG Signal Processing', 'Brain-Computer Interface', 'OpenBCI',
        'React', 'Next.js', 'TypeScript', 'Python',
        'ESP32', 'Arduino', 'IoT', 'Computer Vision', 'YOLO', 'OpenCV',
        'Flutter', 'Android', 'Firebase',
        'Neo4j', 'Redis', 'MongoDB', 'PostgreSQL', 'ChromaDB', 'FAISS', 'Qdrant',
        'Hydrodynamic Simulation', 'Flood Modeling', 'Satellite Remote Sensing',
        'Video Editing', 'Motion Design', 'Content Strategy',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'VIT Amaravati',
        url: 'https://vitap.ac.in',
      },
      hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'B.Tech Computer Science (AI & ML), Class of 2028, CGPA 8.22' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ankit-sengupta05.vercel.app/#website',
      url: 'https://ankit-sengupta05.vercel.app',
      name: 'Ankit Sengupta — AI Engineer & Developer Portfolio',
      description: 'Portfolio of Ankit Sengupta — AI Engineer, RAG Pipeline Developer, LangGraph specialist, EEG/BCI researcher, and Embedded IoT developer at VIT Amaravati.',
      publisher: { '@id': 'https://ankit-sengupta05.vercel.app/#person' },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Ankit Sengupta?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ankit Sengupta is an AI Engineer and Full-Stack Developer studying B.Tech Computer Science (AI & ML) at VIT Amaravati (Class of 2028). He specializes in RAG pipelines, LangGraph orchestration, distributed AI systems, EEG/BCI research, and embedded IoT.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Ankit Sengupta\'s research focus?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ankit Sengupta is actively researching EEG-to-text translation using OpenBCI hardware and exploring robotic implementation of brain-computer interface signals. He is developing novel signal processing pipelines and transformer-based decoders with commercialization potential in assistive technology and neurorehabilitation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What projects has Ankit Sengupta built?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ankit Sengupta has built Cyborg AGI (local offline AGI OS for the Gemma 4 Good Hackathon), Flood-Guard AI (hydrodynamic dam-break simulation with satellite validation), NewsAlphaAI (8-node LangGraph stock prediction pipeline), mesh_guard (AI swarm security framework), MeetMind (Microsoft Teams AI co-pilot), Comic Companion (geolocation comedy matching platform), VIT-AP Eats (campus food delivery PWA), and Smart Vision Aid (ESP32 AI smart glasses selected for VIT Internal Expo).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Ankit Sengupta available for internships?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ankit Sengupta is actively open to internship opportunities in AI/ML engineering, backend development, full-stack development, and embedded systems. Contact him at ankit.sengupta05@gmail.com or via LinkedIn at linkedin.com/in/Sengupta-ankit.',
          },
        },
      ],
    },
  ],
};

export function SEO() {
  const title = 'Ankit Sengupta — AI Engineer, RAG Pipelines & LangGraph Developer | VIT Amaravati';
  const description =
    'Portfolio of Ankit Sengupta — AI Engineer specializing in RAG pipelines, LangGraph distributed systems, EEG/BCI research, and embedded IoT. Built Cyborg AGI, Flood-Guard AI, mesh_guard, MeetMind & more. B.Tech CS AI/ML at VIT Amaravati. Open to internships 2025–2026.';
  const keywords = [
    'Ankit Sengupta', 'Ankit Sengupta VIT Amaravati', 'ankit-sengupta05',
    'AI Engineer India', 'RAG Pipeline Developer', 'LangGraph Developer',
    'LangChain Developer', 'AI Agents Developer', 'Machine Learning Engineer India',
    'EEG BCI Research India', 'OpenBCI Developer', 'Brain Computer Interface India',
    'Flood prediction AI', 'Hydrodynamic simulation AI', 'Dam break simulation',
    'Comic Companion app', 'VIT-AP Eats', 'Campus food delivery Next.js',
    'Cyborg AGI', 'Local AI OS', 'Offline AI system',
    'mesh_guard AI security', 'Prompt injection firewall',
    'MeetMind Microsoft Teams AI', 'Smart Vision Aid ESP32',
    'FastAPI developer', 'Django developer India', 'Next.js developer India',
    'Flutter developer India', 'ESP32 IoT developer',
    'Docker Kubernetes India', 'Distributed systems developer',
    'VIT Amaravati CS AI ML 2028', 'Open to internship 2025 2026',
    'Hire AI Engineer India', 'Full Stack Developer VIT',
    'Video editor Editor Cyclops', 'Motion designer India',
  ].join(', ');
  const url = 'https://ankit-sengupta05.vercel.app';
  const image = 'https://github.com/ankit-sengupta05.png';

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ankit Sengupta" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Ankit Sengupta Portfolio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ankit_sengupta05" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Amaravati, Andhra Pradesh, India" />
      <meta name="ICBM" content="16.5741, 80.3564" />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
    </Helmet>
  );
}
