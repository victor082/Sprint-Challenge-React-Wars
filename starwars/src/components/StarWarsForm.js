import React from 'react';
import './StarWars.css';

class StarWarsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: ''
        }
    };

    onUpdate = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
            {/* <form onSubmit={this.handleSubmit}>
                <input
                placeholder="Create a Character..." 
                type="text"
                name="height"
                id="new-char"
                value={this.state.input}
                />
                <button type="submit">Create!</button>
            </form> */}
            </div>
        )
    }
}

export default StarWarsForm;