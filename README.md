# Kosma Gąsiorowski — Portfolio

Modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Designed with an Awwwards-level aesthetic featuring smooth animations, custom cursor, horizontal scroll sections, and glassmorphism effects.

![Portfolio Preview](./public/og-image.png)

## ✨ Features

- **Preloader Animation** — Animated loading screen with counter and name reveal
- **Custom Cursor** — Magnetic cursor with hover states (disabled on touch devices)
- **Smooth Scroll** — Lenis smooth scroll integration
- **Dark/Light Mode** — Theme toggle with next-themes
- **Horizontal Scroll Projects** — Scroll-driven horizontal project showcase
- **Magnetic Buttons** — Buttons that follow cursor movement
- **Text Reveal Animations** — Stagger text animations on scroll
- **Parallax Effects** — Multi-layer parallax on hero and about sections
- **Glassmorphism** — Frosted glass UI elements
- **Noise Texture Overlay** — Subtle grain effect for premium feel
- **Fully Responsive** — Mobile-first design from 320px to 4K
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation, reduced motion support

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** React Icons
- **Theme:** next-themes
- **Fonts:** Inter (body), Space Grotesk (display)

## 📦 Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and providers
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles and Tailwind
│   └── providers.tsx       # Context providers (Lenis, Theme)
├── components/
│   ├── Preloader.tsx       # Loading screen animation
│   ├── CustomCursor.tsx    # Magnetic custom cursor
│   ├── Navigation.tsx      # Sticky navbar with mobile menu
│   ├── Hero.tsx            # Hero section with parallax
│   ├── About.tsx           # About section with stats
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Horizontal scroll projects
│   ├── Skills.tsx          # Skills grid and orbital layout
│   ├── Education.tsx       # Education cards
│   ├── Achievements.tsx    # Awards and recognition
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer with social links
│   ├── Marquee.tsx         # Scrolling tech stack ticker
│   ├── MagneticButton.tsx  # Magnetic hover button wrapper
│   └── NoiseTexture.tsx    # Grain overlay component
├── lib/
│   └── data.ts             # All CV data in TypeScript
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal info (name, email, LinkedIn)
- Work experience
- Projects
- Education
- Skills
- Achievements

### Colors

Modify `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  dark: {
    DEFAULT: '#0a0a0a',
    lighter: '#111111',
  },
  accent: {
    blue: '#3b82f6',
    cyan: '#06b6d4',
    purple: '#8b5cf6',
  },
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
const inter = Inter({ ... })
const spaceGrotesk = Space_Grotesk({ ... })
```

## 🚀 Deployment

### GitHub Pages (`krabbens.github.io`)

This site uses Next.js **static export** (`out/`). On push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes the `out/` folder to the **`gh-pages`** branch.

1. Create the user site repo `krabbens.github.io` and push this project as `main`.
2. In the repo **Settings → Pages**, set **Source** to **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.  
   (If you previously chose **GitHub Actions** as the source, switch to **Deploy from a branch** so it matches this workflow.)
3. After the first successful workflow run, the site is available at **https://krabbens.github.io/**.

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (automatic builds on push)

### Other platforms

```bash
npm run build
```

Upload the contents of the `out/` directory to any static host.

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px - 1280px
- **Large Desktop:** > 1280px

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- `prefers-reduced-motion` support
- WCAG AA color contrast

## 🎯 Performance Optimizations

- Server Components where possible
- Client Components only for interactivity
- Lazy loading with dynamic imports
- Optimized font loading with `next/font`
- CSS-only animations where possible
- Efficient re-renders with React.memo patterns

## 🎨 Design Inspirations

- Awwwards winning portfolios
- Dribbble trending designs
- Behance featured work
- Modern SaaS landing pages

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- **Email:** kosma.gasiorowski@proton.me
- **LinkedIn:** [kosma-gąsiorowski-3a139b239](https://linkedin.com/in/kosma-gąsiorowski-3a139b239)
- **Location:** Poznań, Poland

---

Built with ❤️ by Kosma Gąsiorowski
