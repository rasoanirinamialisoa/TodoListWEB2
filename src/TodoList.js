import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasks);
  };

  const handleUpdateTask = (index) => {
    const updatedTask = prompt('Modifier la tâche :', tasksList[index]);
    if (updatedTask !== null) {
      const updatedTasks = [...tasksList];
      updatedTasks[index] = updatedTask;
      setTasksList(updatedTasks);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Entrer une nouvelle tâche"
        />
        <button onClick={handleAddTask}>Ajouter</button>
      </div>
      <ul>
        {tasksList.map((taskItem, index) => (
          <li key={index}>
            {taskItem}
            <button onClick={() => handleDeleteTask(index)}>Supprimer</button>
            <button onClick={() => handleUpdateTask(index)}>Mettre à jour</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
