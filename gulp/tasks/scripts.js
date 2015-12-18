import gulp from 'gulp';
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import _ from 'lodash';
import merge2 from 'merge2';
import browserSync from 'browser-sync';
import lrload from 'livereactload';

import gulpConfig from './../config';

import notify from './../helpers/notify';

function browserifyInit(entries) {
  const options = _.defaults({
    entries,
    debug: true,
    plugin: process.env.NODE_ENV !== 'dev' ? [] : [lrload]
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
    .pipe(gulpIf(process.env.NODE_ENV !== 'dev', uglify()))
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
      /*.pipe(bs.reload({
        stream: true
      }))*/;
  });
  return bundleUp(watcher, app.jsDist);
}

export function appScripts() {
  return merge2(gulpConfig.apps.map(app => bundleUp(browserifyInit(app.jsMain), app.jsDist)));
}

export function servedAppScripts() {
  return merge2(gulpConfig.apps.map(createWatcher));
}

export function vendorsScripts() {
  return browserify()
    .require(gulpConfig.vendors)
    .bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(gulpConfig.vendorsDist));
}

