import React from 'react';
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
            imgList: [mud0, mud0, mud1, mud1, mud2, mud2, mud3, mud3, mud4],
            showbutton: false,
            time: 0,
            start: 0,
        }
    }

    toggleImage() {
        //start of the image click
        if (this.state.index == 0) {
            this.setState({
                time: this.state.time,
                start: Date.now() - this.state.time,
                isOn: true
            })
            this.timer = setInterval(() => this.setState({
                time: Date.now() - this.state.start
            }), 1);

            this.setState({
                index: this.state.index + 1
            })
        }

        //end of the image click
        else if (this.state.index + 1 == this.state.imgList.length) {
            clearInterval(this.timer)
            this.setState({
                isButtonDisabled: true,
                showButton: true
            });

        }

        //continue image clicking
        else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        const { showing } = this.state;
        return (
            <div className="App"><br />
                <h2 className="question">Tap as fast as you can to remove all the mud</h2>
                <img src={this.state.imgList[this.state.index]} className="Mud-avatar" alt="mudAvatar" disabled={this.state.isButtonDisabled} onClick={this.toggleImage} />
                <div>
                    <h3>timer: {Math.floor(this.state.time / 100)}</h3>
                </div>
                <Link to='/player'>
                    {this.state.showButton ? <button className="LPButton">Next</button> : null}
                </Link>
            </div>
        );
    }
}
export default CookieGame;