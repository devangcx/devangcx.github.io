import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css";

import Blog from "./routes/Blog";
import About from "./routes/About";

import Layout from "./components/Layout"
import Post from "./components/Post";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
