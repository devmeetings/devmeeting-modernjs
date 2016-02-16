"use strict";
//2/ System.js potrafi ładować dowolny typ modułów. Możemy od razu pisać w CommonJS!
var model = require('./models/Tasks');
var TasksView = require('./views/TasksView');

var view = TasksView(
  document.querySelector('#todos'),
  model
);

setInterval(function () {
  view.render(new Date().getTime());
}, 500);
