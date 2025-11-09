# Building from Scratch

Create app in your git repository. We will be using the Vite bundler.
```
npm create vite@latest my-app -- --template react-ts
```
Switch to Rust based (Up to 20% faster than Babel) JSX/TSX compiler.
```
npm uninstall @vitejs/plugin-react
npm install --save-dev @vitejs/plugin-react-swc
```