import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState("");
  const [addTask, setAddTask] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    if(taskList.trim())
  }

  function handleChange(e) {
    setTasks(e.target.value);
  }


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
          <button className='form-btn' onClick={handleSubmit}>Save</button>
        </form>
        <h2>You have 3 tasks remaining</h2>
        <div>
          <div className='task-list'>
            <input type="checkbox" />
            <h3 className='checked'>Task 1</h3>
            <span onClick={handleDelete}>
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
            <span>
              <button className='task-btn'>Remove</button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
