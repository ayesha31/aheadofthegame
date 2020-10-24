import React from 'react';
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
            Hi
            <form>
                        <span className="formtext"></span>
                        <input type="text" placeholder="Enter Session Code" required />
                        <Link to="/parentCoach">
                            <button>Play!</button>
                        </Link>
                    </form>
                </header>
            </div>
        );
    }
}
export default Login;