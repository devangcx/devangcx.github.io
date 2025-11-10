import { useEffect, useState } from "react";

import "./Blog.css";

import Image from "./Image";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface BlogProps {
    name: string; // Name of the blog post to load
}

export default function Blog({ name }: BlogProps) {
    const [content, setContent] = useState<string>("Loading...");

    // Construct the path to the markdown file based on the name
    // Here, it is assumed that the markdown blog will be located
    // in the folder with the same name as the markdown file.
    const path: string = `/posts/${name}/${name}.md`

    useEffect(() => {
        fetch(path)
            .then((res) => res.text())
            .then(setContent)
            .catch(() => setContent("Error loading blog post."));
    }, [path]);

    return (
        <div className="container blog">
            <Markdown
                children={content}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}

                // Mapping markdown elements to custom React components
                components={{
                    img: ({ node, ...props }) => {
                        const src = props.src || "";
                        const alt = props.alt || "";
                        const caption = alt;
                        return <Image src={src} alt={alt} caption={caption} />;
                    }
                }}
            />
        </div>
    );
}
