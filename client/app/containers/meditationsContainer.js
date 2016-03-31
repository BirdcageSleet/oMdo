var React = require('react');
var Container = require('../containers/allPurposeContainer');
var Survey = require('../containers/surveyContainer');
var Twitter = require('../containers/twitContainer');

var Meditations = React.createClass({
  render: function() {
    return (
      <Container>
        <Survey text='Take a Quick Survey' />
        <Twitter text='Meditate on your public state' />
      </Container>
    )
  }
});

module.exports = Meditations;
