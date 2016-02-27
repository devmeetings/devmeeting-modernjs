"use strict";

import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {Task} from '../models/Tasks';
import {TaskView} from './Task/Task';

@Component({
  selector: TasksView.toString(),
  // deklarujemy parametry wejściowe
  inputs: ['now', 'tasks', 'onlyActive'],
  // dyrektywy, których używamy
  directives: [TaskView, COMMON_DIRECTIVES],
  template: `
    <div *ngFor="#task of tasks">
      <${TaskView} [task]="task" [now]="now"></${TaskView}>
    </div> 
  `
})
export class TasksView {

  now: number;
  onlyActive: boolean;
  private _allTasks: Task[];
  private _filtered: Task[];

  static toString() {
    return 'tasks-view';
  }

  set tasks(value : Task[]) {
    this._allTasks = value;
    this._filtered = value.filter((task) => {
        return this.onlyActive ? !task.finished : true;
    });
  }

  get tasks() {
    return this._filtered;
  }

}
