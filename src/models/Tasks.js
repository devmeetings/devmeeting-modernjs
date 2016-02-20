"use strict";

const now = new Date().getTime();
const tasks = [
  {
    name: 'ModernJS training',
    started: now - 1000 * 60 * 10
  },
  {
    name: 'Learning JavaScript',
    started: now - 1000 * 3600 * 24,
    finished: now - 1000 * 3600 * 6
  }
];

export class TasksModel {
  constructor(tasks) {
    this._tasks = tasks;
  }

  get tasks() {
    return this._tasks;
  }
}

export default new TasksModel(tasks);
