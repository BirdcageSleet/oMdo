var React = require('react');
var Navbar = require('../components/mainNavbar');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var navActions = require('../actions/navActions');

var NavbarContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSignOut: function() {
    this.props.actions.requestSignOut();
  },
  handleToSurvey: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/survey'
    });
  },
  handleToProfile: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/profile'
    });
  },

  render: function() {
    return (
      <Navbar
        onSignOut={this.handleSignOut}
        isLoggedIn={this.props.isLoggedIn}
      />
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    isLoading: state.authReducer.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(navActions, dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
