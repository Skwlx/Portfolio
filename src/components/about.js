import React, { useEffect } from "react";
import Display from "../animations/displayAndHide";
import "../styles/components/about.scss";

const About = () => {

    useEffect(() => {
        Display(".hidden-about",["ABOUT","ME"]);
        const aboutContainer = document.querySelector('.about')
        window.addEventListener("scroll", () => {
            let triggerLine = aboutContainer.getBoundingClientRect().top;
            if(triggerLine <= 300){
                aboutContainer.style.opacity = 1;
            }
            else{
                aboutContainer.style.opacity = 0;
            }
        });      
    })

    return(
        <div className="about">
            <span className="hidden-text hidden-about"></span>
            <div className="about__content">
                <div className="about__content-title">
                    <h2>Hi, my name is Paweł</h2>
                </div>
                <div className="about__content-text">
                    <p>
                    I'm {new Date().getFullYear() - 1999} years old, and  
                    I'm an CS student at Politechnika Częstochowska.
                    I'm intrested in technology and programming.
                    </p>
                    <ul>
                    <li>My hobbies are: </li>
                    <li>Proggraming,</li>
                    <li>Reading a books,</li>
                    <li>Learning,</li>
                    <li>Swimming,</li>
                    <li>Playing games (I love rocket league ❤️)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;