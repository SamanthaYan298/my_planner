import { useState } from 'react'
import './App.css'

const data = [
  {
    id: 1,
    title: 'Task 1',
    checked: false,
    task: 'pending'
  },
  {
    id: 2,
    title: 'Task 2',
    checked: false
  },
  {
    id: 3,
    title: 'Task 3',
    checked: false // set default display as none
  }
]

function App() {

  const [tasks, setTasks] = useState(""); // hold the current list of tasks and update the tasks.
  const [addTask, setAddTask] = useState(data);
  const currentTasks = addTask.filter(task => !task.checked).length;
  const [filter, setFilter] = useState('all');

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

  function filteredButtons() {
  }

  function handleDelete(taskId) {
    setAddTask(addTask.filter(task => task.id !== taskId)); // filter tasks by their Ids.
  }

  function toggleChecked(id) {
    setAddTask(addTask.map(task => 
      task.id === id ? {...task, checked: !task.checked} : task
    ));
  }

  return (
    <>
      <div className='main'>
        <h1>Daily Planner</h1>

        {/* form */}
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

        <div className='buttons'>
          <button className='list-btn-all'>All</button>
          <button className='list-btn-completed'>Completed</button>
          <button className='list-btn-pending'>Pending</button>
        </div>

        <h2>You have {currentTasks} tasks remaining</h2>

        {/* task list */}
        <div>
          {addTask.map(task => (
            <div className='task-list' key={task.id}> 
              <input 
                type="checkbox" 
                checked={task.checked}
                onChange={() => toggleChecked(task.id)}
              />
              <h3 className={task.checked ? 'checked' : ''}>{task.title}</h3>
              <button className='task-btn' onClick={() => handleDelete(task.id)}>Remove</button>
          </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default App
