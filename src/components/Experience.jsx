import { experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

function TimelineItem({ item, index, isLast }) {
  const itemRef = useScrollReveal();

  return (
    <div
      ref={itemRef}
      className="timeline__item scroll-reveal"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="timeline__marker">
        <span className="timeline__dot" />
        {!isLast && <span className="timeline__line" />}
      </div>
      <div className="timeline__content">
        <div className="timeline__header">
          <div>
            <h3 className="timeline__role">{item.role}</h3>
            <p className="timeline__company">{item.company}</p>
          </div>
          <span className="timeline__period">{item.period}</span>
        </div>
        <p className="timeline__description">{item.description}</p>
        <ul className="timeline__highlights">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div ref={headerRef} className="section__header scroll-reveal">
          <span className="section__label">Experience</span>
          <h2 className="section__title">Where I&apos;ve Worked</h2>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
