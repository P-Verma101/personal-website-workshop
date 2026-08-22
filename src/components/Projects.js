import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects= [
        {
            name: "Project Portfolio Website",
            description: "A personal website to showcase my projects, skills and experience.", 
            tech: "React, Bootstrap, React Router", 
            link: "https://github.com/P-Verma101/personal-website-workshop"
        },
        {
            name: "Fraser Health x WEST MRI Stimulator Project",
            description: "The user interface design for the MRI Stimulator.", 
            tech: "Python, PySide, HTML, CSS", 
            link: "https://github.com/UVic-WEST/uvic-west-fraser-health-MRI-simulator"
        },
        {
            name: "Simple Calculator",
            description: "This was a simple calculator that performs simple calculations such as addition, subtraction, division and multiplication.",
            tech: "Python",
            link: "https://github.com/P-Verma101/Calculator"
        },
        {
            name: "Snake Game",
            description: "This was a simple snake game that I created using Python and the tiktok library. The game is a classic snake game where the player controls a snake that grows in length as it eats food. The objective of the game is to eat as much food as possible without colliding with the walls or the snake's own body.", 
            tech: "Python, Git", 
            link: "https://github.com/P-Verma101/Snake-Game"
        },
        {
            name: "PassMan - Password Manager",
            description: "This was a simple password manager that I created using SQLite. I also added a GUI component to the project using typescript.",
            tech: "SQLite, Typescript, React",
            link: ""
        }
        
    ];

    return (
        <div className="projects-container">
        <div className="projects-content">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p className="tech"><em>{project.tech}</em></p>
                        {project.link && (
                            <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            View on GitHub
                        </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;