import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from './Contexts';
import axios from 'axios';

function Dashboard() {
  const [myName,setMyName] = useState('');
  const user = useContext(UserContext);
  
  useEffect(() => {
    axios.get('http://localhost:9000/dashboard')
      .then((res) => console.log(res));
  }, [])

  return(
    <h1>Welcome</h1>
  )
}

export default Dashboard;