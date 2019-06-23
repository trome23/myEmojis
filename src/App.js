import React, {Component} from 'react';
import ImageCard from './components/ImageCard'
import superHeros from './superHeros.json'
import Header from "./components/Header";


class App extends Component {
  state = {
    superHeros,
    score: 0,
    highScore: 0,
    clickedImages: [],
    gameStarted: false
  };
  

  clickedImage = (event) => {
    if(this.state.gameStarted === false) {
      this.setState({
        gameStarted: true
      })
    }
  

  const id = event.target.getAttribute('data-id');
  console.log("id " + id)

  render() {
    return (
      <div>
        <Header 
          score= {this.state.score}
          highScore={this.state.highScore}
          gameStarted={this.state.gameStarted}
          arrLength = {this.state.length}
        />
        <div className="container">
        <div>
          <h3>Don't click the same Super Hero twice!</h3>
        </div>
          <div className="row">
            {this.state.superHeros.map(friend => (
              <ImageCard
                clickedImage={this.clickedImage}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                score={this.state.score}
                gameStarted={this.state.gameStarted}
                arrLength={this.state.superHeros.length}
              />
            ))}
          </div>     
        </div>      
      </div>
    );
  }

export default App;
