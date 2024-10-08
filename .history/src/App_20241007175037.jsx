import { useState } from 'react'
import './App.css'

const dataTemplate = [{
  id: 1,
  task: 'Task 1'
}]


function App() {

  const [tasks, setTasks] = useState("");
  const [addTask, setAddTask] = useState(dataTemplate)

  function handleChange(e) {
    setTasks(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAddTask([...task, task])
  }
 
  return (
    <>
      <div className='main'>
        <h1>Daily Planner</h1>
        <form onSubmit={handleSubmit}>
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
