export default function () {
  const gulp = require('gulp');
  const merge2 = require('merge2');

  const gulpConfig = require('./../../config');

  return merge2(gulpConfig.apps.map((app) => {
    return gulp.src(['node_modules/font-awesome/fonts/*'])
      .pipe(gulp.dest(app.fontsDist));
  }));
}
