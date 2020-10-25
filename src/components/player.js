import React from 'react';
// import mud from '../images/mud1.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Player extends React.Component {
    constructor() {
        super()

        this.toggleImage = this.toggleImage.bind(this)

        const therm1 = require('../images/thermometer_1.png');
        const therm2 = require('../images/thermometer_2.png');
        const therm3 = require('../images/thermometer_3.png');
        const therm4 = require('../images/thermometer_4.png');
        const therm5 = require('../images/thermometer_5.png');

        this.state = {
            index: 0,
            imgList: [therm1, therm1, therm2, therm2, therm3, therm3, therm4, therm4, therm5, therm5]
        }
    }

    toggleImage() {
        if (this.state.index + 1 == this.state.imgList.length) {
            this.setState({ index: 0 });
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }


    render() {
        return (
            <div className="App"><br />
                <h2 className="question">How are you feeling? Tap to change.</h2>
                <img src={this.state.imgList[this.state.index]} className="Thermometer-select" alt="thermometerSelect" onClick={this.toggleImage} />
                <Link to={'/player'}>
                    <button className="LPButton">Submit</button>
                </Link>
            </div>
        );
    }
}
export default Player;