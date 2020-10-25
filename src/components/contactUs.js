import React from 'react';
import logo from '../logo.svg';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Contact extends React.Component {
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
        
        return (
            
            <div className="contact">
                
                
                <div className="ContactContent" >
                        
                
                    <h1 style={mystyle} > Do You Have Any Questions? </h1>
                    <p style={{padding: "150px"}, {fontSize: "20"}, {textAlign: "center"}}> Contact Us At: <u>INFO@AHEADOFTHEGAME.ORG.AU </u>
                    </p>

                </div>

            </div>
        );
    }
    
        
}
export default Contact;
