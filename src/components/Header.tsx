import "./header.css";

export default function Header() {
    return (
        <header className="container header">
            <div className="name">
                <h1 className="name-letter indian-saffron">दे</h1>
                <h1 className="name-letter indian-blue">वां</h1>
                <h1 className="name-letter indian-green">ग</h1>
            </div>
            <nav>
                <a href="/">Blog</a>
            </nav>
        </header>
    )
}