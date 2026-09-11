import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, allCategories, type Project } from '../data/projects';
import { fadeUp } from '../utils/variants';
import './Projects.css';


function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [cardRef, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.article
      ref={cardRef}
      className={`project-card ${project.isResearch ? 'project-card--research' : ''} ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      itemScope
      itemType="https://schema.org/SoftwareSourceCode"
    >
      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__meta">
          {project.badge && (
            <span className="tag tag-highlight project-card__badge">{project.badge}</span>
          )}
          {project.isResearch && (
            <span className="badge-research">
              <span className="dot" aria-hidden="true" />
              Active Research
            </span>
          )}
          {!project.isResearch && !project.badge && (
            <span className="tag">{project.status}</span>
          )}
        </div>
        <h3 className="project-card__title" itemProp="name">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="project-card__desc" itemProp="description">{project.description}</p>

      {/* Highlights */}
      {project.highlights && (
        <AnimatePresence>
          {(expanded || project.featured) && (
            <motion.ul
              className="project-card__highlights"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              aria-label={`${project.title} key highlights`}
            >
              {project.highlights.map(h => (
                <li key={h} className="project-card__highlight-item">
                  <span className="project-card__highlight-dot" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}

      {/* Tags */}
      <div className="project-card__tags tag-scroll" aria-label="Technologies used">
        {project.tags.slice(0, 8).map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
        {project.tags.length > 8 && (
          <span className="tag">+{project.tags.length - 8} more</span>
        )}
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <div className="project-card__links">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary project-card__link"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              ⌥ GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary project-card__link"
              aria-label={`View ${project.title} live demo`}
            >
              ↗ Live Demo
            </a>
          )}
        </div>

        {project.highlights && !project.featured && (
          <button
            className="project-card__expand"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse project details' : 'Expand project details'}
          >
            {expanded ? '↑ Less' : '↓ Details'}
          </button>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory as any));

  return (
    <section id="projects" className="section projects" ref={ref} aria-label="Projects by Ankit Sengupta">
      <div className="container">
        <motion.div
          className="projects__header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <span className="section-label">Work</span>
          <h2>
            Projects that push
            <br />
            <span className="text-gradient">boundaries</span>
          </h2>
          <p className="projects__subtitle">
            From distributed AI systems and satellite-validated flood prediction, to
            EEG brain-computer interface research and campus delivery platforms —
            every project solves a real problem.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="projects__filters"
          role="tablist"
          aria-label="Filter projects by category"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          {allCategories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`projects__filter-btn ${activeCategory === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="projects__grid" role="tabpanel" aria-label={`${activeCategory} projects`}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
