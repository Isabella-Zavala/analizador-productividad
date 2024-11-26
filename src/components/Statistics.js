// src/components/Statistics.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Statistics({ tasks }) {
  const categoryColors = {
    trabajo: '#FF6384',
    estudio: '#36A2EB',
    ocio: '#FFCE56',
    hogar: '#4BC0C0',
  };

  const categories = ['trabajo', 'estudio', 'ocio', 'hogar'];

  const categoryDurations = categories.map(category => {
    return tasks
      .filter(task => task.category === category)
      .reduce((total, task) => total + Number(task.duration), 0);
  });

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Distribución de tiempo por categoría',
        data: categoryDurations,
        backgroundColor: categories.map(category => categoryColors[category]),
        hoverBackgroundColor: categories.map(category => categoryColors[category]),
      },
    ],
  };

  return (
    <div className="statistics-container">
    <div className="chart-container">
      <h2>Estadísticas de Productividad</h2>
      <Pie data={data} className="idk" />
    </div>
  </div>
  
  );
}

export default Statistics;