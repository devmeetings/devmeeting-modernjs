"use strict";

export class TasksModel {
  constructor(tasks) {
    this._tasks = tasks;
  }

  set tasks(tasks) {
    this._tasks = tasks;
  }

  get tasks() {
    return this._tasks;
  }
}
