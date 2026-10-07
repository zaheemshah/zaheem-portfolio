import { useState } from 'react';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const filteredProjects =
    filter === 'featured'
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <section id="projects" className="section projects">
      <div className="container">

        {/* ===== SECTION HEADER ===== */}
        <div ref={headerRef} className="projects__header scroll-reveal">
          <div className="projects__header-left">
            <span className="projects__eyebrow">
              <span className="projects__eyebrow-line" />
              Selected Work
            </span>

            <h2 className="projects__title">
              Things I've
              <span> built & shipped.</span>
            </h2>
          </div>

          <div className="projects__header-right">
            <p className="projects__intro">
              A selection of projects where design, engineering and
              problem-solving come together.
            </p>

            <div className="projects__stats">
              <div className="projects__stat">
                <strong>{projects.length}+</strong>
                <span>Projects</span>
              </div>

              <div className="projects__stat-divider" />

              <div className="projects__stat">
                <strong>Full</strong>
                <span>Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FILTERS ===== */}
        <div className="projects__toolbar scroll-reveal">
          <div className="projects__filters">
            <button
              type="button"
              className={`projects__filter ${
                filter === 'all'
                  ? 'projects__filter--active'
                  : ''
              }`}
              onClick={() => setFilter('all')}
            >
              <span>01</span>
              All Work
            </button>

            <button
              type="button"
              className={`projects__filter ${
                filter === 'featured'
                  ? 'projects__filter--active'
                  : ''
              }`}
              onClick={() => setFilter('featured')}
            >
              <span>02</span>
              Featured
            </button>
          </div>

          <span className="projects__count">
            {String(filteredProjects.length).padStart(2, '0')} Projects
          </span>
        </div>

        {/* ===== PROJECTS ===== */}
        <div
          ref={gridRef}
          className="projects__grid scroll-reveal"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ===== BOTTOM STATEMENT ===== */}
        <div className="projects__bottom scroll-reveal">
          <div className="projects__bottom-line" />

          <div className="projects__bottom-content">
            <span>MORE PROJECTS</span>

            <p>
              Always building something new.
            </p>

            <span className="projects__bottom-arrow">↓</span>
          </div>
        </div>

      </div>
    </section>
  );
}