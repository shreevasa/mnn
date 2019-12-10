var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
sass.compiler = require('node-sass');

// gulp.task('imagemin', function () {
//   return gulp.src('./themes/custom/mnn/images/*')
//     .pipe(imagemin({
//       progressive: true,
//       svgoPlugins: [{
//         removeViewBox: false
//       }],
//       use: [pngquant()]
//     }))
//     .pipe(gulp.dest('./themes/custom/mnn/images'));
// });
// gulp.task('sass', function () {
//   return gulp.src('mnn_theme/sass/**/*.scss')
//     .pipe(sass({
//       outputStyle: 'compressed'
//     }).on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
// gulp.task('uglify', function () {
//   gulp.src('./themes/custom/mnn/lib/*.js')
//     .pipe(uglify('main.js'))
//     .pipe(gulp.dest('./themes/custom/mnn/js'))
// });
// gulp.task('watch', function () {
//   livereload.listen();
//   gulp.watch('mnn/sass/**/*.scss', gulp.series('sass'));
//   gulp.watch('mnn/lib/*.js', gulp.series('uglify'));
//   gulp.watch(['/css/style.css', './**/*.twig', './js/*.js'], function (files) {
//     livereload.changed(files)
//   });
// });


gulp.task('watch', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});
