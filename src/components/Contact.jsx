import { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const headerRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/maqkkywo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={headerRef} className="section__header scroll-reveal">
          <span className="section__label">Contact</span>

          <h2 className="section__title">
            Let&apos;s Work Together
          </h2>

          <p className="section__subtitle">
            Have a project in mind or want to discuss an opportunity? I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          <div ref={infoRef} className="contact__info scroll-reveal">
            <div className="contact__card">
              <div className="contact__card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>

              <div>
                <h3>Email</h3>
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <div>
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact__social">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            className="contact__form scroll-reveal"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--full"
            >
              {submitted
                ? 'Message Sent!'
                : error
                ? 'Try Again'
                : 'Send Message'}

              {!submitted && !error && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}