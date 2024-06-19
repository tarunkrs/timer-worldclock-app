import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WorldClock = (props) => {
  const [time, setTime] = useState('');
  const [timezone, setTimezone] = useState('Asia/Kolkata');

  useEffect(() => {
    const fetchTime = async () => {
      const response = await axios.get(`https://worldtimeapi.org/api/timezone/${timezone}`);
      setTime(response.data.datetime);
    };

    fetchTime();
  }, [timezone]);

  return (
    <div>
      <select className={props.className} onChange={(e) => setTimezone(e.target.value)} value={timezone}>
        <option value="Asia/Karachi">PST</option>
        <option value="Asia/Kolkata">IST</option>
        <option value="America/New_York">New York</option>
      </select>
      <h1>Current Time: {new Date(time).toLocaleString('en', {timeZone: timezone})}</h1>
    </div>
  );
};

export default WorldClock;
