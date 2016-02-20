"use strict";

import {TasksModel} from './models/Tasks';
import {TasksView} from './views/TasksView';

const model = new TasksModel([]);

//15/ Pobierzmy dane z serwera za pomocą XMLHttpRequest
{
  const req = new XMLHttpRequest();
  req.open('GET', './data/tasks.json', true);
  req.onreadystatechange = (evt) => {
    if (req.readyState !== 4) {
      return;
    }

    if (req.status !== 200) {
      console.error('Error while fetching tasks.');
      return;
    }
    model.tasks = JSON.parse(req.responseText);
  };
  req.send(null);
}

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
