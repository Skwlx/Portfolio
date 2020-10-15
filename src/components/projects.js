import React from "react";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { projectsData } from "./data";

import "../styles/components/projects.scss";


const Projects = () => {

    return(
        <div className="projects">
            <div className="projects__box">
            <AliceCarousel 
                animationType={"fadeout"}
                disableDotsControls={true}
                autoPlay={true} 
                infinite={true} 
                autoPlayInterval={4000} 
                fadeOutAnimation={true}
                >
                {projectsData.projects.map(project => (
                    <div className="projects__box__content">
                        <img className="projects__box__content-image" src={project.image} />
                        <h3 className="projects__box__content-title">{project.title}</h3>
                        <p className="projects__box__content-text">{project.description}</p>
                        <p className="projects__box__content-text">{project.stack}</p>
                    </div>
                ))}
                
                
                </AliceCarousel>
            </div>
        </div>
    )
}

export default Projects;