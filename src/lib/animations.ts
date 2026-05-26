// Animation Examples and Patterns
// This file documents common animation patterns used throughout the project

/*
===========================================
1. STAGGER CONTAINER PATTERN
===========================================

Used for: Sequential animation of child elements
Pattern: Parent container controls timing of children

Example:
*/

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,      // Delay between each child
      delayChildren: 0.1,         // Delay before first child
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

/*
Usage in component:
<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.h1 variants={itemVariants}>Title</motion.h1>
  <motion.p variants={itemVariants}>Subtitle</motion.p>
</motion.div>
*/

/*
===========================================
2. SCROLL-TRIGGERED ANIMATION (whileInView)
===========================================

Used for: Animating elements as they enter viewport
Pattern: Trigger animation when element becomes visible

Example:
*/

/*
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ 
    once: true,           // Only animate once
    margin: "-100px"      // Trigger 100px before entering viewport
  }}
  variants={containerVariants}
>
  Content
</motion.div>
*/

/*
===========================================
3. CONTINUOUS/LOOP ANIMATION
===========================================

Used for: Background decorative elements, subtle breathing effects
Pattern: Infinite repetition with easing

Example:
*/

/*
<motion.div
  animate={{ opacity: [0.3, 0.6, 0.3] }}
  transition={{ 
    duration: 4, 
    repeat: Infinity,
    ease: 'easeInOut'
  }}
>
  Floating element
</motion.div>
*/

/*
===========================================
4. HOVER ANIMATION
===========================================

Used for: Interactive buttons and links
Pattern: whileHover changes on user interaction

Example:
*/

/*
<motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  Hover me
</motion.button>
*/

/*
===========================================
5. PARALLAX EFFECT (Pseudo-Parallax)
===========================================

Used for: Section separators, visual depth
Pattern: Different animation timing for different elements

Example:
*/

/*
<motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6 }}>
  Divider
</motion.div>
*/

/*
===========================================
ANIMATION EASING PRESETS
===========================================

Common easing functions used:
- 'easeOut': Starts fast, ends slow (best for entrances)
- 'easeIn': Starts slow, ends fast (best for exits)
- 'easeInOut': Smooth acceleration and deceleration
- 'linear': Constant speed
- 'circOut': Smooth circular easing

Example:
transition={{ duration: 0.8, ease: 'easeOut' }}
*/

/*
===========================================
PERFORMANCE TIPS
===========================================

1. Use whileInView instead of always running animations
2. Use transform and opacity only (GPU accelerated)
3. Avoid animating width/height (causes reflows)
4. Set once: true to prevent re-animations on scroll
5. Use margin on viewport to trigger animations slightly before entering

Good:
animate={{ opacity: 1, y: 0 }}

Avoid:
animate={{ width: '100%', height: '500px' }}
*/

export const animationExamples = {
  containerVariants,
  itemVariants,
};
