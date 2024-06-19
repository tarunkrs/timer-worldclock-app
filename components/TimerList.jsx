import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';

const TimerList = () => {
  const [timers, setTimers] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchTimers = async () => {
      const response = await axios.get('/api/timers');
      setTimers(response.data);
    };

    fetchTimers();
  }, []);

  const addTimer = async () => {
    const newTimer = { id: Date.now(), time };
    await axios.post('/api/timers', newTimer);
    setTimers([...timers, newTimer]);
  };

  const removeTimer = async (id) => {
    await axios.delete('/api/timers', { data: { id } });
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
