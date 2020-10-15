import React, { useEffect } from "react";
import AOS from 'aos';

import { upSkills, downSkills } from "./data";

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
                    {upSkills.skills.map(skill =>(
                        <li>
                        <span className="skillSet__box-list__title">{skill.name}</span>
                        <p className="skilSet__box-list__content">{skill.level}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skillSet__box">
                <ul className="skillSet__box-list" data-aos="fade-up">
                {downSkills.skills.map(skill =>(
                    <li>
                    <span className="skillSet__box-list__title">{skill.name}</span>
                    <p className="skilSet__box-list__content">{skill.level}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillSet;