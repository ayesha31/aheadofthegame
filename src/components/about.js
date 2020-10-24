import React from 'react';
import logo from '../logo.svg';
import './about.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class About extends React.Component {
    render() {
        return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="header"> About 
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contactUs">Contact Us</a></li>
            </ul>
            </header>
                <div className="content">
                
        </div>
        
    </div>
);
}
}
export default About;