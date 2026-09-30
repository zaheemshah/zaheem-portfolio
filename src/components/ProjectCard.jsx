import { useEffect, useState } from 'react';

export default function ProjectCard({ project, index }) {
  const isMovieHub = project.title === 'Movie Hub';

  const movieHubImages = [
    '/project-images/movie-hub-1.png',
    '/project-images/movie-hub-2.png',
    '/project-images/movie-hub-3.png',
    '/project-images/movie-hub-4.png',
    '/project-images/movie-hub-5.png',
  ];

  const images = isMovieHub ? movieHubImages : project.image ? [project.image] : [];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!isMovieHub || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isMovieHub, images.length]);

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

        {isMovieHub && images.length > 1 && (
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
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'rgba(0,0,0,0.65)',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 3,
                fontSize: '22px',
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
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'rgba(0,0,0,0.65)',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 3,
                fontSize: '22px',
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
                display: 'flex',
                gap: '6px',
                zIndex: 3,
              }}
            >
              {images.map((_, imageIndex) => (
                <button
                  key={imageIndex}
                  type="button"
                  onClick={() => setCurrentImage(imageIndex)}
                  aria-label={`Show screenshot ${imageIndex + 1}`}
                  style={{
                    width: currentImage === imageIndex ? '18px' : '7px',
                    height: '7px',
                    padding: 0,
                    border: 'none',
                    borderRadius: '10px',
                    background:
                      currentImage === imageIndex
                        ? '#ffffff'
                        : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
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
                aria-label={`View ${project.title} live demo`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`View ${project.title} source code`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-1.23-1.695-.15-.465-.51-.99-.87-1.2-.3-.21-.72-.72-.015-.735.675-.015 1.155.63 1.32.87.765 1.29 1.98.915 2.46.69.075-.555.3-.93.54-1.14-1.92-.225-3.93-.96-3.93-4.245 0-.93.33-1.695.87-2.295-.09-.225-.39-1.095.09-2.28 0 0 .72-.225 2.4.87.69-.195 1.455-.285 2.205-.285.75 0 1.515.09 2.205.285 1.68-1.095 2.4-.87 2.4-.87.48 1.185.18 2.055.09 2.28.54.6.87 1.365.87 2.295 0 3.3-2.01 4.02-3.93 4.245.315.27.585.78.585 1.59 0 1.155-.015 2.07-.015 2.355 0 .225.15.495.585.405A8.63 8.63 0 0020 12c0-4.41-3.59-8-8-8z" />
                </svg>
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