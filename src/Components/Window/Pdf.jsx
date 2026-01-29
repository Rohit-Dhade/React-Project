import React from "react";
import MacWindow from "./MacWindow";
import "./Resume.scss";
// import resume from '../../assets/resume.pdf'

const Pdf = ({ onClose }) => {
  return (
    <MacWindow func={onClose}>
      <div className="resume-window">
        <embed src="./Payment Status.pdf" frameborder="0"></embed>
      </div>
    </MacWindow>
  );
};

export default Pdf;
