"use strict";

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
      .map((task) => this._renderTask(now, task))
      .join('\n');
  }

  _renderTask(now, task) {
    const time = (((task.finished || now) - task.started) / 1000 / 60);
    const name = task.name; 

    return `
      <div class="task">
        <span>${name}</span>
        <span>${time.toFixed(1)} min</span>
      </div>
    `;
  }

}
