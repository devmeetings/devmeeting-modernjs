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
    //2/ Dodajemy zależności dla Reacta
    "react": "/cdn/react/0.14.6/react.js",
    "react-dom": "/cdn/react/0.14.6/react-dom.js",
    "react-addon-test-utils": "/cdn/react/0.14.6/react-with-addons.js"
  }
});
