import gulp from 'gulp';
import watch from 'gulp-watch';
import merge2 from 'merge2';
import browserSync from 'browser-sync';

import gulpConfig from './../../config';

export default function () {

  // Watch scss files
  const scssWatchers = [
    watch(gulpConfig.apps.map(app => app.scssFiles), () => {
      gulp.start('dev:styles');
    })
  ];

  // Watch index.html files
  const indexWatchers = gulpConfig.apps.map(app => watch([app.index], () => {
    gulp.start('dev:index', function () {
      console.log('test');

      browserSync.get(app.name).reload();
    });
  }));

  return merge2(scssWatchers.concat(indexWatchers));
}
