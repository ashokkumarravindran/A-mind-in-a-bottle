# Quick Reference Guide

Fast lookup for common tasks and patterns in this project.

## 🚀 Getting Started (30 seconds)

```bash
cd /path/to/my-site
npm install
npm run dev
# Visit http://localhost:3000
```

## 📝 Common Tasks

### Add a Blog Post

Edit `src/data/blogs.ts`:
```typescript
{
  id: '7',
  title: 'Your Title',
  excerpt: 'Short summary...',
  slug: 'your-slug',
  author: 'Your Name',
  image: 'https://image-url.jpg',
  imageAlt: 'Description',
  content: 'Full essay text...'
}
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      'brand': '#your-color',
      'accent': '#your-accent',
    }
  }
}
```

### Update Navigation Links

Edit `src/components/Navigation.tsx` or add route in `src/app/`

### Customize Typography

Edit `tailwind.config.ts`:
```typescript
fontFamily: {
  'serif': ['Your Font', 'serif'],
  'sans': ['Your Font', 'sans-serif'],
}
```

## 🎬 Animation Templates

### Entrance Animation
```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div variants={variants} initial="hidden" whileInView="visible">
```

### Scroll-Triggered
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
```

### Continuous Loop
```typescript
<motion.div
  animate={{ opacity: [0.3, 0.6, 0.3] }}
  transition={{ duration: 4, repeat: Infinity }}
>
```

### Button Hover
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

## 🗂️ File Organization

```
src/
├── app/              # Pages (routes)
│   ├── blog/
│   ├── about/
│   └── layout.tsx
├── components/       # Reusable components
├── data/            # Static data
├── lib/             # Utilities
└── app/globals.css  # Global styles
```

## 🔗 Import Paths

```typescript
// Components
import { Hero, BlogSection } from '@/components'

// Data
import { blogPosts } from '@/data/blogs'

// Types
import type { BlogPost } from '@/data/blogs'

// Utilities
import { animationExamples } from '@/lib/animations'
```

## 💻 Commands Reference

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm start        # Run prod server
npm run lint     # Check for errors
```

## 🎨 Component Props

### Hero
```typescript
<Hero
  title="Title"
  subtitle="Optional"
  description="Optional longer text"
/>
```

### BlogSection
```typescript
<BlogSection
  post={blogPost}
  index={0}
  onReadMore={(post) => handleClick(post)}
/>
```

### AboutSection
```typescript
<AboutSection
  title="Section Title"
  content={<p>Content here</p>}
  index={0}
  align="left"
  fullWidth={false}
/>
```

## 🎯 Tailwind Classes Used

```
Text: text-{size}, font-serif, font-light
Spacing: px-4, py-8, mb-6, gap-12
Colors: bg-white, text-brand, text-accent
Layout: grid, flex, max-w-7xl, mx-auto
Effects: rounded-lg, shadow, backdrop-blur-md
Responsive: md:, lg:, hidden, hidden md:flex
```

## 🐛 Debugging

```bash
# See console output
npm run dev
# Check terminal for TypeScript/ESLint errors

# Browser DevTools
F12 or Cmd+Option+I
```

## 🎓 Code Reading Order

1. `README.md` - Overview
2. `SETUP.md` - Installation
3. `src/app/layout.tsx` - Root structure
4. `src/components/Hero.tsx` - Simple component pattern
5. `src/components/BlogSection.tsx` - Complex component with animations
6. `src/app/blog/page.tsx` - How to use components
7. `tailwind.config.ts` - Design configuration

## 🔄 Git Workflow

```bash
# Check what changed
git status

# Stage changes
git add .

# Commit
git commit -m "Description of change"

# Push
git push origin main
```

## 📱 Testing Responsive Design

```
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
or manually resize browser window
```

## 🚨 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| `npm: command not found` | Install Node.js from nodejs.org |
| Port 3000 in use | `npm run dev -- -p 3001` |
| Styles not updating | Hard refresh (Ctrl+Shift+R) and restart |
| TypeScript errors | Check `src/` files, errors in terminal |
| Images not loading | Check URL is valid/accessible |

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)

## ✨ Pro Tips

- Use `Ctrl+Space` in VS Code for autocomplete
- Hover over variables to see types
- Use `F12` to inspect and debug styles
- Run `npm run build` to catch errors before deploying
- Keep components small and focused

## 🎯 Checklist Before Deploying

- [ ] All pages load without errors
- [ ] Mobile responsive design works
- [ ] Animations run smoothly
- [ ] No console errors (F12)
- [ ] All links work correctly
- [ ] Images load properly
- [ ] TypeScript `npm run build` succeeds

---

**Need more help?** Check `README.md`, `SETUP.md`, or `ARCHITECTURE.md`
