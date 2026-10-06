import React from 'react';
import { motion } from 'framer-motion';

/**
 * Artistic framing for photographs & artworks (polaroid, canvas border, or washi-tape mount)
 */
export const ArtworkFrame = ({
  src,
  alt = 'Artshine artwork photograph',
  title = '',
  tag = '',
  aspectRatio = '4/3',
  rotate = 0,
  hoverScale = true,
  onClick = null,
  className = '',
  style = {}
}) => {
  return (
    <motion.div
      className={`artwork-frame ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      whileHover={hoverScale ? { scale: 1.03, rotate: 0, zIndex: 10 } : {}}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
    >
      <div className="artwork-image-container" style={{ aspectRatio, overflow: 'hidden', borderRadius: '12px', background: '#F0ECE1' }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {(title || tag) && (
        <div className="artwork-frame-meta" style={{ marginTop: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {title && <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F2038' }}>{title}</span>}
          {tag && <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#718096' }}>{tag}</span>}
        </div>
      )}
    </motion.div>
  );
};

export default ArtworkFrame;
