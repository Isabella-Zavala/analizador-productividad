// src/components/Rewards.js
import React, { useState, useEffect } from 'react';

function Rewards({ tasks }) {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const newAchievements = [];
    const studyTime = tasks.filter(task => task.category === 'Estudio')
                            .reduce((acc, task) => acc + task.duration, 0);

    if (studyTime >= 5) newAchievements.push("Logro: 5 horas de estudio");

    setAchievements(newAchievements);
  }, [tasks]);

  return (
    <div>
      <h3>Logros</h3>
      <ul>
        {achievements.length === 0 ? (
          <li>No tienes logros aún.</li>
        ) : (
          achievements.map((achievement, index) => <li key={index}>{achievement}</li>)
        )}
      </ul>
    </div>
  );
}

export default Rewards;
