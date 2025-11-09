import Blog from "../components/Blog";



export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Blog path="/posts/why-rag-is-not-enough.md" />
        </div>
    )
}