var bodyParser = require('body-parser');
var morgan = require('morgan');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
}