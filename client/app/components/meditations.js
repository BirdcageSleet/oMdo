var React = require('react');
var Container = require('../containers/allPurposeContainer');
var Survey = require('../containers/surveyContainer');
var Twitter = require('../containers/twitContainer');

function Meditations (props) {
  return (
    <Container>
      <Survey text='Take a Quick Survey' />
      <Twitter text='Meditate on Your Public State' />
    </Container>
  )
};

module.exports = Meditations;
