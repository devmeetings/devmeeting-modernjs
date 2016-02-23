"use strict";

import {TasksModel} from './models/Tasks.js';
import {TasksView} from './components/Tasks.js';
import {AddTaskView} from './components/AddTask/AddTask.js';

const model = new TasksModel([]);

fetch('data/tasks.json')
  .then((response) => response.json())
  .then(
    (tasks) => model.tasks = tasks,
    (err) => console.error(err)
  );

//3/ Tworzymy nowy komponent
const addTaskView = new AddTaskView(
  document.querySelector('#add-todos')
);
//3/ Obsługujemy zdarzenie onNewTask
addTaskView.onNewTask = (title) => {
  model.add(title);
};
// Renderujemy
addTaskView.render();

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
