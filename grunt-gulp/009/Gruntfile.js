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

    //19/ Obserwuj zmiany w plikach
    watch: {
      //7/ Uruchom taski babel i browserify na zaminy w plikach *.js
      js: {
        files: ['**/*.js'],
        tasks: ['babel', 'browserify'],
        options: {
          spawn: false,
        },
      },
      //7/ Uruchom task sass na zmiany w plikach *.scss
      css: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
  });

  //5/ Ładowanie używanych pluginów
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['htmlmin', 'babel', 'browserify', 'sass']);

};
