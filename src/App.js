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
    topScore: 0,
    message: "",
    tracker: []
  };

  shuffle = () => {
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
  };

  scoreKeeper = (id) => {
    // console.log(this.state.tracker);
    if (this.state.tracker.includes(id)) {
      this.setState({
        score: 0,
        message: "You guessed Incorrectly!",
        tracker: []
      });
      // console.log("wrong!");
    } else {
      let value = this.state.tracker;
      let topScore = this.state.topScore > this.state.score ? this.state.topScore : this.state.topScore + 1;
      value.push(id);
      this.setState({
        score: this.state.score + 1,
        topScore: topScore,
        message: "You guessed correctly!",
        tracker: value
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
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
              scoreKeeper={this.scoreKeeper}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
};

export default App;
