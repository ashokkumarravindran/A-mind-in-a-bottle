// BlogSection component for displaying individual blog posts
// Cinematic full-screen immersive sections with theme-based animations

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { BlogPost } from '@/data/blogs';
import Link from 'next/link';

interface BlogSectionProps {
  post: BlogPost;
  index: number;
  onReadMore?: (post: BlogPost) => void;
}

// Theme-based motion components for each article
const StarrySky = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated stars */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.8 + 0.2,
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
    {/* Shooting star */}
    <motion.div
      className="absolute w-1 h-1 bg-white"
      style={{ top: '10%', left: '10%' }}
      animate={{
        top: ['10%', '60%'],
        left: ['10%', '80%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 8,
        ease: 'easeIn',
      }}
    />
    {/* Ambient glow */}
    <motion.div
      className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      style={{ top: '20%', right: '10%' }}
      animate={{
        scale: [1, 1.2, 1],
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

const PortraitReflection = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Subtle zoom effect on image */}
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    {/* Glass reflection overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10"
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

const RoadMotion = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Moving light streaks */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-20 h-1 bg-amber-400/30 rounded-full"
        style={{
          left: `${20 + i * 15}%`,
          top: `${60 + (i % 2) * 20}%`,
        }}
        animate={{
          x: [-200, 400],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 2 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.5,
          ease: 'easeIn',
        }}
      />
    ))}
    {/* Road glow */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-500/20 to-transparent"
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

const SunsetGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Golden hour glow */}
    <motion.div
      className="absolute w-full h-1/2 bg-gradient-to-t from-orange-500/30 to-transparent"
      style={{ bottom: 0 }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    {/* Light rays */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10"
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

const CosmicDust = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating particles */}
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -100],
          x: [0, Math.random() * 50 - 25],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: 'easeOut',
        }}
      />
    ))}
    {/* Nebula glow */}
    <motion.div
      className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
      style={{ top: '30%', right: '20%' }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

const PeacefulSolitude = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gentle floating particles */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: Math.random() * 4 + 4,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: 'easeInOut',
        }}
      />
    ))}
    {/* Soft ambient light */}
    <motion.div
      className="absolute w-full h-full bg-gradient-to-t from-black/20 via-transparent to-black/40"
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

// Motion component mapper
const getMotionEffect = (slug: string) => {
  const effects: Record<string, React.FC> = {
    'under-the-same-sky': StarrySky,
    'the-stranger-within': PortraitReflection,
    'a-note-to-self': RoadMotion,
    'you-have-you': PeacefulSolitude,
    'in-perfect-orbit': CosmicDust,
    'life-is-now': SunsetGlow,
  };
  return effects[slug] || null;
};

export const BlogSection: React.FC<BlogSectionProps> = ({ post, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const MotionEffect = getMotionEffect(post.slug);

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="relative w-full h-screen min-h-[700px] md:min-h-[900px]"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${post.image}')`,
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Theme-based motion effect */}
      {MotionEffect && (
        <div className="absolute inset-0 z-10">
          <MotionEffect />
        </div>
      )}

      {/* Content container */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            {/* Article number */}
            <motion.div
              variants={contentVariants}
              className="mb-4 md:mb-6"
            >
              <span className="text-accent text-sm font-light tracking-widest uppercase">
                {String(index + 1).padStart(2, '0')} — Essay
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={contentVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 md:mb-8 leading-[1.1]"
            >
              {post.title}
            </motion.h2>

            {/* Excerpt */}
            <motion.p
              variants={contentVariants}
              className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-6 md:mb-8 max-w-2xl"
            >
              {post.excerpt}
            </motion.p>

            {/* Author */}
            <motion.p
              variants={contentVariants}
              className="text-sm md:text-base text-gray-400 mb-8 md:mb-12"
            >
              By <span className="text-gray-300">{post.author}</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={contentVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-accent/20 hover:bg-accent/30 border border-accent/50 rounded-full text-accent hover:text-white transition-all duration-500"
              >
                <span className="font-light tracking-wider uppercase text-sm">
                  Read Essay
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
