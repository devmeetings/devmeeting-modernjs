// Ale AMD jest również obsługiwany.
define([], function () {
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

  return {
    getTasks: function () {
      return tasks;
    }
  };
});

