# Deployment Guide

This guide will help you deploy your portfolio to Netlify (free hosting).

## Quick Start - Netlify (Recommended - Free)

### Step 1: Prepare Your Code
1. Make sure all your changes are committed to Git
2. Push your code to GitHub

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with your GitHub account (or create a free account)
3. Click **"Add new site"** → **"Import an existing project"**
4. Click **"Deploy with GitHub"**
5. Select your repository
6. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click **"Deploy site"**

✅ Your site will be live in 2-3 minutes!

## No Environment Variables Needed!

This portfolio uses static data, so you don't need to set up any environment variables or databases. Just deploy and it works!

## Deployment Options

### Option 1: Netlify (Recommended) ⭐
- **Free tier**: Yes
- **Custom domain**: Yes (free)
- **Auto-deploy**: Yes (from GitHub)
- **Speed**: Fast
- **Setup time**: 5 minutes
- **No database needed**: Uses static data

**Steps:**
1. Push code to GitHub
2. Import to Netlify
3. Deploy (settings auto-detected)

### Option 2: Vercel
- **Free tier**: Yes
- **Custom domain**: Yes (free)
- **Auto-deploy**: Yes (from GitHub)
- **Speed**: Very fast
- **Setup time**: 5 minutes

**Steps:**
1. Push code to GitHub
2. Import to Vercel
3. Deploy (settings auto-detected)

### Option 3: GitHub Pages
- **Free tier**: Yes
- **Custom domain**: Yes
- **Auto-deploy**: Manual
- **Speed**: Good
- **Setup time**: 10 minutes

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Update `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.ts` base to `/your-repo-name/`
4. Run: `npm run deploy`

## Testing Before Deployment

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Preview build:**
   ```bash
   npm run preview
   ```

3. **Check the `dist` folder** - all files should be there

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Make sure Node.js version is 18+
- Check build logs for specific errors

### Routing Issues (404 on refresh)
- Netlify: Already configured in `netlify.toml` and `public/_redirects`
- Vercel: Already configured in routing rules
- GitHub Pages: Update base path in `vite.config.ts`

## Custom Domain Setup

### Vercel:
1. Go to project settings → Domains
2. Add your domain
3. Follow DNS instructions

### Netlify:
1. Go to Domain settings
2. Add custom domain
3. Follow DNS instructions

## Need Help?

If you encounter issues:
1. Check the build logs in your hosting platform
2. Make sure Node.js version is 18 or higher
3. Verify all dependencies are installed (`npm install`)
4. Test the build locally first (`npm run build`)

