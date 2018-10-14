import React, { Component } from 'react';
import './App.css';
import Image from "./Image";
import Cards from './Cards.json';
// import ghPages from 'gh-pages';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentScore: 0,
      highScore: 0,
      images: Cards
    }
  }

  shuffleDeck = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  resetCards = () => {
    for (var i = 0; i < Cards.length; i++) {
      Cards[i].clicked = false;
    }
  }



  imageClicked = (i) => {
    if (this.state.images[i].clicked === true) {
      alert("you lost");
      this.resetCards();
      // console.log(Cards);
      this.setState({
        currentScore: 0,
        highScore: this.state.highScore,
        images: Cards
      })
      let images = this.state.images;
      images[i].clicked = false;
    } else {
      let images = this.state.images;
      images[i].clicked = true;
      images = this.shuffleDeck(images);

      let currentScore = this.state.currentScore;
      currentScore++;

      let highScore = this.state.highScore;
      if (currentScore > highScore) {
        this.setState({
          highScore: currentScore
        })
      }

      this.setState({
        clicked: true,
        currentScore: currentScore
      });
    }
  }

  render() {
    // console.log(this);
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-primary fixed-top margin-bottom">
          <h1><span className="badge badge-success">Score: {this.state.currentScore}</span></h1>
          <h1>Clickity Click Click</h1>
          <h1><span className="badge badge-danger">High Score: {this.state.highScore}</span></h1>
        </nav>
        <div className="margin-bottom"></div>
        {
          this.state.images.map((image, i) => {
            return (
              <Image src={image.src} imageClicked={this.imageClicked} data-clidked={image.clicked} imageIndex={i} />
            )
          })
        }
      </div>
    );
  }
}

export default App;

