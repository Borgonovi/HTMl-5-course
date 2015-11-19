var gulp = require('gulp');
//gulp.src faz um stream de leitura, com base em um glob
//.pipe // faz um processamento desse stream
//gulp.dest

gulp.task('default', function(){
	var concat = require('gulp-concat');
	var sourcemaps = require('gulp-sourcemaps');
	var uglify = require('gulp-uglifyjs');

	gulp
		.src('./assets/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./public'));

});
 