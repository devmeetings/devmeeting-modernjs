"use strict";

import model from './models/Tasks';
import {TasksView} from './views/TasksView';

const view = new TasksView(
  document.querySelector('#todos'),
  model
);

setInterval(() => view.render(new Date().getTime()), 500);
