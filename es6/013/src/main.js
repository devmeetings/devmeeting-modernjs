"use strict";

import {TasksModel} from './models/Tasks';
import {TasksView} from './views/TasksView';

const model = new TasksModel([]);

//4/ 5. Używamy naszej pomocniczej funkcji
fetch('data/tasks.json').then(
  (tasks) => model.tasks = tasks,
  (err) => console.error(err)
);

const activeView = new TasksView(
  document.querySelector('#todos'),
  model,
  {onlyActive: true}
);
const view = new TasksView(
  document.querySelector('#todos2'),
  model,
  {}
);

setInterval(() => {
  const now = new Date().getTime();
  view.render(now);
  activeView.render(now);
}, 500);

//17/ 1. Pobieramy dany `url` i zwracamy `Promise`
function fetch (url) {
  // 2. Tworzymy nowy Promise
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = (evt) => {
      if (req.readyState !== 4) {
        return;
      }

      if (req.status !== 200) {
        // 3. Odrzucamy jeśli jest jakiś błąd...
        return reject(req.status);
      }
      // 4. ...i rozwiązujemy, jeśli wszystko OK (pomijamy błędy z JSONa)
      return resolve(JSON.parse(req.responseText));
    };
    req.send(null);
  });
}

