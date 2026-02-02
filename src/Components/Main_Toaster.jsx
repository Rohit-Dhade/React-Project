import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Main_Toaster = ({ start }) => {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "transparent",
            boxShadow: "none",
            padding: 0,
            maxWidth: "none",
          },
        }}
      />
    </div>
  );
};

export default Main_Toaster;
