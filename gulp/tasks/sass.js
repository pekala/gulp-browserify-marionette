'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src(config.src)
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .on('error', handleErrors)
        .pipe(sass(config.settings))
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'IE 8', 'IE 9']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest));
});