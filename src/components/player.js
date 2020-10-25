<<<<<<< HEAD
// import React from 'react'
// import logo from '../logo.svg';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import ImagePicker from 'react-image-picker'
// import 'react-image-picker/dist/index.css'

// //import images from local
// import img1 from '../images/blue_avatar_plain.png'
// import img2 from '../images/orange_avatar_plain.png'
// import img3 from '../images/green_avatar_plain.png'
// import img4 from '../images/purple_avatar_plain.png'
// import img5 from '../images/yellow_avatar_plain.png'


// const imageList = [img1, img2, img3, img4, img5]

// class Player extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       image: null
//     }
//     this.onPick = this.onPick.bind(this)
//   }

//   onPick(image) {
//     this.setState({image})
//   }

//   render() {
//     return (
//       <div className="avatarSelection">
//         <ImagePicker 
//           images={imageList.map((image, i) => ({src: image, value: i}))}
//           onPick={this.onPick}
//         />
//         <button type="button" onClick={() => console.log(this.state.image)}>OK</button>
//       </div>
//     )
//   }
// }

// export default Player;
=======
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
export default Player;
>>>>>>> 6336dba4e4a3edf56ff1eba5b8b64bd5a18c5d0d
