"use strict";

var lodash = require('lodash');

var tpl = _.template(
  '<div class="task"><span><%= name %></span> <span><%= time %></span></div>'
);

module.exports = TasksView;

function TasksView($app, Model) {
  return {
    render: renderTasks
  };

  function renderTasks(now) {
    $app.innerHTML = '';

    var k, $task, tasks, $tasks;
    tasks = Model.getTasks()
    $tasks = [];
    for (k in tasks) {
      $tasks.push(renderTask(tasks[k], now));
    }
    $app.innerHTML = $tasks.join('\n');
  }

  function renderTask(task, now) {

    var data = {
      name: task.name,
      time: (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min',
    };

    return tpl(data);
  }
}
