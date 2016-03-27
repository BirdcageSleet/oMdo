var React = require('react');
var Form = require('../form');
var Loading = require('../loading');
var Questions = require('./questions');
var styleable = require('react-styleable').default;
var css = require('../../styles/survey.css');

function Survey(props) {
  var key = -1;
  return props.isLoading === true
  ? (
    <Loading />
  )
  : (
    <Form onSubmit={props.onSubmit} text='Submit'>
      <Questions questions={props.questions} handlers={props.handlers} />
    </Form>
  )
};

module.exports = styleable(css)(Survey);
