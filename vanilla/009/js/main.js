require(['require', './models/Tasks', './views/TasksView'], function (require) {
  "use strict";
  
  //2/ Możemy też używać składni CommonJS (ale tylko jeśli moduły był już wcześniej załadowane)
  var model = require('./models/Tasks');
  var TasksView = require('./views/TasksView').TasksView;

  var view = TasksView(
    document.querySelector('#todos'),
    model
  );

  setInterval(function () {
    view.render(new Date().getTime());
  }, 500);
});
