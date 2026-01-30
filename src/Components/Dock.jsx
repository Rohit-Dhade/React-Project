import React from "react";
import "./dock.scss";
import { useState } from "react";
import Github from "./Window/Github";
import Pdf from "./Window/Pdf";
import Note from "./Window/Note";
import Spotify from "./Window/Spotify";
import Terminal_ from "./Window/Terminal";

const Dock = () => {
  const [github, setgithub] = useState(false);
  const [resume, setresume] = useState(false);
  const [note, setnote] = useState(false);
  const [spotify, setspotify] = useState(false)
  const [terminal, setterminal] = useState(false)
  return (
    <>
      <footer className="dock">
        <div onClick={() => setgithub(true)} className="icon github">
          <span className="tooltip">GitHub</span>
          <img src="/doc-icons/github.svg" alt="" />
        </div>

        <div className="icon calender">
          <span className="tooltip">Calendar</span>
          <img src="/doc-icons/calender.svg" alt="" />
        </div>
        <div className="icon link">
          <span className="tooltip">Link</span>
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        <div onClick={()=>setnote(true)} className="icon notes">
          <span className="tooltip">Notes</span>
          <img src="/doc-icons/notes.svg" alt="" />
        </div>
        <div className="icon mail">
          <span className="tooltip">Mail</span>
          <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div onClick={()=>setspotify(true)} className="icon spotify">
          <span className="tooltip">Spotify</span>
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div onClick={()=>setresume(true)} className="icon pdf">
          <span className="tooltip">Pdf</span>
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>

        <div className="icon app-store">
          <span className="tooltip">App store</span>
          <img src="/doc-icons/app store.svg" alt="" />
        </div>
        <div className="icon database">
          <span className="tooltip">Database</span>
          <img src="/doc-icons/database.svg" alt="" />
        </div>
        <div className="icon vs-code">
          <span className="tooltip">Vs code</span>
          <img src="/doc-icons/vs code.svg" alt="" />
        </div>
        <div onClick={()=>setterminal(true)} className="icon terminal">
          <span className="tooltip">Terminal</span>
          <img src="/doc-icons/terminal.svg" alt="" />
        </div>
        <div className="icon settings">
          <span className="tooltip">Settings</span>
          <img src="/doc-icons/settings.svg" alt="" />
        </div>
        <div className="icon file-manager">
          <span className="tooltip">File Manager</span>
          <img src="/doc-icons/file manager.svg" alt="" />
        </div>
      </footer>

      {github && <Github onClose={() => setgithub(false)} />}
      {resume && <Pdf onClose={() => setresume(false)} />}
      {note && <Note onClose={() => setnote(false)} />}
      {terminal && <Terminal_ onClose={() => setterminal(false)} />}

    </>
  );
};

export default Dock;
