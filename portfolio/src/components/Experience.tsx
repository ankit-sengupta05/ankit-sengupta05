import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../utils/variants';
import './Experience.css';

const TIMELINE = [
  {
    period: '2023 — Present',
    role: 'Freelance Video Editor & Content Strategist',
    company: 'Editor Cyclops',
    companyUrl: 'https://editorcyclops.vercel.app/',
    type: 'Self-Employed · Remote',
    description:
      'Independently run an end-to-end video editing and content strategy practice serving 10+ creator-economy clients. Fluent in Devin Jatho-style editing — rhythm-locked cuts, deliberate colour contrast, beat-synced motion, and raw hook-first energy.',
    achievements: [
      '50+ projects delivered · 100% client satisfaction',
      'Apple-style Glass UI / liquid-glass animations for app promos',
      'Data-driven editing strategy: pacing, hooks, colour tuned to platform',
      'Premiere Pro · After Effects · DaVinci Resolve · Motion Graphics',
    ],
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Design', 'Content Strategy'],
  },
];

const ACADEMICS = [
  {
    period: '2024 — 2028',
    degree: 'B.Tech Computer Science (AI & ML)',
    institution: 'VIT Amaravati',
    grade: 'CGPA: 8.22 / 10',
    highlights: [
      'Smart Vision Aid — Selected for VIT Internal Expo 2025',
      'Gemma 4 Good Hackathon — Kaggle × Google DeepMind',
      'Microsoft Teams Hackathon — MeetMind',
      'Security Hackathon — mesh_guard AgentOps',
    ],
  },
];



export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section experience" ref={ref} aria-label="Work experience and education">
      <div className="container">
        <motion.div
          className="experience__header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <span className="section-label">Experience</span>
          <h2>
            Where I've
            <br />
            <span className="text-gradient">been building</span>
          </h2>
        </motion.div>

        <div className="experience__body">
          {/* Work experience */}
          <div className="experience__col">
            <motion.h3
              className="experience__col-title"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
            >
              Work
            </motion.h3>

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.role}
                className="exp-card glass-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                itemScope
                itemType="https://schema.org/WorkExperience"
              >
                <div className="exp-card__period">{item.period}</div>
                <div className="exp-card__main">
                  <h4 className="exp-card__role" itemProp="roleName">{item.role}</h4>
                  <div className="exp-card__company">
                    <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" itemProp="name">
                      {item.company}
                    </a>
                    <span className="exp-card__type">{item.type}</span>
                  </div>
                  <p className="exp-card__desc">{item.description}</p>
                  <ul className="exp-card__achievements" aria-label="Key achievements">
                    {item.achievements.map(a => (
                      <li key={a} className="exp-card__achievement">{a}</li>
                    ))}
                  </ul>
                  <div className="tag-scroll">
                    {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="experience__col">
            <motion.h3
              className="experience__col-title"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Education
            </motion.h3>

            {ACADEMICS.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="exp-card glass-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1 }}
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
              >
                <div className="exp-card__period">{edu.period}</div>
                <div className="exp-card__main">
                  <h4 className="exp-card__role" itemProp="name">{edu.degree}</h4>
                  <div className="exp-card__company">
                    <span itemProp="educationalLevel">{edu.institution}</span>
                    <span className="exp-card__type">{edu.grade}</span>
                  </div>
                  <ul className="exp-card__achievements" style={{ marginTop: 16 }} aria-label="Academic highlights">
                    {edu.highlights.map(h => (
                      <li key={h} className="exp-card__achievement">{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Currently Building */}
            <motion.div
              className="exp-card exp-card--building glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="exp-card__period" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="badge-research" style={{ margin: 0 }}>
                  <span className="dot" aria-hidden="true" />
                  Active Now
                </span>
              </div>
              <div className="exp-card__main">
                <h4 className="exp-card__role">🔬 EEG → Text BCI Research</h4>
                <div className="exp-card__company">
                  <span>Open-BCI + Robotics</span>
                  <span className="exp-card__type">Independent Research</span>
                </div>
                <p className="exp-card__desc" style={{ marginTop: 12 }}>
                  Actively researching novel approaches to decode OpenBCI EEG brainwave signals
                  into text and robotic control commands. Developing commercialization strategy
                  for assistive tech &amp; neurorehabilitation markets.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
