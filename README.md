# Happy Birthday, Papi 💗

A tiny birthday scavenger hunt website for Honey's 30th birthday, built with React, Vite, and Tailwind CSS. Deploys automatically to GitHub Pages via GitHub Actions.

Live site: **https://cjongs-econ.github.io/birthday-papi/**

## Editing the content

All the words, names, memory stops, distance stats, coupon text, and the final letter live in one file:

- [src/data/relationshipData.js](src/data/relationshipData.js)

You should not need to touch any component to change text — just edit that file.

## Adding your photos

Put photos in [public/photos/](public/photos/) using the exact filenames referenced in `relationshipData.js`:

- City timeline: `beijing.jpeg`, `barcelona.jpeg`, `thailand.jpeg`, `rome.jpeg`, `munich.jpeg`
- Final gift picture: `finale.jpeg`

If a photo file is missing, the site automatically shows a styled placeholder instead of a broken image — so it's safe to push before you have all the media ready.

Asset paths are resolved through [src/utils/assetPath.js](src/utils/assetPath.js), which respects Vite's configured base path. Never hardcode a path like `/photos/example.jpg` in a component — always use `assetPath("photos/example.jpg")`.

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Pushing your changes to GitHub

```bash
git add .
git commit -m "Create birthday website"
git push -u origin main
```

## Enabling GitHub Pages (one-time setup)

1. Go to your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

After that, every push to `main` triggers the workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site with `npm run build` and publishes the `dist` folder to GitHub Pages.

## Final site URL

https://cjongs-econ.github.io/birthday-papi/
