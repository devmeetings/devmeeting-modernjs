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

// Używamy `querySelector` aby znaleźć element w DOM
var $app = document.querySelector('#todos');

//18/ Przeiterujemy po modelu aby stworzyć widok
for (var k in tasks) {
  var task = tasks[k];

  //3/ Tworzymy nowe elementy...
  var $task = document.createElement('div');
  var $taskName = document.createElement('span');
  var $taskTime = document.createElement('span');

  //2/ ... wpisujemy zawartość (textContent!)...
  $taskName.textContent = task.name;
  $taskTime.textContent = (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min';

  //4/ ... i dodajemy do DOM
  $task.appendChild($taskName);
  $task.appendChild(document.createTextNode(' '));
  $task.appendChild($taskTime);
  $app.appendChild($task);
}
