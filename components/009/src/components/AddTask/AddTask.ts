"use strict";

import {Component, EventEmitter, Output} from 'angular2/core';

import './AddTask.css';

@Component({
  selector: AddTaskView.toString(),
  template: `
   <form
      class="add-task" 
      (submit)="onSubmit()"
      >
      <input
        type="text"
        [(ngModel)]="value"
        placeholder="New work"
        />
      <button type="submit">+</button>
    </form>
  `
})
export class AddTaskView {

  value: string;
  // Zamiast korzystać z pola `outputs` w `@Component` możemy użyć adnotacji `@Output`
  @Output() newTask: EventEmitter<string>;

  constructor() {
    this.value = '';
    this.newTask = new EventEmitter();
  }

  static toString() {
    return 'add-task-view';
  }

  onSubmit() {
    this.newTask.emit(this.value);
    this.value = '';
  }

};
