import React from 'react';
import { motion } from 'framer-motion';

/**
 * Section viewport reveal with prefers-reduced-motion support
 */
export const SectionReveal = ({
  children,
  delay = 0,
  yOffset = 24,
  duration = 0.6,
  className = '',
  style = {},
  parallax = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
