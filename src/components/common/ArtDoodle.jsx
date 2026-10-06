import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable hand-drawn doodles (sun, sparkle, spiral, heart, star)
 * @param {'sun' | 'sparkle' | 'spiral' | 'heart' | 'star'} type
 * @param {string} color
 * @param {number} size
 * @param {boolean} animate
 */
export const ArtDoodle = ({ type = 'sparkle', color = '#FFB703', size = 32, className = '', style = {}, animate = true }) => {
  const motionProps = animate ? {
    animate: {
      rotate: [0, 6, -4, 0],
      scale: [1, 1.05, 0.98, 1],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    }
  } : {};

  if (type === 'sun') {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`art-doodle doodle-sun ${className}`}
        style={style}
        aria-hidden="true"
        {...motionProps}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.svg>
    );
  }

  if (type === 'sparkle') {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={`art-doodle doodle-sparkle ${className}`}
        style={style}
        aria-hidden="true"
        {...motionProps}
      >
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" opacity="0.85" />
      </motion.svg>
    );
  }

  if (type === 'heart') {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`art-doodle doodle-heart ${className}`}
        style={style}
        aria-hidden="true"
        {...motionProps}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </motion.svg>
    );
  }

  if (type === 'spiral') {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        className={`art-doodle doodle-spiral ${className}`}
        style={style}
        aria-hidden="true"
        {...motionProps}
      >
        <path d="M12 12a1.5 1.5 0 0 1-1.5-1.5c0-1.65 1.35-3 3-3s3 1.35 3 3a4.5 4.5 0 0 1-4.5 4.5c-2.48 0-4.5-2.02-4.5-4.5a6 6 0 0 1 6-6c3.31 0 6 2.69 6 6" />
      </motion.svg>
    );
  }

  // Star by default
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`art-doodle doodle-star ${className}`}
      style={style}
      aria-hidden="true"
      {...motionProps}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" opacity="0.85" />
    </motion.svg>
  );
};

export default ArtDoodle;
