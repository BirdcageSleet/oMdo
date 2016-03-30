var React = require('react');
var ReactRouter = require('react-router');
var Provider = require('react-redux').Provider;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/main');
var AuthContainer = require('../containers/authContainer');
var HomeContainer = require('../containers/homeContainer');
var SurveyContainer = require('../containers/surveyContainer')
var ProfileContainer = require('../containers/profileContainer');
var About = require('../components/about/about');
var TwitContainer = require('../containers/twitContainer');

var Routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={HomeContainer} />
    <Route path='signin' component={AuthContainer} />
    <Route path='signup' component={AuthContainer} />
    <Route path='meditations' component={SurveyContainer} />
    <Route path='profile' component={ProfileContainer} />
    <Route path='twit' component={TwitContainer} />
    <Route path='about' component={About} />
  </Route>
)

module.exports = Routes;
