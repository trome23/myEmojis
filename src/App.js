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

  if(this.state.clickedImages.includes(id)) {
    this.setState({
      score: 0,
      clickedImages: []
    })
  } else {
    this.state.clickedImages.push(id)

    if(this.state.score >= this.state.highScore) {
      this.setState({
        score: this.state.score +1, 
        highScore: this.state.highScore +1
      })
    } else {
      this.setState({
        score: this.state.score + 1
      })
    }

    if(this.state.score < superHeros.length -1) {
      this.shuffle(this.state.superHeros)
    } else {
      setTimeout(function () {
        this.shuffle(this.state.superHeros)
        this.setState({
          gameStarted: false,
          score: 0,
          clickedImages: []
        })
      }.bind(this), 2000)
    }
  }
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }
  render()  {
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
          <div className="row">{this.props.children}
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
}

export default App;
