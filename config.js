//7/ Config zdecydowanie nam się upraszcza
System.config({
  defaultJSExtensions: true,
  transpiler: false,
  //3/ Dopisujemy tylko ścieżkę do spaczkowanego lodasha
  map: {
    "lodash": "/cdn/lodash.js/3.9.3/lodash.js",
  }
});
