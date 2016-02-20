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

//3/ Klasa w ES5 to funkcja (konstruktor)
function TasksModel(tasks) {
  this.tasks = tasks;
}

//3/ A do prototypu dopisujemy rzeczy współdzielone przez wszystkie instancje
TasksModel.prototype.getTasks = function () {
  return this.tasks;
};

// Zobaczmy co powie na to konsola
console.dir(new TasksModel([]));

// Eksportujemy nową instancję stworzoną przez `new`
export default new TasksModel(tasks);
