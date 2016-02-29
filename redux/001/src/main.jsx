"use strict";

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      val: 5
    };
  }

  increment () {
    this.setState({
      val: this.state.val + 1
    });
  }

  render () {
    return (
      <div>
        <h1>Val: {this.state.val}</h1>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

render(<App />, document.querySelector('#app'));
