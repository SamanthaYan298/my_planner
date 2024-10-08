import { useState } from 'react'
import './App.css'

const data = [
  {
    id: 1,
    title: 'Task 1'
  },
  {
    id: 2,
    title: 'Task 2'
  },
  {
    id: 3,
    title: 'Task 3'
  }
]

function App() {

  const [tasks, setTasks] = useState("");
  const [addTask, setAddTask] = useState(data);

  function handleChange(e) {
    setTasks(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    // helps ensure that users only add text-format tasks, not whitespace.
    if(tasks.trim()) {
      setAddTask([...addTask, {id: addTask.length + 1, title: tasks}]);
      setTasks(''); // clear the input after adding new tasks.
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
          {addTask.map(task => (
            <div className='task-list' key={task.id}> 
              <input type="checkbox" />
              <h3 className='checked'>{task.title}</h3>
              <span>
                <button className='task-btn'>Remove</button>
              </span>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
