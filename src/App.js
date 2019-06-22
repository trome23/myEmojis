import React, {Component} from 'react';
import ImageCard from './components/ImageCard'
import superHeros from './superHeros.json'
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  state = {
    superHeros,
    score: 0,
    highScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedImages: []
  };

  clickedImage = id => {
    let  clickedImages = this.state.clickedImages;
    let score = this.state.score;
    let highScore = this.state.highScore;
    this.setState({
      showAlert: 0
    })
    if(clickedImages.indexOf(id) === -1) {
      clickedImages.push(id); 
      this.handleIncrement();
      this.makeShuffle() 
    } else if (this.state.score ===12) {
      this.setState({
        showSuccess:1, 
        score: 0, 
        clickedImages:[]
      }) 
    } else {
      this.setState({
        score:0, 
        clickedImages:[], 
        showAlert:1
      });
    }
   
 }  

  render() {
    return (
      <Wrapper>
        <ScoreBoard/>
        {this.state.superHeros.map(friend => (
          <ImageCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
  
}

export default App;
