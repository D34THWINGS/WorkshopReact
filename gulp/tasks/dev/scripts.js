import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import _ from 'lodash';
import merge2 from 'merge2';
import browserSync from 'browser-sync';

import gulpConfig from './../../config';

import notify from './../../helpers/notify';

export function appScripts() {
  function browserifyInit(entries) {
    const options = _.defaults({
      entries,
      debug: true
    }, watchify.args);

    return browserify(options)
      .transform(babelify)
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
      const bs = browserSync.get(app.name);
      return bundleUp(bundler, app.jsDist)
        .pipe(bs.reload({
          stream: true
        }));
    });
    return bundleUp(watcher, app.jsDist);
  }

  return merge2(gulpConfig.apps.map(createWatcher));
}

export function vendorsScripts() {
  return browserify()
    .require(gulpConfig.vendors)
    .bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(gulpConfig.vendorsDist));
}

