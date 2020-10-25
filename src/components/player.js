import React from 'react';
import { Link } from "react-router-dom";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'Enter your answer here.'
    };
  }
    render() {
        return (
          // render html? navbar here
          <div className="App">
            <div className="App-form">
              <form className="player-form">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor a magna ullamcorper cursus?</p>
                <textarea className="player-text" value={this.state.description} />
                <input id="button" type='submit' value="CONTINUE" />
              </form>
            </div>
          </div>
        );
    }
}
export default Player;