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

  //6/ Dodawanie nowego zadania w modelu
  add(title) {
    this._tasks.unshift({
      name: title,
      started: new Date().getTime()
    });
  }
}
