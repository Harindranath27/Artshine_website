import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionReveal from '../components/common/SectionReveal';
import PaintStroke from '../components/common/PaintStroke';
import ArtDoodle from '../components/common/ArtDoodle';
import OrganicBlob from '../components/common/OrganicBlob';
import BrushDivider from '../components/common/BrushDivider';
import '../styles/students.css';

const creativeMoments = [
  { image: 'IMG3.jpeg', alt: 'Students working together around an art project' },
  { image: 'IMG7.jpeg', alt: 'Student holding a completed artwork' },
  { image: 'IMG8.jpeg', alt: 'Student drawing at a table' },
  { image: 'IMG14.jpeg', alt: 'Students sharing their artwork' },
  { image: 'IMG15.jpeg', alt: 'Student showing a drawing' },
  { image: 'IMG16.jpeg', alt: 'Student holding a colourful artwork' },
  { image: 'IMG20.jpeg', alt: 'Student presenting an artwork' },
];

const milestones = [
  {
    image: 'IMG10.png', alt: 'Students holding certificates', label: 'World Record Recognition',
    details: {
      achievementTitle: 'World Record Recognition',
      eventName: 'Raaba Book of World Record',
      description: 'Artshine students were recognised for participating in a world-record initiative by showcasing their artwork.',
    },
  },
  {
    image: 'IMG11.jpeg', alt: 'Certificate presentation', label: 'Innovative Young Artist',
    details: {
      achievementTitle: 'Innovative Young Artist',
      eventName: 'Divine World Book of Records',
      studentNames: 'Kaustubh Tiwari',
      recognition: 'Innovative Young Artist – 2026',
      date: '1 March 2026',
      description: 'Recognised with the title ‘Innovative Young Artist – 2026’ for participation in the ARTQUEST 2026 initiative.',
    },
  },
  {
    image: 'IMG12.jpeg', alt: 'Student wearing medals and holding a certificate', label: 'First Prize in Drawing Competition',
    details: {
      achievementTitle: 'First Prize in Drawing Competition',
      studentNames: 'Rakshikaa',
      recognition: 'First prize',
      description: 'Rakshikaa won first prize in a drawing competition, earning recognition for her artwork.',
    },
  },
  {
    image: 'IMG13.jpeg', alt: 'Student artwork displayed on an exhibition wall', label: 'Student Artwork at an Art Exhibition',
    details: {
      achievementTitle: 'Student Artwork at an Art Exhibition',
      eventName: 'Chitrashala Art Exhibition',
      studentNames: 'Tamizhini',
      description: 'Tamizhini’s artwork was displayed at her school’s Chitrashala Art Exhibition, showcasing her creativity as an Artshine online-class student.',
    },
  },
];

const memories = ['IMG2.jpeg', 'IMG4.jpeg', 'IMG5.jpeg', 'IMG6.jpeg', 'IMG9.jpeg', 'IMG17.jpeg', 'IMG18.jpeg', 'IMG19.jpeg'];

export const Students = () => {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const prefersReducedMotion = useReducedMotion();
  const triggerEnquiry = () => document.getElementById('headerEnquireBtn')?.click();
  const seamlessMemories = [...memories, ...memories];

  return (
    <div className="students-memory-wall">
      <section className="smw-intro-section">
        <OrganicBlob color="#FFB703" size={360} opacity={0.14} blur={70} style={{ top: '-10%', right: '5%' }} />
        <OrganicBlob color="#00A896" size={300} opacity={0.11} blur={65} style={{ bottom: '-10%', left: '-5%' }} />
        <div className="smw-intro-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <h1 className="smw-intro-title">
              Students &{' '}
              <span style={{ color: 'var(--accent-coral)', position: 'relative', display: 'inline-block' }}>
                Achievements
                <PaintStroke variant="underline" color="#FFB703" style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '14px', zIndex: -1 }} />
              </span>
            </h1>
            <p className="smw-intro-copy">A glimpse into the moments, artwork, and recognition shared by Artshine students.</p>
          </motion.div>
          <motion.div className="smw-intro-art-composition" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            <div className="smw-intro-main-photo">
              <div className="scrap-tape tape-coral" style={{ top: '-10px', left: '25px', width: '65px' }} />
              <img src="/images/students/IMG1.jpeg" alt="Students displaying their artwork" loading="eager" />
              <div className="smw-intro-caption"><span>Artshine students</span><span style={{ fontSize: '0.85rem', color: '#718096' }}>Creative Moments</span></div>
            </div>
            <ArtDoodle type="sparkle" color="#FFB703" size={34} style={{ position: 'absolute', top: '-12px', left: '6%', zIndex: 6 }} />
            <ArtDoodle type="spiral" color="#E63956" size={28} style={{ position: 'absolute', bottom: '15px', right: '6%', zIndex: 6 }} />
          </motion.div>
        </div>
      </section>

      <BrushDivider type="paint" fillColor="#FAF8F2" />

      <section className="smw-moments-section">
        <div className="container">
          <SectionReveal><div className="smw-section-header"><h2 className="smw-section-title">Creative Moments</h2></div></SectionReveal>
          <div className="smw-photo-wall-grid">
            {creativeMoments.map((moment, index) => (
              <SectionReveal key={moment.image} className={`wall-pos-${index + 1}`} delay={index * 0.06}>
                <motion.article className="smw-photo-frame" whileHover={{ y: -4, rotate: 0 }}>
                  <div className={`scrap-tape ${['tape-coral', 'tape-yellow', 'tape-teal'][index % 3]}`} style={{ top: '-11px', left: '30px', width: '65px' }} />
                  <div className="smw-photo-img-box"><img src={`/images/students/${moment.image}`} alt={moment.alt} loading="lazy" /></div>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <BrushDivider type="torn" fillColor="#FAF8F2" />

      <section className="smw-achievements-section">
        <div className="container">
          <SectionReveal><div className="smw-section-header"><h2 className="smw-section-title">Milestones & Achievements</h2></div></SectionReveal>
          <div className="smw-milestones-wall smw-milestones-evidence">
            {milestones.map((item, index) => {
              const detailsId = `milestone-details-${index + 1}`;
              const isSelected = selectedAchievement === item.image;

              return (
              <figure className={`smw-milestone-evidence${isSelected ? ' is-selected' : ''}`} key={item.image}>
                <button
                  className="smw-milestone-trigger"
                  type="button"
                  aria-expanded={isSelected}
                  aria-controls={detailsId}
                  aria-describedby={detailsId}
                  onClick={(event) => {
                    if (window.matchMedia('(hover: none)').matches) {
                      setSelectedAchievement((selected) => selected === item.image ? null : item.image);
                      if (isSelected) event.currentTarget.blur();
                    } else if (event.detail === 0) {
                      setSelectedAchievement(item.image);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      setSelectedAchievement(null);
                      event.currentTarget.blur();
                    }
                  }}
                >
                  <div className="smw-milestone-img-wrap"><img src={`/images/students/${item.image}`} alt={item.alt} loading="lazy" /></div>
                </button>
                <figcaption>{item.label}</figcaption>
                <div className="smw-milestone-details" id={detailsId}>
                  <div>
                    <strong>{item.details.achievementTitle}</strong>
                    {item.details.eventName && <p>{item.details.eventName}</p>}
                    {item.details.studentNames && <p>{item.details.studentNames}</p>}
                    {item.details.recognition && <p>{item.details.recognition}</p>}
                    {item.details.date && <p>Certificate date: {item.details.date}</p>}
                    {item.details.description && <p>{item.details.description}</p>}
                  </div>
                  <button
                    className="smw-milestone-close"
                    type="button"
                    aria-label={`Close ${item.label} details`}
                    onClick={(event) => {
                      setSelectedAchievement(null);
                      event.currentTarget.blur();
                    }}
                  >
                    Close
                  </button>
                </div>
              </figure>
              );
            })}
          </div>
        </div>
      </section>

      <BrushDivider type="paint" fillColor="#FFFDF9" />

      <section className="smw-memories-marquee-section">
        <div className="container"><SectionReveal><div className="smw-section-header" style={{ marginBottom: '2.5rem' }}><h2 className="smw-section-title">Artshine Memories</h2></div></SectionReveal></div>
        <div className="smw-marquee-wrapper" onMouseEnter={() => setIsMarqueePaused(true)} onMouseLeave={() => setIsMarqueePaused(false)}>
          <motion.div className="smw-marquee-track" animate={prefersReducedMotion || isMarqueePaused ? {} : { x: ['0%', '-50%'] }} transition={{ duration: 38, ease: 'linear', repeat: Infinity }}>
            {seamlessMemories.map((image, index) => <article key={`${image}-${index}`} className="smw-marquee-card" aria-hidden={index >= memories.length}><div className="smw-marquee-img-box"><img src={`/images/students/${image}`} alt={index >= memories.length ? '' : 'Artshine class memory'} loading="lazy" /></div></article>)}
          </motion.div>
        </div>
      </section>

      <BrushDivider fillColor="#09192E" type="torn" />

      <section className="smw-final-cta-section">
        <OrganicBlob color="#FFB703" size={280} opacity={0.14} blur={60} style={{ top: '-15%', right: '8%' }} />
        <OrganicBlob color="#E63956" size={260} opacity={0.16} blur={60} style={{ bottom: '-15%', left: '8%' }} />
        <div className="smw-final-cta-box"><SectionReveal>
          <ArtDoodle type="sparkle" color="#FFB703" size={36} style={{ display: 'inline-block', marginBottom: '1rem' }} />
          <h2 className="smw-final-cta-heading">More stories are still being created.</h2>
          <button onClick={triggerEnquiry} className="smw-final-cta-btn"><span>Enquire Now</span><ArrowRight size={17} /></button>
        </SectionReveal></div>
      </section>
    </div>
  );
};

export default Students;
