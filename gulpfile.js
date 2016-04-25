var gulp = require('gulp');
var postcssImport = require('postcss-import');
// THIS HAS TO HAPPEN BEFORE ANY OTHER POSTCSS PLUGIN
// CSSIMPORT INLINES THE CONTENT OF ALL @IMPORT STATEMENTS
var postcss = require('gulp-postcss');
var customProperties = require('postcss-custom-properties'); // ENABLES CUSTOM PROPERTIES
var autoprefixer = require('autoprefixer'); // ADDS NEEDED VENDOR PREFIXES
var nested = require('postcss-nested'); // UNWRAPS ALL NESTED MEDIA
var mediaMinmax = require('postcss-media-minmax'); // ENABLES MINMAX MEDIA QUERY SHORTHANDS
var customMedia = require('postcss-custom-media'); // ENABLES CUSTOM MEDIA QUERIES
var mqpacker = require('css-mqpacker');// COMBINES MEDIA QUERIES
var nano = require('cssnano'); // MINIFIES CSS
var color = require('postcss-color-function');
var simpleVars = require('postcss-simple-vars');
var mixins = require('postcss-mixins');
var anim = require('postcss-animation');

var connect = require('gulp-connect'); // SPINNS UP LOCAL SERVER
var concat = require('gulp-concat'); // CONCATENATES FILES
var uglify = require('gulp-uglify'); // MINIFIES JS FILES

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 2016
  });
});

gulp.task('html', function() {
  return gulp.src('./*.html')
  .pipe(connect.reload());
})

gulp.task('css', function() {
  var processors = [
    postcssImport(),
    customProperties(),
    mixins(),
    nested(),
    simpleVars(),
    mediaMinmax(),
    customMedia(),
    color(),
    anim(),
    autoprefixer({browsers: ['last 2 versions']}),
    mqpacker({sort: true}),
    nano()
  ];
  return gulp.src('css/main.css')
    .pipe(postcss(processors))
    .pipe(connect.reload())
    .pipe(gulp.dest('prod/css/'));
});

gulp.task('scripts', function() {
  return gulp.src(['js/*.js', '!js/parallax.js'])
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('prod/js/'));
});

gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['connect', 'css', 'scripts', 'watch'])
