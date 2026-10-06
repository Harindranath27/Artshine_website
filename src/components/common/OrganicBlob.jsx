import React from 'react';

/**
 * Organic background blob with soft edges and painterly blur
 */
export const OrganicBlob = ({ color = '#FFB703', size = 300, opacity = 0.25, blur = 40, className = '', style = {} }) => {
  return (
    <div
      className={`organic-blob ${className}`}
      style={{
        position: 'absolute',
        width: size,
        height: size * 0.8,
        backgroundColor: color,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        borderRadius: '52% 48% 63% 37% / 43% 55% 45% 57%',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
      aria-hidden="true"
    />
  );
};

export default OrganicBlob;
