/* eslint no-process-exit: 0 */

import gutil from 'gulp-util';

/**
 * Pops an error message
 * @param  {Error} error - Captured error.
 * @return {undefined} Nothing returned.
 */
export default function notify(error) {
  gutil.log(`${gutil.colors.red('build')}: [${gutil.colors.blue('Error')}] ${gutil.colors.red(error.message)}`);
}

/**
 * Pops an error message and ends stream without breaking it.
 * @param  {Error}     error Captured error.
 * @return {undefined} Nothing returned.
 */
notify.andEndStream = function (error) {
  notify(error);
  // Gracefully terminate the current stream to prevent
  // running next pipes which might be dependent on it:
  this.emit('end');
};

/**
 * Logs an error message and forces process to exit with error code.
 * @param  {Error} error Captured error.
 * @return {undefined} Nothing returned.
 */
notify.andExit = function (error) {
  notify(error);
  // Force exit with error code:
  process.exit(1);
};
