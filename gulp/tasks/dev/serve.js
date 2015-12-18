import sequence from 'run-sequence';

export default function (done) {
  sequence(
    'dev:browser-sync-create',
    'dev:build',
    'dev:browser-sync-init',
    'dev:watch',
    done
  );
}
