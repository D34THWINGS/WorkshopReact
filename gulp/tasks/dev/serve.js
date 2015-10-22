export default function (done) {

  const sequence = require('run-sequence');

  sequence(
    'dev:browser-sync-create',
    'dev:build',
    'dev:browser-sync-init',
    'dev:watch',
    done
  );

}
