export default function () {
  const gulp = require('gulp');
  const watch = require('gulp-watch');
  const merge2 = require('merge2');

  const gulpConfig = require('./../../config');

  return merge2([
    // Watch scss files
    watch(gulpConfig.apps.map((app) => app.scssFiles), () => {
      gulp.start('dev:styles');
    }),

    // Watch index.html files
    watch(gulpConfig.apps.map((app) => app.index), () => {
      gulp.start('dev:index');
    })
  ]);
}
