# 🚀 Deploy Your Portfolio to GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages so it's viewable directly from your GitHub repository.

## ✅ Your Portfolio Will Be Live At:
**https://gohulram.github.io/portfolio/**

---

## Step-by-Step Deployment

### Step 1: Install Dependencies

First, install the required package for GitHub Pages deployment:

```bash
npm install
```

This will install `gh-pages` which is needed to deploy to GitHub Pages.

### Step 2: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your portfolio (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site live on GitHub Pages

**Note:** The first time you run this, it may take 2-3 minutes.

### Step 3: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: **https://github.com/gohulram/portfolio**
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Click **Save**

### Step 4: Wait for Deployment (2-3 minutes)

GitHub Pages needs a few minutes to build and deploy your site. You'll see a notification when it's ready.

### Step 5: Access Your Live Portfolio! 🎉

Your portfolio will be live at:
**https://gohulram.github.io/portfolio/**

---

## ✅ What's Already Configured

- ✅ Base path set to `/portfolio/` in `vite.config.ts`
- ✅ Deploy scripts added to `package.json`
- ✅ `gh-pages` package added
- ✅ 404.html file for React Router support

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Deploy the updates:**
   ```bash
   npm run deploy
   ```

3. **Wait 2-3 minutes** for GitHub Pages to update

---

## 🧪 Testing Locally Before Deploying

Before deploying, test your build:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Visit `http://localhost:4173/portfolio/` to see how it will look on GitHub Pages.

---

## 📝 Sharing Your Portfolio

Your portfolio URL for interviews:
**https://gohulram.github.io/portfolio/**

You can share this link:
- ✅ On your resume
- ✅ In job applications
- ✅ On LinkedIn
- ✅ In interviews (as requested!)

---

## 🐛 Troubleshooting

### Build Fails

**Problem:** `npm run deploy` fails

**Solutions:**
1. Make sure all dependencies are installed: `npm install`
2. Test build locally first: `npm run build`
3. Check for TypeScript errors: `npm run typecheck`
4. Make sure you're on the `main` branch

### 404 Errors on Navigation

**Problem:** Getting 404 when clicking links or refreshing pages

**Solution:** Already fixed! The `404.html` file handles React Router routing on GitHub Pages.

### Site Not Updating

**Problem:** Changes not showing after deployment

**Solutions:**
1. Wait 2-3 minutes (GitHub Pages needs time to update)
2. Clear your browser cache
3. Check GitHub Pages settings (should be set to `gh-pages` branch)
4. Verify deployment succeeded in GitHub Actions

### Images Not Loading

**Problem:** Images show broken links

**Solutions:**
1. Make sure image paths start with `/portfolio/` (handled automatically)
2. Check that images are in the `public/images/` folder
3. Verify image paths in `src/data/projects.ts` are correct

---

## 📋 Quick Reference

### Deploy Command
```bash
npm run deploy
```

### Build Locally
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Your Live URL
**https://gohulram.github.io/portfolio/**

---

## ✅ Checklist Before Interview

- [ ] Portfolio is deployed: `npm run deploy`
- [ ] GitHub Pages is enabled in repository settings
- [ ] Site is accessible at: https://gohulram.github.io/portfolio/
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display properly
- [ ] Mobile responsive design works
- [ ] Project detail pages work

---

## 🎉 You're All Set!

Your portfolio is now live on GitHub Pages and ready to share in interviews!

**Your Portfolio URL:** https://gohulram.github.io/portfolio/

Good luck with your interviews! 🚀

