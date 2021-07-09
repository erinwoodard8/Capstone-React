import './App.css';
import React from 'react';
import {Switch, Route } from "react-router-dom";
import Login from '../src/Homepage/Login.js';
import Signup from '../src/Homepage/Signup';
import NavbarI from './Homepage/Navbar';
import Test from './test';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/navbar" component={NavbarI} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;