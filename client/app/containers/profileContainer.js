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
  // getInitialState: function() {
  //   return {
  //     entryIds: {}
  //   }
  // },
  propTypes: {
    username: PropTypes.string,
    surveys: PropTypes.array,
    hideEntry: PropTypes.bool
    // entryClicked: PropTypes.bool
  },
  hideEntry: true,
  componentWillMount: function() {
    this.props.actions.checkAuth();
    this.props.actions.loadSurveys();
  },
  handleRevealDiary: function() {
    console.log('changing hideEntry ', this.hideEntry);
    if(this.hideEntry) {
      this.hideEntry = false;
    } else {
      this.hideEntry = true;
    }
    // this.render();
    // if(this.props.diaryOpen) {
    //   this.props.actions.closeDiary();
    // } else {
    //   this.props.actions.openDiary();
    // }
    // console.log('eventual... ', e.target.value);
    // console.log('id ', id);
    // console.log('checking entry ids ', this.props.entryIds[id]);
    // console.log('id from handleRevealDiary ', id);
    // console.log('entryIds[id] from handleRevealDiary ', this.props.entryIds[id]);
    // if(this.state.entryIds[id]) {
    //   this.setState({entryIds: {{id}: false}});
    // } else {
    //   this.setState({entryIds: {{id}: true}});
    // }
    // for(var prop in this.state.entryIds) {
    //   if(prop === id && this.state.entryIds[prop] === false) {
    //     this.state.entryIds[prop] = true;
    //   } else {
    //     this.state.entryIds[prop] = false;
    //   }
    // }
  },
  render: function() {
    return (
     this.props.location.pathname === '/summary' ?
      <div><Diary text='Reflect on Your Last 7 Days' surveys={this.props.surveys} /></div>
      : 
      <div>
        <Journal 
          entries={this.props.surveys}
          text='Reflect on Your Entries'
          onRevealDiary={this.onRevealDiary}
          hideEntry={this.hideEntry}
        />
      </div>
    )
  }
});
{/*
  <Greeting username={this.props.username} />
  <Visualization text='See Your Last 7 Days'/>
  return (
      <div>
        <Container>
          <Diary text='Reflect on Your Last 7 Days' surveys={this.props.surveys} />
          <Journal 
            entries={this.props.surveys}
            text='Reflect on Your Entries'
            entryIds={this.props.entryIds}
            onRevealDiary={this.handleRevealDiary}
            onRevealDiary={this.handleRevealDiary}
            hideEntry={this.hideEntry}
          />
        </Container>
>>>>>>> Initial keyword visualization attempt
      </div>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return {
    username: state.authReducer.username,
    surveys: state.profileReducer.surveys,
    isLoading: state.profileReducer.isLoading,
    isLoggedIn: state.authReducer.isLoggedIn
    // diaryOpen: state.profileReducer.diaryOpen
    // entryIds: state.profileReducer.entryIds
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, profileActions, homeActions), dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

{/*diaryOpen={this.props.diaryOpen}*/}
{/*entryIds={this.props.entryIds}*/}
