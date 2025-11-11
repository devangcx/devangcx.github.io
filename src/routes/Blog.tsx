import { useEffect } from "react";
import "./Blog.css";
import Data from "../data.json";
import BlogCard from "../components/BlogCard";

export default function Blog() {

    // Update document title
    useEffect(() => {
        document.title = "Blog - devang.cx";
    }, []);

    const posts = Data.posts;

    return (
        <div className="container blog">
            {posts.map((post, index) => (
                <BlogCard
                    key={index}
                    title={post.title}
                    date={post.date}
                    summary={post.summary}
                />
            ))}
        </div>
    );
}
