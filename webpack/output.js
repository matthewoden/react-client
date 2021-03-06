'use strict';
var env = require('./utils').env;

module.exports = env({
  develop:{
    path: require('path').resolve('./assets'),
    publicPath: '/assets',
    filename: '[name].js',
    chunkFileName:'[name].js'
  },

  production:{
    path:  require('path').resolve('./dist/assets'),
    publicPath:'./assets/',
    filename: '[hash].[name].js',
    chunkFileName:'[name].js'
  },

  prerender:{
    filename: 'prerender.js',
    path: './dist',
    publicPath:'./assets/',
    /* IMPORTANT!
     * For prerendering, you must compile to UMD or CommonJS
     * so it can be required in a Node context: */
     libraryTarget: 'commonjs2'
   },
});