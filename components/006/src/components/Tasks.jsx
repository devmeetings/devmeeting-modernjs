"use strict";

import React from 'react';
// Żeby używać komponentów po prostu je importujemy
import {TaskView} from './Task/Task.js';

export class TasksView extends React.Component {

  renderTasks() {
    const {now, tasks} = this.props;
    const {onlyActive} = this.props;

    //8 Tablicę możemy po prostu zmapować na komponenty
    return tasks
      .filter((task) => {
        return onlyActive ? !task.finished : true;
      })
      //3/ Korzystamy ze zmiennej z komponentem i przekazujemy parametry
      .map((task, key) => (
        <TaskView key={key} task={task} now={now} />
      ));
  }
  
  render() {
    return (
      <div>
        {this.renderTasks()}
      </div>
    );
  }
}
