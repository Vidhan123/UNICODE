import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const [myName,setMyName] = useState('');
  let location = useLocation();

  useEffect(() => {
    const temp = location.search;
    if (temp === '') {
      window.location.href = 'http://localhost:9000/dashboard';
    }
    const required = temp.slice(1,temp.length).split('%20');
    setMyName(`${required[0]} ${required[1]}`);
  }, [])

  return(
    <h1>Welcome {myName}</h1>
  )
}

export default Dashboard;