import React from 'react';

import { Link } from "react-router-dom";

class CoachSession extends React.Component {
  render() {
    return (
      // render html? navbar here
      <div class="coach-session">
        <div class="App">
          <div class="overlay">              
          <h1 class="heading m-5">hello there!</h1>
            <form class="session-form">
              <p>session code</p>
              <input type="text" />
              <p>full name</p>
              <input type="text" />
            </form>              
            <div class="coach-buttons">
              <Link to="/coach" parent>Start</Link><br />
              <Link to="/">Back</Link><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoachSession;