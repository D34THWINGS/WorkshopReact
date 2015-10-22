export default function () {
  const browserSync = require('browser-sync');

  const gulpConfig = require('./../../config');

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
