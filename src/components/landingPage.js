import React from 'react';
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="App-container">
                        <h2 className="heading">are you a...?</h2>
                        <form>
                            <Link to="/parent" parent><button className="LPButton">parent</button></Link> <br /><br />
                            <Link to="/coach" parent><button className="LPButton">coach</button></Link><br /><br />
                            <Link to="/player" parent><button className="LPButton">player</button></Link><br /><br />
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}
export default LandingPage;