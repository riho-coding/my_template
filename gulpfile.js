'use strict';

/**
 * Modules
 */

const gulp = require('gulp'),
  del = require('del'),
  sass = require('gulp-dart-sass'), // Sass
  postCSS = require('gulp-postcss'),
  prefix = require('autoprefixer'), // Add Vendor Prefixes
  sorter = require('css-declaration-sorter'), // Sorting CSS properties
  mergeMediaQuery = require('gulp-merge-media-queries'), // Merging Media Queries
  sourcemaps = require('gulp-sourcemaps'), // Output Source map
  plumber = require('gulp-plumber'), // Keep watching if error occurred
  notify = require('gulp-notify'), // Error notification
  browserSync = require('browser-sync').create(),
  minCSS = require('gulp-clean-css'), // Compress CSS file
  uglify = require('gulp-uglify'), // Compress JS file
  rename = require('gulp-rename'), // Rename compressed file
  pug = require('gulp-pug'), // Pug
  HTMLBeautify = require('gulp-html-beautify'), // Format HTML
  minImg = require('gulp-imagemin'), // Compress images
  minPng = require('imagemin-pngquant'), // png
  minJpg = require('imagemin-mozjpeg'), // jpg
  minSvg = require('imagemin-svgo'); //svg

const path = require('path'),
  named = require('vinyl-named'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js');

const paths = {
  pug: {
    src: 'src/pug/**/!(_)*.pug',
    srcAll: 'src/pug/**/*.pug',
    base: 'src/pug',
    dest: 'dist/',
  },
  scss: {
    src: 'src/assets/scss/**/*.scss',
    dest: 'dist/css/',
  },
  js: {
    src: 'src/assets/js/**/*.js',
    dest: 'dist/js/',
  },
  img: {
    src: 'src/assets/img/**/*',
    dest: 'dist/img/',
  },
  fonts: {
    src: 'src/assets/fonts/**/*.ttf',
    dest: 'dist/img/',
  },
};

/**
 * Sass
 */

function compileSass() {
  return gulp
    .src(paths.scss.src, { sourcemaps: true })

    .pipe(
      plumber({
        errorHandler: notify.onError('⚠️ Error: <%= error.message %>'),
      })
    )
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postCSS([prefix(), sorter({ order: 'smacss' })]))
    .pipe(mergeMediaQuery())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(minCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scss.dest, { sourcemaps: './sourcemaps' }));
}

/**
 * Font
 */

function compileFonts() {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
}

/**
 * JavaScript
 */

function bundleJS() {
  return gulp
    .src(paths.js.src)
    .pipe(
      plumber({
        errorHandler: notify.onError('⚠️ Error: <%= error.message %>'),
      })
    )
    .pipe(
      named((file) => {
        const p = path.parse(file.relative);
        return (p.dir ? p.dir + path.sep : '') + p.name;
      })
    )
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(paths.js.dest));
}

/**
 * Pug
 */

function compilePug() {
  return gulp
    .src(paths.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError('⚠️ Error: <%= error.message %>'),
      })
    )
    .pipe(
      pug({
        basedir: paths.pug.base,
      })
    )
    .pipe(
      HTMLBeautify({
        indent_size: 2,
        indent_with_tabs: true,
      })
    )
    .pipe(gulp.dest(paths.pug.dest));
}

/**
 * Image
 */

function compressImg() {
  return gulp
    .src(paths.img.src)
    .pipe(
      minImg([minJpg({ quality: 80 }), minPng({ quality: [0.65, 0.8] }), minSvg({ plugin: [{ removeViewbox: false }] })], { verbose: true })
    )
    .pipe(gulp.dest(paths.img.dest));
}

/**
 * Watch
 */

function watch() {
  gulp.watch(paths.js.src, gulp.series(bundleJS, browserReload));
  gulp.watch(paths.scss.src, gulp.series(compileSass, browserReload));
  gulp.watch(paths.img.src, gulp.series(compressImg, browserReload));
  gulp.watch(paths.pug.srcAll, gulp.series(compilePug, browserReload));
}

function browserInit(done) {
  browserSync.init({
    server: { baseDir: './dist' },
    open: 'external',
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

/**
 * Update dist file
 */

function update() {
  return del('./dist/**', { force: true });
}

/**
 * Exports
 */

exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.compilePug = compilePug;
exports.compressImg = compressImg;
exports.compileFonts = compileFonts;
exports.update = update;
exports.bundleJS = bundleJS;

exports.watch = gulp.parallel(browserInit, watch);
exports.compile = gulp.parallel(compilePug, compressImg, compileFonts, compileSass);
exports.default = gulp.series(update, gulp.parallel(browserInit, compilePug, compressImg, compileFonts, compileSass, bundleJS, watch));
