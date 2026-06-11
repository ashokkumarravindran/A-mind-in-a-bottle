# A Mind in a Bottle - Immersive Blog Experience

A modern, Apple-inspired blog redesign built with Next.js, Tailwind CSS, and Framer Motion. 
## 🎯 Project Overview

This is a redesign experiment for "A Mind in a Bottle" (amindinabottle.com), featuring:

- **Blog Page**: 6 essays displayed as narrative sections with alternating layouts and smooth animations
- **About Me Page**: A scrollable journey through personal narrative sections
- **Minimal Design**: Inspired by Apple's product pages and premium editorial layouts
- **Performance-Focused**: Lightweight animations and optimized interactions
- **Responsive**: Desktop-first design with mobile-friendly experience

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Navigation and Footer
│   ├── globals.css              # Global styles
│   ├── page.tsx                 # Home page (redirects to /blog)
│   ├── blog/
│   │   └── page.tsx             # Blog listing page with 6 posts
│   └── about/
│       └── page.tsx             # About Me page with narrative sections
│
├── components/                   # Reusable React components
│   ├── Hero.tsx                 # Hero section with animations
│   ├── BlogSection.tsx          # Individual blog post section
│   ├── AboutSection.tsx         # Narrative section for About page
│   ├── Navigation.tsx           # Header navigation with mobile menu
│   ├── Footer.tsx               # Site footer
│   └── index.ts                 # Component exports
│
├── data/
│   └── blogs.ts                 # Mock blog data (6 posts from amindinabottle)
│
├── lib/                         # Utility functions (currently empty, ready to extend)
│
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── next.config.js              # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Basic knowledge of React and Tailwind CSS

### Installation

1. Navigate to the project directory:
```bash
cd my-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Key Features & Components

### 1. Hero Component (`Hero.tsx`)
Displays a large typography header with gradient background and scroll indicator.

**Features:**
- Staggered animation on load
- Scroll indicator with pulse animation
- Responsive typography
- Customizable subtitle and description

**Usage:**
```tsx
<Hero
  title="Your Title"
  subtitle="Optional subtitle"
  description="Longer description text"
/>
```

### 2. BlogSection Component (`BlogSection.tsx`)
Renders individual blog posts with alternating left/right layouts.

**Features:**
- Alternating image/text alignment
- WhileInView animations (animate on scroll)
- Post number indicator
- Author information
- Smooth divider animations
- Hover effects on CTA button

**Usage:**
```tsx
<BlogSection
  post={blogPost}
  index={0}
  onReadMore={(post) => console.log(post)}
/>
```

### 3. AboutSection Component (`AboutSection.tsx`)
Narrative sections for the About page with progressive reveal animations.

**Features:**
- Section number indicator
- Animated background gradient
- Customizable text alignment
- StaggerChildren animation pattern
- Full-width option

**Usage:**
```tsx
<AboutSection
  index={0}
  title="Section Title"
  align="left"
  content={<p>Content here</p>}
/>
```

### 4. Navigation Component (`Navigation.tsx`)
Minimal header with desktop and mobile menu support.

**Features:**
- Fixed positioning
- Backdrop blur effect
- Active page highlighting
- Animated hamburger menu
- Smooth transitions

### 5. Footer Component (`Footer.tsx`)
Simple footer with navigation and social links.

## 🎬 Animation Patterns

### Framer Motion Variants Used

1. **Container Stagger Pattern**: Parent animates children with delays
```typescript
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}
```

2. **WhileInView**: Trigger animations when element comes into view
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

3. **Continuous Animations**: Looping background effects
```tsx
animate={{ opacity: [0.3, 0.6, 0.3] }}
transition={{ duration: 4, repeat: Infinity }}
```

## 🎯 Design System

### Color Palette
- **Brand (Dark)**: `#1a1a1a` - Primary text and backgrounds
- **Accent**: `#d4a574` - Warm earth tone for highlights
- **Light**: `#f9f7f4` - Light background sections
- **Grays**: Standard gray scale for text hierarchy

### Typography
- **Serif Font**: Georgia for headings (elegant, editorial)
- **Sans-serif**: System fonts for body text (clean, readable)
- **Font Weights**: Light (300) and Regular (400) for minimal aesthetic

### Spacing
- Generous whitespace following Apple design principles
- Base spacing unit: Tailwind's default spacing scale
- Sections separated by 20-24px (py-20 / py-24)

## 📝 Adding More Blog Posts

To add more blog posts:

1. **Update `src/data/blogs.ts`**:
```typescript
export const blogPosts: BlogPost[] = [
  // ... existing posts
  {
    id: '7',
    title: 'Your New Title',
    excerpt: 'Short preview text...',
    slug: 'your-slug',
    author: 'Author Name',
    image: 'https://image-url.jpg',
    imageAlt: 'Alt text',
    content: 'Full content here...'
  }
];
```

2. The Blog page automatically renders all posts in the array.

## 📱 Responsive Design

The design is **desktop-first** but fully responsive:
- **Desktop (md+)**: Two-column grid layouts, full animations
- **Tablet (sm-md)**: Adjusted spacing and font sizes
- **Mobile (sm)**: Single column, optimized touch targets

## ⚡ Performance Optimizations

1. **Lazy Animations**: All heavy animations use `whileInView` to trigger only when needed
2. **CSS-only Effects**: Simple transitions use Tailwind CSS instead of JavaScript
3. **Image Optimization**: Images are loaded from external URLs (Unsplash)
4. **Next.js Benefits**: Automatic code splitting, optimized production builds

## 🔧 How to Extend

### Add a New Page

1. Create a new directory in `src/app/`:
```bash
mkdir src/app/essays
```

2. Create a `page.tsx` inside:
```tsx
'use client';

import { Hero } from '@/components';

export default function EssaysPage() {
  return (
    <div>
      <Hero title="Essays" />
      {/* Your content */}
    </div>
  );
}
```

3. Update `Navigation.tsx` to add the link.

### Create a Custom Component

1. Create a new file in `src/components/`:
```tsx
// src/components/MyComponent.tsx
'use client';

import { motion } from 'framer-motion';

interface MyComponentProps {
  // Your props
}

export const MyComponent: React.FC<MyComponentProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Your component content */}
    </motion.div>
  );
};
```

2. Export it from `src/components/index.ts`:
```tsx
export { MyComponent } from './MyComponent';
```

3. Use it anywhere:
```tsx
import { MyComponent } from '@/components';
```

### Customize Styling

1. **Tailwind Theme**: Edit `tailwind.config.ts` to adjust colors, spacing, fonts
2. **Global Styles**: Update `src/app/globals.css` for base styles
3. **Component Styles**: Modify Tailwind classes directly in component JSX

## 📚 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Components**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 10](https://www.framer.com/motion/)
- **Language**: [TypeScript 5.3](https://www.typescriptlang.org/)

## 🎓 Learning Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Apple Design System Principles](https://www.apple.com/design/)

## 📄 License

This project is for personal/educational use.

---

**Made with ❤️ for thoughtful readers**

Questions or suggestions? The code is organized and commented to help you understand and extend it further.
