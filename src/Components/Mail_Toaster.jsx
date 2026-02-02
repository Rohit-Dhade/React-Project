import React from 'react'
import toast, { Toaster } from "react-hot-toast";

const Mail_Toaster = () => {
  return (
    <div>
      <Toaster
        position="top-right"
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
  )
}

export default Mail_Toaster