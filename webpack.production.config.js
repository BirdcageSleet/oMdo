var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/app/index.html',
  filename: 'index.html',
  favicon: path.join(__dirname, '/client/assets/favicon.ico'),
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
      {test: /\.(jpe?g|svg|ico|png|gif)$/, include: /assets/, loader: 'file-loader?name=[hash:6].[ext]'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']}
    ]
  },
  plugins: [
      HtmlWebpackPluginConfig,
    ],
  target: 'web'
};
