"use strict";

var model = require('./models/Tasks');
var TasksView = require('./views/TasksView');

var view = TasksView(
  document.querySelector('#todos'),
  model
);

setInterval(function () {
  view.render(new Date().getTime());
}, 500);
