import React, { useEffect } from 'react';
import useDetails from './useDetails';
import axios from 'axios';

function Dashboard() {
  const [setData, getData, user] = useDetails();
  
  useEffect(() => {
    axios.get('http://localhost:9000/dashboard', {withCredentials:true})
      .then((res) => console.log(res));
    getData();
  }, [])

  return(
    <h1>Welcome {user.name}</h1>
  )
}

export default Dashboard;