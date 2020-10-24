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
                            <Link to="/parent" parent>parent</Link> <br />
                            <Link to="/coachSession" parent>coach</Link><br />
                            <Link to="/player" parent>player</Link><br />
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}
export default LandingPage;