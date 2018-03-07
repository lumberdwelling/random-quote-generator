import React, { Component } from 'react';
import './App.css';
import shakespeare from './shakespeare-emoji.png';
import Quotes from './quotes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={shakespeare} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Quote Generator</h1>
        </header>
        <button className="firstButton"> Click me for a random quote! </button>
        <Quotes />
      </div>
    );
  }
}

export default App;
