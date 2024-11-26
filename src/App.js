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
    <div className="app-container">
      <h2>Analizador de Productividad</h2>

      {/* Fila 1: Formulario + Lista de tareas + Estadísticas */}
      <div className="row">
        <div className="col-2">
          <TaskTracker addTask={addTask} />
          {/* ÚNICA lista de tareas */}
          <div className="tasks-container">
            <h3>Lista de Tareas</h3>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <strong>{task.name}</strong> - {task.duration} horas -{' '}
                  <span className="category">{task.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-1">
          {/* Gráfica de estadísticas */}
          <Statistics tasks={tasks} />
        </div>
      </div>

      {/* Fila 2: Metas + Registro de Descansos */}
      <div className="row">
        <div className="col-1">
          <Goals tasks={tasks} />
        </div>
        <div className="col-1">
          <BreakTracker />
        </div>
      </div>
    </div>
  );
}

export default App;
