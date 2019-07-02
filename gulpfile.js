const gulp = require("gulp");
const scss = require("gulp-sass");
const pug = require("gulp-pug");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const doCss = () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(scss())
        .pipe(gulp.dest("dist/css/"))
        .pipe(browserSync.stream());
}
const views = () => {
    return gulp.src("./src/templates/index.pug")
        .pipe(pug())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
}

const img = () => {
    return gulp.src("./src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
}

const build = async () => {
    await doCss();
    await views();
    await img();
}

const watch = () => {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: ""
        }
    });
    gulp.watch("./src/scss/**/*.scss", doCss);
    gulp.watch("./src/templates/index.pug", views);
    gulp.watch("./src/img/*", img);
}
exports.doCss = doCss;
exports.views = views;
exports.img = img;
exports.build = build;
exports.watch = watch;