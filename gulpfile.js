var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var concat = require('gulp-concat'); //文件链接

gulp.task("resource", function () {
  return gulp.src(['./resource/**/*.js'])
    .pipe(concat('resource.js'))
    .pipe(gulp.dest('./resource'));
});

gulp.task("server", function () {
  nodemon({
    script: "./server.js",
  });
});


gulp.task("default", ["server"]);