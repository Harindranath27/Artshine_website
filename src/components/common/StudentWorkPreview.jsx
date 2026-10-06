import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';

export const StudentWorkPreview = () => {
  const artworks = [
    {
      id: 1,
      src: '/images/art_sunflower.jpg',
      title: 'Botanical Color Harmony',
      medium: 'Watercolor & Ink',
      rotate: -2.5,
      aspect: '4/5',
      zIndex: 2,
    },
    {
      id: 2,
      src: '/images/art_folk_bird.jpg',
      title: 'Indian Folk Art Study',
      medium: 'Traditional Motifs',
      rotate: 2.2,
      aspect: '1/1',
      zIndex: 3,
    },
    {
      id: 3,
      src: '/images/art_sketch_portrait.jpg',
      title: 'Contour & Value Study',
      medium: 'Graphite Pencil',
      rotate: -1.8,
      aspect: '4/5',
      zIndex: 1,
    },
    {
      id: 4,
      src: '/images/art_mountain_landscape.jpg',
      title: 'Atmospheric Landscape',
      medium: 'Gouache on Paper',
      rotate: 1.5,
      aspect: '16/10',
      zIndex: 2,
    },
  ];

  return (
    <div className="student-canvas-composition">
      <div className="canvas-artwork-cluster">
        {artworks.map((art, idx) => (
          <SectionReveal key={art.id} delay={idx * 0.12} className={`artwork-canvas-pin pin-${idx + 1}`}>
            <motion.div
              className="polaroid-artwork-item"
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                transform: `rotate(${art.rotate}deg)`,
                zIndex: art.zIndex,
              }}
            >
              <div className="polaroid-tape-mark" />
              <div className="polaroid-photo-frame" style={{ aspectRatio: art.aspect }}>
                <img src={art.src} alt={art.title} loading="lazy" />
              </div>
              <div className="polaroid-caption">
                <span className="polaroid-title">{art.title}</span>
                <span className="polaroid-medium">{art.medium}</span>
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
};

export default StudentWorkPreview;
