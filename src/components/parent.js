import React from 'react';

import { Link } from "react-router-dom"; 

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('Thank you for answering the question' + this.state.description);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ description: event.target.description });
    }

    render() {
        return (
            <div className="App-parent">
                <header className="App-header-parent">
                    <div className="App-container">
                        <form onSubmit={this.handleSubmit}>
                            <h1>{this.props.location.user}</h1>
                            <label className="parent-question">
                                How would you describe (child name) strengths? <br /><input type="text"
                                    value={this.state.description} onChange={this.handleChange}
                                    placeholder="Please submit your response here" required />
                            </label>
                        </form>
                    </div> 
                    <button className="btn">Next</button>
                    <button className="btn">Submit</button>
                    <Link to="/"><button>Back</button></Link>
                </header>
            </div>
        );
    }
}
export default Parent;

