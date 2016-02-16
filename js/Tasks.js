"use strict";

//26/ Możemy wykorzystać `Module Pattern` 
(function (exports) {
  "use strict";

  //2/ Te zmienne są teraz prywatne dla tego modułu...
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

  //5 ...a na zewnątrz eksportujemy tylko API
  exports.TasksModel = {
    getTasks: function () {
      return tasks;
    }
  };

  // Nasz kod może się wykonać nawet gdy zostanie wykonany w innym kontekście.
}(this || window));

