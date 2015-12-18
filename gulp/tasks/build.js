import sequence from 'run-sequence';

export default function (done) {
  sequence(
    'clean',
    [
      //'assets',
      'fonts',
      'styles',
      'scripts',
      'vendors'
    ],
    'index',
    done
  );
}
