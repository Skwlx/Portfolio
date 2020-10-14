import React from "react";
import "../styles/components/about.scss";

const About = () => {
    return(
        <div className="about">
            <div className="about__content">
                <div className="about__content-title">
                    <h2>Hi, my name is Paweł</h2>
                </div>
                <div className="about__content-text">
                    <p>
                    I started to learn the basics of the Front-end in 2018 and got so involved 
                    that since then I spend every day learning.
                    I'm an CS student at Politechnika Częstochowska, it's my 2nd year.
                    I'm intrested in technology and programming. My hobbies are: 
                    </p>
                    <ul>
                    <li>Proggraming (of course)</li>
                    <li>Reading a books</li>
                    <li>Learning</li>
                    <li>Swimming</li>
                    <li>Playing games (I love rocket league ❤️)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;