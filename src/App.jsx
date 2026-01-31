import React from "react";
import Dock from "./Components/Dock";
import Navbar from "./Components/Navbar";
import MacWindow from "./Components/Window/MacWindow";
import Github from "./Components/Window/Github";
import HomePage from "./Components/HomePage";
import './Components/homepage.scss'
import { useState } from "react";

const App = () => {
  const [unlock, setunlock] = useState(false);
  const [home, sethome] = useState(true)
  return (
    <>
      <main>
        {home && <HomePage onClose={setunlock} onGear={sethome}/>}
      </main>

      {unlock && <Navbar/>}
      {unlock && <Dock/>}
    </>
  );
};

export default App;
