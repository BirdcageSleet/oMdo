var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    path.join(__dirname, './client/app/index.js')
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: [/client/, /server/], loader: 'babel-loader'},
      {test: /\.css$/, include: [/client/], loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']}
    ],
    resolve: {
      fallback: __dirname + 'node_modules'
    }
  },
  plugins: [HtmlWebpackPluginConfig]
};
