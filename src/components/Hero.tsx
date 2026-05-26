// Hero component for page headers
// Soft, human, reflective tone with gentle animations

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

// Floating particles for ambient effect
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -40],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: Math.random() * 6 + 6,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// Soft light glow effect
const SoftLightGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"
      style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

export const Hero: React.FC<HeroProps> = ({ title, subtitle, description }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 200], [0, 50]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-hero bg-gradient-to-b from-brand to-black flex items-center justify-center px-4 overflow-hidden">
      {/* Ambient effects */}
      <FloatingParticles />
      <SoftLightGlow />

      {/* Subtle slow zoom background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-brand/50 to-black"
        style={{ y }}
      />

      {/* Content */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {subtitle && (
          <motion.p
            variants={itemVariants}
            className="text-accent/80 text-sm font-light tracking-widest uppercase mb-6"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-serif text-white/90 mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-white/40 rounded-full"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
