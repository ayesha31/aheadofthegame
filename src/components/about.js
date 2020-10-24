import React from 'react';
import logo from '../logo.svg';
import '../about.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="AboutUsContent">
                    <h1> About </h1>
                    <p> Ahead of the Game uses sport to teach athletes, parents and coaches how to talk about mental health.
                    The program reviews how to recognise mental health issues, what to do and when to get help.
                    Athletes learn how to build resilience and overcome challenges in sport and life.
                      </p>

                </div>

            </div>
        );
    }
}
export default About;