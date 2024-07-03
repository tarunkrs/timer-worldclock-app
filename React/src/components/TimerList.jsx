import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

const TimerList = () => {
  const [timers, setTimers] = useState([]);
  const [time, setTime] = useState(0);

  const addTimer = () => {
    setTimers([...timers, { id: Date.now(), time }]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return (
    <div>
      <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={addTimer}>Add Timer</button>
      <div>
        {timers.map(timer => (
          <CountdownTimer key={timer.id} initialTime={timer.time} onRemove={() => removeTimer(timer.id)} />
        ))}
      </div>
    </div>
  );
};

export default TimerList;
