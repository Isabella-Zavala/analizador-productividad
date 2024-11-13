// src/components/BreakTracker.js
import React, { useState } from 'react';

function BreakTracker() {
  const [breaks, setBreaks] = useState([]);

  const addBreak = (time) => {
    setBreaks([...breaks, { time, date: new Date().toLocaleTimeString() }]);
  };

  return (
    <div>
      <h3>Registro de Descansos</h3>
      <button onClick={() => addBreak(15)}>Agregar descanso de 15 minutos</button>
      <button onClick={() => addBreak(30)}>Agregar descanso de 30 minutos</button>
      
      <ul>
        {breaks.map((b, index) => (
          <li key={index}>
            {b.date} - {b.time} minutos
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreakTracker;
