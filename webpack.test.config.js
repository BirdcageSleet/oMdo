var webpack = require('webpack');
var path = require('path');
var JestpackPlugin = require('jestpack/Plugin');
var StatsWebpackPlugin = require('stats-webpack-plugin');

var testDir = __dirname + '/client/__tests__/';
module.exports = {
  entry: [
    testDir + 'about-test.js',
    testDir + 'authComponents-tests.js',
    testDir + 'home-tests.js',
    testDir + 'main-test.js',
    testDir + 'navbar-test.js',
    testDir + 'profile-test'
  ],
  output: {
    path: __dirname + '/client/__test_bundle__',
    filename: 'test_bundle.js',
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
