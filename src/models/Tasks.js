"use strict";

// `const` tworzy stałą (nie można przypisać do niej wartości)
const now = new Date().getTime();
// `now = 5` // To jest błąd

//6/ Ale to nie znaczy, że sama wartość jest niemutowalna
const tasks = [
  {
    name: 'ModernJS training',
    started: now - 1000 * 60 * 10
  }
];

//7/ Dalej można modyfikować tablicę.
tasks.push(
  {
    name: 'Learning JavaScript',
    started: now - 1000 * 3600 * 24,
    finished: now - 1000 * 3600 * 6
  }
);

class TasksModel {
  constructor(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }
}

export default new TasksModel(tasks);
