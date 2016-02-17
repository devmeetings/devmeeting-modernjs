require.config({
  // Przenosimy entry point do configu
  'deps': ['main'],

  //4/ Definiujemy co oznacza załadowanie modułu `lodash`
  'map': {
    '*': {
      'lodash': '/cdn/lodash.js/3.9.3/lodash.js'
    }
  },

  //8/ Dla modułów, które nie sa przystosowane do AMD tworzymy shim - czyli...
  'shim': {
    'lodash': {
      // ... zależności wymagane przez moduł...
      'deps': [],
      // ... i jaką globalną zmienną eksportuje
      'exports': '_'
    }
  }
});
