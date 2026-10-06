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

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <article
      className={`project-card ${
        project.featured ? 'project-card--featured' : ''
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="project-card__image"
        style={{
          background: project.gradient,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {images.length > 0 && (
          <img
            src={images[currentImage]}
            alt={`${project.title} screenshot ${currentImage + 1}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.3s ease',
            }}
          />
        )}

        {(isMovieHub || isMernStore) && images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous screenshot"
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(0, 0, 0, 0.65)',
                color: '#fff',
                fontSize: '22px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next screenshot"
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 3,
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(0, 0, 0, 0.65)',
                color: '#fff',
                fontSize: '22px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ›
            </button>

            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                display: 'flex',
                gap: '6px',
              }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                  style={{
                    width: '8px',
                    height: '8px',
                    padding: 0,
                    border: 'none',
                    borderRadius: '50%',
                    background:
                      currentImage === index
                        ? '#fff'
                        : 'rgba(255, 255, 255, 0.45)',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </>
        )}

        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {project.featured && (
          <span className="project-card__badge">Featured</span>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>

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
      </div>
    </article>
  );
}