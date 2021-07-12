import './App.css';
import React from 'react';
import {Switch, Route } from "react-router-dom";
import Login from '../src/Homepage/Login.js';
import Signup from '../src/Homepage/Signup';
import Test from './test';
import Header from './static/Header';
import Landing from './Homepage/Landing.js';

function App() {
  return (
    <div className="App">
        {/* <Header></Header> */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/test" component={Test} />
      </Switch>
    
    </div>
  );
}

export default App;