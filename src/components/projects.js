import React from "react";

import { projectsData } from "./data";

import "../styles/components/projects.scss";

const Projects = () => {
    return(
        <div className="projects">
            {projectsData.projects.map(project =>(
                <img src={project.image} />
            ))}
        </div>
    )
}

export default Projects;