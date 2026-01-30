import React from "react";
import "./sociallinks.scss";

const SocialLinks = ({ onClose }) => {
  return (
    <div className="social-link">
      <p onClick={onClose}>something...</p>

      <div className="main-box">
        <a
          href="https://www.linkedin.com/in/rohit-dhade-76b02132a/" target="_blank"
          className="icon"
        >
          <img src="../../../doc-icons/linkedin.svg" alt="" />
        </a>

        <a href="https://github.com/Rohit-Dhade" className="icon" target="_blank">
          <img src="../../../doc-icons/giticon.svg" alt="" />
        </a>

        <a
          href="https://www.instagram.com/rohit.dhade_99/"
          className="icon insta" target="_blank"
        >
          <img src="../../../doc-icons/insta.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
