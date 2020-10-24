import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login.js';
import Parent from './components/parent.js';
import Coach from './components/coach.js';
import LandingPage from './components/landingPage.js';
import { BrowserRouter, Route } from "react-router-dom";

function App() {

  return (
    //<Login/>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/parent" component={Parent} />
        <Route path="/coach" component={Coach} />
      </div>
    </BrowserRouter>
  );
}

export default App;
