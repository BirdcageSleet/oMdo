var React = require('react');
var Question = require('../components/question');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var surveyActions = require('../actions/surveyActions');

var QuestionContainer = React.createClass({
  getChild: function(props, currentIndex) {
    return React.Children.map(props.children, function(element, i){
      if (currentIndex === i){
        return element;
      }
    })
  },
  handlePrevQuestion: function() {
    this.setState({
      currentIndex--
    });
    getChild(props, this.state.currentIndex);
  },
  handleNextQuestion: function() {
    this.setState({
      currentIndex++
    });
    getChild(props, this.state.currentIndex);
  },
  render: {
    <Question
      currentIndex={this.state.currentIndex}
      getChild={this.getChild}
      prevQuestion={this.handlePrevQuestion}
      nextQuestion={this.handleNextQuestion}
    />
  }
})

function mapStateToProps(state) {
  return {
    question: state.profileReducer.state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(surveyActions, dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
