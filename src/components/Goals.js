// src/components/Goals.js
import React, { useState } from 'react';

function Goals({ tasks }) {
  const [goal, setGoal] = useState({ category: '', target: 0 });
  const [goals, setGoals] = useState([]);

  const handleGoalChange = (e) => {
    const { name, value } = e.target;
    setGoal((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddGoal = () => {
    if (goal.category && goal.target) {
      setGoals([...goals, goal]);
      setGoal({ category: '', target: 0 });
    }
  };

  // Calcular las horas por categoría
  const calculateCategoryTime = (category) => {
    return tasks
      .filter(task => task.category === category)
      .reduce((acc, task) => acc + task.duration, 0);
  };

  return (
    <div>
      <h3>Metas de Productividad</h3>
      <div>
        <input
          type="text"
          name="category"
          value={goal.category}
          placeholder="Categoría (Estudio, Ocio, etc.)"
          onChange={handleGoalChange}
        />
        <input
          type="number"
          name="target"
          value={goal.target}
          placeholder="Horas Objetivo"
          onChange={handleGoalChange}
        />
        <button onClick={handleAddGoal}>Agregar Meta</button>
      </div>
      
      <ul>
        {goals.map((g, index) => {
          const actualTime = calculateCategoryTime(g.category);
          const goalStatus = actualTime >= g.target ? 'Cumplida' : 'Pendiente';
          return (
            <li key={index}>
              {g.category} - {g.target} horas: {goalStatus} (Realizado: {actualTime} horas)
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Goals;
