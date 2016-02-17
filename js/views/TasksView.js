// W module widoku deklarujemy zależność od globalnej biblioteki.
define(['lodash'], function (_) {

  //3/ Przepisujemy metodę render na templatkę lodashową...
  var tpl = _.template(
    '<div class="task"><span><%= name %></span><span><%= time %></span></div>'
  );

  return TasksView;

  function TasksView($app, Model) {
    return {
      render: renderTasks
    };

    function renderTasks(now) {
      $app.innerHTML = '';

      var k, $task, tasks, $tasks;
      tasks = Model.getTasks()
      //5/ 5. Grupujemy wszystkie zmiany w DOM
      $tasks = [];
      for (k in tasks) {
        $tasks.push(renderTask(tasks[k], now));
      }
      $app.innerHTML = $tasks.join('\n');
    }

    // ... i używamy jej w metodzie render
    function renderTask(task, now) {

      var data = {
        name: task.name,
        time: (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min',
      };

      return tpl(data);
    }
  }

});

