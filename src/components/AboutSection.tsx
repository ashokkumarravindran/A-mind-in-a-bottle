// AboutSection component for narrative journey sections
// Used to build the About Me page with progressive reveal animations

'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AboutSectionProps {
  title: string;
  content: React.ReactNode;
  index: number;
  align?: 'left' | 'center' | 'right';
  fullWidth?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  index,
  align = 'left',
  fullWidth = false,
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`relative w-full py-24 px-4 md:px-8 bg-white ${
        index % 2 === 0 ? 'bg-white' : 'bg-light'
      }`}
    >
      <div className={fullWidth ? 'w-full' : 'max-w-3xl mx-auto'}>
        {/* Section number */}
        <motion.div variants={itemVariants} className={`mb-8 ${alignClass}`}>
          <span className="text-accent text-xs font-light tracking-widest uppercase">
            Section {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className={`text-4xl md:text-5xl font-serif text-brand mb-8 leading-tight ${alignClass}`}
        >
          {title}
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={itemVariants}
          className={`text-lg text-gray-700 font-light leading-relaxed space-y-6 ${alignClass}`}
        >
          {content}
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </motion.section>
  );
};
