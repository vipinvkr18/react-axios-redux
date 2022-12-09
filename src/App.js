import './App.css';
import { Route,Switch } from 'react-router-dom'
import UserComponent from './component/user.component';
import CreateUserComponent from './component/create-user.component';
import React from 'react';

function App() {
  return (
      <div className="main">
      <Switch>
      <Route exact path='/' component={UserComponent} />
      <Route exact path='/create-user' component={CreateUserComponent} />  
      <Route path='/create-user/:id' component={CreateUserComponent} />  
      </Switch>
      </div> 
  );
}


export default App;
