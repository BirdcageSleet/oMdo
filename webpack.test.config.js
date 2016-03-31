var webpack = require('webpack');
var path = require('path');
var JestpackPlugin = require('jestpack/Plugin');
var StatsWebpackPlugin = require('stats-webpack-plugin');

var testDir = __dirname + '/client/__tests__/';
module.exports = {
  entry: {
    '/client/__tests__/about-test.js': testDir + 'about-test.js',
    '/client/__tests__/authComponents-tests.js': testDir + 'authComponents-tests.js',
    '/client/__tests__/home-tests.js': testDir + 'home-tests.js',
    '/client/__tests__/main-test.js': testDir + 'main-test.js',
    '/client/__tests__/navbar-test.js': testDir + 'navbar-test.js',
    '/client/__tests__/profile-test': testDir + 'profile-test'
  },
  output: {
    path: __dirname + '/client/__bundled_tests__',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {test: /\.(jpe?g|svg|ico|png|gif)$/, include: /assets/, loader: 'file-loader?name=[hash:6].[ext]'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']}
    ]
  },
  plugins: [
      new JestpackPlugin(),
      new StatsWebpackPlugin('stats.json')
  ],
  target: 'web'
};
