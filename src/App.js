import './App.css';
import React from 'react';
import {Switch, Route } from "react-router-dom";
import Login from '../src/Homepage/Login.js';
import Signup from '../src/Homepage/Signup';
import Test from './test';
import Navbar from './static/Header';
import Header from './static/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/test" component={Test} />
      </Switch>
    
    </div>
  );
}

export default App;