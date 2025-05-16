import React from 'react';
import profileImage from '../assets/IMG_843.png';

const AboutPage = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Yo, I’m just a young dude chasing my dreams with crazy energy and a whole lotta heart...
        </p>
        <div className="about-images">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;