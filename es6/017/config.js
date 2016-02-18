System.config({
  defaultJSExtensions: true,
  transpiler: false,
  map: {
    // Dodajemy plugin do ładowania cssów
    "css": "/cdn/systemjs/plugin-css/css-0.1.20.js",
    "lodash": "/cdn/lodash.js/3.9.3/lodash.js",
  }
});
