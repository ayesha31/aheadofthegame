import React from 'react';
import logo from './images/Mo_Black.jpg';
import './App.css';
import Login from './components/login.js';
import Parent from './components/parent.js';
import Coach from './components/coach.js';
import CoachSession from './components/coachSession.js';
import LandingPage from './components/landingPage.js';
import Game from './components/cookieGame.js'
import About from './components/about.js'
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li className="menuItemLeft"><img src={logo} className="App-logo" alt="logo" /></li>
          <Link to="/">
            <li className="menuItemCentre"><div>Ahead of the game</div></li>
          </Link>
          <Link to="/contactUs">
            <li className="menuItemRight"><p>Contact</p></li>
          </Link>
          <Link to="/about">
            <li className="menuItemRight"><p>About</p></li>
          </Link>
        </ul>

        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/parent" component={Parent} />
    <Route path="/coach" component={Coach} />

        <Route path="/coachSession" component={CoachSession} />
        <Route path="/game" component={Game} />
        <Route path="/about" component={About} />
    
      </div>
    </BrowserRouter>
  );
}

export default App;
