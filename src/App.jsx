import React from 'react'
import Dock from './Components/Dock'
import Navbar from './Components/Navbar'
import MacWindow from './Components/Window/MacWindow'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Dock/>
      <MacWindow>
        <h1>Hello, rohit!</h1>
      </MacWindow>
    </main>
  )
}

export default App