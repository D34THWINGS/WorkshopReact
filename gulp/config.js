export default {
  vendors: [
    'react',
    'react-dom',
    'react-router',
    'history',
    'babel-polyfill'
  ],

  vendorsDist: 'dist/js',

  apps: [{
    name: 'app',

    src: 'app',
    dist: 'dist',

    scssMain: 'app/scss/main.scss',
    scssFiles: 'app/scss/**/*.scss',
    cssDist: 'dist/css',

    fontsDist: 'dist/fonts',

    jsMain: 'app/index.js',
    jsDist: 'dist/js',

    index: 'app/index.html'
  }]
};
