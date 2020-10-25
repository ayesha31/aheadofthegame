import React from 'react';

import { Link } from "react-router-dom";

class Coach extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      q1:  '',
      q2: '',
      q3: '', 
      end: '',
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { q1, q2, q3, end } = this.state
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <div className="App">
        <button 
          id="button" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      </div>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <div className="App">
        <button 
          id="button" 
          type="button" onClick={this._next}>
        Continue
        </button>
      </div>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          q1={this.state.q1}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          q2={this.state.q2}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          q3={this.state.q3}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="App">
      <div className="App-form">
        <div className="coach-container">
          <div className="coach-form">
            <label htmlFor="q1">In what way has Ahead of the Game improved you mental literacy?</label>
            <input
              className="form-control"
              id="q1"
              type="text"
              placeholder="Start typing..."
              value={props.q1}
              onChange={props.handleChange}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="App">
      <div className="App-form">
        <div className="coach-container">
          <div className="coach-form">
            <label htmlFor="q2">Describe your likelihood to recommend Ahead of the Game to other sporting clubs.</label>
            <input
              className="form-control"
              id="q2"
              type="text"
              placeholder="Start typing..."
              value={props.q2}
              onChange={props.handleChange}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className="App">
      <div className="App-form">
        <div className="coach-container">
          <div className="coach-form">
            <label htmlFor="q3">What improvements can be made to the program to help you develop a deeper understanding of mental health?</label>
            <input
              className="form-control"
              id="q3"
              type="text"
              placeholder="Start typing..."
              value={props.q3}
              onChange={props.handleChange}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coach;