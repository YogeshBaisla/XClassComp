import React from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";
// React Class Components || ES6 Classes
// hasA | App has a button | App has a h1
export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR");
    this.state = {
      count: 0
    };
  }

  // State Updates -> React notices -> Re-Render -> Attaches Latest value
  increment = () => {
    // 1st Syntax | Simple Updates
    this.setState((currState, currProps) => {
      return { count: currState.count + currProps.diff };
    });
  };

  decrement = () => {
    this.setState((currState, currProps) => {
      return { count: currState.count - currProps.diff };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
