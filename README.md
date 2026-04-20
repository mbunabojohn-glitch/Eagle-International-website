# 🦅 Eagle International Group - Corporate Website

A modern, responsive corporate website for Eagle International Group built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **State Management**: Zustand for lightweight global state
- **Routing**: React Router v6 with smooth page transitions
- **API Layer**: TanStack Query (React Query) for data fetching
- **Animations**: Custom scroll-based animations and counters
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized bundle size and lazy loading
- **SEO Ready**: Meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd eagle-intl
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration.

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
eagle-intl/
├── public/                 # Static assets
├── src/
│   ├── api/               # API layer and services
│   │   ├── base.ts        # Axios configuration
│   │   └── services.ts    # Service endpoints
│   ├── components/        # React components
│   │   ├── common/        # Reusable components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Loader.tsx
│   │   ├── features/      # Feature-specific components
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── ServicesShowcase.tsx
│   │   │   ├── InfoCards.tsx
│   │   │   └── CTA.tsx
│   │   └── layout/        # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Navigation.tsx
│   │       ├── Logo.tsx
│   │       └── Layout.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useCarousel.ts
│   │   ├── useScrollAnimation.ts
│   │   ├── useCounterAnimation.ts
│   │   └── useQuery.ts
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── PartnersPage.tsx
│   │   ├── MissionPage.tsx
│   │   └── ContactPage.tsx
│   ├── routes/            # Route configuration
│   │   └── index.tsx
│   ├── store/             # Zustand stores
│   │   ├── uiStore.ts
│   │   └── carouselStore.ts
│   ├── types/             # TypeScript types
│   │   ├── service.ts
│   │   ├── contact.ts
│   │   ├── partner.ts
│   │   ├── common.ts
│   │   └── index.ts
│   ├── utils/             # Utility functions
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting & Formatting
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: {
    DEFAULT: '#1e40af',  // Main brand color
    dark: '#1e3a8a',
    light: '#3b82f6',
  },
  secondary: {
    DEFAULT: '#059669',
    dark: '#047857',
    light: '#10b981',
  },
}
```

### Content

- **Hero Carousel**: Edit `src/components/features/HeroCarousel.tsx`
- **Services**: Edit `src/api/services.ts` (mock data) or connect to your API
- **Company Info**: Edit `src/utils/constants.ts`

### Navigation

Edit `src/components/layout/Navigation.tsx` to modify menu items.

## 🔌 API Integration

### Mock Data (Current)

The project uses mock data in `src/api/services.ts`. Perfect for development.

### Connect to Real API

1. Update `src/api/base.ts` with your API base URL
2. Replace mock functions in `src/api/services.ts` with real API calls
3. Update environment variables in `.env`

Example:

```typescript
// src/api/services.ts
export const servicesApi = {
  getAll: async (): Promise<Service[]> => {
    const { data } = await apiClient.get("/services");
    return data;
  },
};
```

## 📦 Production Build

```bash
npm run build
```

The build outputs to `/dist` directory. Deploy to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `/dist` folder
- **AWS S3**: Upload `/dist` contents
- **Any static host**: Serve `/dist` directory

## 🔧 Tech Stack

- **React 18.3**: UI library
- **TypeScript 5.5**: Type safety
- **Vite 5.4**: Build tool
- **Tailwind CSS 3.4**: Styling
- **React Router 6.26**: Routing
- **Zustand 4.5**: State management
- **TanStack Query 5.56**: Data fetching
- **Axios 1.7**: HTTP client

## 🎯 Key Features Breakdown

### 1. Hero Carousel

- Auto-play with pause on hover
- Smooth transitions
- Mobile-responsive
- Customizable slides

### 2. Animated Stats

- Scroll-triggered counters
- Smooth number animations
- Responsive grid layout

### 3. Services Showcase

- Grid/card layout
- Hover effects
- Category filtering (ready for API)

### 4. Contact Form

- Form validation
- Loading states
- Success/error feedback
- Ready for backend integration

### 5. Responsive Navigation

- Mobile hamburger menu
- Smooth scroll behavior
- Active link highlighting

## 🚧 Roadmap

- [ ] Add Google Maps integration for Contact page
- [ ] Implement blog/news section
- [ ] Add multi-language support (i18n)
- [ ] Integrate CMS (Contentful/Strapi)
- [ ] Add unit tests
- [ ] Set up CI/CD pipeline
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] Accessibility audit

## 📄 License

This project is private and proprietary to Eagle International Group.

## 👥 Support

For questions or support, contact:

- Email: info@eagleinternational.com
- Website: [eagleinternational.com](https://eagleinternational.com)

---

Built with ❤️ by the Eagle International Group team
