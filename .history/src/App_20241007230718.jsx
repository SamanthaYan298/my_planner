import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState("");
  const [addTask, setAddTask] = useState(data);

  const [taskData, setTaskData] = useState({
    title: '',
  });

  const taskList = addTask.map((students) => 
    <p key={students.id}>{students.firstName} {students.lastName}, {students.age} years old.</p>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target); // e.target === form
    // name = formData.get('name'); // get values from data

    setName(formData.get('name'));

    console.log(name);
  }

  function handleChange(e) {
    setTasks(e.target.value);
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
