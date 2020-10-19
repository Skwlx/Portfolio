import React, { useEffect } from "react";
import Display from "../animations/displayAndHide";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../styles/components/footer.scss";

const Footer = () => {
    useEffect(() => {
        Display(".hidden-contact",["CONTACT","ME"]);
        const footerContainer = document.querySelector("footer")
        window.addEventListener("scroll", () => {
            let triggerLine = footerContainer.getBoundingClientRect().top;
            if(triggerLine <= 500){
                footerContainer.style.opacity = 1;
            }
            else{
                footerContainer.style.opacity = 0;
            }
        });      
    })

    return(
       <footer>
       <div className="footer__content">
       <span className="hidden-text hidden-contact"></span>
       <h2 className="footer__header">Get in touch...</h2>
       <ul className="footer__social-list">
       <li>
        <a href="https://github.com/Skwlx" className="footer__social-list-icon">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <p className="footer__social-list">Skwlx</p>
       </li>

       <li>
        <a href="mailto:pawel.slawuta@o2.pl" className="footer__social-list-icon">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <p>pawel.slawuta@o2.pl</p>
       </li>

       <li>
        <a href="https://www.facebook.com/profile.php?id=100005753820598" className="footer__social-list-icon">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
        <p>Paweł Sławuta</p>
       </li>

       </ul>
       </div>
       <div className="footer__info">
       <p>Copyright © {new Date().getFullYear()} Paweł Sławuta</p>
       </div>
       </footer>
    )
}

export default Footer;