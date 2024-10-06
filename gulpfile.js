const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('./src/scss/**/*.scss') // Source folder for Sass files
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css')); // Destination for compiled CSS
});

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
