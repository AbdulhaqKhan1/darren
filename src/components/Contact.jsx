import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const ContactPage = () => {

  return (

    <section id="contact" className="contact">
  
      <div className="contact-content">
        <h2 className="contact-title">Hit Me Up</h2>
        <p className="contact-description">
          Wanna connect? Got fan love, collab ideas, or just tryna vibe? Reach out — I’m always locked in with the supporters.
        </p>

        <div className='social-links'>
          <a href="https://www.instagram.com/ishowspeed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='social-media-link'><FaInstagram /></a>
          <a href="https://x.com/ishowspeedsui" className='social-media-link'><FaXTwitter /></a>
          <a href="https://www.youtube.com/@IShowSpeed" className='social-media-link'><FaYoutube /></a>
        </div>

      </div>
</section>

  );
};

export default ContactPage;
