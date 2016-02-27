System.config({
  defaultJSExtensions: true,
  transpiler: false,
  meta: {
    "*.css": {
      loader: "css"
    }
  },
  map: {
    "css": "/cdn/systemjs/plugin-css/css-0.1.20.js",
    "lodash": "/cdn/lodash.js/3.9.3/lodash.js"
  }
});
