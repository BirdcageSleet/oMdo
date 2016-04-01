var React = require('react');
var containerActions = require('../actions/containerActions');
var navHandlersMixin = require('./mixins/navHandlers');
var homeActions = require('../actions/homeActions');
var Frame = require('../components/frame');
var GeneralNavbar = require('../components/generalNavbar');
var Loading = require('../components/loading');
var ContentBox = require('../components/contentBox');
var Filter = require('../components/filteredComponents');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var Container = React.createClass({
  mixins: [navHandlersMixin],
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  },
  componentWillMount: function() {
    this.props.checkAuth();
  },
  render: function() {
    return (
      <Frame>
        <GeneralNavbar
          handlers={this.handlers}
          children={this.props.children}
          />
        {this.props.isLoading
          ? <Loading />
          : <ContentBox displayed={this.props.displayed}>
              {this.props.children.map(function(child, i) {
                return (<Frame key={i}>{child}</Frame>)
              })}
            </ContentBox>}
      </Frame>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.containerReducer);
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, homeActions, containerActions), dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Container);
