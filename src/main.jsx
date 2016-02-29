"use strict";

import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import * as Actions from './actions.js';

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

//12/ Dzięki tej funkcji nie musimy ręcznie tworzyć akcji
function bindActions(actions, dispatch) {
  return Object.keys(actions).reduce((allActions, action) => {
    //5/ Używamy formatu FSA (Flux Standard Action)
    allActions[action] = (payload) => dispatch({
      type: actions[action],
      payload,
      error: payload instanceof Error
    });
    return allActions;
  }, {});
}

// Connect można też używać jako adnotacji
const App2 = connect(
  state => ({
    val: state.count,
    tasks: state.tasks
  }),
  //3/ Przypinamy wszystkie akcje
  dispatch => ({
    actions: bindActions(Actions, dispatch)
  })
)(App);

render(<App2 store={store} />, document.querySelector('#app'));
