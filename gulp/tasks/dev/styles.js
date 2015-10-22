export default function () {
  const gulp = require('gulp');
  const merge2 = require('merge2');
  const sass = require('gulp-sass');
  const autoprefixer = require('gulp-autoprefixer');
  const browserSync = require('browser-sync');

  const gulpConfig = require('./../../config');

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

  return merge2(gulpConfig.apps.map((app) => buildStyles(app.scssMain, app.cssDist, browserSync.get(app.name))));
}
