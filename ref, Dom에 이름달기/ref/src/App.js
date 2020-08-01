import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample.js'
import ScrollBox from './ScrollBox';

class App extends Component{
  render(){
    return(
    <>
    <ScrollBox ref={(ref)=>{this.ScrollBox=ref}}/>
    <button onClick={()=>{this.ScrollBox.scrollToBottom()}}>
      맨 밑으로
    </button>
    <div>dasasd</div>
    </>
    )
  }
}

export default App;
