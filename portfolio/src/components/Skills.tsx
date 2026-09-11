import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../utils/variants';
import './Skills.css';

const SKILLS_GRID = [
  {
    category: '🤖 AI & Intelligence',
    items: ['RAG Pipelines', 'AI Agents', 'LangGraph', 'LangChain', 'LangSmith', 'TensorFlow', 'YOLO', 'OpenCV', 'XGBoost', 'scikit-learn', 'Pandas'],
  },
  {
    category: '🔗 LLM Infrastructure',
    items: ['ChromaDB', 'FAISS', 'Qdrant', 'HuggingFace', 'Gemma 4', 'MedGemma 4B', 'Phi-3', 'Sentence Transformers', 'Vector Embeddings', 'Prompt Engineering'],
  },
  {
    category: '🐳 Systems & Infrastructure',
    items: ['Docker', 'Kubernetes', 'Distributed Systems', 'Concurrency & Multi-threading', 'Self-Healing Architecture', 'Fault Tolerance', 'WebSockets', 'REST APIs'],
  },
  {
    category: '🌐 Backend & Web',
    items: ['FastAPI', 'Django', 'Flask', 'Node.js', 'MongoDB', 'PostgreSQL', 'Neo4j', 'Redis', 'Firebase', 'APScheduler'],
  },
  {
    category: '⚛️ Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Vite', 'TailwindCSS', 'HTML5', 'CSS3', 'Framer Motion'],
  },
  {
    category: '💻 Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'Java', 'Kotlin', 'Dart', 'MATLAB'],
  },
  {
    category: '📱 Mobile & Embedded',
    items: ['Flutter', 'Android', 'Kotlin', 'ESP32', 'Arduino', 'IoT Sensors', 'Expo', 'React Native'],
  },
  {
    category: '🔬 Research',
    items: ['OpenBCI', 'EEG Signal Processing', 'MNE-Python', 'BCI Systems', 'Hydrodynamic Simulation', 'Google Earth Engine', 'Satellite Remote Sensing'],
  },
];

const SKILL_BARS = [
  { name: 'Python / AI Engineering', percentage: 90 },
  { name: 'LangGraph / LangChain / RAG', percentage: 84 },
  { name: 'TensorFlow / OpenCV / YOLO / XGBoost', percentage: 82 },
  { name: 'Django / FastAPI / Flask / Node.js', percentage: 80 },
  { name: 'Docker / Kubernetes / Distributed Systems', percentage: 76 },
  { name: 'Flutter / Dart / Firebase', percentage: 75 },
  { name: 'Android / Kotlin / Firebase', percentage: 72 },
  { name: 'ESP32 / Arduino / Embedded C++', percentage: 70 },
  { name: 'JavaScript / TypeScript / React', percentage: 70 },
  { name: 'Video Editing / Motion Design (Editor Cyclops)', percentage: 88 },
];

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="section skills" ref={ref} aria-label="Ankit Sengupta's technical skills">
      <div className="container">
        <motion.div
          className="skills__header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <span className="section-label">Arsenal</span>
          <h2>
            Technologies I
            <br />
            <span className="text-gradient">work with</span>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {SKILLS_GRID.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skills__group glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.07 }}
            >
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__tags tag-scroll">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.07 + ii * 0.03, duration: 0.3 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills__bars"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="skills__group-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Proficiency Levels</h3>
          {SKILL_BARS.map((skill, index) => (
            <div key={skill.name} className="skill-bar">
              <div className="skill-bar__header">
                <span className="skill-bar__name">{skill.name}</span>
                <span className="skill-bar__percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar__track">
                <motion.div
                  className="skill-bar__fill"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: skill.percentage / 100 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
