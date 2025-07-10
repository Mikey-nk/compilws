import React, { useState, useEffect } from "react";

const PROJECTS_DATA = [
    {
        id: 1,
        title: "React website",
        description: "A modern website built with React.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Todo App",
        description: "A simple and effective todo list application.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Weather App",
        description: "Get real-time weather updates for any city.",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "Chat Application",
        description: "A real-time chat app for instant messaging.",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        title: "Portfolio Site",
        description: "A personal portfolio to showcase projects and skills.",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
];

function Project() {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount < PROJECTS_DATA.length) {
            const timer = setTimeout(() => {
                setVisibleCount(visibleCount + 1);
            }, 700); // Adjust for slower/faster progression
            return () => clearTimeout(timer);
        }
    }, [visibleCount]);

    return (
        <div>
            <h2>My Projects</h2>
            {visibleCount === 0 ? (
                <p>Loading projects...</p>
            ) : (
                <ul className="project-list">
                    {PROJECTS_DATA.slice(0, visibleCount).map((proj, idx) => (
                        <li
                            key={proj.id}
                            className="project-card"
                            style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                            <img src={proj.image} alt={proj.title} width={150} height={150} style={{ borderRadius: "6px", border: "1.5px solid #bfa76f" }} />
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Project;