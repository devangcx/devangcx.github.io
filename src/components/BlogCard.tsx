import './BlogCard.css';

interface BlogCardProps {
    title: string;
    date: string;
    summary: string;
}

export default function BlogCard({ title, date, summary }: BlogCardProps) {
    return (
        <div className="blog-card">
            <p>{title}</p>
            <p>{date}</p>
            <p>{summary}</p>
        </div>
    );
}