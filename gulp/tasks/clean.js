'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var config = require('../config');

var filesToClean = [
    config.images.dest + '/*.*',
    config.sass.dest + '/*.css',
    config.sass.dest + '/*.css.map',
    config.sass.dest + '/*.js'
];

gulp.task('clean', function() {
    return gulp.src(filesToClean, {
            read: false
        })
        .pipe(rimraf());
});