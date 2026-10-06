import React from 'react';

/**
 * Brush wave divider for artistic section transitions
 * @param {'wave' | 'torn' | 'paint'} type
 * @param {string} fillColor
 * @param {boolean} flip
 */
export const BrushDivider = ({ type = 'wave', fillColor = '#FAF8F2', flip = false, className = '', style = {} }) => {
  const transform = flip ? 'rotate(180deg)' : 'none';

  if (type === 'paint') {
    return (
      <div className={`brush-divider ${className}`} style={{ width: '100%', overflow: 'hidden', lineHeight: 0, transform, ...style }} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: 'clamp(40px, 6vw, 75px)', display: 'block' }}>
          <path
            d="M0,18 C140,55 240,4 390,42 C540,80 660,15 820,50 C980,85 1120,22 1280,58 C1360,40 1410,25 1440,32 L1440,80 L0,80 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  if (type === 'torn') {
    return (
      <div className={`brush-divider ${className}`} style={{ width: '100%', overflow: 'hidden', lineHeight: 0, transform, ...style }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 'clamp(30px, 4vw, 50px)', display: 'block' }}>
          <path
            d="M0,15 L45,28 L95,12 L150,26 L210,14 L280,30 L340,16 L410,28 L490,14 L560,32 L630,18 L700,28 L780,12 L850,30 L930,16 L1010,28 L1080,14 L1160,32 L1240,18 L1320,28 L1390,14 L1440,24 L1440,60 L0,60 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`brush-divider ${className}`} style={{ width: '100%', overflow: 'hidden', lineHeight: 0, transform, ...style }} aria-hidden="true">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 'clamp(36px, 5vw, 68px)', display: 'block' }}>
        <path
          d="M0,25 C180,95 380,8 620,65 C860,118 1100,10 1440,50 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default BrushDivider;
