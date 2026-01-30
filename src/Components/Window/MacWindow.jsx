import React from "react";
import { Rnd } from "react-rnd";
import './window.scss'

const MacWindow = ({children , func , w="40vw",h="60vh"}) => {
  return (
    <Rnd default={{
      width:w,height:h , x:200 , y:150
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
