import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserRouter from './components/router';
import Footer from './components/footer'; 
import Dashboard from './components/dashboard';

function App() {
  // const [apiRes, setApiRes] = useState('');
  // const callApi = () => {
  //   fetch('http://localhost:9000')
  //     .then(res => res.text())
  //     .then(res => setApiRes(res));
  // }
  // useEffect(() => {
  //   callApi();
  // }, [])

  return(
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route exact path="/"><UserRouter /></Route>
        </Switch> 
        <Route path="/logIn"><UserRouter /></Route>
        <Route path="/register"><UserRouter /></Route>
      </Router>
      <Footer />
    </React.Fragment>
  )
}

export default App;
