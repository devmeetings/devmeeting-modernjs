"use strict";

import * as _ from 'lodash';

// W modułach ES2015 możemy eksportować klasę
export class TasksView {
  
  //7/ W konstruktorze przypisujemy wartości
  constructor($app, model) {
    this.$app = $app;
    this.model = model;
    this.tpl = _.template(
      '<div class="task"><span><%= name %></span> <span><%= time %></span></div>'
    );
  }

  //12/ Nasze publiczne API
  render(now) {
    var k, $task, tasks, $tasks;
    this.$app.innerHTML = '';

    tasks = this.model.getTasks()
    $tasks = [];
    for (k in tasks) {
      $tasks.push(
        this._renderTask(now, tasks[k])
      );
    }

    this.$app.innerHTML = $tasks.join('\n');
  }

  //8/ Ta funkcja przestała jednak być prywatna, więc zastosowaliśmy konwencję
  _renderTask(now, task) {
    var data = {
      name: task.name,
      time: (((task.finished || now) - task.started) / 1000 / 60).toFixed(1) + ' min',
    };

    return this.tpl(data);
  }

}
