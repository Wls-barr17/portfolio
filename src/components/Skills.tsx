import { skills } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section className="section-shell" id="focus">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="Tools I’ve worked with"
          title="Skills & technologies"
          description="A working set of tools reflected in my current portfolio and project materials."
        />
        <div className="skill-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="card-index">
                0{index + 1} / {group.items.length} ITEMS
              </span>
              <h3>{group.title}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
