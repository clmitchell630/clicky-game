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
    pictures
  };

  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Wrapper>
          {this.state.pictures.map(image => (
            <ICard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
