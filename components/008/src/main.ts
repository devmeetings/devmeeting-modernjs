"use strict";

import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

// Komponenty to klasy + adnotacje
@Component({
  // Selektor - jak użwamy go w DOM
  selector: 'app',
  // Lista potrzebnych dyrektyw
  directives: [],
  //6/ Templatka
  template: `
    <div>
      <h1>Val: {{value}}</h1>
      <button (click)="increment()">+</button>
    </div>
  `
})
class App {
  // Definiujemy pole w klasie (TypeScript)
  value: number = 0;

  //3/ Funkcja inkrementująca wartość
  increment() {
    this.value += 1;
  }
}

// Uruchamiamy aplikację
bootstrap(App, []);
