import { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy bottled water', done: false },
    { id: 2, text: 'Prepare first-aid kit', done: false }
  ]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input 
            type="checkbox" 
            checked={task.done}
            onChange={() => {/* Toggle logic */}}
          />
          {task.text}
        </li>
      ))}
    </ul>
  );
}
