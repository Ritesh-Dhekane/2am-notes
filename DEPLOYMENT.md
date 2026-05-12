# Deployment Guide — GitHub Pages

2AM Notes is designed to be deployed as a static site.

## Automatic Deployment (Recommended)
The project includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.
Simply push your changes to the `main` branch, and the site will be built and deployed automatically.

## Manual Deployment
If you wish to build manually:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. The output will be in the `dist/` directory. Upload these files to your hosting provider.

## Routing Note
Since we use `HashRouter`, routing will work out-of-the-box on GitHub Pages without any special 404.html redirection hacks.
Your URLs will look like: `https://username.github.io/2am-notes/#/subject/java`
