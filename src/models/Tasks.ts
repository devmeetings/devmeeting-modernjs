"use strict";

//5/ Definiujemy interfejs dla zadań
export interface Task {
  name: string,
  started: number,
  finished: number
}

export class TasksModel {

  public tasks : Task[];

  constructor(tasks: Task[]) {
    this.tasks = tasks;
  }

  add(title: string) {
    this.tasks = [{
      name: title,
      started: new Date().getTime(),
      finished: null
    }].concat(this.tasks);
  }
}
