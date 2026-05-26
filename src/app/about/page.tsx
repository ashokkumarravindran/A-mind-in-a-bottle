'use client';

import React from 'react';
import Link from 'next/link';
import { Hero, AboutSection } from '@/components';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="The Story Behind the Words"
        subtitle="About"
        description="A journey of self-discovery, philosophy, and the relentless pursuit of understanding what it means to live authentically."
      />

      {/* Section 1: Who I Am */}
      <AboutSection
        index={0}
        title="Who I Am"
        align="left"
        content={
          <div className="space-y-6">
            <p>
              I&apos;m Ashok Kumar Ravindran, a seeker wrapped in the body of a thoughtful observer.
              My life has been shaped by moments of profound loss and unexpected grace, by conversations
              that lingered long after they ended, and by the relentless questioning of everything
              society told me to believe without scrutiny.
            </p>
            <p>
              I&apos;m not a philosopher by training, nor a therapist by profession. I&apos;m simply someone
              who has lived, struggled, loved, and survived—and found that in the midst of it all,
              there are truths worth writing about.
            </p>
            <p>
              Each essay in &quot;A Mind in a Bottle&quot; is a distillation of a lived experience, a truth
              I&apos;ve circled back to again and again, hoping to articulate it in a way that resonates
              with your own journey.
            </p>
          </div>
        }
      />

      {/* Section 2: What I Think About */}
      <AboutSection
        index={1}
        title="What I Think About"
        align="left"
        content={
          <div className="space-y-6">
            <p>
              I&apos;m obsessed with the paradoxes of human existence. How can we feel profoundly alone
              in a crowded room? How can loss teach us more about love than any period of happiness?
              Why do we spend so much time becoming someone our future self won&apos;t recognize?
            </p>
            <p>
              My thinking is shaped by modern psychology, ancient philosophy, personal experience,
              and the quiet observations of everyday life. I believe that consciousness is both
              our greatest burden and our greatest gift. That the universe isn&apos;t external to us—it&apos;s
              within us, experiencing itself through our awareness.
            </p>
            <p>
              I write about identity, relationships, resilience, and the often-overlooked art of
              simply being present to your own life. These aren&apos;t abstract concepts to me—they&apos;re
              questions I wake up asking, and reflections I&apos;ve earned through living.
            </p>
          </div>
        }
      />

      {/* Section 3: What I Create */}
      <AboutSection
        index={2}
        title="What I Create"
        align="left"
        content={
          <div className="space-y-6">
            <p>
              My work is an attempt to create a space where introspection isn&apos;t self-indulgent,
              where questioning is welcome, and where the struggles and triumphs of being human
              are treated with the respect they deserve.
            </p>
            <p>
              I create essay-length reflections, not quick takeaways. Each piece is meant to be
              savored, debated, and sat with. I write for the reader who wants depth over speed,
              meaning over metrics, and authenticity over polish.
            </p>
            <p>
              This immersive redesign of the blog is an extension of that philosophy—creating
              a reading experience that feels as thoughtful and intentional as the words themselves.
            </p>
          </div>
        }
      />

      {/* Section 4: Why This Blog Exists */}
      <AboutSection
        index={3}
        title="Why This Blog Exists"
        align="left"
        content={
          <div className="space-y-6">
            <p>
              &quot;A Mind in a Bottle&quot; exists because I believe we&apos;re all walking around with thoughts
              too big to contain, truths we&apos;re afraid to speak, and questions we&apos;re embarrassed to ask.
            </p>
            <p>
              This blog is an invitation to think differently about your own life. Not to accept
              what I say as truth, but to use these reflections as mirrors—to see yourself more clearly,
              to question your assumptions, and to remember that you&apos;re not alone in the strange,
              beautiful, difficult journey of being human.
            </p>
            <p>
              Every essay here is written with the hope that somewhere, someone reads it and thinks,
              &quot;Yes, I&apos;ve felt that.&quot; Or better yet, &quot;I never thought about it that way before.&quot;
              That moment—when a thought crystallizes or a perspective shifts—is why I write.
            </p>
          </div>
        }
      />

      {/* Final CTA Section */}
      <section className="relative w-full py-32 px-4 bg-gradient-to-b from-light to-white overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand mb-6">
            Start Exploring
          </h2>
          <p className="text-lg text-gray-700 font-light mb-12">
            Begin your journey through essays on consciousness, self-discovery, and the art of living.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-accent text-brand hover:bg-opacity-90 transition-all duration-300 font-light tracking-wider uppercase text-sm"
          >
            Read the Essays
            <svg
              className="ml-3 w-4 h-4"
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
      </section>
    </div>
  );
}
