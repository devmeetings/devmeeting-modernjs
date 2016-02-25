module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {
      build: {
        options: {
          collapseWhitespace: true
        },
        files: {
          'index.html': 'src/index.html',
        }
      }
    },

    //10/ Transpilacja ES6 do ES5
    babel: {
      options: {
        sourceMap: true
      },
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
      dist: {
        files: {
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
