"use strict";

import React from 'react';
import {render} from 'react-dom';
// Importujemy metodę connect z react-redux
import {connect} from 'react-redux';

// Importujemy store
import store from './store.js';

class App extends React.Component {

  render () {
    //7/ Ten komponent nie ma już żadnego stanu - wszystko wpada w props
    return (
      <div>
        <h1>Val: {this.props.val}</h1>
        <button onClick={() => this.props.actions.increment()}>+</button>
        <button onClick={() => this.props.actions.decrement()}>-</button>
      </div>
    );
  }
}

//19/ Funkcja `connect` tworzy nowy komponent, który wie jak wykorzystać `store`
const App2 = connect(
  //3/ Tutaj mówimy jak zamienić stan na propsy
  state => ({
    val: state
  }),
  //14/ a tutaj definiujemy jakie akcje można wywołać 
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

// Przekazujemy store do komponentu (powinniśmy użyć `Provider`)
render(<App2 store={store} />, document.querySelector('#app'));
