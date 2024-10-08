import { useState } from 'react'
import './App.css'

function App() {
 
  return (
    <>
      <header>Daily Planner</header>
      <form>
        <input
          type="text"
        />
        <button>Save</button>
      </form>
      <h2>You have 3 tasks remaining</h2>
      <div>
        <input type="checkbox" />
        <h3></h3>
      </div>
    </>
  )
}

export default App
