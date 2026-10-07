import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Principles } from './components/Principles';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Building } from './components/Building';
import { ProblemSolving } from './components/ProblemSolving';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Principles />
        <Skills />
        <Projects />
        <Journey />
        <Building />
        <ProblemSolving />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
import { MotionConfig } from 'framer-motion';
