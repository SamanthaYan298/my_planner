import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState("");
  const [addTask, setAddTask] = useState([])

  function handleChange(e) {
    setTasks(e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if(input)
  // }

  function handleDelete(e) {
    if(e.target === e.currentTarget) {
      return;
    }

    if(e.target.tagName !== 'SPAN') {
      return;
    }
    e.currentTarget.remove();
  }
 
  return (
    <>
      <div className='main'>
        <h1>Daily Planner</h1>
        <form>
          <input
            type="text"
            className='form-input'
            placeholder='new task ...'
            value={tasks}
            onChange={handleChange}
          />
          <button className='form-btn'>Save</button>
        </form>
        <h2>You have 3 tasks remaining</h2>
        <div>
          <div className='task-list'>
            <input type="checkbox" />
            <h3 className='checked'>Task 1</h3>
            <span>
              <button className='task-btn'>Remove</button>
            </span>
          </div>

          <div className='task-list'>
            <input type="checkbox" />
            <h3 className='checked'>Task 2</h3>
            <span>
              <button className='task-btn'>Remove</button>
            </span>
          </div>

          <div className='task-list'>
            <input type="checkbox" />
            <h3>Task 3</h3>
            <div onClick={handleDelete}>
              <span>
              <button className='task-btn'>Remove</button>
            </span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
