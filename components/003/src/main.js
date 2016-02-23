"use strict";

//3/ Komponenty możemy importować w dowolnym miejscu
import {TasksModel} from './models/Tasks.js';
import {TasksView} from './components/Tasks.js';
import {AddTaskView} from './components/AddTask/AddTask.js';

// Model jest poza modelem komponentowym (to dobrze)
const model = new TasksModel([]);

fetch('data/tasks.json')
  .then((response) => response.json())
  .then(
    (tasks) => model.tasks = tasks,
    (err) => console.error(err)
  );

//3/ Tworzymy widok i przekazujemy parametry (inputs)
const addTaskView = new AddTaskView(
  document.querySelector('#add-todos')
);
//3/ Tutaj symulujemy eventy wysyłane przez `AddTaskView` (outputs)
addTaskView.onNewTask = (title) => {
  model.add(title);
};
// ... i renderujemy (wspólne api)
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
