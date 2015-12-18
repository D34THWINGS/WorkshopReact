import gulp from 'gulp';
import inject from 'gulp-inject';
import series from 'stream-series';

import gulpConfig from './../../config';

export default function () {
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
