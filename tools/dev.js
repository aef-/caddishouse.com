const budo = require('budo');
const babelify = require('babelify');
const cssModules = require('css-modulesify');

budo('./src/run:bundle.js', {
  live: true,             
  port: 8000,             
  stream: process.stdout, 
  dir: './',
  pushstate: true,
  browserify: {
    transform: [ 
      babelify.configure({
        presets: ['es2015', 'stage-1', 'react']
      }) 
    ],
    plugin: [ 
      function( browserify ) {
        return cssModules(browserify, {
          output: './public/bundle.css',
          after: [ 
            require('postcss-assets')({
              loadPaths: ['./public/img/', './public/fonts/'],
              baseUrl: '/'
            }),
            require('postcss-fontpath')(),
            require('postcss-cssnext')(),
            require('postcss-reporter')(),
          ]
        });
    } ]
  }
}).on('connect', function (ev) {
  console.log('Server running on %s', ev.uri)
  console.log('LiveReload running on port %s', ev.livePort)
}).on('update', function (buffer) {
  console.log('bundle - %d bytes', buffer.length)
})
