"use strict";

import {TaskView} from './Task';

export class TasksView {
  
  constructor($app, model, options) {
    this.$app = $app;
    this.model = model;
    this.options = options;
  }

  render(now) {
    const {onlyActive} = this.options;

    this.$app.innerHTML = this.model.tasks
      .filter((task) => {
        return onlyActive ? !task.finished : true;
      })
      // Tworzymy nowy widok i renderujemy
      .map((task) => new TaskView(task).render(now))
      .join('\n');
  }

}
