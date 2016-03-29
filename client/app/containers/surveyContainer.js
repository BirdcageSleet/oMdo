var React = require('react');
var Survey = require('../components/survey/survey');
var connect = require('react-redux').connect;
var handlersMixin = require('./mixins/surveyHandlers');
var questionsMixin = require('./mixins/questions');
var surveyActions = require('../actions/surveyActions');
var homeActions = require('../actions/homeActions');
var bindActionCreators = require('redux').bindActionCreators;

var SurveyContainer = React.createClass({
  mixins: [handlersMixin, questionsMixin],
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
  },
  componentWillMount: function() {
    this.props.actions.checkAuth();
  },
  handleSurveySubmit: function(e) {
    e.preventDefault();
    var survey = this.context.store.getState().surveyReducer;
    this.props.actions.submitSurvey(survey);
  },
  render: function() {
    return (
      <Survey
        onSubmit={this.handleSurveySubmit}
        handlers={this.handlers}
        questions={this.questions}
        isLoading={this.props.isLoading}
      />
    )
  }
});

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.surveyReducer)
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, surveyActions, homeActions), dispatch),
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
