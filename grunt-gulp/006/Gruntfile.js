module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {
      build: {
        options: {
          collapseWhitespace: true
        },
        files: {
          'build/index.html': 'src/index.html',
        }
      }
    },

    //10/ Transpilacja ES6 do ES5
    babel: {
      //3/ Konfiguracja współdzielona pomiędzy wszystkimi podtaskami
      options: {
        sourceMap: true
      },
      //5/ Konfiguracja dla podtasku babel:build, może istnieć wiele podtasków
      build: {
        files: {
          'build/app.js': 'src/app.js'
        }
      }
    },

    //12/ Łączenie plików i tworzenie wspólnego bundle
    browserify: {
      options: {
        browserifyOptions : {
          debug: true
        }
      },
      build: {
        files: {
          /// Istotna jest kolejność jako, że browserify musi kożystać
          /// z plików przygotowanych wcześniej przez babel
          'build/app.js': ['build/app.js']
        }
      }
    },
  });

  //3/ Ładowanie używanych pluginów
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');

  /// Rejestracja domyślnego taska
  grunt.registerTask('default', ['htmlmin', 'babel', 'browserify']);

};
