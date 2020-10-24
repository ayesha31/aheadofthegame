import React from 'react';
import mud from '../images/mud1.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class CookieGame extends React.Component {
    constructor() {
        super()

        this.toggleImage = this.toggleImage.bind(this)

        const mud0 = require('../images/mud0.png');
        const mud1 = require('../images/mud1.png');
        const mud2 = require('../images/mud2.png');
        const mud3 = require('../images/mud3.png');
        const mud4 = require('../images/mud4.png');

        this.state = {
            index: 0,
            imgList: [mud0, mud0, mud1, mud1, mud2, mud2, mud3, mud3, mud4, mud4]
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
                <h2 className="question">Tap as fast as you can to remove all the mud</h2>
                <img src={this.state.imgList[this.state.index]} className="Mud-avatar" alt="mudAvatar" onClick={this.toggleImage} />
            </div>
        );
    }
}
export default CookieGame;