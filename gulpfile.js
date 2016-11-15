var gulp = require('gulp'),
		pug = require('gulp-pug'), // npm i -S gulp-pug
		sass = require('gulp-sass'); // npm i -S gulp-sass


// конвертируем sass в css в папку public/css
gulp.task('sassToCss', function(){
	return gulp.src('dev/css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('public/css'));
	});


// конвертируем pug в html в папку public
gulp.task('pugToHtml', function(){
	return gulp.src('dev/*.pug')
	.pipe(pug({pretty: true}))
	.pipe(gulp.dest('public/'))
	});

// следим за файлами и запускаем нужную задачу
gulp.task('watch', function(){
	gulp.watch('dev/*.pug', ['pugToHtml']),
	gulp.watch('dev/**/*.scss', ['sassToCss'])
	});

// задача default по запуску gulp
gulp.task('default', ['pugToHtml', 'sassToCss', 'watch']);