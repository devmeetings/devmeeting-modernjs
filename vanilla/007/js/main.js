(function (app){
  "use strict";

  //5/ Korzystamy z pełnych ścieżek do modułów
  var model = app.models.TasksModel;
  var view = app.views.TasksView(
    document.querySelector('#todos'),
    model
  );

  setInterval(function () {
    view.render(new Date().getTime());
  }, 500);

}((this || window).app));
