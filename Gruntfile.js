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
      build: {
        files: {
          'build/app.js': ['build/app.js']
        }
      }
    },

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

    watch: {
      js: {
        files: ['**/*.js'],
        tasks: ['babel', 'browserify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
  });

  /// Automatyczne ładowanie używanych pluginów
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['htmlmin', 'babel', 'browserify', 'sass']);

};
