import "./Blog.css";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface BlogProps {
    path: string; // path to the markdown file
}

export default function Blog({ path }: BlogProps) {
    const [content, setContent] = useState<string>("Loading...");

    useEffect(() => {
        fetch(path)
            .then((res) => res.text())
            .then(setContent)
            .catch(() => setContent("Error loading blog post."));
    }, [path]);

    return (
        <div className="blog">
            <Markdown
                children={content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            />
        </div>
    );
}
