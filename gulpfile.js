'use strict';

// var gulp = require('gulp');
// var gls = require('gulp-live-server');

// gulp.task('serve', function() {
//     //1. serve with default settings
//     var server = gls.static(); //equals to gls.static('public', 3000);
//     server.start();

//     //2. serve at custom port
//     var server = gls.static('dist', 8888);
//     server.start();

//     //3. serve multi folders
//     var server = gls.static(['dist', '.tmp']);
//     server.start();

//     //use gulp.watch to trigger server actions(notify, start or stop)
//     gulp.watch(['css/**/*.css', 'static/**/*.html'], function (file) {
//       server.notify.apply(server, [file]);
//     });
// });

// gulp.task('start', gulp.series('serve'));

var gulp = require('gulp');
var server = require("browser-sync").create();

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  // gulp.watch("source/scss/**/*.scss", gulp.series("css"));
  // gulp.watch("source/*.html", gulp.series("html", "refresh"));
  // gulp.watch("source/js/**/*.js", gulp.series("build", "refresh"));
});

gulp.task('start', gulp.series('server'));