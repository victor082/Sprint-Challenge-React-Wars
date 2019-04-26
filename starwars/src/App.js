import React, { Component } from 'react';
import StarWarsList from './components/StarWarsList';
import StarWars from './components/StarWars';
import StarWarsForm from './components/StarWarsForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(this.state.starwarsChars)
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  // addChar = char => {
  //   const newCharArray = [
  //     ...this.state.starwarsChars,
  //     { name: name}
  //   ];
  //   this.setState({ starwarsChars: newCharArray});
  // }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsForm/>
        <div>
          <StarWarsList starwarsChars={this.state.starwarsChars}/>
        </div>

      </div>
    );
  }
}

export default App;
