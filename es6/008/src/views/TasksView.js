"use strict";

import * as _ from 'lodash';

export class TasksView {
  
  constructor($app, model) {
    this.$app = $app;
    this.model = model;
    this.tpl = _.template(
      '<div class="task"><span><%= name %></span> <span><%= time %></span></div>'
    );
  }

  render(now) {
    this.$app.innerHTML = '';

    const tasks = this.model.getTasks()
    const $tasks = [];

    //5/ Wartości, które się zmieniają deklarujemy przez `let`
    for (let k in tasks) {
      $tasks.push(
        this._renderTask(now, tasks[k])
      );
    }
    // console.log(k);

    this.$app.innerHTML = $tasks.join('\n');
  }

  _renderTask(now, task) {
    const data = {
      name: task.name,
      time: (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min',
    };

    return this.tpl(data);
  }

}
