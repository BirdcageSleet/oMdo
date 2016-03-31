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
  render: function() {
    console.log('profCont: ', this.props.location.pathname);
    return (
     this.props.location.pathname === '/summary' ?
      <div><Diary text='Reflect on Your Last 7 Days' surveys={this.props.surveys} /></div>
      : 
      <div><Journal 
            entries={this.props.surveys}
            text='Reflect on Your Entries'
          /></div>
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
          />
        </Container>
      </div>
    )
if(this.props.location.pathname === 'summary') {
      return (<div><Diary text='Reflect on Your Last 7 Days' surveys={this.props.surveys} /></div>)
    } else if(this.props.location.pathname === 'journal') {
      return (<div><Journal 
            entries={this.props.surveys}
            text='Reflect on Your Entries'
          /></div>)
    }  
  
*/}

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
