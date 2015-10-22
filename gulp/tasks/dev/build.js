export default function (done) {
  const sequence = require('run-sequence');

  sequence(
    'shared:clean',
    [
      //'dev:assets',
      'dev:fonts',
      'dev:styles',
      'dev:scripts',
      'dev:vendors'
    ],
    'dev:index',
    done
  );
}
