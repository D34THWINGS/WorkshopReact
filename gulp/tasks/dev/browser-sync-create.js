export default function () {
  const browserSync = require('browser-sync');

  const gulpConfig = require('./../../config');

  gulpConfig.apps.forEach((app) => browserSync.create(app.name));
}
