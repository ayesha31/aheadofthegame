import React from 'react';

import { Link } from "react-router-dom";

class Coach extends React.Component {
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
              <form className="coach-form">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor a magna ullamcorper cursus?</p>
                <textarea className="coach-text" value={this.state.description} />
                <input id="button" type='submit' value="CONTINUE" />
              </form>
            </div>
          </div>
        );
    }
}
export default Coach;