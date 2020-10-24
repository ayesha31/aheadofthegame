import React from 'react';
import logo from './images/Mo_Black.jpg';
import './App.css';
import Login from './components/login.js';
import Parent from './components/parent.js';
import Coach from './components/coach.js';
import LandingPage from './components/landingPage.js';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li className="menuItemLeft"><img src={logo} className="App-logo" alt="logo" /></li>
          <li className="menuItemCentre">Ahead of the game</li>
          <Link to="/parent" parent><
            li className="menuItemRight"><a href="#contact">Contact</a></li>
          </Link>
          <Link to="/parent" parent>
            <li className="menuItemRight"><a href="#about">About</a></li>
          </Link>
        </ul>

        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/parent" component={Parent} />
        <Route path="/coach" component={Coach} />
      </div>
    </BrowserRouter>
  );
}

export default App;
