import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      return (
          <div data-test="component-app">
              <h1 data-test="counter-display">Master React Testing</h1>
              <button data-test="increment-button">Click me!</button>
          </div>
      );
  }
}

export default App;
