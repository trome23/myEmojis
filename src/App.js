import React, {Component} from 'react';
import ImageCard from './components/ImageCard'
import superHeros from './superHeros.json'
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  state = {
    superHeros
  };

//   imageClick = () => {
//     console.log('Click!!!!');
//  }  

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
