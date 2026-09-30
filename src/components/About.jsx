import { stats, personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={headerRef} className="section__header scroll-reveal">
          <span className="section__label">About Me</span>
          <h2 className="section__title">Crafting Digital Experiences</h2>
        </div>

        <div className="about__grid">
          <div ref={contentRef} className="about__content scroll-reveal">
            <p>
              I&apos;m a passionate full-stack developer with over 5 years of experience
              building web applications that are fast, accessible, and user-friendly.
              I specialize in the React ecosystem and modern backend technologies.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the developer community.
              I believe in writing clean, maintainable code and creating products that
              make a real difference.
            </p>
            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-label">Location</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Status</span>
                <span className="about__status">
                  <span className="about__status-dot" />
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="about__stats scroll-reveal">
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
