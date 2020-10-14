import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "../styles/components/skillset.scss"; 


const SkillSet = () => {
    useEffect(() =>{
        AOS.init({
            once: true,
            offset: -10
        })
    })

    return(
        <div className="skillSet">
            <div className="skillSet__box">
                <ul className="skillSet__box-list" data-aos="fade-down">
                <li>
                <span className="skillSet__box-list__title">HTML</span>
                <p className="skilSet__box-list__content">Good knowledge</p>
                </li>
                <li>
                <span className="skillSet__box-list__title">CSS</span>
                <p className="skilSet__box-list__content">I can create layout in Grid, Flexbox. I know the rules of RWD</p>
                </li>
                <li>
                <span className="skillSet__box-list__title">Scss</span>
                <p className="skilSet__box-list__content">I'm using this preprocesor in my daily work</p>
                </li>
                <li>
                <span className="skillSet__box-list__title">Bootstrap</span>
                <p className="skilSet__box-list__content">Basic knowledge, created one or two projects in bootstrap</p>
                </li>
                </ul>
            </div>
            <div className="skillSet__box">
                <ul className="skillSet__box-list" data-aos="fade-up">
                <li>
                <span className="skillSet__box-list__title">JavaScript</span>
                <p className="skilSet__box-list__content">Good knowledge, ES6 features</p>
                </li>
                <li>
                <span className="skillSet__box-list__title">React</span>
                <p className="skilSet__box-list__content">I'm using React with Hooks</p>
                </li>
                <li>
                <span className="skillSet__box-list__title">Redux</span>
                <p className="skilSet__box-list__content">Basic knowledge, currently learning</p>
                </li>
                <li>
                <span className="skillSet__box-list__title">Node</span>
                <p className="skilSet__box-list__content">Basic knowledge. Once used with ExpressJS</p>
                </li>
                <li>
                <span className="skillSet__box-list__title">Angular</span>
                <p className="skilSet__box-list__content">Currently learning</p>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default SkillSet;