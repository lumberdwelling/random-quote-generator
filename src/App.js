import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import shakespeare from './shakespeare-emoji.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={shakespeare} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Quote Generator</h1>
        </header>
        <button className="firstButton"> Click me for a random quote! </button>
      </div>
    );
  }
}

export default App;
