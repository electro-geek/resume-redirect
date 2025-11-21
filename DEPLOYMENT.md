# Deploying to Vercel

This guide will help you deploy your portfolio to Vercel from the root directory.

## Repository Structure

```
resume-redirect/
├── app/              # Your portfolio app (to be deployed)
├── legacy/           # Legacy code (excluded from deployment)
├── vercel.json       # Vercel configuration
├── .vercelignore     # Files to exclude
└── DEPLOYMENT.md     # This file
```

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Your code pushed to GitHub/GitLab/Bitbucket

## Quick Start

### Step 1: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
cd /home/mritunjay/Desktop/resume-redirect
git add .
git commit -m "Portfolio ready for Vercel deployment"
git push origin main
```

### Step 2: Deploy on Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will **auto-detect** the configuration from `vercel.json`
5. Click **"Deploy"**

That's it! ✨

#### Option B: Via Vercel CLI

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from root directory:**
   ```bash
   cd /home/mritunjay/Desktop/resume-redirect
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? (enter your preferred name)
   - In which directory is your code located? **./** 
   - Want to override settings? **N**

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Configuration Details

The `vercel.json` file is configured to:

- **Build Command**: `cd app && npm run build`
- **Output Directory**: `app/dist`
- **Install Command**: `cd app && npm install`
- **Framework**: Vite (auto-detected)

The `.vercelignore` file excludes:
- `legacy/` folder
- `node_modules`
- Environment and log files

## Post-Deployment

After deployment, you'll receive:

- **Production URL**: `your-portfolio.vercel.app`
- **Preview URLs**: For each branch/PR
- **Deployment Dashboard**: Monitor builds and logs

### Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected to Git:

- **Push to `main`** → Production deployment 🚀
- **Push to other branches** → Preview deployment 🔍
- **Pull Requests** → Preview with unique URL 👀

## Local Testing

Before deploying, test the production build locally:

```bash
cd /home/mritunjay/Desktop/resume-redirect/app
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview.

## Troubleshooting

### Build Fails?

Check the Vercel deployment logs:
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on the failed deployment
3. View detailed logs

Common fixes:
- Ensure `npm run build` works locally in the `app` directory
- Check all dependencies are in `app/package.json`
- Verify Node.js version compatibility

### 404 Errors on Routes?

The `vercel.json` already configures SPA routing - all routes redirect to `index.html`.

### Environment Variables?

Add them in: Vercel Dashboard → Project → Settings → Environment Variables

## Quick Deploy Workflow

For subsequent deployments after initial setup:

```bash
cd /home/mritunjay/Desktop/resume-redirect
git add .
git commit -m "Update portfolio"
git push
```

Vercel automatically deploys! 🎉

## Vercel CLI Commands

- `vercel` - Deploy to preview
- `vercel --prod` - Deploy to production
- `vercel ls` - List deployments
- `vercel logs` - View deployment logs
- `vercel env` - Manage environment variables
- `vercel domains` - Manage domains

---

## 🚀 Ready to Deploy!

1. **Make sure your code is pushed to GitHub**
2. **Go to [vercel.com](https://vercel.com)**
3. **Import your repository and deploy!**

Your portfolio will be live in minutes! ✨
