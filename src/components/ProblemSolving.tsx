import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export function ProblemSolving() {
  return (
    <section className="section-shell problem-section">
      <div className="container problem-card">
        <div>
          <p className="eyebrow">
            <span /> PROBLEM SOLVING
          </p>
          <h2>
            Enjoy the work
            <br />
            behind the answer.
          </h2>
          <p>Algorithms · Data structures · Java · Continuous practice</p>
        </div>
        <a
          className="button button-quiet"
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
        >
          View my repositories <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
