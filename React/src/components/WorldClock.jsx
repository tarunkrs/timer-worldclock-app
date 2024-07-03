import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorldClock = () => {
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('PST');

  useEffect(() => {
    const fetchTime = async () => {
      const response = await axios.get(`https://worldtimeapi.org/api/timezone/America/Los_Angeles`);
      setTime(response.data.datetime);
    };

    fetchTime();
  }, [timezone]);

  return (
    <div>
      <select onChange={(e) => setTimezone(e.target.value)} value={timezone}>
        <option value="PST">PST</option>
        <option value="IST">IST</option>
      </select>
      <h1>Current Time: {new Date(time).toLocaleTimeString()}</h1>
    </div>
  );
};

export default WorldClock;
