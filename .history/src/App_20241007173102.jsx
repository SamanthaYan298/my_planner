import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] =useState("new task ...");

  function handleChange(e) {
    setTasks(e.target)
  }
 
  return (
    <>
      <div className='main'>
        <h1>Daily Planner</h1>
        <form>
          <input
            type="text"
            className='form-input'
            value=
          />
          <button className='form-btn'>Save</button>
        </form>
        <h2>You have 3 tasks remaining</h2>
        <div>
          <div className='task-list'>
            <input type="checkbox" />
            <h3>Task 1</h3>
            <button className='task-btn'>Remove</button>
          </div>

          <div className='task-list'>
            <input type="checkbox" />
            <h3>Task 2</h3>
            <button className='task-btn'>Remove</button>
          </div>

          <div className='task-list'>
            <input type="checkbox" />
            <h3>Task 3</h3>
            <button className='task-btn'>Remove</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
