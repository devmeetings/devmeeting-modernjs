"use strict";

// We wszystkich plikach będziemy importować React
import React from 'react';
// Dodatkowo główny komponent musimy wyrenderować w DOM
import {render} from 'react-dom';

import {TasksModel} from './models/Tasks.js';
import {TasksView} from './components/Tasks.js';
import {AddTaskView} from './components/AddTask/AddTask.js';

class App extends React.Component {
  
  constructor(...args) {
    super(...args);
    //5/ Potrzebujemy trzymać aktualny stan i datę
    const model = new TasksModel([]);
    this.state = {
      model: model,
      now: new Date().getTime()
    };
  }

  // Ta metoda jest częścią cyklu życia komponentu.
  componentDidMount () {
    //11/ W momencie zamontowania w DOM - pobieramy zadania
    fetch('data/tasks.json')
      .then((response) => response.json())
      .then(
        (tasks) => {
          // Ustawiamy nowe zadania
          this.state.model.tasks = tasks;
          // Ale musimy też wymusić ponowne renderowanie komponentu
          this.forceUpdate();
        },
        (err) => console.error(err)
      );

    //5/ W intervale będziemy odświeżać czas 
    this.interval = setInterval(() => {
      this.setState({
        now: new Date().getTime()
      })
    }, 500);
  }

  //3/ Jeśli komponent przestaje być używany - czyścimy po sobie
  componentWillUnmount () {
    clearInterval(this.interval);
  }

  //4/ Tutaj dodajemy nowe zadanie i odświeżamy komponent
  onNewTask (task) {
    this.state.model.add(task);
    this.forceUpdate();
  }

  render () {
    const now = this.state.now;
    const tasks = this.state.model.tasks;

    //17/ Renderujemy całą aplikację przekazując parametry i callbacki
    return (
      <div>
        <h1>My current tasks</h1>
        <AddTaskView
          onNewTask={(task) => this.onNewTask(task)}
          />
        <TasksView
          now={now}
          tasks={tasks}
          onlyActive={true} />
        <h1>All tasks</h1>
        <TasksView
          now={now}
          tasks={tasks}
          onlyActive={false} />
      </div>
    );
  }
}

// Renderowanie komponentu w określonym miejscu w DOM
render(<App />, document.querySelector('#app'));
