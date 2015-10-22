export default function () {
  const gulp = require('gulp');
  const inject = require('gulp-inject');
  const series = require('stream-series');

  const gulpConfig = require('./../../config');

  gulpConfig.apps.forEach((app) => {
    const injectSources = series(
      gulp.src([app.jsDist + '/vendors.js'], {read: false}),
      gulp.src([app.jsDist + '/app.js'], {read: false}),
      gulp.src([app.cssDist + '/*.css'], {read: false})
    );
    const injectOptions = {
      ignorePath: [app.dist],
      addRootSlash: false
    };

    return gulp.src([app.index])
      .pipe(inject(injectSources, injectOptions))
      .pipe(gulp.dest(app.dist));
  });
}
