import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Heart,
  ExternalLink,
} from 'lucide-react';
import PaintStroke from '../components/common/PaintStroke';
import ArtDoodle from '../components/common/ArtDoodle';
import OrganicBlob from '../components/common/OrganicBlob';
import BrushDivider from '../components/common/BrushDivider';
import SectionReveal from '../components/common/SectionReveal';

const parentTestimonials = [
  'My daughter feels comfortable attending your art class. Her creativity has improved, especially her colour blending and colour combinations. Thank you for your guidance and support.',
  "The class is very engaging and creative. My daughter enjoys it and looks forward to attending. It's nice to see improvement in her drawing and colouring skills.",
  "After joining your art classes, my daughter's creativity has improved. She has started thinking outside the box and trying different artworks at home.",
  'Kids love to come to your classes and never want to take leave. Apart from art, the activities you engage them in are really good.',
];

/**
 * ARTSHINE CREATIVE LEARNING — HOMEPAGE
 * 
 * Rebuilt from the ground up as a DIGITAL ART SPACE.
 * 
 * Exact 5-Area Architecture:
 * 1. HERO — Powerful artistic composition with overlapping real photography & artwork fragments
 * 2. SHORT ABOUT ARTSHINE — "What is Artshine?" in simple, human language (No corporate jargon)
 * 3. WHAT WE OFFER — ONLY a glimpse of disciplines linking to /courses
 * 4. STUDENT WORK & ACHIEVEMENTS — Combined exhibition wall glimpse linking to /students
 * 5. SIMPLE FINAL CTA — Deep navy artistic canvas with paint stroke
 */
export const Home = ({ onOpenEnquire }) => {
  return (
    <div className="art-studio-page">

      {/* =========================================================================
           1. HERO: THE MAIN EXPERIENCE
           - Brand central message: "Learn. Create. Sparkle."
           - Warm ivory canvas, artistic sparkle & sun elements, coral / yellow accents
           - One strong artistic visual composition representing a digital art world
           - Enquire Now CTA & Explore Courses CTA
           ========================================================================= */}
      <section className="studio-hero">
        <OrganicBlob color="#FFB703" size={420} opacity={0.16} blur={75} style={{ top: '-10%', right: '4%' }} />
        <OrganicBlob color="#E63956" size={280} opacity={0.09} blur={60} style={{ top: '35%', left: '15%' }} />
        <OrganicBlob color="#00A896" size={340} opacity={0.13} blur={65} style={{ bottom: '-5%', left: '-5%' }} />

        <div className="container studio-hero-grid">
          {/* Left / Primary Area */}
          <motion.div
            className="studio-hero-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >

            <h1 className="studio-hero-title">
              Learn.{' '}
              <span className="title-create">Create.</span>{' '}
              <span className="title-sparkle">
                Sparkle.
                <div
                  style={{ position: 'absolute', bottom: '-10px', left: 0, height: '16px', width: '100%', zIndex: -1 }}
                >
                  <PaintStroke
                    variant="underline"
                    color="#FFB703"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </span>
            </h1>

            <p className="studio-hero-subtext">
              A welcoming place where children explore art, colour, and creative expression.
            </p>

            <div className="studio-hero-actions">
              <button
                onClick={() => onOpenEnquire()}
                className="btn btn-primary"
                id="heroEnquireBtn"
              >
                Enquire Now
                <ArrowRight size={17} />
              </button>

              <Link
                to="/courses"
                className="btn btn-secondary"
                id="heroExploreBtn"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>

          {/* Right / Visual Area: ONE Strong Artistic Visual Composition */}
          <div className="studio-hero-canvas-art">
            {/* Playful Doodles around frame with independent movement */}
            <ArtDoodle
              type="sun"
              color="#FFB703"
              size={54}
              style={{ position: 'absolute', top: '-10px', left: '10px', zIndex: 6 }}
            />
            <ArtDoodle
              type="sparkle"
              color="#E63956"
              size={28}
              style={{ position: 'absolute', bottom: '15px', right: '10px', zIndex: 6 }}
            />

            {/* Layered Physical Art Board with Underlayers */}
            <div className="hero-art-board">
              <div className="hero-art-underlayer" />
              <div className="hero-art-underlayer-2" />

              <motion.div
                className="studio-hero-art-showcase"
                initial={{ opacity: 0, scale: 0.94, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="studio-tape studio-tape-coral" style={{ top: '-12px', left: '25%', width: '65px' }} />
                <div className="studio-tape studio-tape-teal" style={{ bottom: '-12px', right: '22%', width: '58px' }} />

                <div className="studio-hero-art-img-wrap">
                  <img
                    src="/images/home/IMG1.jpeg"
                    alt="Artshine creative art space with paints, brushes, and colorful artwork"
                    width="720"
                    height="540"
                    loading="eager"
                  />
                </div>

                <div className="studio-hero-art-caption">
                  <span className="hand-annotation">
                    Welcome to Artshine <Heart size={13} color="#E63956" fill="#E63956" style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic brush transition */}
      <BrushDivider fillColor="#FFFFFF" type="paint" />

      {/* =========================================================================
           2. ABOUT ARTSHINE
           Short, human, simple copy answering: "What is Artshine?"
           ========================================================================= */}
      <section className="studio-about-section">
        <OrganicBlob color="#FFB703" size={320} opacity={0.08} blur={60} style={{ top: '10%', right: '8%' }} />
        <OrganicBlob color="#E63956" size={260} opacity={0.06} blur={50} style={{ bottom: '5%', left: '10%' }} />

        <div className="container studio-about-grid">
          {/* Supporting Real Photograph */}
          <SectionReveal className="studio-about-photo-wrap">
            <div className="studio-about-photo-frame" style={{ transform: 'rotate(-1.5deg)' }}>
              <div className="studio-tape studio-tape-coral" style={{ top: '-10px', left: '30%', width: '60px' }} />
              <div className="studio-about-photo-inner">
                <img
                  src="/images/home/IMG2.jpeg"
                  alt="Student focused on observational drawing at Artshine"
                  loading="lazy"
                />
              </div>
            </div>
          </SectionReveal>

          {/* Short, Human About Text */}
          <SectionReveal delay={0.12}>
            <span className="eyebrow-label">About Artshine</span>
            <h2 className="studio-about-heading">
              A place to pick up a brush and{' '}
              <span className="artist-highlight">find your voice.</span>
            </h2>

            <p className="studio-about-body">
              Artshine is an art school for curious children. Rather than copying outlines, students learn to mix colors, understand light, and trust their own ideas.
            </p>

            <p className="studio-about-body" style={{ color: 'var(--text-muted)', fontSize: '0.96rem' }}>
              Whether working with soft pencil shades, flowing watercolors, or earthy terracotta clay, every session encourages patience, joy, and individual expression.
            </p>

            <Link to="/courses" className="view-all-link">
              See what we teach <ArrowRight size={15} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Organic transition from About to Classes */}
      <BrushDivider fillColor="#FCFAF5" type="wave" />

      {/* =========================================================================
           3. WHAT WE OFFER / HOW WE CONDUCT CLASSES
           ONLY TWO PANELS:
           - ONLINE CLASSES
           - OFFLINE CLASSES
           ========================================================================= */}
      <section className="studio-classes-mode-section">
        <OrganicBlob color="#00A896" size={380} opacity={0.1} blur={70} style={{ top: '15%', left: '-5%' }} />
        <OrganicBlob color="#FFB703" size={350} opacity={0.11} blur={65} style={{ bottom: '10%', right: '-4%' }} />

        <div className="container">
          <SectionReveal>
            <div className="studio-mode-header">
              <div>
                <h2 className="section-title">
                  What We Offer<span className="coral-accent">.</span>
                </h2>
              </div>
              <Link to="/courses" className="btn btn-secondary btn-sm">
                Explore All Courses →
              </Link>
            </div>
          </SectionReveal>

          {/* ONLY TWO PANELS: ONLINE CLASSES & OFFLINE CLASSES */}
          <div className="studio-mode-grid">
            {/* ONLINE CLASSES PANEL: Cool Teal/Cyan Studio World */}
            <SectionReveal delay={0.08}>
              <div className="studio-mode-card mode-card-online" style={{ transform: 'rotate(-0.8deg)' }}>
                <div className="studio-tape studio-tape-teal" style={{ top: '-11px', left: '20%', width: '50px' }} />
                
                <div className="studio-mode-img-wrap">
                  <img
                    src="/images/home/IMG4.jpg"
                    alt="Student participating in online art session from home"
                    loading="lazy"
                  />
                </div>

                <div className="studio-mode-content">
                  <span className="studio-mode-badge online-badge">Interactive Live Sessions</span>
                  <h3 className="studio-mode-title">Online Classes</h3>
                  <p className="studio-mode-text">
                    Learn from home through guided, interactive online art sessions.
                  </p>
                  <Link to="/courses" className="studio-mode-link">
                    Explore Online Courses <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </SectionReveal>

            {/* OFFLINE CLASSES PANEL: Warm Coral/Amber Pigment World */}
            <SectionReveal delay={0.16}>
              <div className="studio-mode-card mode-card-offline" style={{ transform: 'rotate(0.8deg)' }}>
                <div className="studio-tape studio-tape-coral" style={{ top: '-11px', right: '20%', width: '50px' }} />

                <div className="studio-mode-img-wrap">
                  <img
                    src="/images/home/IMG3.jpeg"
                    alt="Student learning at the easel with hands-on practice"
                    loading="lazy"
                  />
                </div>

                <div className="studio-mode-content">
                  <span className="studio-mode-badge offline-badge">In-Person Practice</span>
                  <h3 className="studio-mode-title">Offline Classes</h3>
                  <p className="studio-mode-text">
                    Learn in person through guided art sessions and hands-on practice.
                  </p>
                  <Link to="/courses" className="studio-mode-link">
                    Explore Offline Courses <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Transition to Student Work */}
      <BrushDivider fillColor="#FFFFFF" type="paint" flip={true} />

      {/* =========================================================================
           4. STUDENT WORK + ACHIEVEMENTS (GLIMPSE ONLY)
           Editorial exhibition wall
           ========================================================================= */}
      <section className="studio-exhibition-glimpse">
        <OrganicBlob color="#E63956" size={340} opacity={0.07} blur={65} style={{ top: '20%', right: '5%' }} />
        <OrganicBlob color="#00A896" size={300} opacity={0.08} blur={60} style={{ bottom: '15%', left: '8%' }} />

        <div className="container">
          <SectionReveal>
            <div className="studio-glimpse-header">
              <div>
                <h2 className="section-title">
                  Student Work & Achievements<span className="coral-accent">.</span>
                </h2>
              </div>
              <Link to="/students" className="btn btn-primary btn-sm">
                View Students & Achievements →
              </Link>
            </div>
          </SectionReveal>

          {/* Exhibition Wall Grid */}
          <div className="studio-wall-grid">
            {/* ONE LARGE ANCHOR ARTWORK */}
            <SectionReveal>
              <div className="studio-wall-anchor" style={{ transform: 'rotate(-0.8deg)' }}>
                <div className="studio-tape studio-tape-coral" style={{ top: '-10px', left: '15%', width: '60px' }} />
                <div className="studio-wall-anchor-img">
                  <img
                    src="/images/home/IMG8.jpeg"
                    alt="Student artwork showcase exhibition wall"
                    loading="lazy"
                  />
                </div>
              </div>
            </SectionReveal>

            {/* TWO SMALLER IMAGES + ONE ROTATED PAPER ARTWORK */}
            <div className="studio-wall-cluster">
              <div className="studio-wall-cluster-row">
                {/* Smaller Image 1: Pencil sketch */}
                <SectionReveal delay={0.1}>
                  <div className="studio-wall-small-item" style={{ transform: 'rotate(1.8deg)' }}>
                    <div className="studio-tape" style={{ top: '-10px', left: '20%', width: '45px' }} />
                    <div className="studio-wall-small-img">
                    <img src="/images/home/IMG5.png" alt="Students holding certificates" loading="lazy" />
                  </div>
                  </div>
                </SectionReveal>

                {/* Smaller Image 2: Gouache landscape */}
                <SectionReveal delay={0.16}>
                  <div className="studio-wall-small-item" style={{ transform: 'rotate(-2deg)' }}>
                    <div className="studio-tape studio-tape-teal" style={{ top: '-10px', right: '20%', width: '45px' }} />
                    <div className="studio-wall-small-img">
                    <img src="/images/home/IMG6.jpeg" alt="Student wearing a medal and holding a certificate" loading="lazy" />
                  </div>
                  </div>
                </SectionReveal>
              </div>

              {/* Rotated Folk Art Milestone */}
              <SectionReveal delay={0.22}>
                <div className="studio-wall-rotated-item" style={{ transform: 'rotate(1.5deg)' }}>
                  <div className="studio-tape studio-tape-coral" style={{ top: '-10px', right: '15%', width: '55px' }} />
                  <div className="studio-wall-rotated-img">
                    <img src="/images/home/IMG7.jpeg" alt="Certificate presentation" loading="lazy" />
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Parent feedback */}
      <section className="studio-parent-feedback" aria-labelledby="parent-feedback-title">
        <div className="container">
          <SectionReveal>
            <div className="studio-parent-feedback-card">
              <span className="studio-parent-feedback-mark" aria-hidden="true">“</span>
              <h2 id="parent-feedback-title" className="section-title">
                Parent Feedback<span className="coral-accent">.</span>
              </h2>
              <p className="studio-parent-feedback-intro">
                What parents say about their experience with Artshine.
              </p>
              <div className="studio-parent-feedback-window" role="region" aria-label="Parent testimonials">
                <div className="studio-parent-feedback-track">
                  {[false, true].map((isDuplicate) => (
                    <div className="studio-parent-feedback-group" key={String(isDuplicate)} aria-hidden={isDuplicate || undefined}>
                      {parentTestimonials.map((testimonial) => (
                        <figure className="studio-parent-testimonial" key={testimonial}>
                          <blockquote>“{testimonial}”</blockquote>
                          <figcaption>Artshine Parent</figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="studio-feedback-invite" aria-labelledby="feedback-invite-title">
        <div className="container">
          <SectionReveal>
            <div className="studio-feedback-invite-inner">
              <span className="studio-feedback-invite-mark" aria-hidden="true">✳</span>
              <div>
                <h2 id="feedback-invite-title">Your Feedback Matters</h2>
                <p>
                  We’d love to hear about your experience with Artshine. Your feedback helps us make every creative learning experience even better.
                </p>
              </div>
              <a
                className="studio-feedback-invite-link"
                href="https://forms.gle/oSfZkSccUrP22An58"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share Your Feedback <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Artistic transition into Deep Navy Canvas */}
      <BrushDivider fillColor="#09192E" type="torn" />

      {/* =========================================================================
           5. FINAL CTA
           Deep navy canvas, short heading "Ready to Create?", Enquire Now action
           ========================================================================= */}
      <section className="studio-final-cta">
        <OrganicBlob color="#FFB703" size={360} opacity={0.12} blur={80} style={{ top: '-20%', right: '8%' }} />
        <OrganicBlob color="#E63956" size={280} opacity={0.12} blur={70} style={{ bottom: '-15%', left: '5%' }} />

        <div className="container studio-cta-box">
          <SectionReveal>
            <h2 className="studio-cta-title">
              Ready to Create?
            </h2>

            <p className="studio-cta-subtext">
              Speak with us about classes and discover the right course for your child.
            </p>

            <div className="studio-cta-actions">
              <button
                onClick={() => onOpenEnquire()}
                className="btn btn-primary"
                id="footerCtaEnquireBtn"
              >
                Enquire Now
                <ArrowRight size={17} />
              </button>

              <Link to="/courses" className="btn btn-navy-outline">
                Explore Courses
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

    </div>
  );
};

export default Home;
