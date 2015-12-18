import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import csso from 'gulp-csso';
import merge2 from 'merge2';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

import gulpConfig from './../config';

const sassOptions = {
  includePaths: [
    'node_modules/font-awesome/scss',
    'node_modules/bootstrap-sass/assets/stylesheets',
    'node_modules/toastr',
    'app/core/scss'
  ]
};

function buildStyles(src, dist) {
  return gulp.src([src])
    .pipe(sass(sassOptions))
    .pipe(autoprefixer())
    .on('error', (err) => {
      throw err;
    })
    .pipe(gulpIf(process.env.NODE_ENV !== 'dev', csso()))
    .pipe(gulp.dest(dist));
}

export function appStyles() {
  return merge2(gulpConfig.apps.map(app => buildStyles(app.scssMain, app.cssDist)));
}

export function servedAppStyles() {
  return merge2(gulpConfig.apps.map(app => {
    const bsServer = browserSync.get(app.name);
    return buildStyles(app.scssMain, app.cssDist)
      .pipe(bsServer.reload({
        stream: true
      }));
  }));
}
