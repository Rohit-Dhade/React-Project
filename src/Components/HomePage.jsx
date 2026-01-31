import React from "react";
import "./homepage.scss";
import { useState } from "react";
import Navbar from "./Navbar";
import Dock from "./Dock";
import { FaLongArrowAltRight } from "react-icons/fa";


const HomePage = ({ onClose, onGear }) => {
  return (
    <>
      <div className="home-page">
        <div className="text-area">
          <div className="text">
            <h1>Hi, I’m Rohit</h1>
            <h2 className="h2-sec">Engineering Student & Learning Developer</h2>

            <p className="p-first">
              Passionate about web development, machine learning, and building
              solutions to real-world problems.
            </p>

            <p>Always learning. Always building.</p>
          </div>
        </div>
        <button className="explore-btn"
          onClick={() => {
            onClose(true);
            onGear(false);
          }}
        >
          Explore Portfolio <FaLongArrowAltRight size={33} color="#b6b1a6"/>
        </button>
      </div>

      {/* {unlock && <Navbar/>}
      {unlock && <Dock/>} */}
    </>
  );
};

export default HomePage;
