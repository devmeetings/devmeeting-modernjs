"use strict";

// Importujemy Reacta
import React from 'react';

import './Task.css';

// Komponenty reactowe rozszerzają `React.Component`
export class TaskView extends React.Component {

  //16/ Metoda `render` zwraca aktualną reprezentację naszego komponentu
  render() {
    // W `this.props` dostajemy parametry (pochodzące z zewnatrz)
    const {now, task} = this.props;
    const isActive = !task.finished;
    const time = (((task.finished || now) - task.started) / 1000 / 60);
    const name = task.name; 

    //7/ Renderujemy za pomocą JSX
    return (
      <div className={`task ${isActive ? 'active' : ''}`}>
        {/* Wyświetlamy zmienne umieszczając w klamrach */}
        <span>{name} </span>
        <span>{time.toFixed(1)} min</span>
      </div>
    );
  }

};
