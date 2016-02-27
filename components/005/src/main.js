"use strict";

import angular from 'angular';

import mod from './module.js';
import {TasksModel} from './models/Tasks.js';
import TasksView from './components/Tasks.js';
import AddTaskView from './components/AddTask/AddTask.js';


class App {

  // Wstrzykujemy zależności `Tasks` to zdefiniowane wyżej factory, a $scope to wewnętrzy serwis angulara
  constructor($scope, $http, $timeout, Tasks) {
    //2/ Stan komponentu przypisujemy bezpośrednio do `this`
    this.$scope = $scope;
    this.$http = $http;
    this.model = Tasks;
    this.now = new Date().getTime();

    // Inicjalizujemy komponent
    this.interval = this.fetchDataAndSetTimer();

    //3/ A w momencie gdy jest niszczony musimy wyczyścić interval
    $scope.$on('$destroy', () => {
      clearInterval(this.interval);
    });
  }

  fetchDataAndSetTimer () {
    //11/ W momencie zamontowania w DOM - pobieramy zadania
    this.$http.get('data/tasks.json')
      .then(
        (tasks) => {
          // Ustawiamy nowe zadania
          this.model.tasks = tasks.data;
          // W przypadku angulara nie musimy jawnie informować o zmianach
          // this.forceUpdate();
        },
        (err) => console.error(err)
      );

    //5/ W intervale będziemy odświeżać czas 
    return setInterval(() => {
      this.now = new Date().getTime();
      this.$scope.$digest();
    }, 500);
  }

  //3/ Tutaj dodajemy nowe zadanie
  onNewTask (task) {
    this.model.add(task);
  }

}

mod.component('app', {
  controller: App,
  //17/ Definujemy template aplikacji (zwykły HTML)
  template: `
    <div>
      <h1>My current tasks</h1>
      <${AddTaskView}
        on-new-task="$ctrl.onNewTask(task)"
      ></${AddTaskView}>
      <${TasksView}
        now="$ctrl.now"
        tasks="$ctrl.model.tasks"
        only-active="true"
      ></${TasksView}>
      <h1>All tasks</h1>
      <${TasksView}
        now="$ctrl.now"
        tasks="$ctrl.model.tasks"
        only-active="false"
      ></${TasksView}>
    </div>
  `
});

mod.factory('Tasks', () => new TasksModel([]));

// Startujemy aplikację angularową na całym dokumencie
angular.bootstrap(document, [mod.name]);
