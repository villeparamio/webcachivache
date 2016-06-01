var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');  
var browserSync = require('browser-sync');  

gulp.task('less', function () {
  return gulp.src('./src/css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dest/css'));
});


gulp.task('watch', function () {  
  gulp.watch('src/css/*.less', ['css', browserSync.reload]);
  gulp.watch('src/js/*.js', ['js', browserSync.reload]);
  gulp.watch('src/*.html', ['html', browserSync.reload]);
});

gulp.task('browser-sync', function() {  
  browserSync({
    proxy: "http://localhost:2368"
});

gulp
gulp.task('default' , ['less','watch','browser-sync']);

