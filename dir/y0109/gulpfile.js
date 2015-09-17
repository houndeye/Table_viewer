var gulp = require("gulp");
var babel = require("gulp-babel");
var paths = {

    scripts: 'sample/**/*.js',
    //scripts: 'src/**/*.js',
    images: ''
};
gulp.task('minify-js', function () {
    return gulp.src(paths.scripts)
        .pipe(babel({modules: "amd"}))

        //.pipe(concat('main.js'))
        .pipe(gulp.dest("./build/"));

});



gulp.task('default', ['minify-js']);

var watcher = gulp.watch('sample/*.*', ['default']);
  //var watcher = gulp.watch('src/*.*', ['default']);
watcher.on('change', function (e) {
    //  console.log(paths.sass);
    console.log('File ' + e.path + ' was ' + e.type + '!');
});

