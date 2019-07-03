const gulp = require("gulp");
const scss = require("gulp-sass");
const pug = require("gulp-pug");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require("gulp-autoprefixer");

const doCss = () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(scss())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 3 version"],
            cascade: false
        }))
        // .pipe(cleanCSS({compatibility: 'ie8'}))
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

const minify = () => {
    return gulp.src("./src/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
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
    gulp.watch("./src/js/**/*.js", minify)
    gulp.watch("./src/img/*", img);
}

const build = async () => {
    await doCss();
    await views();
    await img();
    await minify();
}

exports.doCss = doCss;
exports.views = views;
exports.minify = minify;
exports.img = img;
exports.build = build;
exports.watch = watch;
