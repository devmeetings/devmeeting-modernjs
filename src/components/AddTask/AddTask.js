"use strict";

import './AddTask.css';
export class AddTaskView {

  constructor($el) {
    this.$el = $el;

    this.$el.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const val = this.$el.querySelector('input');
      this.onNewTask(val.value);

      val.value = '';
    });
  }

  onNewTask(title) {
    console.log(title);
  }

  render() {
    this.$el.innerHTML = `
      <form class="add-task">
        <input
          type="text"
          placeholder="New work"
          >
        <button type="submit">+</button>
      </form>
    `;
  }

};
