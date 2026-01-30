import React from "react";
import MacWindow from "./MacWindow";
import "./Resume.scss";

const Pdf = ({ onClose }) => {
  return (
    <MacWindow func={onClose}>
      <div className="resume-window">
        <iframe src="../../../public/Payment_Status.pdf" frameborder="0"></iframe>
      </div>
    </MacWindow>
  );
};

export default Pdf;
