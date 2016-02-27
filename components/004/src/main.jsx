"use strict";

// Importujemy react
import React from 'react';
// Będziemy też renderować w DOM
import {render} from 'react-dom';

// Rozszerzamy React.Component
class App extends React.Component {

  //6/ W konstruktorze ustawiamy początkowy stan 
  constructor(...args) {
    super(...args);
    this.state = {
      val: 5
    };
  }

  //5/ Modyfikujemy stan w funkcji increment
  increment () {
    this.setState({
      val: this.state.val + 1
    });
  }

  render () {
    //6/ Renderujemy komponent i przypinamy callback do przycisku
    return (
      <div>
        <h1>Val: {this.state.val}</h1>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

// Musimy jeszcze umieścić komponent w DOM
render(<App />, document.querySelector('#app'));
