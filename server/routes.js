var surveyRoutes = require('./survey/surveyRoutes');
var userRoutes = require('./user/userRoutes');
var twitterRoutes = require('./twitter/twitterRoutes');
var quoteRoutes = require('./quote/quoteRoutes');

module.exports = function(app, express) {
  app.use('/survey', surveyRoutes);
  app.use('/user', userRoutes);
  app.use('/twitter', twitterRoutes);
  app.use('/quote', quoteRoutes);
};
