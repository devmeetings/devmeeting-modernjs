"use strict";

function renderTasks($app, tasks) {
  var k, $task;
  for (k in tasks) {
    $task = renderTask(tasks[k]);
    $app.appendChild($task);
  }
}

//14/ Może lepiej gdyby ta funkcja była prywatna?
function renderTask(task) {
  var $task = document.createElement('div');
  var $taskName = document.createElement('span');
  var $taskTime = document.createElement('span');

  $taskName.textContent = task.name;
  // Zauważyliście, że korzystamy z globalnej zmiennej `now`?
  $taskTime.textContent = (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min';
  $task.className = 'task';

  $task.appendChild($taskName);
  $task.appendChild(document.createTextNode(' '));
  $task.appendChild($taskTime);

  return $task;
}
