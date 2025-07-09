import React, { useState, useEffect } from "react";

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects([
                {
                    id: 1,
                    title: "React website",
                    description: "A modern website built with React.",
                    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" // Example mountain image
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
            ]);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h2>My Projects</h2>
            {projects.length === 0 ? (
                <p>Loading projects...</p>
            ) : (
                <ul style={{
                    display: "flex",
                    flexWrap: "wrap",
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                }}>
                    {projects.map((proj) => (
                        <li
                            key={proj.id}
                            style={{
                                width: "50%",
                                boxSizing: "border-box",
                                padding: "10px"
                            }}
                        >
                            <img src={proj.image} alt={proj.title} width={150} height={150} />
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