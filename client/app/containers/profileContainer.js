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
  handleSleepNoteChange: function(e) {
    e.preventDefault();
    var sleepNote = e.target.value;
    this.props.actions.addSleepNote();
  },
  handleMoodNoteChange: function(e) {
    e.preventDefault();
    var moodNote = e.target.value;
    this.props.actions.addMoodNote();
  },
  handleEventNoteChange: function(e) {
    e.preventDefault();
    var eventNote = e.target.value;
    this.props.actions.addEventNote();
  },
  handleSubmitNote: function(e) {
    e.preventDefault();
    console.log('submit note e ', e);
    console.log('submit note props', arguments);
    var notes = {
      sleepNote: this.props.sleepNote,
      moodNote: this.props.moodNote,
      eventNote: this.props.eventNote
    };
    this.props.actions.addNotes(notes);
  },
  // handleSubmitSleepNote: function(e) {
  //   e.preventDefault();
  //   console.log('sleep target ', e);
  //   var sleepNote = e.target.value;
  //   console.log('sleep note prior to submit ', sleepNote);
  //   // this.props.actions.addSleepNote;
  // },
  // handleSubmitMoodNote: function(e) {
  //   e.preventDefault();
  //   var moodNote = e.target.value;
  // },
  // handleSubmitEventNote: function(e) {
  //   e.preventDefault();
  //   var eventNote = e.target.value;
  // },
  render: function() {
    return (
      <div>
        <Greeting username={this.props.username} />
        <Container>
          <Visualization text='Get An Overview'/>
          <Diary text='Check Out All Your Data' surveys={this.props.surveys} />
          <Journal 
            entries={this.props.surveys}
            onSubmitNote={this.handleSubmitNote}
            onSleepNote={this.handleSleepNoteChange}
            onMoodNote={this.handleMoodNoteChange}
            onEventNote={this.handleEventNoteChange}
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
    sleepNote: state.profileReducer.sleepNote,
    moodNote: state.profileReducer.moodNote,
    eventNote: state.profileReducer.eventNote
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, profileActions, homeActions), dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
