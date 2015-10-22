/* eslint no-process-exit: 0 */

export default function () {
  const gulp = require('gulp');
  const mocha = require('gulp-mocha');

  const gulpConfig = require('./../../config');

  return gulp.src(gulpConfig.backTests)
    .pipe(mocha())
    .once('error', function () {
      process.exit(1);
    })
    .once('end', function () {
      process.exit();
    });
}
