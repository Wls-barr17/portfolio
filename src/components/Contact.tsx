import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';
import { SectionHeading } from './SectionHeading';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [status, setStatus] = useState('');
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const contentType = response.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        throw new Error(
          'The contact service is unavailable. On Netlify, check that the latest deploy finished; locally, run `netlify dev`.',
        );
      }
      const result: { message?: string } = await response.json();
      if (!response.ok)
        throw new Error(result.message ?? 'Could not send your message. Please try again.');
      form.reset();
      setState('success');
      setStatus(result.message ?? 'Message sent. Thanks for reaching out.');
    } catch (error) {
      setState('error');
      setStatus(
        error instanceof Error ? error.message : 'Could not send your message. Please try again.',
      );
    }
  }
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="Let’s connect"
          title="Good conversations start here."
          description="Have a project in mind or want to connect? Reach out."
        />
        <div className="contact-layout">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-heading">
              <h3>Send a message</h3>
              <span>REPLY DIRECTLY TO EMAIL</span>
            </div>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              maxLength={100}
              placeholder="Your name"
              required
            />
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
              required
            />
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              minLength={10}
              maxLength={5000}
              placeholder="What would you like to talk about?"
              required
            />
            <label className="honeypot" aria-hidden="true">
              Leave this empty
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>
            <button
              type="submit"
              className="button button-primary form-button"
              disabled={state === 'sending'}
            >
              {state === 'sending' ? 'Sending…' : 'Send message'} <Send size={16} />
            </button>
            <p className={`form-status ${state}`} role="status" aria-live="polite">
              {status}
            </p>
          </motion.form>
          <div className="contact-aside">
            <div className="contact-open">
              <span className="pulse-dot" />
              OPEN TO INTERNSHIPS
            </div>
            <h3>Connect & contact</h3>
            <p>Reach me through the channels I’ve shared publicly.</p>
            <div className="contact-links">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <Github />
                <span>
                  <b>GitHub</b>
                  <small>@Wls-barr17</small>
                </span>
                <ArrowUpRight />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <Linkedin />
                <span>
                  <b>LinkedIn</b>
                  <small>Wilson Barrera</small>
                </span>
                <ArrowUpRight />
              </a>
              <a href={`mailto:${socialLinks.email}`}>
                <Mail />
                <span>
                  <b>Email</b>
                  <small>{socialLinks.email}</small>
                </span>
                <ArrowUpRight />
              </a>
            </div>
            <a className="resume-link" href={socialLinks.resume} target="_blank" rel="noreferrer">
              View resume <ArrowUpRight size={15} />
            </a>
            <a className="resume-download" href={socialLinks.resume} download>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
