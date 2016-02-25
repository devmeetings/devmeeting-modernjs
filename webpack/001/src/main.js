"use strict";

import {TasksModel} from './models/Tasks';
import {TasksView} from './components/Tasks';

const model = new TasksModel([]);

fetch('data/tasks.json')
  .then((response) => response.json())
  .then(
    (tasks) => model.tasks = tasks,
    (err) => console.error(err)
  );

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
