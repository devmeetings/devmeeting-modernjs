var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

gulp.task('htmlmin', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});

//7/ Babel z Browserify
gulp.task('babel', function() {
  return gulp.src('src/app.js')
    .pipe(babel({presets: ['es2015']}))
    /// Przekazanie strumienia do Browserify
    .pipe(browserify())
    .pipe(gulp.dest('build'))
});

/// Domyślne zadanie
gulp.task('default', ['htmlmin', 'babel']);
