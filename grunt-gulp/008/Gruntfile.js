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

    //10/ SCSS do CSS
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/style.css': 'src/style.scss'
        }
      }
    },
  });

  //4/ Ładowanie używanych pluginów
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');

  /// Rejestracja domyślnego taska
  grunt.registerTask('default', ['htmlmin', 'babel', 'browserify', 'sass']);

};
