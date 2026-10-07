import { SectionHeading } from './SectionHeading';

const principles = [
  'Understand the problem',
  'Design before coding',
  'Keep systems simple',
  'Test important behavior',
  'Improve continuously',
];

export function Principles() {
  return (
    <section className="section-shell principles-section">
      <div className="container principles-layout">
        <div>
          <SectionHeading
            number="02"
            eyebrow="Engineering mindset"
            title="How I think"
            description="A few principles I try to bring to every problem."
          />
        </div>
        <ol className="principle-list">
          {principles.map((principle, i) => (
            <li key={principle}>
              <span>0{i + 1}</span>
              <strong>{principle}</strong>
              <span>↗</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
