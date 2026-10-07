import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const introduction =
    "Hello, I'm Zaheem Shah. I'm a Full-Stack Software Developer from Karachi. I build modern, responsive and scalable web applications using technologies like React, Node.js, Laravel, PHP and MongoDB. I'm currently open to new opportunities. Thanks for visiting my portfolio.";

  const handleVoiceIntroduction = () => {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser does not support voice playback.');
      return;
    }

    // Stop speaking if already playing
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const speech = new SpeechSynthesisUtterance(introduction);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    const preferredVoice =
      voices.find(
        (voice) =>
          voice.lang.startsWith('en-US') &&
          /Google|Microsoft|Natural/i.test(voice.name)
      ) ||
      voices.find((voice) => voice.lang.startsWith('en-US')) ||
      voices.find((voice) => voice.lang.startsWith('en'));

    if (preferredVoice) {
      speech.voice = preferredVoice;
    }

    speech.onstart = () => {
      setIsSpeaking(true);
    };

    speech.onend = () => {
      setIsSpeaking(false);
    };

    speech.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* ================= BACKGROUND ================= */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="hero__content container">

        {/* ================= LEFT SIDE ================= */}
        <div className="hero__intro">

          {/* Availability */}
          <div className="hero__status animate-fade-up">
            Open to opportunities
          </div>

          {/* Greeting */}
          <p className="hero__greeting animate-fade-up">
            <span className="hero__wave">👋</span>
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="hero__name animate-fade-up animate-delay-1">
            Zaheem <span>Shah</span>
          </h1>

          {/* Title */}
          <h2 className="hero__title animate-fade-up animate-delay-2">
            <span className="hero__title-gradient">
              {personalInfo.title}
            </span>
          </h2>

          {/* Description */}
          <p className="hero__tagline animate-fade-up animate-delay-3">
            {personalInfo.tagline}
          </p>

          {/* Main Buttons */}
          <div className="hero__actions animate-fade-up animate-delay-4">

            <button
              type="button"
              className="btn btn--primary"
              onClick={() => scrollTo('projects')}
            >
              View My Work

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              type="button"
              className="btn btn--outline"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </button>

          </div>

          {/* ================= VOICE INTRO ================= */}
          <button
            type="button"
            className="hero__voice animate-fade-up animate-delay-4"
            onClick={handleVoiceIntroduction}
          >
            <span className="hero__voice-icon">
              {isSpeaking ? '⏹' : '🔊'}
            </span>

            <span>
              {isSpeaking
                ? 'Stop Introduction'
                : 'Hear My Introduction'}
            </span>

            {isSpeaking && (
              <span className="hero__speaking">
                <span />
                <span />
                <span />
                <span />
              </span>
            )}
          </button>

          {/* ================= SOCIAL LINKS ================= */}
          <div className="hero__social animate-fade-up animate-delay-5">

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

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className={`hero__visual ${
            isSpeaking ? 'hero__visual--speaking' : ''
          } animate-fade-up animate-delay-2`}
        >

          {/* Glow */}
          <div className="hero__glow" />

          {/* Decorative Rings */}
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          <div className="hero__ring hero__ring--3" />

          {/* Main Image */}
          <div className="hero__image-frame">

            <img
              src="/zaheem-hero.jpeg"
              alt="Zaheem Shah - Full-Stack Software Developer"
              className="hero__image"
            />

          </div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <button
        type="button"
        className="hero__scroll"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
      >
        <span className="hero__scroll-mouse">
          <span className="hero__scroll-wheel" />
        </span>
      </button>
    </section>
  );
}