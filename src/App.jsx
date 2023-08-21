import React, { useState } from "react";


export default function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }

  function handleAddTask() {
    if (newTodo.length>0) {
      const updatedTasks = [
        ...todo,
        { text: newTodo, complete: false }
      ];
      setTodo(updatedTasks);
      setNewTodo("");
    }
  }

  function handleDeleteTask(index) {
    const updatedTasks = [...todo];
    updatedTasks.splice(index, 1);
    setTodo(updatedTasks);
  }

  function handleToggleTask(index) {
    const updatedTasks = [...todo];
    updatedTasks[index].complete = !updatedTasks[index].complete;
    setTodo(updatedTasks);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todo.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => handleToggleTask(index)}
            />
            <span className={task.complete ? "complete" : ""}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}
