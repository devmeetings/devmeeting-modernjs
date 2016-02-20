"use strict";

// Importujemy style (bez from - import dla efektów ubocznych)
import './Task.css!';

export class TaskView {

  constructor(task) {
    this.task = task;
  }

  render(now) {
    const task = this.task;
    const isActive = !task.finished;
    const time = (((task.finished || now) - task.started) / 1000 / 60);
    const name = task.name; 

    return `
      <div class="task ${isActive ? 'active' : ''}">
        <span>${name}</span>
        <span>${time.toFixed(1)} min</span>
      </div>
    `;
  }

};
