import React, {Component} from 'react';
import ImageCard from './components/ImageCard'
import superHeros from './superHeros.json'
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    superHeros
  };

  render() {
    return (
      <Wrapper>
        <Title>Clickster Game</Title>
        {this.state.superHeros.map(friend => (
          <ImageCard
            removeFriend={this.removeFriend}
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
