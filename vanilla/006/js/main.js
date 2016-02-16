"use strict";

// Korzystamy z modelu
var model = TasksModel;
// Tworzymy nowy widok
var view = TasksView(document.querySelector('#todos'), model);
//3/ I renderujemy całość co 500ms
setInterval(function () {
  view.render(new Date().getTime());
}, 500);
