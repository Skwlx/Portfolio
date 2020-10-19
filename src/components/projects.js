import React, { useEffect } from "react";
import Display from "../animations/displayAndHide";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import { projectsData } from "./data";

import "../styles/components/projects.scss";


const Projects = () => {

    useEffect(() =>{
       // Display(".hidden-project",["MY", "PROJECTS"]);
    })

    return(
        <div className="projects">
            <span className="hidden-text hidden-project"></span>
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
                        <a href={project.live}>
                        <img className="projects__box__content-image" src={project.image} />
                        </a>
                        <h3 className="projects__box__content-title">{project.title}</h3>
                        <p className="projects__box__content-text">{project.description}</p>
                        <p className="projects__box__content-text">{project.stack}</p>
                        <a href={project.code} className="projects__box__content-icon"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href={project.live} className="projects__box__content-icon"><FontAwesomeIcon icon={faGlobe}/></a>
                    </div>
                ))}
                
                
                </AliceCarousel>
            </div>
        </div>
    )
}

export default Projects;