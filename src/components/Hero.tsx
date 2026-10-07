import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

const stack = ['Java', 'Spring Boot', 'React', 'TypeScript', 'SQL'];

export function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">
            <span />
            Software Engineer <span className="eyebrow-location">/ Colombia</span>
          </p>
          <h1>
            Wilson
            <br />
            <span>Barrera</span>
          </h1>
          <p className="hero-description">
            Building reliable systems, solving complex problems, and learning continuously.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects <ArrowDownRight size={17} />
            </a>
            <a className="button button-quiet" href="#contact">
              Let’s connect <ArrowUpRight size={16} />
            </a>
          </div>
          <p className="availability">
            <span className="pulse-dot" />
            Open to internships
          </p>
          <div className="hero-stack" aria-label="Technologies highlighted in this portfolio">
            {stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>
        <motion.aside
          className="terminal-card"
          aria-label="Engineering focus terminal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          <div className="terminal-head">
            <div className="terminal-lights">
              <i />
              <i />
              <i />
            </div>
            <span>profile.sh</span>
            <span className="terminal-live">● LIVE</span>
          </div>
          <div className="terminal-body">
            <p>
              <b>$</b> whoami
            </p>
            <p className="terminal-value">software_engineering_student</p>
            <p>
              <b>$</b> focus
            </p>
            <p className="terminal-value">backend_systems</p>
            <p>
              <b>$</b> stack
            </p>
            <p className="terminal-value">java / spring / react / sql</p>
            <p>
              <b>$</b> status
            </p>
            <p className="terminal-value terminal-green">
              open_to_internships<span className="cursor">_</span>
            </p>
          </div>
          <div className="terminal-foot">
            <span>building with intention</span>
            <span>01 — 04</span>
          </div>
          <div className="terminal-orbit orbit-one" />
          <div className="terminal-orbit orbit-two" />
        </motion.aside>
        <div className="hero-socials">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={17} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={17} />
          </a>
          <span />
          <small>SCROLL TO EXPLORE</small>
        </div>
      </div>
    </section>
  );
}
