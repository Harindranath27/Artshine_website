import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionReveal from '../components/common/SectionReveal';
import PaintStroke from '../components/common/PaintStroke';
import ArtDoodle from '../components/common/ArtDoodle';
import OrganicBlob from '../components/common/OrganicBlob';
import BrushDivider from '../components/common/BrushDivider';
import '../styles/courses.css';

/**
 * ARTSHINE — COURSES PAGE (ART SCHOOL COURSE CATALOGUE)
 * 
 * Preserves the approved course structure, 3 chapters, transitions,
 * big artistic moment, and final enquiry.
 * 
 * Modernized Editorial Art Hero:
 * - Large real Artshine artwork (Botanical watercolor study)
 * - Layered craft paper backing
 * - Washi tape and pins
 * - Handwritten studio annotations
 * - Direct "Find Your Way Into Art" hierarchy
 */
export const Courses = ({ onOpenEnquire }) => {
  return (
    <div className="coursebook-viewport">

      {/* =========================================================================
          1. EDITORIAL ART HERO — ART SCHOOL COURSE CATALOGUE
          ========================================================================= */}
      <section className="courses-catalogue-hero">
        <OrganicBlob color="#FFB703" size={380} opacity={0.12} blur={70} style={{ top: '-12%', right: '5%' }} />
        <OrganicBlob color="#00A896" size={300} opacity={0.09} blur={65} style={{ bottom: '-10%', left: '-5%' }} />

        <div className="catalogue-hero-container">
          {/* Left Editorial Header Column */}
          <motion.div
            className="catalogue-hero-header"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="catalogue-hero-heading">
              Find Your Way{' '}
              <span className="hero-highlight-word">
                Into Art
                <PaintStroke
                  variant="underline"
                  color="#FFB703"
                  style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }}
                />
              </span>
            </h1>

            <p className="catalogue-hero-subtext">
              Artshine offers art courses for young learners.
              Explore hands-on techniques across pencil sketching, fluid paints, and traditional Indian folk forms.
            </p>

            <div className="catalogue-hero-actions">
              <button
                onClick={() => onOpenEnquire()}
                className="btn btn-primary"
                style={{ height: '48px', padding: '0 2rem' }}
              >
                <span>Enquire Now</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="#chapter-01"
                className="btn btn-secondary"
                style={{ height: '48px', padding: '0 1.5rem' }}
              >
                Explore Courses ↓
              </a>
            </div>
          </motion.div>

          {/* Right Editorial Artwork Composition (One Large Real Artwork + Paper Layers) */}
          <motion.div
            className="catalogue-hero-composition"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Layered craft mounting sheet */}
            <div className="hero-craft-underlay" />

            {/* Main Large Artwork Presentation */}
            <div className="hero-art-main-display">
              <div className="art-washi-tape tape-coral" style={{ top: '-11px', left: '25px', width: '70px' }} />
              <div className="hero-art-main-image-wrap">
                <img
                  src="/images/art_sunflower.jpg"
                  alt="Sunflower botanical watercolor study by Artshine student"
                  loading="eager"
                />
              </div>
              <div className="hero-art-caption-strip">
                <span>Botanical Harmony</span>
                <span className="art-medium-label">Watercolour</span>
              </div>
            </div>

            {/* Satellite pinned artwork layer */}
            <div className="hero-art-satellite-layer">
              <div className="art-washi-tape tape-teal" style={{ top: '-9px', right: '15px', width: '50px', height: '18px' }} />
              <img
                src="/images/art_folk_bird.jpg"
                alt="Traditional folk motif study"
                loading="eager"
              />
            </div>

            {/* Handwritten studio note */}
            <div className="hero-art-studio-note">
              <p>✨ "Observation, color & joyful expression"</p>
            </div>

            {/* Artistic doodles */}
            <ArtDoodle type="sparkle" color="#FFB703" size={36} style={{ position: 'absolute', top: '-18px', left: '8%', zIndex: 6 }} />
            <ArtDoodle type="spiral" color="#E63956" size={28} style={{ position: 'absolute', bottom: '15px', right: '4%', zIndex: 6 }} />
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. CHAPTER 01 — DRAW • SHADE • SKETCH
          Courses: Drawing & Colouring, Pencil Shading, Colour Pencil Sketching, Oil Pastels, Doodle Art
          ========================================================================= */}
      <section id="chapter-01" className="cb-chapter-section cb-chapter-drawing-bg">
        <div className="cb-chapter-header">
          <span className="cb-chapter-num">01</span>
          <div className="cb-chapter-title-group">
            <span className="cb-chapter-tag">First Medium</span>
            <h2 className="cb-chapter-title">DRAW • SHADE • SKETCH</h2>
          </div>
        </div>

        {/* Editorial Asymmetric Art-Board Mosaic */}
        <div className="cb-draw-mosaic">
          {/* 1. Drawing & Colouring (Heroic Tall Placement) */}
          <SectionReveal delay={0.05}>
            <motion.article
              className="cb-card cb-card-drawing-colouring"
              style={{ transform: 'rotate(-1.5deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="metal-paperclip" style={{ top: '-14px', left: '30px' }} />
              <div className="cb-card-img-wrap">
                <img
                  src="/images/course_junior_girl_drawing.jpg"
                  alt="Drawing & Colouring student artwork"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Drawing & Colouring</h3>
              <p className="cb-card-desc">
                Explore line drawing, creative shapes, and expressive hand colouring techniques.
              </p>
              <button
                onClick={() => onOpenEnquire('Drawing & Colouring')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>

          {/* 2. Pencil Shading */}
          <SectionReveal delay={0.1}>
            <motion.article
              className="cb-card cb-card-compact"
              style={{ transform: 'rotate(1.8deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="art-washi-tape tape-yellow" style={{ top: '-10px', right: '24px', width: '60px' }} />
              <div className="cb-card-img-wrap">
                <img
                  src="/images/art_sketch_portrait.jpg"
                  alt="Pencil Shading artwork"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Pencil Shading</h3>
              <p className="cb-card-desc">
                Study light, tonal gradation, and realistic shadow rendering with graphite.
              </p>
              <button
                onClick={() => onOpenEnquire('Pencil Shading')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>

          {/* 3. Colour Pencil Sketching */}
          <SectionReveal delay={0.15}>
            <motion.article
              className="cb-card cb-card-compact"
              style={{ transform: 'rotate(-1.2deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="art-washi-tape tape-coral" style={{ top: '-10px', left: '24px', width: '60px' }} />
              <div className="cb-card-img-wrap">
                <img
                  src="/images/hero_indian_girl_painting.jpg"
                  alt="Colour Pencil Sketching artwork"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Colour Pencil Sketching</h3>
              <p className="cb-card-desc">
                Build vibrant dimensional sketches with layered pigment blending and delicate line work.
              </p>
              <button
                onClick={() => onOpenEnquire('Colour Pencil Sketching')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>

          {/* 4. Oil Pastels */}
          <SectionReveal delay={0.2}>
            <motion.article
              className="cb-card cb-card-compact"
              style={{ transform: 'rotate(1.5deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="metal-paperclip" style={{ top: '-14px', right: '24px' }} />
              <div className="cb-card-img-wrap">
                <img
                  src="/images/art_mountain_landscape.jpg"
                  alt="Oil Pastels artwork"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Oil Pastels</h3>
              <p className="cb-card-desc">
                Work with creamy pigments, smooth finger blending, and bold color contrasts.
              </p>
              <button
                onClick={() => onOpenEnquire('Oil Pastels')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>

          {/* 5. Doodle Art */}
          <SectionReveal delay={0.25}>
            <motion.article
              className="cb-card cb-card-compact"
              style={{ transform: 'rotate(-2deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="art-washi-tape tape-teal" style={{ top: '-10px', left: '24px', width: '60px' }} />
              <div className="cb-card-img-wrap">
                <img
                  src="/images/art_folk_bird.jpg"
                  alt="Doodle Art patterns"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Doodle Art</h3>
              <p className="cb-card-desc">
                Unleash spontaneous imagination through playful freehand patterns and line character art.
              </p>
              <button
                onClick={() => onOpenEnquire('Doodle Art')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>
        </div>
      </section>

      {/* =========================================================================
          3. ARTISTIC TRANSITION 1
          Hand-drawn pencil line travels across and morphs into watercolour brush stroke
          ========================================================================= */}
      <div className="cb-transition-one" aria-hidden="true">
        <svg viewBox="0 0 800 60" fill="none" style={{ width: '100%', maxWidth: '800px', height: '40px' }}>
          {/* Pencil line on left side */}
          <motion.path
            d="M20 30 Q 150 25, 300 32 T 480 30"
            stroke="#4A5568"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
          {/* Watercolour brush stroke morph on right side */}
          <motion.path
            d="M480 30 C 540 18, 620 42, 780 28"
            stroke="#E63956"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          />
        </svg>
        <span className="transition-label-script">〰️ from pencil graphite into pigment wash 〰️</span>
      </div>

      {/* =========================================================================
          4. CHAPTER 02 — PAINT WITH COLOUR
          Courses: Watercolour Painting, Acrylic Painting, Oil Pastels
          ========================================================================= */}
      <section id="chapter-02" className="cb-chapter-section cb-chapter-painting-bg">
        <div className="cb-chapter-header">
          <span className="cb-chapter-num">02</span>
          <div className="cb-chapter-title-group">
            <span className="cb-chapter-tag">Second Medium</span>
            <h2 className="cb-chapter-title">PAINT WITH COLOUR</h2>
          </div>
        </div>

        {/* 3 Distinct Tactile Medium Compositions */}
        <div className="cb-painting-trio-grid">
          {/* 1. Watercolour Painting (Soft painted translucent paper) */}
          <SectionReveal delay={0.08}>
            <motion.article
              className="cb-paint-card cb-paint-watercolour"
              style={{ transform: 'rotate(-1.5deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="cb-paint-img-wrap">
                <img
                  src="/images/art_sunflower.jpg"
                  alt="Watercolour Painting botanical washes"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Watercolour Painting</h3>
              <p className="cb-card-desc">
                Explore colour, composition and expressive painting through water-based techniques.
              </p>
              <button
                onClick={() => onOpenEnquire('Watercolour Painting')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>

          {/* 2. Acrylic Painting (Strong layered canvas composition) */}
          <SectionReveal delay={0.16}>
            <motion.article
              className="cb-paint-card cb-paint-acrylic"
              style={{ transform: 'rotate(1.8deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="cb-paint-img-wrap">
                <img
                  src="/images/course_teen_easel_art.jpg"
                  alt="Acrylic Painting canvas layering"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Acrylic Painting</h3>
              <p className="cb-card-desc">
                Master rich pigment blending, textured canvas layering, and expressive brushwork.
              </p>
              <button
                onClick={() => onOpenEnquire('Acrylic Painting')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>

          {/* 3. Oil Pastels (Textured colorful paper composition) */}
          <SectionReveal delay={0.24}>
            <motion.article
              className="cb-paint-card cb-paint-pastels"
              style={{ transform: 'rotate(-1.2deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="cb-paint-img-wrap">
                <img
                  src="/images/art_mountain_landscape.jpg"
                  alt="Oil Pastels rich pigment study"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Oil Pastels</h3>
              <p className="cb-card-desc">
                Work with creamy pigments, smooth finger blending, and bold color contrasts.
              </p>
              <button
                onClick={() => onOpenEnquire('Oil Pastels')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>
        </div>
      </section>

      {/* =========================================================================
          5. ARTISTIC TRANSITION 2
          Watercolour wash bleeds into geometric decorative pattern
          ========================================================================= */}
      <div className="cb-transition-two" aria-hidden="true">
        <div className="transition-mandala-motif">
          <PaintStroke variant="wash" color="#FFB703" style={{ width: '120px', height: '30px' }} />
          <div className="mandala-center-star">
            <ArtDoodle type="sparkle" color="#00A896" size={32} />
          </div>
          <PaintStroke variant="swash" color="#00A896" style={{ width: '120px', height: '30px' }} />
        </div>
        <span className="transition-label-script">✦ into concentric geometry & cultural heritage ✦</span>
      </div>

      {/* =========================================================================
          6. CHAPTER 03 — PATTERNS • CULTURE • IMAGINATION
          Courses: Mandala Art, Madhubani Art
          ========================================================================= */}
      <section id="chapter-03" className="cb-chapter-section cb-chapter-traditional-bg">
        <div className="cb-chapter-header">
          <span className="cb-chapter-num">03</span>
          <div className="cb-chapter-title-group">
            <span className="cb-chapter-tag">Third Medium</span>
            <h2 className="cb-chapter-title">PATTERNS • CULTURE • IMAGINATION</h2>
          </div>
        </div>

        {/* Museum Exhibition Gallery Wall */}
        <div className="cb-traditional-gallery">
          {/* Course 1: Mandala Art */}
          <SectionReveal delay={0.1}>
            <motion.article
              className="cb-traditional-card"
              style={{ transform: 'rotate(1.5deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="cb-traditional-img-wrap">
                <img
                  src="/images/student_art_collection.jpg"
                  alt="Mandala Art intricate concentric patterns"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Mandala Art</h3>
              <p className="cb-card-desc">
                Create harmonious circular compositions through concentric geometric symmetry and meditative patterns.
              </p>
              <button
                onClick={() => onOpenEnquire('Mandala Art')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>

          {/* Course 2: Madhubani Art */}
          <SectionReveal delay={0.2}>
            <motion.article
              className="cb-traditional-card"
              style={{ transform: 'rotate(-1.5deg)' }}
              whileHover={{ rotate: 0 }}
            >
              <div className="cb-traditional-img-wrap">
                <img
                  src="/images/art_folk_bird.jpg"
                  alt="Madhubani Art traditional Indian folk motifs"
                  loading="lazy"
                />
              </div>
              <h3 className="cb-card-name">Madhubani Art</h3>
              <p className="cb-card-desc">
                Discover rich Indian heritage through intricate motifs, natural themes, and bold folk line work.
              </p>
              <button
                onClick={() => onOpenEnquire('Madhubani Art')}
                className="cb-enquire-btn"
              >
                <span>Enquire Course</span>
                <ArrowRight size={15} />
              </button>
            </motion.article>
          </SectionReveal>
        </div>
      </section>
      {/* Artistic transition into Deep Navy Canvas */}
      <BrushDivider fillColor="#09192E" type="torn" />

      {/* =========================================================================
          8. FINAL ENQUIRY
          FOUND SOMETHING YOU'D LIKE TO TRY? -> ENQUIRE ABOUT A COURSE →
          ========================================================================= */}
      <section className="cb-final-enquiry-section">
        <OrganicBlob color="#FFB703" size={280} opacity={0.14} blur={60} style={{ top: '-15%', right: '8%' }} />
        <OrganicBlob color="#E63956" size={260} opacity={0.16} blur={60} style={{ bottom: '-15%', left: '8%' }} />

        <div className="cb-final-box">
          <SectionReveal>
            <h2 className="cb-final-heading">
              FOUND SOMETHING YOU'D LIKE TO TRY?
            </h2>

            <button
              onClick={() => onOpenEnquire()}
              className="cb-final-enquire-btn"
            >
              <span>ENQUIRE ABOUT A COURSE →</span>
            </button>
          </SectionReveal>
        </div>
      </section>

    </div>
  );
};

export default Courses;
