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
    // Będziemy od razu przypisywać do DOM
    this.$app.innerHTML = this.model.tasks
      //2/ Korzystamy z `map` - przetwarzamy każdy element tablicy przez funkcję
      .map(function (task) {
        return this._renderTask(now, task);
      // Pojawia się problem z kontekstem - musimy go przekazać
      }, this)
      // Na koniec zamieniamy w string
      .join('\n');
  }

  _renderTask(now, task) {
    const time = (((task.finished || now) - task.started) / 1000 / 60).toFixed(1);
    const name = task.name; 
    //8/ Kilka kolejnych featurów z ES2015
    return this.tpl(
      //2/ propsa tworzymy na podstawie nazwy zmiennej
      {
        name,
        // I korzystamy ze string interpolation (zamiast konkatenacji)
        time: `${time} min`
      }
    );
  }

}
