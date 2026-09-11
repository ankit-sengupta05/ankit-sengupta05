import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../utils/variants';
import './Experience.css';

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
      </div>
    </section>
  );
}
