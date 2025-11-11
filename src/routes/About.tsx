import "./about.css";

export default function About() {
    return (
        <div className="container about">
            <div className="story">

                <h2>Engineer / Architect</h2>

                <p>I am currently a software engineer.</p>

                <p>In the past, I have been a design technologist,
                    a building performance consultant, an architect,
                    a project manager, and a team leader.
                </p>

                <p>This site is currently a work in progress and I plan to
                    fully build this over the next year.
                </p>

                <p>If the look and feel of this website feels familiar to you,
                    you have a great taste in people. It is inspired by
                    <span>
                        <a href="https://nadh.in/" target="blank">Kailash Nadh's</a>
                    </span>
                    personal website. Kailash is one of the few engineers I
                    have come to admire from afar. While his site is
                    most likely built using the static site generator Hugo, I
                    had fun implementing a similar design purely in React + CSS.
                </p>
            </div>
            <img src="me.png" alt="Devang's Avatar" />
        </div>
    );
}

