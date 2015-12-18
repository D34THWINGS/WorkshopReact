import gulp from 'gulp';

import clean from './gulp/tasks/clean';
import {bsCreate, bsInit} from './gulp/tasks/browser-sync';
import serve from './gulp/tasks/serve';
import build from './gulp/tasks/build';
import index from './gulp/tasks/index';
import {appStyles, servedAppStyles} from './gulp/tasks/styles';
import fonts from './gulp/tasks/fonts';
import {servedAppScripts, appScripts, vendorsScripts} from './gulp/tasks/scripts';
import watch from './gulp/tasks/watch';

gulp
  .task('clean', clean)

  .task('browser-sync-create', bsCreate)
  .task('browser-sync-init', bsInit)
  .task('serve', serve)
  .task('build', build)
  .task('index', index)
  .task('styles', appStyles)
  .task('styles:served', servedAppStyles)
  .task('fonts', fonts)
  .task('scripts', appScripts)
  .task('scripts:served', servedAppScripts)
  .task('vendors', vendorsScripts)
  .task('watch', watch);
