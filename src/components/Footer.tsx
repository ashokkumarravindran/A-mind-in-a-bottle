// Footer component
// Simple, minimal footer with navigation and social links

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-white text-lg mb-2">A Mind in a Bottle</h3>
            <p className="font-light text-sm text-gray-400">
              Reflections on life, consciousness, and the art of living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-light text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-accent transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-light text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} A Mind in a Bottle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
