import gulp from 'gulp';

gulp
  .task('shared:clean', require('./gulp/tasks/shared/clean'))

  .task('dev:browser-sync-create', require('./gulp/tasks/dev/browser-sync-create'))
  .task('dev:browser-sync-init', require('./gulp/tasks/dev/browser-sync-init'))
  .task('dev:serve', require('./gulp/tasks/dev/serve'))
  .task('dev:build', require('./gulp/tasks/dev/build'))
  .task('dev:index', require('./gulp/tasks/dev/index'))
  .task('dev:styles', require('./gulp/tasks/dev/styles'))
  .task('dev:fonts', require('./gulp/tasks/dev/fonts'))
  .task('dev:scripts', require('./gulp/tasks/dev/scripts'))
  .task('dev:vendors', require('./gulp/tasks/dev/vendors'))
  .task('dev:watch', require('./gulp/tasks/dev/watch'))

  .task('test:back', require('./gulp/tasks/test/back'));
