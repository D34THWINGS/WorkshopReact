import gulp from 'gulp';
import merge2 from 'merge2';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

import gulpConfig from './../../config';

export default function () {
  const sassOptions = {
    includePaths: [
      'node_modules/font-awesome/scss',
      'node_modules/bootstrap-sass/assets/stylesheets',
      'node_modules/toastr',
      'app/core/scss'
    ]
  };

  function buildStyles(src, dist, bsServer) {
    return gulp.src([src])
      .pipe(sass(sassOptions))
      .pipe(autoprefixer())
      .on('error', (err) => {
        throw err;
      })
      .pipe(gulp.dest(dist))
      .pipe(bsServer.reload({
        stream: true
      }));
  }

  return merge2(gulpConfig.apps.map(app => buildStyles(app.scssMain, app.cssDist, browserSync.get(app.name))));
}
