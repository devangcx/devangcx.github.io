import { useEffect } from "react";

export default function Work() {

    // Update document title
    useEffect(() => {
        document.title = "Work - devang.cx";
    }, []);

    return (
        <div className="container">
            Work Component
        </div>
    );
}
