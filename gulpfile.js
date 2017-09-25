'use strict';

var gulp = require('gulp');
var validate = require('gulp-w3c-css');
var htmlhint = require("gulp-htmlhint");


gulp.task('validate', function() {
    return gulp.src('./assets/stylesheets/*.css')
        .pipe(validate())
        .pipe(gulp.dest('./assets/build/'));
});

gulp.task('htmlhint', function() {
    return gulp.src("./*.html")
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
});

gulp.task('default', []);