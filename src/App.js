import './App.css';
import React from 'react';
import {Switch, Route } from "react-router-dom";
import Login from '../src/Homepage/Login.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
