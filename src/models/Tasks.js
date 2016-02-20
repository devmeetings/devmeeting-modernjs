"use strict";

//9/ Model będzie teraz tylko eksportował klasę
export class TasksModel {
  constructor(tasks) {
    this._tasks = tasks;
  }

  //3/ Użyjemy settera, aby zapamiętać zadania
  set tasks(tasks) {
    this._tasks = tasks;
  }

  get tasks() {
    return this._tasks;
  }
}
