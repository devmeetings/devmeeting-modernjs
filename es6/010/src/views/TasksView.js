"use strict";

import * as _ from 'lodash';

export class TasksView {
  
  constructor($app, model, options) {
    this.$app = $app;
    this.model = model;
    this.options = options;
    this.tpl = _.template(
      '<div class="task"><span><%= name %></span> <span><%= time %></span></div>'
    );
  }

  render(now) {
    this.$app.innerHTML = this.model.tasks
      //3/ Przefiltrujmy kolekcje w zależności od opcji
      .filter((task) => {
        return this.options.onlyActive ? !task.finished : true;
      })
      //3/ Z lambdą kod staje się bardziej przejrzysty i nie ma problemu z kontekstem
      .map((task) => this._renderTask(now, task))
      .join('\n');
  }

  _renderTask(now, task) {
    const time = (((task.finished || now) - task.started) / 1000 / 60).toFixed(1);
    const name = task.name; 

    return this.tpl({
        name,
        time: `${time} min`
    });
  }

}
