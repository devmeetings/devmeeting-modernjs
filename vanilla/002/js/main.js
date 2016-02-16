// Używamy trybu `strict`
"use strict";

var now = new Date().getTime();

//14/ Przygotowujemy model zadań do wykonania
var tasks = [
  {
    // zapisujemy nazwę zadania...
    name: 'ModernJS training',
    // oraz czas, w którym zostało rozpoczęte
    started: now - 1000 * 60 * 10
  },
  //5/ a dla skończonych zadań trzymamy też timestamp ukończenia
  {
    name: 'Learning JavaScript',
    started: now - 1000 * 3600 * 24,
    finished: now - 1000 * 3600 * 6
  }
];

// Kolejnym krokiem będzie wyświetlenie zadań.
console.log('Tasks', tasks);
