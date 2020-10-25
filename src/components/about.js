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
        const mystyle = {
            color: "white",
            padding: "30px",
            fontFamily: "Arial",
            textAlign: "center",
            fontWeight:"bold",
            fontSize: "20",
            backgroundColor: "Black"
            
          };
          const mystyle2 = {
            fontSize: "20",
            padding: "50px 50px 50px 50px"
            
            
            
          };
        return (
            
            <div className="about">
                
                
                <div className="AboutUsContent" >
                        
                
                    <h1 style={mystyle} > About </h1>
                    <p style={mystyle2}> Ahead of the Game uses sport to teach athletes, parents and coaches how to talk about mental health.
                    The program reviews how to recognise mental health issues, what to do and when to get help.
                    Athletes learn how to build resilience and overcome challenges in sport and life.
                      </p>

                </div>

            </div>
        );
    }
    
        
}
export default About;
