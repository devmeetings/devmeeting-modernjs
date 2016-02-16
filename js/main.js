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

//3/ Wydzialamy renderowanie do osobnej funkcji...
var $app = document.querySelector('#todos');
// ... dzięki wynoszeniu (`hosting`) możemy z niej skorzystać pomimo, że nie została jeszcze zadeklarowana
renderTasks($app, tasks);

//7/ Renderujemy wszystkie...
function renderTasks($app, tasks) {
  var k, $task;
  for (k in tasks) {
    $task = renderTask(tasks[k]);
    $app.appendChild($task);
  }
}

//14/ ... a tutaj tworzymy obiekt DOM dla pojedynczego zadania
function renderTask(task) {
  var $task = document.createElement('div');
  var $taskName = document.createElement('span');
  var $taskTime = document.createElement('span');

  $taskName.textContent = task.name;
  $taskTime.textContent = (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min';

  $task.appendChild($taskName);
  $task.appendChild(document.createTextNode(' '));
  $task.appendChild($taskTime);

  return $task;
}
