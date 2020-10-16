import React from "react";
import "../styles/components/jumbo.scss";

const Jumbo = () =>{

    return(
        <div className="jumbotron">
            <div className="jumbotron__title">
                <h1 className="jumbotron__title-name">Paweł Sławuta</h1>
                <h2 className="jumbotron__title-seniority">I create web apps and websites</h2>
            </div>
        </div>
    )
}

export default Jumbo;