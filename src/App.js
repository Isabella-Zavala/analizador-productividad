// src/App.js
import React, { useState } from 'react';
import TaskTracker from './components/TaskTracker';
import Statistics from './components/Statistics';
import Goals from './components/Goals';
import BreakTracker from './components/BreakTracker';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h2>Analizador de Productividad</h2>
      <TaskTracker addTask={addTask} />
      <Statistics tasks={tasks} />
      <Goals tasks={tasks} />
      <BreakTracker />
    </div>
  );
}

export default App;
