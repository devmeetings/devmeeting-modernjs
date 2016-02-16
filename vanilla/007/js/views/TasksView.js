(function (exports) {
  "use strict";

  //3/ Podobnie robimy z `TasksView`
  exports.app = exports.app || {};
  exports.app.views = exports.app.views || {};
  exports.app.views.TasksView = TasksView;

  function TasksView($app, Model) {
    return {
      render: renderTasks
    };

    function renderTasks(now) {
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
}(this || window));
