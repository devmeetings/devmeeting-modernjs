module.exports = function(grunt) {

  //12/ Definicja tasków
  grunt.initConfig({
    //11/ Definicja tasku odpowiada nazwie pluginu,
    // a konfiguracja różni się pomiędzy pluginami
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
  });

  /// Ładowanie używanych pluginów
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  /// Rejestracja domyślnego taska
  grunt.registerTask('default', ['htmlmin']);

};
