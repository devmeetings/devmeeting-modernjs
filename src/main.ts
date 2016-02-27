"use strict";

// Bootstrap - uruchomi aplikację
import {bootstrap} from 'angular2/platform/browser';
// Adnotacje i interfejsy
import {Component, Injectable, OnInit, OnDestroy} from 'angular2/core';
// Serwis HTTP
import {HTTP_PROVIDERS, Http} from 'angular2/http';

//3/ Importujemy komponenty
import {Task, TasksModel} from './models/Tasks';
import {TasksView} from './components/Tasks';
import {AddTaskView} from './components/AddTask/AddTask';


@Component({
  // Selektor komponentu
  selector: 'app',
  // Podajemy listę dyrektyw od których zależy...
  directives: [AddTaskView, TasksView],
  //18/ ... i templatkę
  template: `
    <div>
      <h1>My current tasks</h1>
      <${AddTaskView}
        (newTask)="onNewTask($event)"
      ></${AddTaskView}>
      <${TasksView}
        [now]="now"
        [tasks]="model.tasks"
        [onlyActive]="true"
      ></${TasksView}>
      <h1>All tasks</h1>
      <${TasksView}
        [now]="now"
        [tasks]="model.tasks"
        [onlyActive]="false"
      ></${TasksView}>
    </div>
  `
})
class App implements OnInit, OnDestroy {

  //6/ W TS musimy deklarować wszystkie pola.
  model: TasksModel;
  now: number;

  private http: Http;
  private interval: number;

  constructor(http: Http) {
    // Przypisujemy zależności do `http`
    this.http = http;
    //2/ Stan komponentu też przypisujemy bezpośrednio do `this`
    this.model = new TasksModel([]);
    this.now = new Date().getTime();
  }

  ngOnDestroy () {
    clearInterval(this.interval);
  }

  ngOnInit () {
    //11/ W momencie zamontowania w DOM - pobieramy zadania
    this.http.get('data/tasks.json')
      .subscribe(
        (tasks) => {
          // Ustawiamy nowe zadania
          this.model.tasks = tasks.json();
          // W przypadku angulara nie musimy jawnie informować o zmianach
          // this.forceUpdate();
        },
        (err) => console.error(err)
      );

    //5/ W intervale będziemy odświeżać czas 
    this.interval = setInterval(() => {
      this.now = new Date().getTime();
    }, 500);
  }

  //3/ Tutaj dodajemy nowe zadanie
  onNewTask (task) {
    this.model.add(task);
  }

}

bootstrap(App, [HTTP_PROVIDERS]);
