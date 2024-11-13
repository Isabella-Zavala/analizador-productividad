// src/App.js
import React, { useState } from 'react';
import TaskTracker from './components/TaskTracker';
import Statistics from './components/Statistics';
import Goals from './components/Goals';
import Rewards from './components/Rewards';
import BreakTracker from './components/BreakTracker';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Analizador de Productividad</h1>
      <TaskTracker addTask={addTask} />
      <Statistics tasks={tasks} />
      <Goals tasks={tasks} />
      <Rewards tasks={tasks} />
      <BreakTracker />
    </div>
  );
}

export default App;
