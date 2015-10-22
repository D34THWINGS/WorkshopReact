export default function () {
  const gulp = require('gulp');
  const source = require('vinyl-source-stream');
  const browserify = require('browserify');

  const gulpConfig = require('./../../config');

  return browserify()
    .require(gulpConfig.vendors)
    .bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(gulpConfig.vendorsDist));
}
