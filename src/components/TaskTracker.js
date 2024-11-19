import React, { useState } from 'react';

function TaskTracker({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddTask = () => {
    if (taskName && category && duration) {
      const task = {
        name: taskName,
        category: category,
        duration: parseFloat(duration), // Convertir la duración a número
        date: new Date(), // Fecha actual
      };
      addTask(task);

      // Reiniciar los campos del formulario después de agregar la tarea
      setTaskName('');
      setCategory('');
      setDuration('');
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  return (
    <div>
      <h2>Agregar Tarea</h2>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duración (en horas)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
  );
}

export default TaskTracker;