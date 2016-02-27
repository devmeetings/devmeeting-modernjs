"use strict";

import mod from '../../module.js';

import './AddTask.css';

export class AddTaskView {

  onSubmit() {
    this.onNewTask({
      task: this.value
    });
    this.value = '';
  }

};

export default 'add-task-view';

angular.module('todos').component('addTaskView', {
  bindings: {
    onNewTask: '&'
  },
  controller: AddTaskView,
  template: `
    <form
      class="add-task" 
      ng-submit="$ctrl.onSubmit($event)"
      >
      <input
        type="text"
        ng-model="$ctrl.value"
        placeholder="New work"
        />
      <button type="submit">+</button>
    </form>
  `
});
