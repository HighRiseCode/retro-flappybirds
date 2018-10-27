import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameContainer from './container/GameContainer.js';

class App extends React.Component{
  render(){
    return(
      <GameContainer></GameContainer>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
