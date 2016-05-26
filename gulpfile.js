var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var babelify = require('babelify')

gulp.task('connect', function () {
	connect.server({
	  root: 'public',
	  port: process.env.PORT,
    host: process.env.IP
	})
})

gulp.task('browserify', function() {
	  // Grabs the app.js file
    return browserify('./app/app.js')
  	  // bundles it and creates a file called main.js
  	  .transform(babelify.configure({
        presets : ["es2015"]
      }))
      .bundle()
      .pipe(source('main.js'))
      // saves it the public/js/ directory
      .pipe(gulp.dest('./public/js/'));
})

gulp.task('sass', function() {
	return sass('sass/style.sass')
		.pipe(gulp.dest('public/css'))
})

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
	gulp.watch('sass/style.sass', ['sass'])
})

gulp.task('default', ['connect', 'watch'])