import React, { useEffect } from "react";
import "../styles/components/jumbo.scss";

const Jumbo = () =>{

    useEffect(() =>{
        const jumboTitle = document.querySelector('.jumbotron__title')
        window.addEventListener("scroll", () => {
            let triggerLine = jumboTitle.getBoundingClientRect().top;
            if(triggerLine >= 100){
                jumboTitle.style.opacity = 1;
            }
            else{
                jumboTitle.style.opacity = 0;
            }
        });    
    })

    return(
        <div className="jumbotron">
            <div className="jumbotron__title">
                <h1 className="jumbotron__title-name">Paweł Sławuta</h1>
                <h2 className="jumbotron__title-info">I create web apps and websites</h2>
            </div>
        </div>
    )
}

export default Jumbo;