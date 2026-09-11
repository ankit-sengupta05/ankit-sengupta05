import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/ankit-sengupta05', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/Sengupta-ankit', icon: '◈' },
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ankit.sengupta05@gmail.com', icon: '◉' },
  { label: 'Editor Cyclops', href: 'https://editor-cyclops.vercel.app/', icon: '▶' },
];

const STATS = [
  { value: '12+', label: 'Projects Shipped' },
  { value: '8.22', label: 'CGPA' },
  { value: '3+', label: 'Years Editing' },
  { value: '50+', label: 'Client Deliveries' },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{x:number;y:number;vx:number;vy:number;a:number}> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        a: Math.random() * 0.4 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="top" className="hero" aria-label="Hero — Ankit Sengupta introduction">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--tl" aria-hidden="true" />
      <div className="hero__orb hero__orb--br" aria-hidden="true" />

      <div className="container hero__content">
        <motion.div
          className="hero__badge-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="hero__available">
            <span className="hero__available-dot" aria-hidden="true" />
            Open to Internships &amp; Collaborations
          </span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          itemProp="name"
        >
          Ankit
          <br />
          <span className="text-gradient">Sengupta</span>
        </motion.h1>

        <motion.div
          className="hero__role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-label="Roles and specializations"
        >
          <TypeAnimation
            sequence={[
              'AI Engineer · RAG Pipelines & LangGraph', 2000,
              'EEG/BCI Researcher · OpenBCI Signal Processing', 2000,
              'Backend Developer · FastAPI · Django · Node.js', 2000,
              'Distributed Systems · Docker · Kubernetes', 2000,
              'Embedded IoT · ESP32 · YOLO · OpenCV', 2000,
              'Full-Stack Developer · React · Next.js · Flutter', 2000,
              'Video Editor · Editor Cyclops · Motion Design', 2000,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            style={{ display: 'block' }}
          />
        </motion.div>

        <motion.p
          className="hero__bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          CS sophomore at <strong>VIT Amaravati</strong> (AI &amp; ML, Class of 2028) —
          building distributed AI systems, LangGraph pipelines, and production-grade
          backends. Actively researching <strong>EEG-to-text BCI systems</strong> with
          commercialization potential. From silicon to software to screen.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            aria-label="View Ankit Sengupta's projects"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            aria-label="Contact Ankit Sengupta"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          aria-label="Social links"
        >
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={label}
              title={label}
            >
              <span className="hero__social-icon" aria-hidden="true">{icon}</span>
              <span className="hero__social-label">{label}</span>
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          aria-label="Key statistics"
        >
          {STATS.map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
