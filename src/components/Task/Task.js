"use strict";

import module from '../../module.js';

import './Task.css';

// Re-eksportujemy dla testów
export const mod = module;

// Kontroler też wystawiamy dla testów
export class TaskView {

  get isActive() {
    return !this.task.finished;
  }

  get time() {
    const time = (((this.task.finished || this.now) - this.task.started) / 1000 / 60);
    return time;
  }

};

export default 'task-view';
module.component('taskView', {
  bindings: {
    task: '<',
    now: '<'
  },
  controller: TaskView,
  template: `
    <div class="task" ng-class="{'active' : $ctrl.isActive}">
      <span>{{ $ctrl.task.name }} </span>
      <span>{{ $ctrl.time.toFixed(1) }} min</span>
    </div>
  `
});
