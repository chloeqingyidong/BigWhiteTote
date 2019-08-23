import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const NewPage = () => (
  <div>
    <h1>NEW</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = { HomePage }/>
        <Route exact path = '/new' component = { NewPage }/>
      </Switch>
    </div>
  );
}

export default App;
