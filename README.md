# Modern Creative Portfolio

A stunning, modern single-page portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, interactive elements, and a fully responsive design.

## Features

- **Hero Section** - Eye-catching landing with animated gradients and smooth scroll navigation
- **About Section** - Professional introduction with creative card design
- **Skills Section** - Interactive skills showcase with category filtering and animated progress bars
- **Experience Timeline** - Professional work history with creative timeline visualization
- **Projects Gallery** - Portfolio showcase with filtering and interactive hover effects
- **Contact Section** - Functional contact form with social media links

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization

## Project Structure

```
portfolio-creative/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── Portfolio.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfoliocreative
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** ([src/components/Hero.tsx](src/components/Hero.tsx))
   - Update name, title, and tagline
   - Modify call-to-action buttons

2. **About Section** ([src/components/About.tsx](src/components/About.tsx))
   - Replace bio text with your own story
   - Update statistics (years, projects, clients)

3. **Skills Section** ([src/components/Skills.tsx](src/components/Skills.tsx))
   - Add/remove skills and their proficiency levels
   - Modify skill categories

4. **Experience Section** ([src/components/Experience.tsx](src/components/Experience.tsx))
   - Update work history with your experiences
   - Modify job titles, companies, and achievements

5. **Projects Section** ([src/components/Projects.tsx](src/components/Projects.tsx))
   - Add your own projects with descriptions
   - Replace placeholder images with your project screenshots
   - Update GitHub and live demo links

6. **Contact Section** ([src/components/Contact.tsx](src/components/Contact.tsx))
   - Update email, phone, and location
   - Modify social media links
   - Configure form submission (currently simulated)

### Color Scheme

The portfolio uses a cyan-purple-pink gradient color scheme. To modify:

1. Update Tailwind classes in components:
   - Primary: `cyan-400`, `cyan-500`, `cyan-600`
   - Secondary: `purple-400`, `purple-500`, `purple-600`
   - Accent: `pink-400`, `pink-500`

2. For custom colors, extend Tailwind config in `tailwind.config.js`

### Images

Replace placeholder images in the Projects section:
- Current images use Unsplash CDN
- Replace URLs with your own project screenshots
- Recommended size: 800x600px

## Design Features

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Smooth Animations** - Blob animations, fade-ins, hover effects, and scroll triggers
- **Interactive Elements** - Category filters, form validation, scroll-to-section navigation
- **Modern UI/UX** - Gradient backgrounds, glassmorphism effects, and clean typography
- **Accessibility** - ARIA labels, semantic HTML, and keyboard navigation support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast loading with Vite
- Lazy loading ready
- Minimal bundle size
- Efficient re-renders with React hooks

## License

This project is open source and available under the MIT License.

## Credits

- Built with React, TypeScript, and Tailwind CSS
- Placeholder images from Unsplash
- Icons from Heroicons (via Tailwind)

---

**Note:** Remember to configure the contact form to actually send emails. The current implementation simulates form submission. You can integrate with services like:
- EmailJS
- Formspree
- Netlify Forms
- Custom backend API

Enjoy building your portfolio!
