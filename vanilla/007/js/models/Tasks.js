(function (exports) {
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

  //3/ Uniezależniamy się od kolejności ładowania skryptów
  exports.app = exports.app || {};
  exports.app.models = exports.app.models || {};
  exports.app.models.TasksModel = {
    getTasks: function () {
      return tasks;
    }
  };

}(this || window));

