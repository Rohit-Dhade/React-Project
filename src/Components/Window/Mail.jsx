import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Mail_Toaster from "../Mail_Toaster";
// import { useEffect } from "react";

const Mail = () => {
  useEffect(() => {
    toast(
      (t) => (
        <div
          style={{
            height: "5rem",
            width: "25rem",
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
            top:"1rem",
            justifyContent:"center",
          }}
        >
          {/* Close button */}
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

          {/* Title */}
          <div style={{ fontWeight: 500, fontSize: "20px" , display:"flex" , alignItems:"center"}}>
           Email : rohitdhade99@gmail.com
          </div>

          {/* Content */}
          {/* <div style={{ fontSize: "13px", opacity: 0.85 }}>
            A macOS-inspired interactive portfolio featuring:
          </div> */}

          {/* Icons + labels */}
          {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              fontSize: "13px",
            }}
          >
            <div>🐙 GitHub Projects</div>
            <div>💻 Terminal-style UI</div>
            <div>📝 Notes & Work</div>
            <div>📄 Resume</div>
            <div>✉️ Contact / Mail</div>
            <div>🌐 Social Links</div>
          </div> */}
        </div>
      ),
      {
        duration: Infinity, // stays until user closes
        position: "top-right",
      },
    );
  });
  return (
    <div>
      <Mail_Toaster />
    </div>
  );
};

export default Mail;
