import React, { Component } from 'react';
import './App.css';

interface State {
  counter: number;
  message: string;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      counter: 0,
      message: ''
    }
  }

  handleClick = (command: string) => {
    let counter: number = this.state.counter;
    if (command === 'increment') {
      if (counter === 0) {
        this.setState({ message: '' } as State);
      }
      counter += 1;
    } else if (command === 'decrement') {
      counter -= 1;
      if (counter < 0) {
        counter = 0;
        this.setState({ message: 'cannot go below zero'} as State);
      }
    }

    this.setState({ counter } as State);
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently { this.state.counter }</h1>
        <button
          data-test="increment-button"
          onClick={() => this.handleClick('increment')}
        >
          +
        </button>
        <button
          data-test="decrement-button"
          onClick={() => this.handleClick('decrement')}
        >
          -
        </button>
        {
          this.state.message && (
            <p data-test="message">{this.state.message}</p>
          )
        }
      </div>
    );
  }
}

export default App;
