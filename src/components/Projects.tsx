import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Braces, ChevronRight, ExternalLink, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ProjectCategory } from '../types/project';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';

const filters: Array<'All' | ProjectCategory> = [
  'All',
  'Backend',
  'Frontend',
  'Mobile',
  'Database',
  'AI',
  'University',
  'Game',
  'Web',
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [selected, setSelected] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const current = projects.find((project) => project.id === selected);
  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  );

  useEffect(() => {
    if (!current) return;
    closeButtonRef.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelected(null);
      if (event.key !== 'Tab') return;
      const dialog = document.querySelector<HTMLElement>('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [current]);
  return (
    <section className="section-shell projects-section" id="projects">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="Selected work"
          title="Projects, with context."
          description="A small, honest selection. Each card opens the details currently available in its public repository."
        />
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? 'filter-active' : ''}
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filtered.map((project, i) => (
            <motion.article
              layout
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08 }}
            >
              <button
                className="project-art"
                onClick={() => setSelected(project.id)}
                aria-label={`Open ${project.title} case study`}
              >
                <span className="project-art-index">
                  PROJECT / {String(i + 1).padStart(3, '0')}
                </span>
                <span className="project-art-arrow">
                  <ArrowUpRight size={19} />
                </span>
                <div className="art-code">
                  <Braces size={38} strokeWidth={1.2} />
                  <span>{project.title.toUpperCase()}</span>
                  <small>{project.githubUrl ? 'PUBLIC REPOSITORY' : 'LINK UNAVAILABLE'}</small>
                  <i>{project.technologies.slice(0, 2).join(' · ') || 'DETAILS PENDING'}</i>
                </div>
              </button>
              <div className="project-content">
                <div className="project-meta">
                  <span>REPOSITORY SPOTLIGHT</span>
                  <span>
                    {String(i + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  {project.technologies.length === 0 && <span>Details pending</span>}
                </div>
                <div className="project-actions">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span className="project-link-unavailable">GitHub link unavailable</span>
                  )}
                  <button onClick={() => setSelected(project.id)}>
                    Case study <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="project-honesty">
          Project summaries reflect the public repository details currently available. Missing
          source files or links are noted in each case study.
        </p>
      </div>
      <AnimatePresence>
        {current && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
            >
              <button
                ref={closeButtonRef}
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close case study"
              >
                <X />
              </button>
              <p className="eyebrow">
                <span /> REPOSITORY CASE STUDY
              </p>
              <h2 id="modal-title">{current.title}</h2>
              <p className="modal-lede">{current.description}</p>
              <div className="case-grid">
                <article>
                  <span>01 / PROBLEM</span>
                  <p>{current.problem}</p>
                </article>
                <article>
                  <span>02 / APPROACH</span>
                  <p>{current.solution}</p>
                </article>
                <article className="case-architecture">
                  <span>03 / ARCHITECTURE AS DESCRIBED</span>
                  <div>
                    {current.architecture.map((step, index) => (
                      <div key={step} className="architecture-step">
                        {index > 0 && <i aria-hidden="true">↓</i>}
                        <b>{step}</b>
                      </div>
                    ))}
                  </div>
                </article>
                <article>
                  <span>04 / IMPLEMENTATION STATUS</span>
                  <p>{current.note}</p>
                </article>
              </div>
              {current.githubUrl && (
                <a
                  className="button button-primary"
                  href={current.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View public repository <ArrowUpRight size={16} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
