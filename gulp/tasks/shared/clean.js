export default function (done) {
  const del = require('del');

  const gulpConfig = require('./../../config');

  del(gulpConfig.apps.map((app) => app.dist)).then(() => done(), err => done(err));
}
