import React, { Component } from 'react';

export class Nap extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome'
    };
  }

  ChangeText = () => {
    this.setState({
      message: 'You have signed up!'
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.ChangeText}>Sign up</button>
      </div>
    );
  }
}

export default Nap;
