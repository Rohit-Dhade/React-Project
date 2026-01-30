import React from "react";
import "./dock.scss";
import { useState } from "react";
import Github from "./Window/Github";
import Pdf from "./Window/Pdf";
import Note from "./Window/Note";
import Spotify from "./Window/Spotify";
import Terminal_ from "./Window/Terminal";
import SocialLinks from "./Window/SocialLinks";

const Dock = () => {
  const [windowState, setwindowState] = useState({
    github:false,
    resume:false,
    note:false,
    spotify:false,
    terminal:false,
    link:false,
  })

  return (
    <>
      <footer className="dock">
        <div onClick={() => { setwindowState(state => ({ ...state, github: true })) }} className="icon github">
          <span className="tooltip">GitHub</span>
          <img src="/doc-icons/github.svg" alt="" />
        </div>

        <div onClick={() => { setwindowState(state => ({ ...state, resume: true })) }} className="icon pdf">
          <span className="tooltip">Pdf</span>
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>

        <div onClick={() => { setwindowState(state => ({ ...state, terminal: true })) }} className="icon terminal">
          <span className="tooltip">Terminal</span>
          <img src="/doc-icons/terminal.svg" alt="" />
        </div>

        <div className="icon mail">
          <span className="tooltip">Mail</span>
          <img src="/doc-icons/mail.svg" alt="" />
        </div>

        <div onClick={() => { setwindowState(state => ({ ...state, link: true })) }} className="icon link">
          <span className="tooltip">Link</span>
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div onClick={() => { setwindowState(state => ({ ...state, note: true })) }} className="icon notes">
          <span className="tooltip">Notes</span>
          <img src="/doc-icons/notes.svg" alt="" />
        </div>
       
      </footer>

      {windowState.github && <Github onClick={() => { setwindowState(state => ({ ...state, github: false })) }}/>}
      {windowState.resume && <Pdf onClick={() => { setwindowState(state => ({ ...state, resume: false })) }} />}
      {windowState.note && <Note onClick={() => { setwindowState(state => ({ ...state, note: false })) }} />}
      {windowState.terminal && <Terminal_ onClick={() => { setwindowState(state => ({ ...state, terminal: false })) }} />}
      {windowState.link && <SocialLinks onClick={() => { setwindowState(state => ({ ...state, link: false })) }} />}
    </>
  );
};

export default Dock;
