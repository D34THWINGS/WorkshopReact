import sequence from 'run-sequence';

export default function (done) {
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
