# Ankit Singh — Developer Portfolio

A premium, modern developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Inspired by Linear, Vercel, Raycast, and Stripe.

## ✨ Features

- **Dark futuristic UI** with glassmorphism and gradient accents
- **Framer Motion animations** — scroll-triggered, stagger, spring physics
- **Custom cursor** with spring-based mouse tracking
- **Typing effect** cycling through roles
- **Mouse-follow glow** in the hero section
- **Animated contribution graph** and LeetCode stats
- **Bento grid projects** with expandable modals
- **Animated timeline** for experience
- **Contact form** with validation and success animation
- **Scroll progress bar**
- **Fully responsive** — mobile, tablet, desktop, ultra-wide
- **SEO optimized** — metadata, OpenGraph, sitemap, robots.txt
- **Vercel-ready** deployment

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16 (App Router) | Framework |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Styling |
| Framer Motion | latest | Animations |
| Lucide React | latest | Icons |

## 📁 Folder Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Main page (assembles sections)
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── layout/           # Navbar, Footer, CustomCursor, ScrollProgress
│   └── ui/               # Button, Badge, GlowCard, SectionHeader, SocialIcons
├── sections/             # Full-page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── StatsSection.tsx
│   ├── AchievementsSection.tsx
│   └── ContactSection.tsx
├── hooks/                # Custom React hooks
│   ├── useMousePosition.ts
│   ├── useScrollProgress.ts
│   ├── useTypingEffect.ts
│   └── useCounter.ts
├── animations/
│   └── variants.ts       # Reusable Framer Motion variants
├── data/
│   └── index.ts          # All portfolio content (projects, skills, etc.)
├── types/
│   └── index.ts          # TypeScript interfaces
├── lib/
│   └── utils.ts          # Utility functions (cn, scrollToSection, etc.)
└── styles/
    └── globals.css       # Global styles, Tailwind theme, animations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Personal Info

Edit `src/data/index.ts` to update:
- Projects
- Skills
- Experience
- Achievements
- Stats

### Update Colors

Edit the `@theme` block in `src/styles/globals.css`:

```css
@theme {
  --color-primary: #7C3AED;   /* Purple */
  --color-accent: #06B6D4;    /* Cyan */
  --color-background: #030712; /* Dark */
}
```

### Update SEO

Edit `src/app/layout.tsx` to update metadata, OpenGraph, and Twitter card info.

### Add Resume

Place your resume PDF at `public/resume.pdf`.

### Add OG Image

Place your OpenGraph image at `public/og-image.png` (1200×630px recommended).

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Environment Variables

No environment variables required for the base setup. If you add a contact form backend, add:

```env
NEXT_PUBLIC_CONTACT_API_URL=your_api_url
```

## 📄 License

MIT — free to use and modify for personal portfolios.
