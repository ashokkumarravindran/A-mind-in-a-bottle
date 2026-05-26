# Setup & Installation Guide

This guide walks you through setting up and running the A Mind in a Bottle immersive blog project.

## ✅ Prerequisites

Before you begin, make sure you have:

- **Node.js 18.17 or later** - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn/pnpm** (optional)
- **A code editor** - VS Code recommended
- **Git** (optional, for version control)

## 🚀 Quick Start

### 1. Navigate to Project Directory

```bash
cd /path/to/my-site
# or if you're already there
cd .
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animation library
- `tailwindcss` - Styling framework
- TypeScript & tools

**Installation time**: 2-5 minutes depending on internet speed

### 3. Start Development Server

```bash
npm run dev
```

This will:
- Start the Next.js development server
- Watch for file changes
- Enable hot module reloading

You should see:
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
```

### 4. Open in Browser

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## 📁 What Gets Installed

```
node_modules/        # All npm packages
.next/              # Next.js build cache (auto-generated)
```

## 🔧 Available Commands

```bash
# Development (with hot reload)
npm run dev

# Production build
npm build

# Start production server
npm start

# Run linter (ESLint)
npm run lint
```

## 🎯 First Steps After Installation

1. **View the Blog Page**: http://localhost:3000/blog
2. **View the About Page**: http://localhost:3000/about
3. **Open DevTools**: Press `F12` to inspect elements and test responsiveness
4. **Test Mobile**: Use DevTools device emulation or `Ctrl+Shift+M`

## ⚡ Troubleshooting

### Error: "Command not found: npm"

**Solution**: Node.js isn't installed properly. Reinstall from [nodejs.org](https://nodejs.org/)

### Error: "Port 3000 is already in use"

**Solution**: Either:
1. Kill the process using port 3000, OR
2. Use a different port: `npm run dev -- -p 3001`

### Error: "Module not found: framer-motion"

**Solution**: Dependencies weren't installed. Run:
```bash
npm install
```

### Changes not appearing in browser

**Solution**: 
1. Clear browser cache (`Ctrl+Shift+Delete`)
2. Hard refresh (`Ctrl+Shift+R` or `Cmd+Shift+R`)
3. Restart dev server (stop and run `npm run dev` again)

### CSS/Tailwind not working

**Solution**: Make sure you saved all files and dev server restarted. Check browser console for errors.

## 📝 File Structure to Know

```
src/
├── app/           # Pages that users visit
├── components/    # Reusable React components
├── data/          # Blog post data
└── lib/           # Utilities and helpers
```

## 🎓 Next Steps

1. **Read the Blog**: Open the app and explore the pages
2. **Edit Content**: Modify blog posts in `src/data/blogs.ts`
3. **Customize Colors**: Edit `tailwind.config.ts`
4. **Add Components**: Create new components in `src/components/`
5. **Study Components**: Read through Hero.tsx, BlogSection.tsx to learn patterns

## 🚀 Deployment (Future)

When ready to deploy:

```bash
# Build for production
npm run build

# Deploy the .next folder to Vercel, Netlify, or other host
```

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 💡 Tips

- **Hot Reload**: Changes to `.tsx` files auto-reload in browser
- **TypeScript**: Errors show in terminal; fix them before browser updates
- **Console Errors**: Check browser DevTools console (F12) for debugging
- **File Organization**: Keep related components together in folders

## ❓ Getting Help

1. Check the [README.md](../README.md) for project overview
2. Look at existing components for patterns
3. Read inline code comments for explanations
4. Check the error message in terminal/browser console

---

**You're all set!** 🎉 Happy coding! 

Next: Check out the [README.md](../README.md) to understand the project structure better.
