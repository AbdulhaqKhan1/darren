import React from "react";

const Navigation = ()=>{
    return(
        <nav className="nav-bar">
            <h1 className="owner"><a href="Navigation.jsx" className="owner">I SHOW SPEED</a></h1>
            <div className="sections">
                <a href="Navigation.jsx" className="actions">Home</a>
                <a href="AboutPage.jsx" className="actions">About</a>
                <a href="ContactPage.jsx" className="actions">Contact</a>
            </div>
        </nav>
        )
}

export default Navigation