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
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headerRef} className="section__header scroll-reveal">
          <span className="section__label">Portfolio</span>
          <h2 className="section__title">Featured Projects</h2>
        </div>

        <div className="projects__filters scroll-reveal">
          <button
            type="button"
            className={`projects__filter ${filter === 'all' ? 'projects__filter--active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            type="button"
            className={`projects__filter ${filter === 'featured' ? 'projects__filter--active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div ref={gridRef} className="projects__grid scroll-reveal">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
