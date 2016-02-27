"use strict";

import mod from '../module.js';

import TaskView from './Task/Task.js';

class TasksView {

  //6/ Tworzymy pomocniczą funkcję zwracającą przefiltrowane zadania
  getTasks() {
    if (!this.tasks) {
      return [];
    }
    return this.tasks
      .filter((task) => {
        return this.onlyActive ? !task.finished : true;
      });
  }

}

// Eksportujemy nazwę komponentu, aby móc go używać w templatach
export default 'tasks-view';

mod.component('tasksView', {
  //5/ Deklarujemy parametry wejściowe
  bindings: {
    now: '<',
    tasks: '<',
    onlyActive: '<'
  },
  // Przypinamy klasę controllera (View-Model)
  controller: TasksView,
  //4/ A w template korzystamy z `ng-repeat`
  template: `
    <div ng-repeat="task in $ctrl.getTasks() track by $index">
      <${TaskView} task="task" now="$ctrl.now" />
    </div> 
  `
});

