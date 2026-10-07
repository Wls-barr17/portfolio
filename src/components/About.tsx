import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const focusAreas = ['Backend', 'Databases', 'Problem solving', 'System design'];

export function About() {
  return (
    <section className="section-shell" id="about">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="A little about me"
          title="Curious about what happens under the hood."
          description="I’m a Software Engineering student interested in backend development, APIs, databases and the architecture behind dependable systems."
        />
        <div className="about-layout">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="card-index">
              WHO I AM <span>01</span>
            </span>
            <p>
              I enjoy understanding how systems work internally, designing clear solutions, and
              steadily improving my problem-solving skills.
            </p>
            <p className="muted-copy">
              I value curiosity, discipline and the small decisions that make software easier to
              understand and maintain.
            </p>
            <div className="about-photo-gallery" aria-label="Photos of Wilson Barrera">
              <figure>
                <img src="/images/profile1.png" alt="Portrait of Wilson Barrera" loading="lazy" />
              </figure>
              <figure>
                <img
                  src="/images/profile.jpeg"
                  alt="Wilson by the New York waterfront with the Statue of Liberty in the background"
                  loading="lazy"
                />
              </figure>
            </div>
          </motion.div>
          <div className="focus-card">
            <span className="card-index">
              AREAS OF FOCUS <span>02</span>
            </span>
            <p className="focus-note">Areas I’m exploring and building experience in.</p>
            {focusAreas.map((area, index) => (
              <div className="focus-row" key={area}>
                <span>{area}</span>
                <div className="focus-track" aria-hidden="true">
                  <i style={{ width: `${[88, 76, 76, 66][index]}%` }} />
                </div>
                <small>0{index + 1}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
