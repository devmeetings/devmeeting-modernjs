require.config({
  'deps': ['main'],

  //5/ Możemy teraz załadować lodasha z naszego `bower_components`
  'map': {
    '*': {
      'lodash': '../bower_components/lodash/lodash.js'
    }
  }
});
