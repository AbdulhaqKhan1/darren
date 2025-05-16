import React from "react";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <h1 className="owner">
        <a href="#home" className="owner">I SHOW SPEED</a>
      </h1>
      <div className="sections">
        <a href="#home" className="actions">Home</a>
        <a href="#about" className="actions">About</a>
        <a href="#contact" className="actions">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
