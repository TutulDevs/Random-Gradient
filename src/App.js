import React, { Component } from 'react';
import './App.css'
import Box from "./Box/Box";


class App extends Component {
  state = {
    colOne: '#4c5d56',
    colTwo: '#099b6f',
    deg: 235
  }

  randomHex = () => {
    const letters = '0123456789abcdef' ;
    let color = '#' ;
    for(let i = 0; i < 6; i++){
      color+= letters[Math.floor(Math.random() * 16)];
    }
    return color ;
  }

  displayColor = () => {
    const col1 = this.randomHex() ;
    const col2 = this.randomHex() ;
    let degree = Math.floor(Math.random() * 721) -360 ;

    this.setState({
      colOne: col1, 
      colTwo: col2, 
      deg: degree
    }) ;
  }

  degChangeHandler = (e) => {
    const degree = e.target.value ;
    this.setState({deg: degree}) ;
  }


  render() {
    const property = `linear-gradient(${this.state.deg}deg, ${this.state.colOne}, ${this.state.colTwo})` ;

    const style = {
      background: `${property}`
    }
 
    return (
      <div 
        className="App" 
        style={style}>
          <h1>Random Gradient Generator</h1>

        <Box 
          click={this.displayColor}
          change={this.degChangeHandler}
          val={this.state.deg}
          gradientCol={property} />

      </div>
    );
  }
}

export default App ;