var React = require('react');
var PropTypes = React.PropTypes;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var profileActions = require('../actions/profileActions');
var homeActions = require('../actions/homeActions');
var Container = require('./allPurposeContainer');
var Greeting = require('../components/greeting');
var Diary = require('../components/profile/diary');
var Tile = require('../components/tile');
var Visualization = require('../components/profile/visualization');
var Journal = require('../components/profile/journal');

var ProfileContainer = React.createClass({
  propTypes: {
    username: PropTypes.string,
    surveys: PropTypes.array,
    hideEntry: PropTypes.bool
  },
  hideEntry: true,
  componentWillMount: function() {
    this.props.actions.checkAuth();
    this.props.actions.loadSurveys();
  },
  handleRevealDiary: function() {
    if(this.hideEntry) {
      this.hideEntry = false;
    } else {
      this.hideEntry = true;
    }
  },
  render: function() {
    return (
     this.props.location.pathname === '/summary' ?
      <Tile><Diary text='Reflect on Your Last 7 Days' surveys={this.props.surveys} /></Tile>
      :
      <Tile>
        <Journal
            entries={this.props.surveys}
            text='Reflect on Your Entries'
            onRevealDiary={this.handleRevealDiary}
            hideEntry={this.hideEntry}
          />
        </Container>
      </TIle>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    username: state.authReducer.username,
    surveys: state.profileReducer.surveys,
    isLoading: state.profileReducer.isLoading,
    isLoggedIn: state.authReducer.isLoggedIn
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, profileActions, homeActions), dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
