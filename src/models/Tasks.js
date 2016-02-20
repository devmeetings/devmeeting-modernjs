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

// Możemy eksportować zarówno default jak i pojedyncze deklaracje
export class TasksModel {
  constructor(tasks) {
    this._tasks = tasks;
  }

  //3/ W ES2015 (a właś. to już w ES5) mamy też możliwość definiowania getterów
  get tasks() {
    return this._tasks;
  }
}

export default new TasksModel(tasks);
