import React from "react";
import "../styles/components/header.scss";

const Header = () =>(
    <header className="header">
        <button className="header__dark-mode-button" onClick={() => {document.querySelector("body").classList.toggle("dark-mode")}}>Dark mode</button>
     </header>
)

export default Header;