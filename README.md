# YIN Ying Personal Website

Minimal React/Vite personal website for GitHub Pages.

## Editing content

Text and project links live in `src/data/siteContent.js`.

To add a project:

1. Add a new item to the `projects` array.
2. Create a matching page file in `src/pages/projects/`.
3. Register that page in `src/pages/projects/index.js`.
4. Add the matching image file to `public/images/`.
5. The left-side menu updates automatically.

## Images

Images keep their original proportion. The longest displayed side is limited to `800px`.

Replace image files in `public/images/`, or update the image path in `src/data/siteContent.js`.

## Commands

```bash
npm install
npm run dev
npm run build
```

Open `index.html` in a browser to check the static site locally, or publish this folder with GitHub Pages.

For the `miaoji-yin/homepage` repository, the GitHub Pages URL will be:

```text
https://miaoji-yin.github.io/homepage/
```
