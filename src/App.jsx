import React from 'react'
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import MacWindow from './Components/Window/MacWindow'
import Github from './Components/Window/Github'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Dock/>
    </main>
  )
}

export default App