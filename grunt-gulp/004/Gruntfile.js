module.exports = function(grunt) {

  //12/ Definicja tasków
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
  });

  /// Ładowanie używanych pluginów
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  /// Rejestracja domyślnego taska
  grunt.registerTask('default', ['htmlmin']);

};
