# Quick Reference Card

## 🚀 Commands

```bash
# First time setup
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

## 📁 Key Files to Edit

| File | What to Change | Lines |
|------|---------------|-------|
| `src/components/Hero.tsx` | Name, title, tagline | 28-38 |
| `src/components/About.tsx` | Bio, statistics | 38-67 |
| `src/components/Skills.tsx` | Skills list, levels | 12-33 |
| `src/components/Experience.tsx` | Work history | 15-66 |
| `src/components/Projects.tsx` | Your projects | 19-71 |
| `src/components/Contact.tsx` | Email, phone, social | 93-119 |

## 🎨 Color Classes

```
Primary:   cyan-400, cyan-500, cyan-600
Secondary: purple-400, purple-500, purple-600
Accent:    pink-400, pink-500

Backgrounds:
Light:     slate-50
Dark:      slate-900
Cards:     slate-800

Text:
Primary:   white
Secondary: gray-300, gray-400
Dark:      slate-900
```

## 📱 Breakpoints

```
sm:  640px   (tablets)
md:  768px   (landscape tablets)
lg:  1024px  (laptops)
xl:  1280px  (desktops)
```

## 🔧 Common Tasks

### Change Colors Throughout
Find and replace these classes:
- `cyan-` → `blue-` (or any color)
- `purple-` → `indigo-`
- `pink-` → `rose-`

### Hide a Section
In `src/Portfolio.tsx` (lines 131-136), comment out:
```tsx
{/* <Experience /> */}
```

### Change Navigation Items
Edit `src/Portfolio.tsx` lines 45-52

### Add New Section
1. Create `src/components/NewSection.tsx`
2. Import in `src/Portfolio.tsx`
3. Add to nav items array
4. Add component in `<main>`

## 📦 Project Structure

```
src/
├── components/       # All sections
├── Portfolio.tsx    # Main app + nav
├── App.tsx          # Root component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🎯 Customization Priority

1. ✅ Personal info (name, title)
2. ✅ Contact details (email, phone, social)
3. ✅ About bio text
4. ✅ Skills and levels
5. ✅ Work experience
6. ✅ Projects (replace images!)
7. ⚙️ Colors (optional)
8. ⚙️ Animations (optional)

## 🌐 Deploy Commands

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## 🐛 Common Issues

**Port 3000 in use:**
```bash
# Kill process or use different port
# Edit vite.config.ts: server: { port: 3001 }
```

**Tailwind not working:**
```bash
# Make sure index.css imports are present:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check tsconfig.json exists
# Restart VS Code TypeScript server:
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

## 📊 Performance Tips

- Optimize images (use WebP, max 800KB)
- Replace Unsplash URLs with local optimized images
- Enable lazy loading for images
- Minimize custom animations
- Keep bundle size < 500KB

## 🔗 Useful Links

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Unsplash](https://unsplash.com) - Free images

## 💡 Pro Tips

1. **Hot Reload:** Changes appear instantly while `npm run dev` is running
2. **TypeScript:** Hover over code in VS Code for type hints
3. **Tailwind:** Use VS Code Tailwind IntelliSense extension
4. **Icons:** Use Heroicons (inline SVG) - already included
5. **Forms:** Integrate EmailJS or Formspree for contact form

## 📝 Before Deploy Checklist

- [ ] Updated all personal information
- [ ] Replaced project images
- [ ] Updated contact email/phone
- [ ] Tested on mobile device
- [ ] Checked all links work
- [ ] Updated meta tags in index.html
- [ ] Tested contact form
- [ ] Ran `npm run build` successfully
- [ ] Checked bundle size
- [ ] Added analytics (optional)

## 🆘 Get Help

1. Check [README.md](README.md) - Full documentation
2. Check [GETTING_STARTED.md](GETTING_STARTED.md) - Step-by-step guide
3. Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Technical details
4. Check component comments - Inline documentation
5. Use browser DevTools - Inspect elements

---

**Remember:** All files are commented and TypeScript will help catch errors!
