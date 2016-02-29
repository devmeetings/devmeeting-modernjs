"use strict";

import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

import store from './store.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Val: {this.props.val}</h1>
        <button onClick={() => this.props.actions.increment()}>+</button>
        <button onClick={() => this.props.actions.decrement()}>-</button>
        <div>{JSON.stringify(this.props.tasks, null, 2)}</div>
      </div>
    );
  }
}

const App2 = connect(
  //4/ Tym razem ze stanu mapujemy dwie własności
  state => ({
    val: state.count,
    tasks: state.tasks
  }),
  dispatch => ({
    actions: {
      increment () {
        dispatch({
          type: 'INC'
        })
      },
      decrement () {
        dispatch({
          type: 'DEC'
        })
      }
    }
  })
)(App);

render(<App2 store={store} />, document.querySelector('#app'));
