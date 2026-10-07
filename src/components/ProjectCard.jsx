import { useEffect, useState } from 'react';

export default function ProjectCard({ project, index }) {
  const isMovieHub = project.title === 'Movie Hub';
  const isMernStore = project.title === 'MERN E-Commerce Store';

  const movieHubImages = [
    '/project-images/movie-hub-1.png',
    '/project-images/movie-hub-2.png',
    '/project-images/movie-hub-3.png',
    '/project-images/movie-hub-4.png',
    '/project-images/movie-hub-5.png',
  ];

  const mernStoreImages = [
    '/project-images/mern-ecommerce.png',
    '/project-images/mern-ecommerce2.png',
    '/project-images/mern-ecommerce3.png',
    '/project-images/mern-ecommerce4.png',
    '/project-images/mern-ecommerce5.png',
  ];

  const images = isMovieHub
    ? movieHubImages
    : isMernStore
      ? mernStoreImages
      : project.image
        ? [project.image]
        : [];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if ((!isMovieHub && !isMernStore) || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isMovieHub, isMernStore, images.length]);

  const goToPrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <article
      className={`project-card ${
        project.featured ? 'project-card--featured' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* IMAGE */}
      <div
        className="project-card__image"
        style={{ background: project.gradient }}
      >
        {images.length > 0 && (
          <img
            src={images[currentImage]}
            alt={`${project.title} screenshot ${currentImage + 1}`}
            className="project-card__image-img"
          />
        )}

        {/* Dark image gradient */}
        <div className="project-card__image-gradient" />

        {/* Top information */}
        <div className="project-card__top">
          <span className="project-card__number">
            {String(index + 1).padStart(2, '0')}
          </span>

          {project.featured && (
            <span className="project-card__badge">
              <span className="project-card__badge-dot" />
              Featured
            </span>
          )}
        </div>

        {/* Slider controls */}
        {(isMovieHub || isMernStore) && images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous screenshot"
              className="project-card__arrow project-card__arrow--left"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next screenshot"
              className="project-card__arrow project-card__arrow--right"
            >
              ›
            </button>

            <div className="project-card__dots">
              {images.map((_, imageIndex) => (
                <button
                  key={imageIndex}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImage(imageIndex);
                  }}
                  aria-label={`Go to screenshot ${imageIndex + 1}`}
                  className={`project-card__dot ${
                    currentImage === imageIndex
                      ? 'project-card__dot--active'
                      : ''
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Hover links */}
        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--primary"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="project-card__body">
        <div className="project-card__heading">
          <div>
            <span className="project-card__eyebrow">
              {project.featured ? 'Featured Project' : 'Project'}
            </span>

            <h3 className="project-card__title">
              {project.title}
            </h3>
          </div>

          <span className="project-card__count">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom actions */}
        <div className="project-card__footer">
          <div className="project-card__footer-line" />

          <div className="project-card__actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__action project-card__action--primary"
              >
                View Project
                <span>→</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__github"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}