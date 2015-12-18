import gulp from 'gulp';

import clean from './gulp/tasks/shared/clean';
import {bsCreate, bsInit} from './gulp/tasks/dev/browser-sync';
import serve from './gulp/tasks/dev/serve';
import build from './gulp/tasks/dev/build';
import index from './gulp/tasks/dev/index';
import styles from './gulp/tasks/dev/styles';
import fonts from './gulp/tasks/dev/fonts';
import {appScripts, vendorsScripts} from './gulp/tasks/dev/scripts';
import watch from './gulp/tasks/dev/watch';

gulp
  .task('shared:clean', clean)

  .task('dev:browser-sync-create', bsCreate)
  .task('dev:browser-sync-init', bsInit)
  .task('dev:serve', serve)
  .task('dev:build', build)
  .task('dev:index', index)
  .task('dev:styles', styles)
  .task('dev:fonts', fonts)
  .task('dev:scripts', appScripts)
  .task('dev:vendors', vendorsScripts)
  .task('dev:watch', watch);
