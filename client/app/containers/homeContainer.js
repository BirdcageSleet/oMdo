var React = require('react');
var Greeting = require('../components/greeting');
var Container = require('./allPurposeContainer');
var Home = require('../components/home');
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
    var pathname = this.props.location.pathname;
    return (
      <Container>
        <Greeting text='oMdo Welcomes You' username={this.props.username} />
        <QuotePopUp text='Tips!' {...this.props} />
      </Container>
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
