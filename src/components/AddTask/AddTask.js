"use strict";

import './AddTask.css';
// Tworzymy nowy komponent
export class AddTaskView {

  constructor($el) {
    this.$el = $el;

    //11/ Dodajemy nasłuchiwanie na dodanie
    this.$el.addEventListener('submit', (ev) => {
      // Anulujemy domyślną akcję
      ev.preventDefault();

      //2/ Informujemy o dodaniu nowego todo...
      const val = this.$el.querySelector('input');
      this.onNewTask(val.value);

      // ... i resetujemy pole
      val.value = '';
    });
  }

  //3/ Ten callback będzie nadpisywany wyżej
  onNewTask(title) {
    console.log(title);
  }

  //12/ Metoda render po prostu wstawia HTML
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
