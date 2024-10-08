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
        <div className='task-list'>
          <input type="checkbox" />
          <h3>Task 1</h3>
          <button>Remove</button>
        </div>

        <div className='task-list'>
          <input type="checkbox" />
          <h3>Task 2</h3>
          <button>Remove</button>
        </div>

        <div className='task-list'>
          <input type="checkbox" />
          <h3>Task 3</h3>
          <button>Remove</button>
        </div>
      </div>
    </>
  )
}

export default App
