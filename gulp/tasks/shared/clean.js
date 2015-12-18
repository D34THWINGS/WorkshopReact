import del from 'del';

import gulpConfig from './../../config';

export default function (done) {
  del(gulpConfig.apps.map(app => app.dist)).then(() => done(), done);
}
