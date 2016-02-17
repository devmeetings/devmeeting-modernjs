// W `require.js` mówimy, które moduły należy zaimportować
require(['./models/Tasks', './views/TasksView'], function (TasksModel, TasksView) {
  "use strict";

  var model = TasksModel;
  var view = TasksView(
    document.querySelector('#todos'),
    model
  );

  setInterval(function () {
    view.render(new Date().getTime());
  }, 500);
});
