'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); // local server
var open = require('gulp-open'); // Open url in browset

var browserify = require('browserify'); //bundle Js
var reactify = require('reactify'); // Transform React JSX to Js
var babelify = require('babelify'); // Transform React JSX to Js
var source = require('vinyl-source-stream'); // Use conventional text strim with Gulp
var concat = require('gulp-concat'); // concatena archivos
var lint = require('gulp-eslint'); // Lint Js files, incluyendo JSX

var config = {
  port      : 9005,
  devBaseUrl: 'http:localhost',
  paths     : {
    html  : './src/*.html',
    js    : './src/**/*.js',
    images: './src/images/*',
    css   : [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist  : './dist',
    mainJs: './src/main.js'
  }
};

// Start local web server
gulp.task('connect', function () {
  connect.server({
    root      : ['dist'],
    port      : config.port,
    base      : config.devBaseUrl,
    livereload: true
  });

  //server.start();
});

gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html')
    .pipe(open({uri: config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  browserify(config.paths.mainJs)
    //.transform(babelify)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist+'/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist+'/css'));
});

gulp.task('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist+'/images'))
    .pipe(connect.reload());


  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
});



gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js','lint']);
});

gulp.task('lint',function () {
  return gulp.src(config.paths.js)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('default', ['html', 'js', 'css','images','lint', 'open', 'watch']);