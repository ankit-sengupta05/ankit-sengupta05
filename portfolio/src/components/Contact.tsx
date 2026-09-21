import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'ankit.sengupta05@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ankit.sengupta05@gmail.com',
    icon: '✉',
    desc: 'Best for project inquiries & internship opportunities',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/Sengupta-ankit',
    href: 'https://linkedin.com/in/Sengupta-ankit',
    icon: '◈',
    desc: 'Professional network & resume',
  },
  {
    label: 'GitHub',
    value: 'github.com/ankit-sengupta05',
    href: 'https://github.com/ankit-sengupta05',
    icon: '⌥',
    desc: 'All open-source projects & code',
  },
  {
    label: 'Editor Cyclops',
    value: 'editorcyclops.vercel.app',
    href: 'https://editorcyclops.vercel.app/',
    icon: '▶',
    desc: 'Video editing portfolio',
  },
];

const OPEN_TO = [
  '💼 AI/ML Internships',
  '🤖 AI Agent Development',
  '⚡ Backend Engineering',
  '🔬 BCI/Neurotechnology Research',
  '🏆 Hackathon Teams',
  '📂 Open Source Contributions',
  '🎬 Video Editing Projects',
];

export function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="section contact" ref={ref} aria-label="Contact Ankit Sengupta">
      <div className="container">
        <motion.div
          className="contact__inner"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Contact</span>
          <h2>
            Let's build something
            <br />
            <span className="text-gradient">that matters</span>
          </h2>
          <p className="contact__lead">
            I'm actively open to internship opportunities, research collaborations,
            and hackathon teams. Whether you're building the next AI product or
            exploring brain-computer interfaces — reach out.
          </p>

          <div className="contact__open-to">
            <span className="contact__open-label">Open to</span>
            <div className="contact__open-tags tag-scroll">
              {OPEN_TO.map(t => (
                <span key={t} className="tag tag-highlight">{t}</span>
              ))}
            </div>
          </div>

          <div className="contact__links">
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact__link-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                aria-label={`${link.label}: ${link.value} — ${link.desc}`}
              >
                <span className="contact__link-icon" aria-hidden="true">{link.icon}</span>
                <div className="contact__link-info">
                  <span className="contact__link-label">{link.label}</span>
                  <span className="contact__link-value">{link.value}</span>
                  <span className="contact__link-desc">{link.desc}</span>
                </div>
                <span className="contact__link-arrow" aria-hidden="true">↗</span>
              </motion.a>
            ))}
          </div>

          <motion.p
            className="contact__quote"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            "The best way to predict the future is to build it." 🚀
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">AS</span>
          <span className="footer__name">Ankit Sengupta</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Ankit Sengupta · VIT Amaravati · AI Engineer · Open to Internships
        </p>
        <div className="footer__links">
          <a href="https://github.com/ankit-sengupta05" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GitHub</a>
          <a href="https://linkedin.com/in/Sengupta-ankit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">LinkedIn</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ankit.sengupta05@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Ankit Sengupta">Email</a>
        </div>
      </div>
    </footer>
  );
}
