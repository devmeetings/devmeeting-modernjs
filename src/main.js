"use strict";

// Importujemy cały moduł
import model from './models/Tasks';
// Lub tylko jeden z `eksportów` za pomocą `{..}`
import {TasksView} from './views/TasksView';

const view = TasksView(
  document.querySelector('#todos'),
  model
);

setInterval(() => view.render(new Date().getTime()), 500);
