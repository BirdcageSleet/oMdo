var React = require('react');
var PropTypes = React.PropTypes;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var profileActions = require('../actions/profileActions');
var homeActions = require('../actions/homeActions');
var Container = require('./allPurposeContainer');
var Greeting = require('../components/greeting');
var Diary = require('../components/profile/diary');
var Visualization = require('../components/profile/visualization');
var Journal = require('../components/profile/journal');

var ProfileContainer = React.createClass({
  propTypes: {
    username: PropTypes.string,
    surveys: PropTypes.array
  },
  componentWillMount: function() {
    this.props.actions.checkAuth();
    this.props.actions.loadSurveys();
  },
  handleRevealDiary: function(id) {
    console.log('checking entry ids ', this.props.entryIds[id]);
    if(this.props.entryIds[id]) {
      this.props.actions.closeDiary(id);
    } else {
      this.props.actions.openDiary(id);
    }
  },
  render: function() {
    console.log('profile container props ', this.props);
    return (
      <div>
        <Greeting username={this.props.username} />
        <Container>
          <Visualization text='Get An Overview'/>
          <Diary text='Check Out All Your Data' surveys={this.props.surveys} />
          <Journal 
            entries={this.props.surveys}
            entryIds={this.props.entryIds}
            onRevealDiary={this.handleRevealDiary}
          />
        </Container>
      </div>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    username: state.authReducer.username,
    surveys: state.profileReducer.surveys,
    isLoading: state.profileReducer.isLoading,
    isLoggedIn: state.authReducer.isLoggedIn,
    entryIds: state.profileReducer.entryIds
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, profileActions, homeActions), dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
