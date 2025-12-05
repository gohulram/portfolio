# 🎨 Gohul H - UI/UX Designer Portfolio

> **Live Portfolio:** [View My Portfolio](https://gohulram.github.io/portfolio/)

A modern, responsive portfolio website showcasing UI/UX design work and full-stack development projects. Built with React, TypeScript, and Tailwind CSS.

---

## 🌐 View My Portfolio

**👉 [Click here to view the live portfolio](https://gohulram.github.io/portfolio/)**

### Navigation Guide

- **🏠 Home** - Overview of my work and skills
- **💼 Projects** - Browse all my design and development projects
  - **Task Collaboration App** - Complete UI/UX design case study
  - **Pet Pathway Web Application** - Full-stack MERN application
- **👤 About** - Learn more about me and my background
- **📧 Contact** - Get in touch with me

---

## ✨ Features

- 🎨 **Task Collaboration App** - Complete UI/UX design case study with wireframes, high-fidelity designs, and prototypes
- 💻 **Pet Pathway Web Application** - Full-stack MERN application showcasing development skills
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🚀 **Fast & Modern** - Built with React 18, TypeScript, and Vite for optimal performance
- 🎯 **Beginner-Friendly** - Clear, simple language throughout the portfolio

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Data:** Static data (no database required)

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Carousel.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── data/          # Static project data
│   │   └── projects.ts
│   └── types/         # TypeScript type definitions
│       └── portfolio.ts
├── public/             # Static assets (images, etc.)
│   └── images/
│       ├── high-fidelity/
│       ├── wireframe/
│       └── thumbnail/
└── dist/              # Build output (generated)
```

---

## 🚀 For Developers

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gohulram/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📦 Deployment

This portfolio is deployed on **GitHub Pages**.

### Deploy to GitHub Pages

1. **Deploy:**
   ```bash
   npm run deploy
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select Branch: `gh-pages` and Folder: `/ (root)`
   - Save

3. **Your portfolio will be live at:**
   ```
   https://gohulram.github.io/portfolio/
   ```

For detailed deployment instructions, see [GITHUB_PAGES_DEPLOY.md](./GITHUB_PAGES_DEPLOY.md)

---

## 📝 Updating the Portfolio

To update project information, edit the data in:
- `src/data/projects.ts` - Project details, images, descriptions

To update pages, edit:
- `src/pages/` - Individual page components

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

---

## 🖼️ Adding Images

1. Place images in `public/images/` folder:
   - `public/images/high-fidelity/` - High-fidelity design images
   - `public/images/wireframe/` - Wireframe images
   - `public/images/thumbnail/` - Thumbnail images

2. Reference images in `src/data/projects.ts`:
   ```typescript
   thumbnail: '/images/thumbnail/your-image.jpg',
   ```

---

## 📄 License

© 2025 Gohul H. All rights reserved.

---

## 📧 Contact

For inquiries or collaboration opportunities, please visit the [Contact page](https://gohulram.github.io/portfolio/contact) on my portfolio.

---

**Thank you for visiting my portfolio!** 🎉
