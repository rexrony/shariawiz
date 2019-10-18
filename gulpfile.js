var gulp = require('gulp'),
  newer = require('gulp-newer'),
  sass = require('gulp-sass'),
  rename = require("gulp-rename"),
 /* imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  cleanCSS = require('gulp-clean-css'),
 
  uglify = require('gulp-uglify'),
  pump = require("pump"),
  concat = require('gulp-concat'),*/
  browserSync = require('browser-sync').create();
  var reload      = browserSync.reload;
  // image processing
  gulp.task('img', () => { 
      gulp.src('./images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./minified/images'))
  });
// Images Optimaztion imageop = require('gulp-image-optimization'),

// HTML Compression
gulp.task('minifyhtml', () => {
    return gulp.src('./index.html')
      .pipe(htmlmin({ cssmin: true, collapseWhitespace:true, jsmin: true }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./'));
  });

//Sass
gulp.task('sass', function(){
    return gulp.src('./scss/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });
//CSS
  gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./minified/css'));
  });



gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('./minified/js')
    ],
    cb
  );
});

gulp.task('scripts', function() {
return gulp.src('./minified/js/*.js', ['!./minified/js/masonry.js'])
 /* return gulp.src('js/*.js')*/
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./minified/js'));
});


// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('browserSync', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./*.*"
        }
    });

    gulp.watch("*.html").on("change", reload);
});
/*browser-sync start --index"index.html"  --server --files "./*.*"*/

gulp.task('watch',function(){
    gulp.watch('/*.html',  gulp.series('browserSync'));
    gulp.watch('./scss/*.scss',  gulp.series('sass')); 
    // Other watchers
  })