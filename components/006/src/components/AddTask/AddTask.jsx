"use strict";

import React from 'react';

import './AddTask.css';

export class AddTaskView extends React.Component {

  //10/ Standardowo obsługujemy zdarzenie wysyłania formularza
  onSubmit(ev) {
    ev.preventDefault();

    const val = ev.currentTarget.querySelector('input');
    // Wołamy callback z komponentu wyżej
    this.props.onNewTask(val.value);

    // Operacje bezpośrednio na DOM nie są zalecane w React
    val.value = '';
  }

  //14/ Renderujemy formularz dodawania
  render() {
    return (
      <form
        className={'add-task'}
        onSubmit={(ev) => this.onSubmit(ev)}
        >
        <input
          type={'text'}
          placeholder={'New work'}
          />
        <button type={'submit'}>+</button>
      </form>
    );
  }

};
