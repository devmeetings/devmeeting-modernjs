"use strict";

//2/ Dzięki babel możemy korzystać z nowych rzeczy z ES2015...
import model from './models/Tasks';
import TasksView from './views/TasksView';

/// ... takich jak stałe...
const view = TasksView(
  document.querySelector('#todos'),
  model
);

/// ... czy lambdy.
setInterval(() => view.render(new Date().getTime()), 500);
