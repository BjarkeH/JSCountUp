const gulp = require('gulp');
const connect = require('gulp-connect');


gulp.task("serve", ()=> {
  connect.server({
    root: './../JsCounter/',
    livereload: true
  });
});

gulp.task("compile:js", ()=> {
  gulp.src("./**/*.js")
  .pipe(connect.reload());
});

gulp.task("html", ()=> {
  gulp.src("./**/*.html")
  .pipe(connect.reload());
});

gulp.task("watch", ()=> {
  gulp.watch("./**/*.js", ["compile:js"]);
  gulp.watch("./**/*.html", ["html"]);
});

gulp.task("default", ["serve", "compile:js", "watch"], ()=> {
  
})
