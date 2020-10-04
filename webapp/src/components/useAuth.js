import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function useAuth() {
  
  const authorise = () => {
    localStorage.setItem('isAuthorised', 'Yes')
  };
  const unauthorise = () => {
    localStorage.setItem('isAuthorised', 'No')
  };

  const ProtectedRoutes = (props) => {    
    const isAuthenticated = localStorage.getItem('isAuthorised');
    const Rendering = isAuthenticated === 'Yes' ? 
    props.children : <Redirect to={{pathname:'/login'}}></Redirect>

    return (
      <Route path={props.path}> 
        {Rendering}
      </Route>
    )
  }

  return [authorise, unauthorise, ProtectedRoutes]
};

export default useAuth;