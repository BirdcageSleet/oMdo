var React = require('react');
var Project = require('./project');
var Team = require('./team');

function About (props) {
  return (
    <Project>
      <Team />
    </Project>
  )
};

module.exports = About;
