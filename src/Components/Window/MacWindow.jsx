import React from "react";
import { Rnd } from "react-rnd";
import './window.scss'

const MacWindow = ({children , func}) => {
  return (
    <Rnd default={{
      width:"40vw",height:"60vh" , x:200 , y:150
    }}>
      <div className="window">

        <div className="nav">
            <div className="dots">
                <div onClick={func} className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>

            <div className="title"><p>Rohit dhade - zsh</p></div>
        </div>

        <div className="main">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
