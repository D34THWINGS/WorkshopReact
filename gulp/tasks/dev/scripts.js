export default function () {
  const gulp = require('gulp');
  const browserify = require('browserify');
  const babelify = require('babelify');
  const reactify = require('reactify');
  const watchify = require('watchify');
  const source = require('vinyl-source-stream');
  const buffer = require('vinyl-buffer');
  const sourcemaps = require('gulp-sourcemaps');
  const _ = require('lodash');
  const merge2 = require('merge2');

  const gulpConfig = require('./../../config');

  const notify = require('./../../helpers/notify');

  function browserifyInit(entries) {
    const options = _.defaults({
      entries,
      debug: true
    }, watchify.args);

    return browserify(options)
      .transform(babelify)
      .transform(reactify)
      .external(gulpConfig.vendors);
  }

  function bundleUp(bundler, dist) {
    return bundler
      .bundle()
      .on('error', notify.andEndStream)
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(dist));
  }

  function createWatcher(app) {
    const bundler = browserifyInit(app.jsMain);
    const watcher = watchify(bundler, {
      verbose: true
    });
    watcher.on('update', () => {
      const browserSync = require('browser-sync').get(app.name);
      return bundleUp(bundler, app.jsDist)
        .pipe(browserSync.reload({
          stream: true
        }));
    });
    return bundleUp(watcher, app.jsDist);
  }

  return merge2(gulpConfig.apps.map(createWatcher));
}
