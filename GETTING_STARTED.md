# Getting Started Guide

## Quick Start

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including React, TypeScript, Vite, and Tailwind CSS.

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will automatically open in your browser at `http://localhost:3000`

### 3. Start Customizing!

The portfolio is now running. You can edit files and see changes in real-time thanks to Vite's hot module replacement.

## What You'll See

Your portfolio includes these sections (in order):

1. **Hero** - Landing section with your name and call-to-action buttons
2. **About** - Professional bio and statistics
3. **Skills** - Interactive skills showcase with filtering
4. **Experience** - Work history timeline
5. **Projects** - Portfolio gallery with your projects
6. **Contact** - Contact form and social links

## First Customizations

### Update Your Name and Title

**File:** `src/components/Hero.tsx`

Find and replace:
- Line 28: `Alex` → Your first name
- Line 30: `Jordan` → Your last name
- Line 23: `Creative Developer & Designer` → Your title

### Update Your Bio

**File:** `src/components/About.tsx`

- Lines 38-50: Replace the bio paragraphs with your own story
- Lines 55-67: Update the statistics (years, projects, clients)

### Add Your Skills

**File:** `src/components/Skills.tsx`

- Lines 12-33: Modify the skills array
- Add/remove skills and adjust level percentages
- Categories: 'frontend', 'backend', 'tools'

### Add Your Experience

**File:** `src/components/Experience.tsx`

- Lines 15-66: Update the experiences array
- Replace with your actual work history
- Include company, role, period, achievements

### Add Your Projects

**File:** `src/components/Projects.tsx`

- Lines 19-71: Update the projects array
- Replace placeholder images with your project screenshots
- Update titles, descriptions, and tech stacks
- Add your GitHub and live demo URLs

### Update Contact Info

**File:** `src/components/Contact.tsx`

- Lines 93-119: Update contact information (email, phone, location)
- Lines 45-90: Update social media links
- Configure form submission endpoint if needed

## Project Structure

```
portfoliocreative/
├── public/              # Static assets
│   └── vite.svg        # Favicon
├── src/
│   ├── components/     # Portfolio sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── Portfolio.tsx   # Main portfolio component with navigation
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles + Tailwind imports
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Styling with Tailwind

This portfolio uses Tailwind CSS utility classes. Here are the main color classes used:

**Primary Colors:**
- `cyan-400`, `cyan-500`, `cyan-600` - Cyan/turquoise
- `purple-400`, `purple-500`, `purple-600` - Purple
- `pink-400`, `pink-500` - Pink accent

**Backgrounds:**
- `slate-50` - Light gray
- `slate-900` - Dark background
- `slate-800` - Card backgrounds

**Example:**
```tsx
<div className="bg-slate-900 text-white p-4 rounded-lg hover:bg-slate-800">
  Content
</div>
```

## Tips for Customization

1. **Images**: Replace Unsplash URLs in Projects section with your own images
2. **Colors**: Change color scheme by replacing `cyan`, `purple`, `pink` classes
3. **Animations**: Modify animation speeds in the `<style>` tags within components
4. **Sections**: Hide/show sections by commenting out in `Portfolio.tsx` (lines 131-136)
5. **Navigation**: Modify nav items in `Portfolio.tsx` (lines 45-52)

## Deploying Your Portfolio

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Need Help?

- Check the [README.md](README.md) for detailed documentation
- All components are well-commented
- TypeScript will help catch errors
- Use browser DevTools to inspect elements

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. 📝 Update personal information
4. 🎨 Customize colors and styles
5. 📸 Add your project images
6. 🚀 Deploy to production

Happy coding! 🎉
