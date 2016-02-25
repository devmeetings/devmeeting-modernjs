var gulp = require('gulp');

gulp.task('hello', function() {
  console.log("Hello World!");
});

/// Utworzenie domyślnego tasku
gulp.task('default', ['hello']);
