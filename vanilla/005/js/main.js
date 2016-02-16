"use strict";

// Korzystamy z modelu...
var tasks = TasksModel();
// ... i renderujemy używając naszego widoku
renderTasks(document.querySelector('#todos'), tasks);
