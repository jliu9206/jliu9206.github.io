# Deployment Instructions

Your site is showing a blank page because it hasn't been deployed yet. Here are the steps to fix it:

## Option 1: Using GitHub Actions (Recommended)

This is the best long-term solution. Follow these steps:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository: https://github.com/jliu9206/jliu9206.github.io
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push your code to trigger deployment:**
   ```bash
   git add .
   git commit -m "Setup React portfolio"
   git push origin main
   ```

3. **Check the deployment:**
   - Go to **Actions** tab in your repository
   - Wait for the workflow to complete (usually 1-2 minutes)
   - Your site should be live at https://jliu9206.github.io

## Option 2: Manual Deployment (Quick Fix)

If you want to deploy immediately without setting up GitHub Actions:

### For User Repository (jliu9206.github.io):

Since this is a user repository, GitHub Pages can serve from the root. Run:

```bash
npm run build
cp -r dist/* .
git add .
git commit -m "Deploy portfolio"
git push origin main
```

**Note:** This will copy the built files to your root directory. You may want to add `dist/` to `.gitignore` if you do this.

### Alternative: Deploy to gh-pages branch

```bash
npm run deploy
```

Then in GitHub Settings → Pages, set source to `gh-pages` branch.

## Troubleshooting

### Still seeing a blank page?

1. **Check browser console** (F12) for errors
2. **Verify GitHub Pages is enabled:**
   - Settings → Pages → Should show "Your site is live at..."
3. **Check file paths:**
   - Make sure `index.html` is in the root or dist folder
   - Assets should be in `/assets/` folder
4. **Clear browser cache** and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Common Issues:

- **404 errors**: Check that asset paths are correct (should start with `/assets/`)
- **Blank page**: Usually means JavaScript isn't loading - check browser console
- **Styling missing**: CSS file might not be loading - check network tab

## After Deployment

Once deployed, your site will automatically update when you:
1. Make changes to your code
2. Push to the `main` branch
3. GitHub Actions builds and deploys (if using Option 1)

## Testing Locally

Before deploying, test locally:
```bash
npm run build
npm run preview
```

This will show you exactly what will be deployed.

