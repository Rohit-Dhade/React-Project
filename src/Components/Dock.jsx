import React from "react";
import "./dock.scss";
import { useState } from "react";
import Github from "./Window/Github";

const Dock = () => {
  const [github, setgithub] = useState(false);
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
        <div className="icon notes">
          <span className="tooltip">Notes</span>
          <img src="/doc-icons/notes.svg" alt="" />
        </div>
        <div className="icon mail">
          <span className="tooltip">Mail</span>
          <img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div className="icon spotify">
          <span className="tooltip">Spotify</span>
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>
        <div className="icon pdf">
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
        <div className="icon terminal">
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
    </>
  );
};

export default Dock;
