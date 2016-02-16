"use strict";

//35/ Stwórzmy konstruktor naszego widoku
function TasksView($app, Model) {
  //3/ Wystawiamy publiczne API
  return {
    render: renderTasks
  };

  //10/ Hoisting możemy wykorzystać nawet po `return`
  function renderTasks(now) {
    // Czyścimy zawartość `$app` - możemy re-renderować wiele razy
    $app.innerHTML = '';

    var k, $task, tasks;
    tasks = Model.getTasks()
    for (k in tasks) {
      $task = renderTask(tasks[k], now);
      $app.appendChild($task);
    }
  }

  function renderTask(task, now) {
    var $task = document.createElement('div');
    var $taskName = document.createElement('span');
    var $taskTime = document.createElement('span');

    $taskName.textContent = task.name;
    $taskTime.textContent = (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min';
    $task.className = 'task';

    $task.appendChild($taskName);
    $task.appendChild(document.createTextNode(' '));
    $task.appendChild($taskTime);

    return $task;
  }
}
