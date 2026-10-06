import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable artistic brush stroke / paint wash SVGs
 * @param {'underline' | 'wash' | 'splatter' | 'swash'} variant
 * @param {string} color
 * @param {string} className
 */
export const PaintStroke = ({ variant = 'underline', color = '#E63956', className = '', style = {}, animated = true }) => {
  if (variant === 'underline') {
    return (
      <svg
        className={`paint-stroke paint-underline ${className}`}
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...style }}
        aria-hidden="true"
      >
        <motion.path
          d="M4 14C45 6 120 4 236 12C185 18 80 22 12 16"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.88"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          whileInView={animated ? { pathLength: 1, opacity: 0.88 } : false}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    );
  }

  if (variant === 'wash') {
    return (
      <svg
        className={`paint-stroke paint-wash ${className}`}
        viewBox="0 0 300 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...style }}
        aria-hidden="true"
      >
        <path
          d="M15 45C65 15 195 5 285 35C315 50 295 105 230 115C165 125 75 110 35 85C5 65 -15 55 15 45Z"
          fill={color}
          opacity="0.22"
        />
      </svg>
    );
  }

  if (variant === 'splatter') {
    return (
      <svg
        className={`paint-stroke paint-splatter ${className}`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ ...style }}
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="14" fill={color} opacity="0.65" />
        <circle cx="25" cy="30" r="5" fill={color} opacity="0.45" />
        <circle cx="75" cy="25" r="7" fill={color} opacity="0.55" />
        <circle cx="70" cy="70" r="4.5" fill={color} opacity="0.5" />
        <circle cx="35" cy="75" r="6" fill={color} opacity="0.4" />
        <circle cx="85" cy="50" r="3" fill={color} opacity="0.3" />
      </svg>
    );
  }

  return (
    <svg
      className={`paint-stroke paint-swash ${className}`}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...style }}
      aria-hidden="true"
    >
      <path
        d="M6 24C48 10 110 8 174 22C140 28 85 30 20 28"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
};

export default PaintStroke;
