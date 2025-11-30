# Gohul H - UI/UX Designer Portfolio

A modern, responsive portfolio website showcasing UI/UX design work and full-stack development projects.

## Features

- 🎨 **Task Collaboration App** - Complete UI/UX design case study
- 💻 **Pet Pathway Web Application** - Full-stack MERN application
- 📱 **Fully Responsive** - Works on all devices
- 🚀 **Fast & Modern** - Built with React, TypeScript, and Vite
- 🎯 **Beginner-Friendly** - Clear, simple language throughout

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Data**: Static data (no database required)
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

### Deploy to Netlify (Recommended - Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Your site will be live at `https://your-project.netlify.app`

**Note:** No environment variables needed! The portfolio uses static data.

### Alternative: Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Alternative: Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio/', // your repo name
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── data/          # Static project data
│   └── types/         # TypeScript types
├── public/             # Static assets
└── dist/              # Build output
```

## License

© 2025 Gohul H. All rights reserved.
