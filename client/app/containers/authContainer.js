var React = require('react');
var Auth = require('../components/auth');
var Loading = require('../components/loading');
var connect = require('react-redux').connect
var authActions = require('../actions/authActions');
var bindActionCreators = require('redux').bindActionCreators;
var store = require('../store/store');
var dispatch = store.dispatch;

var AuthContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  },
  handleSignInSubmit: function(e) {
    e.preventDefault();
    var login = this.context.store.getState().authReducer;
    this.props.actions.signInRequest(login);
  },
  handleSignUpSubmit: function(e) {
    e.preventDefault();
    var login = this.context.store.getState().authReducer;
    this.props.actions.signUpRequest(login);
  },
  handleUpdateUsername: function(e) {
    var username = e.target.value;
    this.props.actions.updateUsername(username);
  },
  handleUpdatePassword: function(e) {
    var password = e.target.value;
    this.props.actions.updatePassword(password);
  },
  render: function() {
    return this.props.isLoading
    ? (
      <Loading />
    )
    : (
      <Auth
        text={this.props.location.pathname === '/signin'
          ? 'Sign In'
          : 'Sign Up'
        }
        onSubmit={this.props.location.pathname === '/signin'
          ? this.handleSignInSubmit
          : this.handleSignUpSubmit
        }
        onUpdateUsername={this.handleUpdateUsername}
        onUpdatePassword={this.handleUpdatePassword}
        pathname={this.props.location.pathname}
      />
    )
  }
});

function mapStateToProps(state) {
  return Object.assign({}, state.authReducer);
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
