//14/ Universal Module Definition (UMD)
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports/*,require('b')*/);
  } else {
    // Browser globals
    factory((root.commonJsStrict = {}), root.b);
  }
}(this, function (exports, b) {

  exports.TasksView = TasksView;

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

}));

