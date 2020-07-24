import React, { Component } from 'react'
import Routes from './Routes';
import Navbar from "./Navbar";
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import hazel from "./imgs/hazel.jpg";
import charlie from "./imgs/charlie.jpg";
import mike from "./imgs/mike.jpg";
import laura from "./imgs/laura.jpg";
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      },
      {
        name: "Charlie",
        age: 6,
        src: charlie,
        facts: [
          "Charlie loves eating popcorn.",
          "Charlie is a terrible guard dog.",
          "Charlie wants to cuddle with you!"
        ]
      },
      {
        name: "Mike",
        age: 5,
        src: mike,
        facts: [
          "Mike has soooo much energy!",
          "Mike is highly intelligent.",
          "Mike loves people more than dogs."
        ]
      },
      {
        name: "Laura",
        age: 8,
        src: laura,
        facts: [
          "Laura loves eating popcorn.",
          "Laura is a terrible guard dog.",
          "Laura wants to cuddle with you!"
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
