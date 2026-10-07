import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export function Journey() {
  return (
    <section className="section-shell" id="journey">
      <div className="container journey-layout">
        <div>
          <SectionHeading
            number="05"
            eyebrow="Journey"
            title="Learning in progress."
            description="The original portfolio describes a Software Engineering degree and ongoing learning, but its dated milestones could not be verified."
          />
        </div>
        <motion.div
          className="journey-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="journey-now">
            <i /> CURRENTLY
          </span>
          <h3>Software Engineering student</h3>
          <p>
            Building knowledge in software development and continuously improving problem-solving
            skills.
          </p>
          <div className="journey-rule" />
          <div className="journey-tags">
            <span>Backend development</span>
            <span>APIs & databases</span>
            <span>Continuous learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
