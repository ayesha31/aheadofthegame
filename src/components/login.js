import React from 'react';
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let navigateTo = null;
class Login extends React.Component {

    render() {
        console.log(this.props.location.user);
        if (this.props.location.user == 'parent') {
            navigateTo = {
                pathname: '/parent',
            }
        }
        else if (this.props.location.user == 'coach') {
            navigateTo = {
                pathname: '/coach',
            }
        }
        else if (this.props.location.user == 'player') {
            navigateTo = {
                pathname: '/game',
            }
        }


        return (
            <div className="App">
                <header className="App-header-login">
                    <div className="App-container">
                        <h2 className="heading">hello there!</h2>
                        <form>
                            <p className="loginHeading">Session code</p> <br />
                            <input className="loginEntry" type="text" required /><br /><br />
                            <p className="loginHeading">Player's full name</p> <br />
                            <input className="loginEntry" type="text" required /><br /><br />

                            <Link to={navigateTo}>
                                <button className="LPButton">Play!</button>
                            </Link>
                        </form>
                    </div>
                </header>
            </div>
        );
    }
}
export default Login;