var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

gulp.task('htmlmin', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('babel', function() {
  return gulp.src('src/app.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(browserify())
    .pipe(gulp.dest('build'))
});

//5/ SCSS -> CSS
gulp.task('sass', function() {
  return gulp.src('src/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'))
});

/// Domyślne zadanie
gulp.task('default', ['htmlmin', 'babel', 'sass']);
