import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Blog.css";
import Data from "../data.json";


export default function Blog() {

    // Update document title
    useEffect(() => {
        document.title = "Blog - devang.cx";
    }, []);

    const posts = Data.posts;

    return (
        <div className="container blog">
            {posts.map((post) => (
                <div className="blog-card">
                    <p className="date">{post.date}</p>
                    <Link to={`blog/${post.slug}`}>
                        <p className="title">{post.title}</p>
                    </Link>
                    <p className="summary">{post.summary}</p>
                </div>
            ))}
        </div>
    );
}
