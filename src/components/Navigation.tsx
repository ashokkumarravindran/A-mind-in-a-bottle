// Navigation component for site header
// Minimal, clean navigation with smooth transitions

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const linkVariants = {
    rest: { color: 'rgb(107, 114, 128)' },
    hover: { color: 'rgb(212, 165, 116)' },
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80"
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl md:text-2xl text-brand hover:text-accent transition-colors">
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-block"
          >
            A Mind in a Bottle
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <motion.div
            whileHover="hover"
            variants={linkVariants}
            className="cursor-pointer"
          >
            <Link
              href="/blog"
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                isActive('/blog') ? 'text-accent' : 'text-gray-600 hover:text-accent'
              }`}
            >
              Blog
            </Link>
          </motion.div>

          <motion.div
            whileHover="hover"
            variants={linkVariants}
            className="cursor-pointer"
          >
            <Link
              href="/about"
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                isActive('/about') ? 'text-accent' : 'text-gray-600 hover:text-accent'
              }`}
            >
              About
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center gap-1.5 relative"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-brand"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-brand"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-brand"
          />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/blog"
              className={`block text-sm font-light tracking-wider uppercase py-2 ${
                isActive('/blog') ? 'text-accent' : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`block text-sm font-light tracking-wider uppercase py-2 ${
                isActive('/about') ? 'text-accent' : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
