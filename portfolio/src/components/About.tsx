import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp, stagger } from '../utils/variants';
import './About.css';


export function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="section about" ref={ref} aria-label="About Ankit Sengupta">
      <div className="container">
        <motion.div
          className="about__grid"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Left — text */}
          <div className="about__text">
            <motion.span className="section-label" variants={fadeUp}>
              About
            </motion.span>
            <motion.h2 variants={fadeUp}>
              Building systems that
              <br />
              <span className="text-gradient">matter at scale</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="about__lead">
              I'm a <strong>CS sophomore at VIT Amaravati</strong> (AI &amp; ML, Class of 2028)
              with hands-on experience designing distributed AI systems, LangGraph-orchestrated
              multi-agent pipelines, and production-grade backends — from <strong>FastAPI
              microservices</strong> to <strong>Docker + Kubernetes infrastructure</strong>.
            </motion.p>
            <motion.p variants={fadeUp}>
              My work spans the full stack — from <strong>ESP32-powered smart glasses</strong>
              with YOLO vision to <strong>LLM reasoning pipelines</strong> with RL feedback loops.
              I'm actively researching <strong>EEG-to-text translation</strong> using OpenBCI
              hardware, exploring commercialization pathways in assistive technology and
              brain-computer interface applications.
            </motion.p>
            <motion.p variants={fadeUp}>
              Beyond engineering, I run <strong>Editor Cyclops</strong> — a freelance video
              editing &amp; content strategy practice with 50+ deliveries across 10+
              creator-economy clients.
            </motion.p>

            <motion.div className="about__highlights" variants={stagger}>
              {[
                { icon: '🏅', text: 'VIT Internal Expo — Smart Vision Aid Selected' },
                { icon: '🏆', text: 'Gemma 4 Good Hackathon — Kaggle × Google DeepMind' },
                { icon: '🏆', text: 'SIH 2026 — Flood-Guard AI' },
                { icon: '🏆', text: 'Microsoft Teams Hackathon — MeetMind' },
                { icon: '🔬', text: 'Active BCI Research — EEG-to-Text + Robotics' },
              ].map(({ icon, text }) => (
                <motion.div key={text} className="about__highlight-item" variants={fadeUp}>
                  <span className="about__highlight-icon" aria-hidden="true">{icon}</span>
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Code card */}
          <motion.div className="about__code-wrap" variants={fadeUp}>
            <div className="about__code-header">
              <span className="about__code-dot" style={{ background: '#ff5f57' }} />
              <span className="about__code-dot" style={{ background: '#ffbd2e' }} />
              <span className="about__code-dot" style={{ background: '#28c840' }} />
              <span className="about__code-filename">ankit_sengupta.py</span>
            </div>
            <div className="code-block about__code-body">
              <pre aria-label="Ankit Sengupta's developer profile in Python">
                <span className="kw">class</span>{' '}
                <span className="cls">AnkitSengupta</span>:{'\n'}
                {'    '}<span className="kw">def</span>{' '}
                <span className="cls">__init__</span>(self):{'\n'}
                {'        '}self.name = <span className="str">"Ankit Sengupta"</span>{'\n'}
                {'        '}self.university = <span className="str">"VIT Amaravati · 2028"</span>{'\n'}
                {'        '}self.cgpa = <span className="num">8.22</span>{'\n'}
                {'        '}self.roles = [{'\n'}
                {'            '}<span className="str">"AI Engineer"</span>,{'\n'}
                {'            '}<span className="str">"Backend Developer"</span>,{'\n'}
                {'            '}<span className="str">"BCI Researcher"</span>,{'\n'}
                {'            '}<span className="str">"Embedded IoT Dev"</span>,{'\n'}
                {'        '}]{'\n'}
                {'        '}self.currently = [{'\n'}
                {'            '}<span className="str">"EEG → Text BCI Research"</span>,{'\n'}
                {'            '}<span className="str">"Flood-Guard AI System"</span>,{'\n'}
                {'            '}<span className="str">"Cyborg AGI OS"</span>,{'\n'}
                {'        '}]{'\n'}
                {'        '}self.status = <span className="str">"🟢 Open to Internships"</span>{'\n'}
                {'\n'}
                {'    '}<span className="kw">def</span>{' '}
                <span className="cls">say_hi</span>(self):{'\n'}
                {'        '}<span className="kw">print</span>(<span className="str">"Let's build something that matters 🚀"</span>){'\n'}
              </pre>
            </div>

            {/* Info pills */}
            <div className="about__info-pills">
              <div className="about__info-pill">
                <span className="about__info-label">University</span>
                <span className="about__info-value">VIT Amaravati</span>
              </div>
              <div className="about__info-pill">
                <span className="about__info-label">Degree</span>
                <span className="about__info-value">B.Tech CS · AI &amp; ML</span>
              </div>
              <div className="about__info-pill">
                <span className="about__info-label">CGPA</span>
                <span className="about__info-value">8.22 / 10</span>
              </div>
              <div className="about__info-pill">
                <span className="about__info-label">Status</span>
                <span className="about__info-value" style={{ color: '#aaa' }}>🟢 Open</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
