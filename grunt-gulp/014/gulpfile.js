var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

//5/ Minifikacja html
gulp.task('htmlmin', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});

/// Domyślne zadanie
gulp.task('default', ['htmlmin']);
