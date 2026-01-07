# Component Hierarchy

## Visual Structure

```
index.html
    └── #root
        └── <React.StrictMode>
            └── <App />
                └── <Portfolio />
                    ├── <nav> (Sticky Navigation)
                    │   ├── Logo
                    │   ├── Desktop Nav Items
                    │   ├── Mobile Nav Items
                    │   └── CTA Button
                    │
                    ├── <main>
                    │   ├── <Hero />
                    │   │   ├── Animated Background (3 blobs)
                    │   │   ├── Title & Subtitle
                    │   │   ├── CTA Buttons (2)
                    │   │   └── Scroll Indicator
                    │   │
                    │   ├── <About />
                    │   │   ├── Decorative Elements
                    │   │   ├── Profile Card/Image
                    │   │   ├── Bio Text (3 paragraphs)
                    │   │   └── Statistics Grid (3 items)
                    │   │
                    │   ├── <Skills />
                    │   │   ├── Section Header
                    │   │   ├── Category Filters (4 buttons)
                    │   │   └── Skills Grid
                    │   │       └── Skill Cards (18 items)
                    │   │           ├── Skill Name
                    │   │           ├── Progress Bar
                    │   │           ├── Percentage
                    │   │           └── Category Badge
                    │   │
                    │   ├── <Experience />
                    │   │   ├── Section Header
                    │   │   ├── Timeline Connector
                    │   │   └── Experience Items (3)
                    │   │       ├── Company & Role
                    │   │       ├── Period Badge
                    │   │       ├── Achievements List
                    │   │       ├── Technology Tags
                    │   │       └── Timeline Dot
                    │   │
                    │   ├── <Projects />
                    │   │   ├── Section Header
                    │   │   ├── Category Filters (4 buttons)
                    │   │   └── Project Grid
                    │   │       └── Project Cards (6 items)
                    │   │           ├── Project Image
                    │   │           ├── Featured Badge (if featured)
                    │   │           ├── Hover Overlay
                    │   │           │   ├── Live Demo Button
                    │   │           │   └── GitHub Button
                    │   │           ├── Title
                    │   │           ├── Description
                    │   │           └── Tech Tags
                    │   │
                    │   └── <Contact />
                    │       ├── Section Header
                    │       ├── Contact Form
                    │       │   ├── Name Input
                    │       │   ├── Email Input
                    │       │   ├── Subject Input
                    │       │   ├── Message Textarea
                    │       │   ├── Submit Button
                    │       │   └── Success Message
                    │       ├── Contact Info Cards (3)
                    │       │   ├── Email
                    │       │   ├── Phone
                    │       │   └── Location
                    │       ├── Social Links (4)
                    │       │   ├── GitHub
                    │       │   ├── LinkedIn
                    │       │   ├── Twitter
                    │       │   └── Email
                    │       ├── Opportunities Card
                    │       └── Footer
                    │
                    └── Scroll-to-Top Button (conditional)
```

## Data Flow

### State Management

```
<Portfolio />
├── State: isScrolled (boolean)
├── State: activeSection (string)
└── Effect: Scroll listener
    ├── Updates isScrolled
    └── Updates activeSection

<Skills />
├── State: activeCategory (string)
└── Filtered Skills (computed)

<Projects />
├── State: selectedCategory (string)
├── State: hoveredProject (number | null)
└── Filtered Projects (computed)

<Contact />
├── State: formData (object)
├── State: isSubmitting (boolean)
└── State: submitStatus (string)
```

### Props Flow

```
No props are passed between components currently.
All components are self-contained.

Future enhancement opportunity:
- Pass theme settings
- Pass language/i18n
- Pass CMS data
```

### Event Flow

```
User Actions:
1. Scroll → Portfolio (handleScroll)
   └── Updates: isScrolled, activeSection

2. Click Nav Item → Portfolio (scrollToSection)
   └── Smooth scroll to section

3. Click Filter → Skills/Projects (setActiveCategory)
   └── Updates filtered items

4. Submit Form → Contact (handleSubmit)
   └── Updates: isSubmitting, submitStatus, formData

5. Hover Project → Projects (setHoveredProject)
   └── Shows/hides overlay buttons
```

## Import Dependency Graph

```
main.tsx
├── imports: React, ReactDOM
├── imports: App.tsx
└── imports: index.css
    └── imports: Tailwind directives

App.tsx
└── imports: Portfolio.tsx

Portfolio.tsx
├── imports: React (useEffect, useState)
└── imports: All component files
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    └── Contact.tsx

Each Component.tsx
└── imports: React

index.css
├── @tailwind base
├── @tailwind components
└── @tailwind utilities
```

## Styling Architecture

```
Global Styles (index.css)
├── Tailwind Base
├── Tailwind Components
├── Tailwind Utilities
├── Global Resets
└── Body Styles

Component Styles (Inline <style> tags)
├── Hero: blob & fade-in animations
├── Skills: shimmer animation
├── Projects: blob animation
├── Contact: blob animation
└── Portfolio: smooth scroll, scrollbar hide, line-clamp

Utility Classes (Tailwind)
└── Applied directly in JSX className props
```

## Responsive Breakpoints

```
Mobile First Approach:

Default (< 640px)
├── Single column layouts
├── Stacked navigation
├── Smaller typography
└── Touch-friendly spacing

sm: 640px+
├── Two column grids
├── Larger text
└── More padding

md: 768px+
├── Horizontal navigation
├── Three column grids
└── Desktop layouts begin

lg: 1024px+
├── Full desktop experience
├── Timeline alternating layout
└── Maximum grid columns

xl: 1280px+
├── Max content width (7xl = 1280px)
└── Optimal reading experience
```

## Animation Layers

```
Layer 1: Background Animations (Passive)
├── Blob floating (Hero, Projects, Contact)
├── Gradient shifts
└── Decorative elements

Layer 2: Entrance Animations (On Load)
├── Fade-in-up (Hero)
├── Staggered delays (Skills cards)
└── Component reveals

Layer 3: Interaction Animations (User Triggered)
├── Hover scales
├── Button transforms
├── Card elevations
└── Filter transitions

Layer 4: Scroll Animations (Passive)
├── Navigation blur
├── Active section tracking
└── Scroll-to-top button
```

## Color System

```
Color Hierarchy:

Primary Actions
└── Gradient: cyan-500 → purple-500

Secondary Actions
└── Border: cyan-400 with hover fill

Text Hierarchy
├── Primary: white (headings)
├── Secondary: gray-300/400 (body)
└── Accent: cyan-400, purple-400, pink-400

Backgrounds
├── Dark sections: slate-900
├── Light sections: slate-50
├── Cards: slate-800
└── Overlays: slate-900/95 with blur
```

## Typography System

```
Font Stack:
└── System fonts (fastest loading)
    -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif

Hierarchy:
├── Display (Hero): text-5xl → text-8xl
├── H2 (Sections): text-4xl → text-5xl
├── H3 (Cards): text-2xl → text-3xl
├── H4 (Labels): text-lg → text-xl
├── Body: text-base → text-xl
└── Small: text-sm → text-base

Weights:
├── Light: 300 (subtitles)
├── Normal: 400 (body)
├── Medium: 500 (labels)
├── Semibold: 600 (nav items)
└── Bold: 700 (headings)
```

## Performance Considerations

```
Render Optimization:
├── Components are pure (no side effects in render)
├── State is localized to each component
├── No prop drilling (keep props minimal)
└── React.StrictMode enabled

Event Optimization:
├── Scroll listener with cleanup
├── Debouncing ready for scroll events
└── Form validation on submit (not on change)

Asset Optimization:
├── SVG icons (inline, no requests)
├── External images (Unsplash CDN)
├── Vite code splitting (automatic)
└── CSS purging (Tailwind in production)
```

---

This hierarchy shows the complete structure of the portfolio application from entry point to individual UI elements.
