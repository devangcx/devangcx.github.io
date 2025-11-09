# Build from Scratch

Create app in your git repository. We will be using the Vite bundler.
```
npm create vite@latest my-app -- --template react-ts
```
Switch to Rust based (Up to 20% faster than Babel) JSX/TSX compiler.
```
npm uninstall @vitejs/plugin-react
npm install --save-dev @vitejs/plugin-react-swc
```
Define the port to run the dev server and make sure the site is opened in the
browser automatically.
```
// vite.config.ts
// Add the following to the `export default defineConfig`

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Open the development server on port 3000 and automatically open in browser
  server: {
    port: 3000,
    open: true,
  },
})

```

## Tailwind
Add Tailwind CSS for fast UI iteration
```
npm install tailwindcss @tailwindcss/vite
```
Add to the vite config
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
Make sure to have the following VS code extensions installed
- Tailwind CSS Intellisense
- PostCSS Language

## Markdown
Add dependencies to render markdown.
```
npm install react-markdown remark-gfm rehype-highlight
```