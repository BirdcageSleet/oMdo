var React = require('react');
var Greeting = require('../components/greeting');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var homeActions = require('../actions/homeActions');
var QuotePopUp = require('./modalContainer');

var HomeContainer = React.createClass({
  componentWillMount: function() {
    this.props.actions.checkAuth();
    this.props.actions.fetchQuote();
  },
  render: function() {
    return (
      <div>
        <QuotePopUp text='Tips!' {...this.props} />
        <Greeting text='oMdo Welcomes You' username={this.props.username} location={this.props.location.pathname} />
      </div>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.authReducer, state.homeReducer);
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
