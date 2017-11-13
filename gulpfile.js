const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('js', () => {
	browserify('clientSide/src/app.js', { debug: true })
		.transform('babelify', {
			sourceMaps: true,
			presets: ['es2015', 'react']
		})
		.bundle()
		.on(
			'error',
			notify.onError({
				message: 'Error: <%= error.message %>',
				title: 'Error in JS 💀'
			})
		)
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest('clientSide/public/'))
		.pipe(
			reload({
				stream: true
			})
		);
});

gulp.task('bs', () => {
	browserSync.init({
		proxy: 'localhost:8080'
	});
});

gulp.task('css', () => {
	return gulp
		.src('./clientSide/src/**/*.scss') // '**' any folder inside of, '*' any file with the extension of .scss
		.pipe(sass().on('error', sass.logError)) // on Error display message: 'error'
		.pipe(autoprefixer())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./clientSide/public'))
		.pipe(reload({ stream: true }));
});

gulp.task('default', ['css', 'js', 'bs'], () => {
	gulp.watch('./clientSide/src/*.js', ['js']);
	gulp.watch('./clientSide/src/**/*.js', ['js']);
	gulp.watch('./clientSide/src/**/*.scss', ['css']);
	gulp.watch('./clientSide/public/style.css', reload);
});
