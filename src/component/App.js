import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage } from 'page';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/Login" component={LoginPage}/>
      </Switch>
    </div>
  );
}; 

export default App;
    