System.config({
  defaultJSExtensions: false,
  transpiler: false,
  meta: {
    "*.css": {
      loader: "css"
    }
  },
  map: {
    "css": "/cdn/systemjs/plugin-css/css-0.1.20.js",
    "lodash": "/cdn/lodash.js/3.9.3/lodash.js",
    //2/ Dodajemy zależności dla angulara
    "angular": "/cdn/angular.js/1.5.0/angular.js",
    "angular-mocks": "/cdn/angular.js/1.5.0/angular-mocks.js"
  },
  meta: {
    "angular": { format: "global" }
  }
});
