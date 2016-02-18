"use strict";

//21/ Wydzielamy osobną klasę widoku zadania
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
