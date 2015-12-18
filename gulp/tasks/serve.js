import sequence from 'run-sequence';

export default function (done) {
  sequence(
    'browser-sync-create',
    'clean',
    [
      //'assets',
      'fonts',
      'styles:served',
      'scripts:served',
      'vendors'
    ],
    'index',
    'browser-sync-init',
    'watch',
    done
  );
}
