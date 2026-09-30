import { skillCategories, techStack } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

function SkillBar({ name, level, delay }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="skill-bar scroll-reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ '--skill-level': `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollReveal();
  const stackRef = useScrollReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div ref={headerRef} className="section__header scroll-reveal">
          <span className="section__label">Skills</span>
          <h2 className="section__title">Technologies I Work With</h2>
        </div>

        <div className="skills__categories">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="skills__category">
              <h3 className="skills__category-title">
                <span className="skills__category-icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skills__bars">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 100 + skillIndex * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={stackRef} className="skills__stack scroll-reveal">
          <h3 className="skills__stack-title">Tech Stack</h3>
          <div className="skills__tags">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="skills__tag"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
