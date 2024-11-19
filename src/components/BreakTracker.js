import React, { useState } from 'react';
import './BreakTracker.css'; // Importamos el archivo CSS

function BreakTracker() {
  const [breaks, setBreaks] = useState([]);
  const [customTime, setCustomTime] = useState('');

  const addBreak = (time) => {
    setBreaks([...breaks, { time: Number(time), date: new Date().toLocaleTimeString() }]);
  };

  const handleCustomBreak = () => {
    if (!customTime || isNaN(customTime) || customTime <= 0) {
      alert('Por favor, ingresa un número válido.');
      return;
    }
    addBreak(Number(customTime));
    setCustomTime('');
  };

  const totalBreakTime = breaks.reduce((total, b) => total + b.time, 0);

  const removeBreak = (index) => {
    const updatedBreaks = breaks.filter((_, i) => i !== index);
    setBreaks(updatedBreaks);
  };

  return (
    <div className="break-tracker">
      <h3>Registro de Descansos</h3>
      
      <div className="button-container">
        <button className="break-button" onClick={() => addBreak(15)}>15 min</button>
        <button className="break-button" onClick={() => addBreak(30)}>30 min</button>
        
        <input
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          placeholder="Tiempo personalizado"
          className="custom-time-input"
        />
        <button className="break-button" onClick={handleCustomBreak}>Agregar descanso personalizado</button>
      </div>
      
      <div className="total-breaks">
        <strong>Tiempo total de descansos: {totalBreakTime} minutos</strong>
      </div>

      <ul className="break-list">
        {breaks.map((b, index) => (
          <li key={index} className="break-item">
            <span>{b.date} - {b.time} minutos</span>
            <button className="remove-button" onClick={() => removeBreak(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreakTracker;