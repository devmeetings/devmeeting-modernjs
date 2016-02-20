"use strict";

import model from './models/Tasks';
import {TasksView} from './views/TasksView';

const activeView = new TasksView(
  document.querySelector('#todos'),
  model,
  {onlyActive: true}
);

const view = new TasksView(
  document.querySelector('#todos2'),
  model,
  {}
);

setInterval(() => {
  const now = new Date().getTime();
  view.render(now);
  activeView.render(now);
}, 500);
