/* jshint esversion:6 */
const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("serve", function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
});

// keeps gulp from crashing for scss errors
gulp.task("sass", function() {
  return gulp
    .src("scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/css"))
});

gulp.task("default", ["serve", "sass"]);
