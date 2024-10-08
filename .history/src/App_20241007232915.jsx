import { useState } from 'react'
import './App.css'

const data = [
  {
    id: 1,
    title: 'Task 1'
  }
]

function App() {

  const [tasks, setTasks] = useState("");
  const [addTask, setAddTask] = useState(data);

  const data = [
    {
      id: 1,
    title: 'Task 1'
  }
  ];

  function handleChange(e) {
    setTasks(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    if(tasks.trim()) {
      setAddTask([...tasks, {id: taskData.length + 1, title: tasks}]);
      setTasks('');
    }
  }

  return (
    <>
      <div className='main'>
        <h1>Daily Planner</h1>
        <form onSubmit={handleAddTask}>
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
