import React, { Component } from 'react';
import './App.css';
import pictures from "./pictures.json"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ICard from "./components/iCard";
import Trunks from "./components/Trunks";
import Wrapper from "./components/Wrapper";

class App extends Component {

  state = {
    pictures: pictures,
    score: 0,
    topScore: 0
  };

  shuffle = event => {
    event.preventDefault();
    let pictures = this.state.pictures;
    let index = pictures.length;
    let value;
    let rIndex;
    while (0 !== index) {
      rIndex = Math.floor(Math.random() * index);
      index -= 1;
      value = pictures[index];
      pictures[index] = pictures[rIndex];
      pictures[rIndex] = value;
    }

    this.setState({ pictures: pictures });

  }

  scoreKeeper = function (event) {

  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Hero />
        <Wrapper>
          {this.state.pictures.map(image => (
            <ICard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              shuffle={this.shuffle}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
