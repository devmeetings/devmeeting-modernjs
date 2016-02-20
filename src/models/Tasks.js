"use strict";

var now = new Date().getTime();
var tasks = [
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

//9/ A tak wygląda ta sama klasa w ES2015. Lepiej? :)
class TasksModel {
  constructor(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }
}

//3/ Zobaczmy w konsoli czy są jakieś różnice
console.dir(new TasksModel([]));

export default new TasksModel(tasks);
