import browserSync from 'browser-sync';

import gulpConfig from './../config';

export function bsCreate () {
  gulpConfig.apps.forEach(app => browserSync.create(app.name));
}

export function bsInit () {
  gulpConfig.apps.forEach((app) => {
    browserSync
      .get(app.name)
      .init({
        server: {
          baseDir: app.dist
        }
      });
  });
}
