var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var routes = require('./config/routes');
var css = require('./styles/main.css');
var store = require('./store/store');

var Root = React.createClass({
  render: function() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    )
  }
});



ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)
