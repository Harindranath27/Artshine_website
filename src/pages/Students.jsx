import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowRight, Heart } from 'lucide-react';
import SectionReveal from '../components/common/SectionReveal';
import PaintStroke from '../components/common/PaintStroke';
import ArtDoodle from '../components/common/ArtDoodle';
import OrganicBlob from '../components/common/OrganicBlob';
import BrushDivider from '../components/common/BrushDivider';
import '../styles/students.css';

/**
 * ARTSHINE — STUDENTS & ACHIEVEMENTS (VISUAL MEMORY WALL)
 * 
 * Purpose:
 * A visual memory wall and physical scrapbook/gallery showcasing:
 * 1. Real student photographs
 * 2. Real student artwork
 * 3. Exhibitions and events
 * 4. Achievements and milestones
 * 5. Genuine memories from Artshine
 * 
 * 6-Section Architecture:
 * - SECTION 1: INTRODUCTION ("Students & Achievements", human sentence, strong photo composition)
 * - SECTION 2: STUDENT MOMENTS (Editorial photo-wall of real student photos with tape & annotations)
 * - SECTION 3: STUDENT ARTWORK (Exhibition approach: large featured artwork + supporting pieces + accessible lightbox)
 * - SECTION 4: ACHIEVEMENTS / EXHIBITIONS (Wall of milestones, archival labels, verified studio moments)
 * - SECTION 5: MEMORIES / EVENTS (Automatic continuous horizontal infinite marquee / film-strip reel)
 * - SECTION 6: FINAL CTA ("More stories are still being created." -> Enquire Now)
 */
export const Students = () => {
  const [activeLightbox, setActiveLightbox] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Trigger global enquiry modal via header button or custom event
  const triggerEnquiry = () => {
    const btn = document.getElementById('headerEnquireBtn');
    if (btn) {
      btn.click();
    }
  };

  // SECTION 3: Student Artworks (1 Large Featured + Supporting Artworks)
  const featuredArtwork = {
    id: 'feat-sunflower',
    title: 'Botanical Sunflower Harmony',
    medium: 'Watercolour',
    tag: 'Student Artwork',
    image: '/images/art_sunflower.jpg',
  };

  const supportingArtworks = [
    {
      id: 'supp-sketch',
      title: 'Tonal Portrait Study',
      medium: 'Pencil Shading',
      tag: 'Student Artwork',
      image: '/images/art_sketch_portrait.jpg',
    },
    {
      id: 'supp-bird',
      title: 'Traditional Folk Bird Motif',
      medium: 'Madhubani Art',
      tag: 'Student Artwork',
      image: '/images/art_folk_bird.jpg',
    },
    {
      id: 'supp-mandala',
      title: 'Harmonic Concentric Symmetry',
      medium: 'Mandala Art',
      tag: 'Student Artwork',
      image: '/images/student_art_collection.jpg',
    },
    {
      id: 'supp-landscape',
      title: 'River Valley Landscape',
      medium: 'Acrylic Painting',
      tag: 'Student Artwork',
      image: '/images/art_mountain_landscape.jpg',
    },
  ];

  // SECTION 5: Memories for Continuous Automatic Infinite Marquee
  const memoriesList = [
    {
      id: 'mem-1',
      title: 'Terracotta Sculpting Workshop',
      image: '/images/gallery_clay_pottery_kids.jpg',
      note: 'Terracotta hand-building',
      tape: 'tape-coral',
    },
    {
      id: 'mem-2',
      title: 'Easel Painting Session',
      image: '/images/course_teen_easel_art.jpg',
      note: 'Focused canvas work',
      tape: 'tape-teal',
    },
    {
      id: 'mem-3',
      title: 'Pigment Exploration',
      image: '/images/course_painted_hands_boy.jpg',
      note: 'Pigment discovery',
      tape: 'tape-yellow',
    },
    {
      id: 'mem-4',
      title: 'Interactive Guided Online Session',
      image: '/images/course_online_art_girl.jpg',
      note: 'Interactive guided practice',
      tape: 'tape-coral',
    },
    {
      id: 'mem-5',
      title: 'Annual Student Showcase Wall',
      image: '/images/student_art_collection.jpg',
      note: 'Annual student showcase wall',
      tape: 'tape-teal',
    },
    {
      id: 'mem-6',
      title: 'Observational Sketching Practice',
      image: '/images/course_junior_girl_drawing.jpg',
      note: 'Patient hand-eye coordination',
      tape: 'tape-yellow',
    },
  ];

  // Double list for seamless 0-jump infinite looping marquee
  const seamlessMarqueeItems = [...memoriesList, ...memoriesList];

  return (
    <div className="students-memory-wall">

      {/* =========================================================================
          SECTION 1 — INTRODUCTION
          "Students & Achievements" + short human sentence + photographic visual
          ========================================================================= */}
      <section className="smw-intro-section">
        <OrganicBlob color="#FFB703" size={360} opacity={0.14} blur={70} style={{ top: '-10%', right: '5%' }} />
        <OrganicBlob color="#00A896" size={300} opacity={0.11} blur={65} style={{ bottom: '-10%', left: '-5%' }} />

        <div className="smw-intro-grid">
          {/* Left Text / Opening */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="smw-intro-title">
              Students &{' '}
              <span style={{ color: 'var(--accent-coral)', position: 'relative', display: 'inline-block' }}>
                Achievements
                <PaintStroke
                  variant="underline"
                  color="#FFB703"
                  style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }}
                />
              </span>
            </h1>

            <p className="smw-intro-copy">
              A genuine glimpse into the artwork, moments and achievements created by Artshine students.
              Step through our Artshine memories, exhibition days, and the quiet hours of creative discovery.
            </p>
          </motion.div>

          {/* Right Introduction Photo Composition */}
          <motion.div
            className="smw-intro-art-composition"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Primary mounted student photo */}
            <div className="smw-intro-main-photo">
              <div className="scrap-tape tape-coral" style={{ top: '-10px', left: '25px', width: '65px' }} />
              <img
                src="/images/course_teen_easel_art.jpg"
                alt="Student easel painting session at Artshine"
                loading="eager"
              />
              <div className="smw-intro-caption">
                <span>Easel Painting Practice</span>
                <span style={{ fontSize: '0.85rem', color: '#718096' }}>Creative Moments</span>
              </div>
            </div>

            {/* Satellite pinned student photo */}
            <div className="smw-intro-satellite-photo">
              <div className="scrap-tape tape-teal" style={{ top: '-8px', right: '15px', width: '45px', height: '18px' }} />
              <img
                src="/images/gallery_clay_pottery_kids.jpg"
                alt="Terracotta clay workshop"
                loading="eager"
              />
            </div>

            {/* Subtle Doodles */}
            <ArtDoodle type="sparkle" color="#FFB703" size={34} style={{ position: 'absolute', top: '-12px', left: '6%', zIndex: 6 }} />
            <ArtDoodle type="spiral" color="#E63956" size={28} style={{ position: 'absolute', bottom: '15px', right: '6%', zIndex: 6 }} />
          </motion.div>
        </div>
      </section>

      {/* Brush Divider into Student Moments */}
      <BrushDivider type="paint" fillColor="#FAF8F2" />

      {/* =========================================================================
          SECTION 2 — STUDENT MOMENTS
          Focus on real student photos: creating, classroom, with artwork, events
          Editorial photo-wall composition with tape, pins, and handwritten accents
          ========================================================================= */}
      <section className="smw-moments-section">
        <div className="container">
          <SectionReveal>
            <div className="smw-section-header">
              <h2 className="smw-section-title">
                Creative Moments
              </h2>
              <p className="smw-section-sub">
                Photographs from our classrooms, hands-on workshops, and art sessions.
              </p>
            </div>
          </SectionReveal>

          {/* Editorial Photo-Wall Grid */}
          <div className="smw-photo-wall-grid">

            {/* Photo 1: Large feature — Easel Painting */}
            <SectionReveal className="wall-pos-1">
              <motion.article
                className="smw-photo-frame"
                style={{ transform: 'rotate(-1.5deg)' }}
                whileHover={{ rotate: 0 }}
              >
                <div className="scrap-tape tape-coral" style={{ top: '-11px', left: '30px', width: '70px' }} />
                <div className="smw-photo-img-box" style={{ aspectRatio: '16/10' }}>
                  <img
                    src="/images/course_teen_easel_art.jpg"
                    alt="Artshine student focused on easel canvas painting"
                    loading="lazy"
                  />
                </div>
                <div className="smw-photo-note">
                  <span>Easel Painting Session</span>
                </div>
              </motion.article>
            </SectionReveal>

            {/* Photo 2: Terracotta Clay Workshop */}
            <SectionReveal className="wall-pos-2" delay={0.1}>
              <motion.article
                className="smw-photo-frame"
                style={{ transform: 'rotate(2deg)' }}
                whileHover={{ rotate: 0 }}
              >
                <div className="scrap-tape tape-yellow" style={{ top: '-11px', right: '28px', width: '65px' }} />
                <div className="smw-photo-img-box" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="/images/gallery_clay_pottery_kids.jpg"
                    alt="Students hand-building with terracotta clay"
                    loading="lazy"
                  />
                </div>
                <div className="smw-photo-note">
                  <span>Terracotta Clay Workshop</span>
                </div>
              </motion.article>
            </SectionReveal>

            {/* Photo 3: Sensory Color Exploration */}
            <SectionReveal className="wall-pos-3" delay={0.15}>
              <motion.article
                className="smw-photo-frame"
                style={{ transform: 'rotate(-2deg)' }}
                whileHover={{ rotate: 0 }}
              >
                <div className="scrap-tape tape-teal" style={{ top: '-10px', left: '20px', width: '60px' }} />
                <div className="smw-photo-img-box" style={{ aspectRatio: '1/1' }}>
                  <img
                    src="/images/course_painted_hands_boy.jpg"
                    alt="Sensory paint play and color mixing"
                    loading="lazy"
                  />
                </div>
                <div className="smw-photo-note">
                  <span>Color Exploration</span>
                </div>
              </motion.article>
            </SectionReveal>

            {/* Photo 4: Observational Line Drawing */}
            <SectionReveal className="wall-pos-4" delay={0.2}>
              <motion.article
                className="smw-photo-frame"
                style={{ transform: 'rotate(1.5deg)' }}
                whileHover={{ rotate: 0 }}
              >
                <div className="scrap-pin" style={{ top: '-6px', right: '20px' }} />
                <div className="smw-photo-img-box" style={{ aspectRatio: '1/1' }}>
                  <img
                    src="/images/course_junior_girl_drawing.jpg"
                    alt="Observational still life drawing practice"
                    loading="lazy"
                  />
                </div>
                <div className="smw-photo-note">
                  <span>Observational Drawing</span>
                </div>
              </motion.article>
            </SectionReveal>

            {/* Photo 5: Guided Online Practice */}
            <SectionReveal className="wall-pos-5" delay={0.25}>
              <motion.article
                className="smw-photo-frame"
                style={{ transform: 'rotate(-1.2deg)' }}
                whileHover={{ rotate: 0 }}
              >
                <div className="scrap-tape tape-yellow" style={{ top: '-10px', left: '24px', width: '60px' }} />
                <div className="smw-photo-img-box" style={{ aspectRatio: '1/1' }}>
                  <img
                    src="/images/course_online_art_girl.jpg"
                    alt="Live guided online art mentoring session"
                    loading="lazy"
                  />
                </div>
                <div className="smw-photo-note">
                  <span>Guided Online Practice</span>
                </div>
              </motion.article>
            </SectionReveal>

            {/* Photo 6: Annual Student Showcase Wall */}
            <SectionReveal className="wall-pos-6" delay={0.3}>
              <motion.article
                className="smw-photo-frame"
                style={{ transform: 'rotate(1deg)' }}
                whileHover={{ rotate: 0 }}
              >
                <div className="scrap-tape tape-teal" style={{ top: '-11px', left: '35px', width: '70px' }} />
                <div className="smw-photo-img-box" style={{ aspectRatio: '16/10' }}>
                  <img
                    src="/images/student_art_collection.jpg"
                    alt="Wall of student drawings and paintings displayed during exhibition"
                    loading="lazy"
                  />
                </div>
                <div className="smw-photo-note">
                  <span>Exhibition Showcase Wall</span>
                </div>
              </motion.article>
            </SectionReveal>

            {/* Photo 7: Painting with Fine Brushes */}
            <SectionReveal className="wall-pos-7" delay={0.35}>
              <motion.article
                className="smw-photo-frame"
                style={{ transform: 'rotate(-1.5deg)' }}
                whileHover={{ rotate: 0 }}
              >
                <div className="scrap-tape tape-coral" style={{ top: '-11px', right: '35px', width: '70px' }} />
                <div className="smw-photo-img-box" style={{ aspectRatio: '16/10' }}>
                  <img
                    src="/images/hero_indian_girl_painting.jpg"
                    alt="Student delicately painting with fine brushes"
                    loading="lazy"
                  />
                </div>
                <div className="smw-photo-note">
                  <span>Color & Detail Practice</span>
                </div>
              </motion.article>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* Brush Divider into Student Artwork */}
      <BrushDivider type="wave" fillColor="#FFFDF9" />

      {/* =========================================================================
          SECTION 3 — STUDENT ARTWORK (Exhibition Wall)
          One large featured artwork + several smaller supporting artworks
          Clicking opens accessible lightbox
          ========================================================================= */}
      <section className="smw-artwork-section">
        <div className="container">
          <SectionReveal>
            <div className="smw-section-header">
              <h2 className="smw-section-title">
                Student Artwork
              </h2>
              <p className="smw-section-sub">
                Handmade pieces created across watercolours, pencil shading, and traditional folk art. Click to view in detail.
              </p>
            </div>
          </SectionReveal>

          <div className="smw-artwork-exhibition-layout">

            {/* 1 Large Featured Artwork */}
            <SectionReveal delay={0.1}>
              <motion.article
                className="smw-featured-artwork-card"
                onClick={() => setActiveLightbox(featuredArtwork)}
                whileHover={{ y: -5 }}
              >
                <div className="scrap-tape tape-coral" style={{ top: '-11px', left: '30px', width: '75px' }} />
                <div className="smw-featured-img-wrap">
                  <img
                    src={featuredArtwork.image}
                    alt={`${featuredArtwork.title} - ${featuredArtwork.medium} student artwork`}
                    loading="lazy"
                  />
                </div>

                <div className="smw-featured-meta">
                  <div>
                    <h3 className="smw-featured-title">{featuredArtwork.title}</h3>
                    <span style={{ fontSize: '0.9rem', color: '#718096' }}>Medium: {featuredArtwork.medium}</span>
                  </div>
                  <span className="smw-archival-tag">{featuredArtwork.tag}</span>
                </div>
              </motion.article>
            </SectionReveal>

            {/* Supporting Artworks Grid */}
            <div className="smw-supporting-artworks-grid">
              {supportingArtworks.map((art, idx) => (
                <SectionReveal key={art.id} delay={0.15 + idx * 0.08}>
                  <motion.article
                    className="smw-supporting-art-card"
                    onClick={() => setActiveLightbox(art)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="smw-supporting-img-wrap">
                      <img
                        src={art.image}
                        alt={`${art.title} - ${art.medium} student artwork`}
                        loading="lazy"
                      />
                    </div>
                    <div className="smw-supporting-caption">
                      <span style={{ fontWeight: 700 }}>{art.title}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent-coral)' }}>{art.medium}</span>
                    </div>
                  </motion.article>
                </SectionReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Brush Divider into Achievements */}
      <BrushDivider type="torn" fillColor="#FAF8F2" />

      {/* =========================================================================
          SECTION 4 — ACHIEVEMENTS / EXHIBITIONS
          "Wall of Milestones" — Large typography, archival labels, verified moments
          ========================================================================= */}
      <section className="smw-achievements-section">
        <div className="container">
          <SectionReveal>
            <div className="smw-section-header">
              <h2 className="smw-section-title">
                Art Exhibition & Milestones
              </h2>
              <p className="smw-section-sub">
                Shared celebrations, exhibition showcases, and creative milestones from Artshine.
              </p>
            </div>
          </SectionReveal>

          <div className="smw-milestones-wall">

            {/* Featured Milestone Card */}
            <SectionReveal delay={0.1}>
              <div className="smw-milestone-feature-card">
                <div className="scrap-tape tape-coral" style={{ top: '-11px', left: '30px', width: '70px' }} />
                <div className="smw-milestone-img-wrap">
                  <img
                    src="/images/student_art_collection.jpg"
                    alt="Annual student artwork showcase wall"
                    loading="lazy"
                  />
                </div>
                <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                  <span className="smw-archival-tag">Art Exhibition</span>
                </div>
                <h3 className="smw-milestone-title">
                  Annual Student Art Exhibition
                </h3>
                <p className="smw-milestone-desc">
                  A joyful showcase where students exhibit their drawings, watercolours, and traditional art
                  pieces for families and peers to celebrate together.
                </p>
              </div>
            </SectionReveal>

            {/* Milestones Stack */}
            <div className="smw-milestones-stack">
              <SectionReveal delay={0.18}>
                <div className="smw-milestone-item">
                  <div className="smw-milestone-thumb">
                    <img
                      src="/images/gallery_clay_pottery_kids.jpg"
                      alt="Terracotta clay workshop"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-coral)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Art Event
                    </span>
                    <h4 className="smw-milestone-heading">Clay Sculpting Series</h4>
                    <p className="smw-milestone-text">
                      Hands-on exploratory sessions working with natural clay and textured dimensional forms.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.24}>
                <div className="smw-milestone-item">
                  <div className="smw-milestone-thumb">
                    <img
                      src="/images/course_teen_easel_art.jpg"
                      alt="Canvas easel painting session"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-coral)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Student Achievement
                    </span>
                    <h4 className="smw-milestone-heading">Canvas Practice Milestones</h4>
                    <p className="smw-milestone-text">
                      Mastering easel posture, stretched canvas handling, and layered acrylic brushwork.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="smw-milestone-item">
                  <div className="smw-milestone-thumb">
                    <img
                      src="/images/art_folk_bird.jpg"
                      alt="Traditional folk art motifs"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-coral)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Art Showcase
                    </span>
                    <h4 className="smw-milestone-heading">Heritage Art Appreciation</h4>
                    <p className="smw-milestone-text">
                      Introducing timeless Indian art forms including Madhubani patterns and geometric mandalas.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Brush Divider into Memories Marquee */}
      <BrushDivider type="paint" fillColor="#FFFDF9" />

      {/* =========================================================================
          SECTION 5 — MEMORIES / EVENTS
          Automatic Continuous Infinite Horizontal Marquee / Gallery Reel
          - Slow, elegant movement
          - Seamless loop (0 jump)
          - Pause on hover
          - Pause on prefers-reduced-motion
          - Contained within viewport (no page horizontal scroll)
          ========================================================================= */}
      <section className="smw-memories-marquee-section">
        <div className="container">
          <SectionReveal>
            <div className="smw-section-header" style={{ marginBottom: '2.5rem' }}>
              <h2 className="smw-section-title">
                Artshine Memories
              </h2>
              <p className="smw-section-sub">
                Moments and snapshots from our classes and workshops.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Continuous Automatic Horizontal Marquee */}
        <div
          className="smw-marquee-wrapper"
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
        >
          <motion.div
            className="smw-marquee-track"
            animate={isMarqueePaused ? {} : { x: ['0%', '-50%'] }}
            transition={{
              duration: 28,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {seamlessMarqueeItems.map((item, index) => (
              <article key={`${item.id}-${index}`} className="smw-marquee-card">
                <div className={`scrap-tape ${item.tape}`} style={{ top: '-10px', left: '20px', width: '60px' }} />
                <div className="smw-marquee-img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <div className="smw-marquee-note">
                  <span>{item.note}</span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Artistic transition into Deep Navy Canvas */}
      <BrushDivider fillColor="#09192E" type="torn" />

      {/* =========================================================================
          SECTION 6 — FINAL CTA
          "More stories are still being created." -> Enquire Now
          ========================================================================= */}
      <section className="smw-final-cta-section">
        <OrganicBlob color="#FFB703" size={280} opacity={0.14} blur={60} style={{ top: '-15%', right: '8%' }} />
        <OrganicBlob color="#E63956" size={260} opacity={0.16} blur={60} style={{ bottom: '-15%', left: '8%' }} />

        <div className="smw-final-cta-box">
          <SectionReveal>
            <ArtDoodle
              type="sparkle"
              color="#FFB703"
              size={36}
              style={{ display: 'inline-block', marginBottom: '1rem' }}
            />

            <h2 className="smw-final-cta-heading">
              More stories are still being created.
            </h2>

            <button
              onClick={triggerEnquiry}
              className="smw-final-cta-btn"
            >
              <span>Enquire Now</span>
              <ArrowRight size={17} />
            </button>
          </SectionReveal>
        </div>
      </section>

      {/* =========================================================================
          ACCESSIBLE LIGHTBOX MODAL
          ========================================================================= */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            className="modal-backdrop open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div
              className="modal-card smw-lightbox-card"
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close image preview"
                style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFF', border: 'none' }}
              >
                <X size={18} />
              </button>

              <div style={{ maxHeight: '68vh', overflow: 'hidden', borderRadius: '10px', marginBottom: '1.25rem', background: '#07172C' }}>
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  style={{ width: '100%', height: 'auto', maxHeight: '68vh', objectFit: 'contain', margin: '0 auto', display: 'block' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFF', margin: '0 0 0.25rem', fontFamily: 'var(--font-brush)' }}>
                    {activeLightbox.title}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                    Medium: {activeLightbox.medium}
                  </span>
                </div>
                <span className="concept-badge-subtle" style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#FFB703', border: 'none' }}>
                  {activeLightbox.tag || 'Student Artwork'}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Students;
