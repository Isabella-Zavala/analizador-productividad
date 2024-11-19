// src/components/Goals.js
import React, { useState, useEffect } from 'react';
import './Goals.css'; // Archivo CSS para mejorar el estilo

function Goals({ tasks }) {
  const [goal, setGoal] = useState({ category: '', target: 0 });
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState('');

  // Calculamos las horas por categoría
  const calculateCategoryTime = (category) => {
    return tasks
      .filter(task => task.category === category)
      .reduce((acc, task) => acc + task.duration, 0);
  };

  // Actualizamos el valor de las metas
  const handleGoalChange = (e) => {
    const { name, value } = e.target;
    setGoal((prev) => ({ ...prev, [name]: value }));
  };

  // Añadimos una meta
  const handleAddGoal = () => {
    if (goal.category && goal.target > 0) {
      setGoals([...goals, goal]);
      setGoal({ category: '', target: 0 });
      setError('');
    } else {
      setError('Por favor ingresa una categoría y un objetivo válido.');
    }
  };

  // Calcular las horas acumuladas de las metas
  useEffect(() => {
    const updatedGoals = goals.map(g => ({
      ...g,
      actualTime: calculateCategoryTime(g.category)
    }));
    setGoals(updatedGoals);
  }, [goals, tasks, calculateCategoryTime]); // Agregar calculateCategoryTime a las dependencias  

  return (
    <div className="goals-container">
      <h3 className="goals-header">Metas de Productividad</h3>
      
      <div className="goal-form">
        <input
          type="text"
          name="category"
          value={goal.category}
          placeholder="Categoría"
          onChange={handleGoalChange}
        />
        <input
          type="number"
          name="target"
          value={goal.target}
          placeholder="Horas Objetivo"
          onChange={handleGoalChange}
        />
        <button className="add-goal-button" onClick={handleAddGoal}>Agregar Meta</button>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <ul className="goal-list">
        {goals.map((g, index) => {
          const goalStatus = g.actualTime >= g.target ? 'Cumplida' : 'Pendiente';
          return (
            <li key={index} className={`goal-item ${goalStatus.toLowerCase()}`}>
              <span>{g.category} - {g.target} horas: {goalStatus} (Realizado: {g.actualTime} horas)</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Goals;
