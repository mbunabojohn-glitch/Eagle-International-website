# 🚀 Installation & Setup Guide

Complete step-by-step guide to get Eagle International Group website running.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify: `node --version`

- **npm** (comes with Node.js) or **yarn** or **pnpm**
  - Verify npm: `npm --version`
  - Or install yarn: `npm install -g yarn`
  - Or install pnpm: `npm install -g pnpm`

- **Git** (optional, for version control)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify: `git --version`

## 🎯 Step-by-Step Installation

### 1. Extract Project Files

If you downloaded a ZIP file:

```bash
# Extract the ZIP to your desired location
# Navigate to the project directory
cd eagle-intl
```

### 2. Install Dependencies

Choose your preferred package manager:

**Using npm:**

```bash
npm install
```

**Using yarn:**

```bash
yarn install
```

**Using pnpm:**

```bash
pnpm install
```

This will install all required dependencies (~300MB).

### 3. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your preferred text editor
# nano .env
# or
# code .env  (if using VS Code)
```

**Minimal .env configuration:**

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_CONTACT_EMAIL=info@eagleinternational.com
```

### 4. Start Development Server

```bash
npm run dev
```

You should see:

```
  VITE v5.4.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.x:5173/
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 First-Time Setup Checklist

### Customize Brand Colors

1. Open `tailwind.config.js`
2. Update the `colors` section:
   ```js
   colors: {
     primary: {
       DEFAULT: '#YOUR_COLOR',
       dark: '#DARKER_SHADE',
       light: '#LIGHTER_SHADE',
     },
   }
   ```

### Update Company Information

Edit `src/utils/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: "Eagle International Group",
  tagline: "Your Tagline Here",
  email: "your-email@company.com",
  phone: "Your Phone Number",
  // ... more fields
};
```

### Customize Hero Carousel

Edit `src/components/features/HeroCarousel.tsx`:

- Update slide titles and descriptions
- Add your own images (place in `/public` folder)
- Adjust animation timing

### Add Your Logo

1. Place your logo file in `/public` folder
2. Update `src/components/layout/Logo.tsx` to reference it

## 🔌 Connecting to Your Backend API

### Option 1: Use Mock Data (Current Setup)

Perfect for development and testing. No backend needed!

### Option 2: Connect to Real API

1. **Update API Base URL** in `.env`:

   ```env
   VITE_API_BASE_URL=https://your-api.com/api
   ```

2. **Update API Functions** in `src/api/services.ts`:

   ```typescript
   export const servicesApi = {
     getAll: async (): Promise<Service[]> => {
       const { data } = await apiClient.get("/services");
       return data;
     },
   };
   ```

3. **Test the connection**:
   ```bash
   npm run dev
   ```

## 📱 Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized build in `/dist` directory.

### Preview Production Build Locally

```bash
npm run preview
```

Opens at [http://localhost:4173](http://localhost:4173)

### Verify Build Quality

Check the build output:

```
dist/
  ├── assets/
  │   ├── index-[hash].js    # JavaScript bundle
  │   └── index-[hash].css   # CSS bundle
  └── index.html             # Entry HTML
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:

   ```bash
   cd eagle-intl
   vercel
   ```

3. Follow prompts and you're live!

### Option 2: Netlify

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy via Netlify CLI or drag-and-drop the `/dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Option 3: Traditional Hosting

1. Build the project:

   ```bash
   npm run build
   ```

2. Upload `/dist` contents to your web host via FTP/SFTP

3. Configure web server to serve `index.html` for all routes

**Apache (.htaccess):**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🐛 Troubleshooting

### Issue: Dependencies won't install

**Solution:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use

**Solution:**

```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Issue: TypeScript errors

**Solution:**

```bash
# Run type checking
npm run type-check

# Check specific file
npx tsc --noEmit src/path/to/file.tsx
```

### Issue: Styles not applying

**Solution:**

1. Ensure Tailwind directives are in `src/index.css`
2. Restart dev server: `Ctrl+C` then `npm run dev`
3. Clear browser cache

### Issue: Build fails

**Solution:**

```bash
# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint

# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

## 📊 Performance Optimization

### Enable Production Optimizations

Already configured! But verify in `vite.config.ts`:

- Code splitting ✓
- Tree shaking ✓
- Minification ✓
- Compression ready (configure in hosting)

### Analyze Bundle Size

```bash
npm run build -- --analyze
```

### Lazy Load Routes

Already implemented in `src/routes/index.tsx`!

## 🔐 Security Best Practices

1. **Never commit `.env` files**
   - Already in `.gitignore` ✓

2. **Use environment variables for sensitive data**
   - API keys, tokens, etc.

3. **Keep dependencies updated**

   ```bash
   npm outdated
   npm update
   ```

4. **Regular security audits**
   ```bash
   npm audit
   npm audit fix
   ```

## 📚 Next Steps

1. ✅ Install and run the project
2. ✅ Customize colors and branding
3. ✅ Update content and images
4. ✅ Connect to your backend API
5. ✅ Test on mobile devices
6. ✅ Build and deploy to production
7. ✅ Set up monitoring and analytics

## 💬 Getting Help

- Review the main [README.md](./README.md)
- Check [Vite Documentation](https://vitejs.dev/)
- Check [React Documentation](https://react.dev/)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🎓 Learning Resources

- [React Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Happy Coding! 🚀**

If you encounter any issues, double-check each step and ensure all prerequisites are installed correctly.
