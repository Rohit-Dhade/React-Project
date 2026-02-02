import React, { useEffect } from "react";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import MacWindow from "./Components/Window/MacWindow";
import Github from "./Components/Window/Github";
import HomePage from "./Components/HomePage";
import "./Components/homepage.scss";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Main_Toaster from "./Components/Main_Toaster";
import { FaGithub } from "react-icons/fa";

const App = () => {
  const [unlock, setunlock] = useState(false);
  const [home, sethome] = useState(true);

  useEffect(() => {
    toast(
      (t) => (
        <div
          style={{
            height: "10rem",
            width: "40rem",
            padding: "14px 18px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            position: "relative",
            top:"1rem"
          }}
        >
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              position: "absolute",
              top: "10px",
              right: "12px",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "22px",
              height: "22px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <div style={{ fontWeight: 600, fontSize: "20px" , textAlign:"center" }}>
            What this Portfolio Includes
          </div>

          <div style={{ fontSize: "17px", opacity: 0.85 , textAlign:"center" }}>
            A macOS-inspired interactive portfolio featuring:
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              fontSize: "13px",
            }}
          >
            <div style={{fontSize: "16px" , display:"flex" , alignItems:"center" , gap:"0.3rem"}}> <FaGithub size={18} /> GitHub Projects</div>
            <div style={{fontSize: "16px"}}>💻 Terminal-style UI</div>
            <div style={{fontSize: "16px"}}>📝 Notes & Work</div>
            <div style={{fontSize: "16px"}}>📄 Resume</div>
            <div style={{fontSize: "16px"}}>✉️ Contact / Mail</div>
            <div style={{fontSize: "16px"}}>🌐 Social Links</div>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: "top-center",
      },
    );
  }, []);

  return (
    <>
      <main>{home && <HomePage onClose={setunlock} onGear={sethome} />}</main>
      {unlock && <Main_Toaster />}
      {unlock && <Navbar />}
      {unlock && <Dock />}
    </>
  );
};

export default App;
