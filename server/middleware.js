var bodyParser = require('body-parser');
var morgan = require('morgan');
var routes = require('./routes');
var path = require('path');
var db = require('./db/config.js');
var rootDir = path.join(__dirname, '../dist/');

exports.isProduction = function() {
  return process.env.NODE_ENV === 'production';
};

exports.configure = function(app, express) {
  app.use(bodyParser.urlencoded({
     extended: true
  }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  routes(app, express);

  if(this.isProduction()) {
    app.use(express.static(rootDir));
  } else {
    var webpackMiddleware = require('./webpackMiddleware');
    app.use(webpackMiddleware.devConfig);
    app.use(webpackMiddleware.hotConfig);
    app.get('*', function response(req, res) {
      res.write(webpackMiddleware.devConfig.fileSystem.readFileSync(rootDir + 'index.html'));
      res.end();
    });
  }
};
