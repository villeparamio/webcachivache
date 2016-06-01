var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();  

gulp.task('less', function () {
  return gulp.src('./src/css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dest/css'));
});


gulp.task('watch', function () {  
  gulp.watch('src/css/*.less', ['less', browserSync.reload]);
  gulp.watch('src/js/*.js', ['js', browserSync.reload]);
  gulp.watch('src/*.html', ['html', browserSync.reload]);
});

gulp.task('browser-sync', function() {  
  browserSync.init({
    server: {
		baseDir: "./dest/"	
	}
	});
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dest/html'))
});

gulp.task('default' , ['watch','less','html','browser-sync']);


