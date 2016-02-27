"use strict";

import {Component, Input} from 'angular2/core';
import {Task} from '../../models/Tasks';

import './Task.css';

@Component({
  selector: TaskView.toString(),
  directives: [],
  template: `
    <div class="task" [class.active]="isActive">
      <span>{{ task.name }} </span>
      <span>{{ time.toFixed(1) }} min</span>
    </div>
  `
})
export class TaskView {

  @Input() task: Task;
  @Input() now: number;

  static toString() {
    return 'task-view';
  }

  get isActive() {
    return !this.task.finished;
  }

  get time() {
    const time = (((this.task.finished || this.now) - this.task.started) / 1000 / 60);
    return time;
  }

};
