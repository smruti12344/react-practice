import React, { Component } from 'react';

export default class LifeCycle extends Component {
  // Constructor is a special method that is called before the component is mounted.
  // It is used to initialize state and bind event handlers.
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = { count: 0 };
    this.countHandler = this.countHandler.bind(this);
  }

  // getDerivedStateFromProps is called before rendering, both during the initial mount and subsequent updates.
  // It allows updating the state based on the props. It is a static method, so it cannot use `this`.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps called");
    // Example: Return a new state object based on props
    if (nextProps.someProp !== prevState.someProp) {
      return { someState: nextProps.someProp };
    }
    // Return null if state doesn't need to change
    return null;
  }

  // componentDidMount is called right after the component is mounted.
  // It's typically used for fetching data from a server, setting up subscriptions, or interacting with the DOM.
  componentDidMount() {
    console.log("componentDidMount called");
  }

  // shouldComponentUpdate is called before re-rendering the component when new props or state are being received.
  // It can optimize performance and prevent unnecessary re-renders. It should return true or false.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true; // Return true to allow the update, false to prevent it
  }

  // getSnapshotBeforeUpdate is called right before the most recently rendered output is committed to the DOM.
  // It allows capturing information from the DOM before it's potentially changed.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    return null; // Return a snapshot value (or null) to pass to componentDidUpdate
  }

  // componentDidUpdate is called right after the update is committed to the DOM.
  // It's a good place to perform DOM operations or network requests based on the previous state.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
  }

  // componentWillUnmount is called before the component is removed or destroyed.
  // It's used to clean up tasks like removing network requests, event listeners, or canceling timers.
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  countHandler(){
    alert("click button:"+this.state.count);
this.setState((prevState)=>({
  count : prevState.count + 1
})
)
  }

  // The render method is required in every class component. It examines this.props and this.state,
  // and returns one of the following types: React element, array or fragments, string or number, boolean or null.
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.countHandler}>click</button>
      </div>
    );
  }
}
