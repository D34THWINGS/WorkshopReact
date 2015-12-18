import gulp from 'gulp';
import merge2 from 'merge2';

import gulpConfig from './../config';

export default function () {
  return merge2(gulpConfig.apps.map((app) => {
    return gulp.src(['node_modules/font-awesome/fonts/*'])
      .pipe(gulp.dest(app.fontsDist));
  }));
}
