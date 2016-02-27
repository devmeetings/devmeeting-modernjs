"use strict";

// Importujemy angulara
import angular from 'angular';

// Tworzymy nowy moduł
const mod = angular.module('todos', []);

// Komponent jest po prostu klasą (logika)
class App {

  //3/ W konstruktorze ustawiamy początkowy stan
  constructor() {
    this.val = 5;
  }

  //3/ W tej funkcji zmieniamy stan
  increment () {
    this.val += 1;
  }

}

//2/ Wpinamy komponent do modułu
mod.component('app', {
  controller: App,
  //6/ I definiujemy template
  template: `
    <div>
      <h1>Val: {{ $ctrl.val }}</h1>
      <button ng-click="$ctrl.increment()">+</button>
    </div>
  `
});

// Startujemy aplikację w angularze na całym dokumencie
angular.bootstrap(document, [mod.name]);
