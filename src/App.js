import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';  
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App=()=>
{

  return(
  <Router>
    <Switch>
    <Route path="/" exact>
      <Users></Users>
    </Route>
    <Route path="/places/new" exact>
      <NewPlace></NewPlace>
    </Route>
    <Redirect to="/"></Redirect>
    </Switch>
  </Router>
  );
};

export default App;
