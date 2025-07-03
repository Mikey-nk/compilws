import React, { useState, useEffect } from "react";

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProjects([
                { id: 1, title: "React website" },
                { id: 2, title: "Todo App" },
                { id: 3, title: "Weather App" },
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
                <ul>
                    {projects.map((proj) => (
                        <li key={proj.id}>{proj.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Project;
