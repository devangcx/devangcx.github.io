# Personal blog
This has gone through several iterations in terms of style, and technology
over the years.
- Started off as a HTML + CSS + JS [site](https://github.com/devangcx/devangcx.github.io/tree/d20e14dc22c0e613819ff77af03514c00c808eb8) and remained in that form for a long time.
- A Hugo powered static [site](https://github.com/devangcx/devangcx.github.io/tree/92026463eb503400f765a23f92a9c277b1281517) for a brief period.
- And now, a React app.

## Build locally
- Clone the repository
- Enter the repository
- Download node modules `npm install`
- Run the dev server `npm run dev`

## Build from Scratch

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
