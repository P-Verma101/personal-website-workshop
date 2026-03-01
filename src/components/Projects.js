import react from "react";
import "./Projects.css";

const Projects = () => {
    const projects= [
        {
            name: "Project Portfolio Website",
            description: "A personal website to showcase my projects, skills and experience.", 
            tech: "React, Bootstrap, React Router", 
            link: "https://github.com/yourusername/project-portfolio"
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