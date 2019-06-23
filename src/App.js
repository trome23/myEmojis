import React, {Component} from 'react';
import ImageCard from './components/ImageCard'
import superHeros from './superHeros.json'
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  state = {
    superHeros,
    score: 0,
    message: '',
    clickedImages: [],
    showSuccess:0
  };
  

  clickedImage = (id) => {
    let clickedImages = this.state.clickedImages;
    if(clickedImages.includes(id)) {
      this.setState({
        clickedImages: [], 
        score: 0,
        message: "Dang it! Try Again!"
      });
      return; 
    } else {
      clickedImages.push(id)
      if(clickedImages.length === 12) {
        this.setState({
          showSuccess:1, 
          score: 12, 
          message: "You WIN! Click another image to play again!",
          clickedImages:[]
        }) 
        return
      }
      
    } 
      this.setState({
        superHeros: 0, 
        clickedImages,
        score: clickedImages.length, 
        message: "",
      });
      for (let i = superHeros.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [superHeros[i], superHeros[j]] = [superHeros[j], superHeros[i]];
      }
    } 
 
//  handleIncrement = () => {
//    this.setState({
//      score: this.state.score + 1
//    })
//  }

//  handleShuffle = () => {
//    const shuffle = superHeros.map(prevState => {
//      return(
//       Math.floor(Math.random(prevState))
//      )
//    })
//    this.setState({
//       superHeros: shuffle
//    })
//  }

  render() {
    return (
      <Wrapper>
        <ScoreBoard/>
        {this.state.superHeros.map(friend => (
          <ImageCard
            clickedImage={this.clickedImage}
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
