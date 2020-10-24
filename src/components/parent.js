import React from 'react';

import { Link } from "react-router-dom";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.handleSubmit}>
                        <h1>{this.props.location.user}</h1>
                        <label>
                            Child's Full Name: <input type="text"
                                value={this.state.value} onChange={this.handleChange}
                                placeholder="Full Name (no nicknames)" required />
                        </label>
                    </form>
                    {/* <button>Submit</button> */}
                    <input type="submit" value="Submit" />
                    <Link to="/"><button>Back</button></Link>
                </header>
            </div>
        );
    }
}
export default Parent;