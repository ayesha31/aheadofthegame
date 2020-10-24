import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login.js'
import ParentCoach from './components/parentCoachFeedback.js'
import { BrowserRouter, Route } from "react-router-dom";

function App() {

  return (
    //<Login/>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/parentCoach" component={ParentCoach} />
      </div>
    </BrowserRouter>
  );
}

export default App;
